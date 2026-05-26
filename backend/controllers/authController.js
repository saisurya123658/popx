import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

// Helper to generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

/**
 * @desc    Register a new user
 * @route   POST /api/auth/register
 * @access  Public
 */
export const registerUser = async (req, res) => {
  try {
    const { fullName, phone, email, password, company, isAgency } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Create user
    const user = await User.create({
      fullName,
      phone,
      email,
      password,
      company,
      isAgency,
    });

    if (user) {
      res.status(201).json({
        message: 'Registration successful',
        user: {
          _id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      });
    } else {
      res.status(400).json({ message: 'Invalid user data provided' });
    }
  } catch (error) {
    console.error('[Register Error]:', error.message);
    res.status(500).json({ message: 'Server error, registration failed', error: error.message });
  }
};

/**
 * @desc    Authenticate user & get token
 * @route   POST /api/auth/login
 * @access  Public
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request
    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide both email and password' });
    }

    // Check if user exists
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        phone: user.phone,
        email: user.email,
        company: user.company,
        isAgency: user.isAgency,
        bio: user.bio,
        avatar: user.avatar,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('[Login Error]:', error.message);
    res.status(500).json({ message: 'Server error, login failed', error: error.message });
  }
};

/**
 * @desc    Get user profile
 * @route   GET /api/auth/profile
 * @access  Private
 */
export const getUserProfile = async (req, res) => {
  try {
    // req.user is already populated by auth middleware
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        fullName: user.fullName,
        phone: user.phone,
        email: user.email,
        company: user.company,
        isAgency: user.isAgency,
        bio: user.bio,
        avatar: user.avatar,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('[Profile Error]:', error.message);
    res.status(500).json({ message: 'Server error, fetching profile failed', error: error.message });
  }
};
