import express from 'express';
import {
  createUser,
  getUsers,
  updateUser,
  getUserById,
  deleteUser,
} from '../controllers/user.controller.js';
import { validateUser } from '../validators/user.validator.js';

const router = express.Router();

// Fetch all users
router.get('/', getUsers);

// Fetch a user by ID
router.get('/:id', getUserById);

// Create a new user
router.post('/', validateUser, createUser);

// Update a user by ID
router.patch('/:id', validateUser, updateUser);

// Delete a user by ID
router.delete('/:id', deleteUser);

export default router;
