import User from '../repositories/userRepository.js';

export const getUserByIdService = async (id) => {
    return await User.getById(id);
};

export const createUserService = async (userData) => {
    return await User.create(userData);
};

export const updateUserService = async (id, userData) => {
    return await User.update(id, userData);
};

export const deleteUserService = async (id) => {
    return await User.delete(id);
};
