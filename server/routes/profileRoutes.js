import express from 'express';
import { createProfile, getProfile, updateProfile, upload } from '../controllers/profileController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authenticateToken, upload.single('photo'), createProfile);
router.put('/update', authenticateToken, upload.single('photo'), updateProfile);
router.get('/me', authenticateToken, getProfile);

export default router;