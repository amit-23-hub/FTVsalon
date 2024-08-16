import JWT from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided', success: false });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Invalid token format', success: false });
  }

  JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      console.error('Token verification error:', err.message);
      return res.status(403).json({ message: 'Token verification failed', success: false });
    } else {
      req.userId = decode.id; // Attach user ID to request object
      next();
    }
  });
};