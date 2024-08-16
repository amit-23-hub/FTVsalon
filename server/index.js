import cors from "cors";
import dotenv from 'dotenv';
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { connectDB } from "./config/db.js";
import userAuth from './routes/auth.route.js';
import profileRoutes from './routes/profileRoutes.js';
import userRoutes from './routes/user.routes.js';
import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import methodOverride from 'method-override';

const app = express();
const port = 3000;

app.use(methodOverride("_method"));

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({extended:true}))

// ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cors());
// Middleware
app.use(express.json());
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/auth', userAuth);
app.use('/api/v1/profile', profileRoutes);
app.use('/uploads', express.static('uploads'));

//dotenv
dotenv.config();

//publics folder connection
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

//db connection 
connectDB();

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Something went wrong';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: String,
  comment: String,
  replies: [String],
});

const Post = mongoose.model("Post", userSchema);

const userSchema1 = new mongoose.Schema({
  username: String,
  date: String,
  extras: String
});

const Appointment1 = mongoose.model("Appointment1", userSchema1);

app.get("/posts", async (req, res) => {
  let posts = await Post.find();
  res.render("posts.ejs", { posts: posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { name, comment } = req.body;
  let arr = [];
  let id = uuidv4();
  Post.create({ name, comment, replies: arr, id });
  res.redirect("/posts");
});

app.post("/posts/:id", async (req, res) => {
  let { id } = req.params;
  let { replyy } = req.body;
  let post = await Post.findOne({ id });
  post.replies.push(replyy);
  await post.save();
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  Post.deleteOne({ id: id }).then((res) => {
    console.log(res);
  });
  res.redirect("/posts");
});

app.get("/appointment-booking", (req, res) => {
  res.render("appointments.ejs");
});

app.post("/appointment-booking", (req, res) => {
  let { username, date, extras } = req.body;
  Appointment1.create({ username, date, extras });
  res.redirect("/appointment-booking");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});