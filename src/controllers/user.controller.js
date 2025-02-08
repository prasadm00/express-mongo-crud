import {
  addUser,
  fetchUsers,
  fetchUserById,
  modifyUser,
  removeUser,
  fetchUserByEmail,
} from '../services/user.service.js';

// Fetch all users
export const getUsers = async (req, res, next) => {
  try {
    const page = req.query.page;
    const limit = req.query.limit;
    const users = await fetchUsers(page, limit);
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

// Create a new user
export const createUser = async (req, res, next) => {
  try {
    const userExists = await fetchUserByEmail(req.body.email);
    if (userExists) {
      return res
        .status(409)
        .json({ message: `User with email ${req.body.email} already Exists!` });
    }
    const newUser = await addUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

// Fetch a user by ID
export const getUserById = async (req, res, next) => {
  try {
    const user = await fetchUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// Update a user by ID
export const updateUser = async (req, res, next) => {
  try {
    const user = await fetchUserById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const updatedUser = await modifyUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// Delete a user by ID
export const deleteUser = async (req, res, next) => {
  try {
    const user = await fetchUserById(req.params.id);
    console.log('🚀 ~ deleteUser ~ user:', user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await removeUser(req.params.id);
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};
