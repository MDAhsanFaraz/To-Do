import UserRepository from "../repository/user-repository.js";

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }
  async signup(data) {
    try {
      const user = await this.userRepository.create(data);
      const response = {
        id: user.id,
        email: user.email,
        name: user.name,
        createdAt: user.createdAt,
      };
      return response;
    } catch (error) {
      console.log("something went wrong at service layer ");
      throw error;
    }
  }

  async signin(data) {
    try {
      const user = await this.userRepository.getByEmail({ email: data.email });
      if (!user) {
        throw { message: "no user found", success: false };
      }
      if (!user.comparePassword(data.password)) {
        throw {
          message: "incorrect password",
          success: false,
        };
      }
      const token = await user.genJWT();
      return token;
    } catch (error) {}
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
