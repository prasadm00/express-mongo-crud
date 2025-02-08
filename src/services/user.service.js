import User from '../models/user.model.js';

// Fetch all users
export const fetchUsers = async (page = 1, limit = 10) => {
  try {
    const skip = (page - 1) * limit;
    const [users, totalUsers] = await Promise.all([
      User.find({}, { name: 1, _id: 1, email: 1, age: 1 })
        .skip(skip)
        .limit(limit),
      User.countDocuments(),
    ]);

    return {
      users,
      currentPage: parseInt(page, 10),
      totalUsers,
      totalPages: Math.ceil(totalUsers / limit),
    };
  } catch (error) {
    throw new Error(`Failed to fetch users: ${error.message}`);
  }
};

// Add a new user
export const addUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.validate(); // Validate user data before saving
    await newUser.save();
    return { message: 'User Created successfully!' };
  } catch (error) {
    throw new Error(`Failed to add user: ${error.message}`);
  }
};

// Fetch a user by ID
export const fetchUserById = async (id) => {
  try {
    const user = await User.findById(id, { name: 1, _id: 1, email: 1, age: 1 });
    return user;
  } catch (error) {
    throw new Error(`Failed to fetch user by ID: ${error.message}`);
  }
};

// Fetch a user by email
export const fetchUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw new Error(`Failed to fetch user by Email: ${error.message}`);
  }
};

// Update a user by ID
export const modifyUser = async (id, body) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(id, body, {
      new: true, // Return the updated document
      runValidators: true, // Run schema validators on update
    });
    if (!updatedUser) {
      throw new Error('User not found');
    }
    return updatedUser;
  } catch (error) {
    throw new Error(`Failed to update user: ${error.message}`);
  }
};

// Delete a user by ID
export const removeUser = async (id) => {
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      throw new Error('User not found');
    }
    return deletedUser;
  } catch (error) {
    throw new Error(`Failed to delete user: ${error.message}`);
  }
};
