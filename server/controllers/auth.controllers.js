import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import User from "../model/user.model.js";
import { errorHandler } from "../utils/error.js";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '3d' });
};
// Signup function
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
      const exists = await User.findOne({ email }); // Use 'User' instead of 'userModel'
      if (exists) {
          return res.status(400).json({ success: false, message: 'User already exists' });
      }

      if (!validator.isEmail(email)) {
          return res.status(400).json({ success: false, message: 'Enter a valid email' });
      }

      if (password.length < 8) {
          return res.status(400).json({ success: false, message: 'Please enter a strong password' });
      }

      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password, salt);

      const newUser = new User({
          username, // Use 'username' instead of 'name' to match the destructuring
          email,
          password: hashPassword
      });

      const user = await newUser.save();
      const token = createToken(user._id);
      res.status(201).json({ success: true, token });

  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: error.message });
  }
};

// Login function
export const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(400, 'Invalid email or password'));
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return next(errorHandler(400, 'Invalid email or password'));
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ message: "Login successful", success: true, token });
  } catch (error) {
    next(error);
  }
};