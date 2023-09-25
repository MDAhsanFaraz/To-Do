import UserRepository from "../repository/user-repository.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async signup(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("something went wrong at service layer ");
      throw error;
    }
  }

  async getWithToDo(id) {
    try {
      const user = await this.userRepository.getWithToDo(id);
      return {
        id: user.id,
        name: user.name,
        todos: user.todos,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    } catch (error) {
      console.log("something went wrong at service layer ");
      throw error;
    }
  }
}

export default UserService;
