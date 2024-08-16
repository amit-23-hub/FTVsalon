import multer from 'multer';
import path from 'path';
import Profile from '../model/profileModel.js'; // Adjust the path as necessary
import { errorHandler } from '../utils/error.js'; // Adjust the path as necessary

// Set up multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${req.userId}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

export const upload = multer({ storage });

export const createProfile = async (req, res, next) => {
    const { personalInfo, beautyPreferences, subscription } = req.body;
    const photo = req.file ? req.file.filename : null;

    try {
        const existingProfile = await Profile.findOne({ user: req.userId });
        if (existingProfile) {
            return next(errorHandler(400, 'Profile already exists'));
        }

        const newProfile = new Profile({
            user: req.userId,
            personalInfo,
            beautyPreferences,
            subscription,
            photo
        });

        await newProfile.save();
        res.json({ message: "Profile created successfully", profile: newProfile });
    } catch (error) {
        next(error);
    }
};

export const updateProfile = async (req, res, next) => {
    const { personalInfo, beautyPreferences, subscription } = req.body;
    const photo = req.file ? req.file.filename : null;

    try {
        const updatedProfile = await Profile.findOneAndUpdate(
            { user: req.userId },
            { personalInfo, beautyPreferences, subscription, photo },
            { new: true }
        );

        if (!updatedProfile) {
            return next(errorHandler(400, 'Profile not found'));
        }

        res.json({ message: "Profile updated successfully", profile: updatedProfile });
    } catch (error) {
        next(error);
    }
};

export const getProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne({ user: req.userId }).populate('user', 'username email');
        if (!profile) {
            return next(errorHandler(400, 'Profile not found'));
        }
        res.json(profile);
    } catch (error) {
        next(error);
    }
};