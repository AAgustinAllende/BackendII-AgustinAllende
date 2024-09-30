import UserDAO from '../DAO/userDAO.js';

class UserRepository {
  constructor() {
    this.userDAO = new UserDAO();
  }

  async createUser(userDTO) {
    return await this.userDAO.create(userDTO);
  }

  async findUserByEmail(email) {
    return await this.userDAO.findByEmail(email);
  }

  async findUserById(id) {
    return await this.userDAO.findById(id);
  }

  async updateUser(id, userDTO) {
    return await this.userDAO.update(id, userDTO);
  }

  async deleteUser(id) {
    return await this.userDAO.delete(id);
  }
}

export default UserRepository;
