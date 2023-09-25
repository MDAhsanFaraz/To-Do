import To_DoRepository from "../repository/to_do-repository.js";
import UserRepository from "../repository/user-repository.js";

class To_DoService {
  constructor() {
    this.to_DoRepository = new To_DoRepository();
    this.userRepository = new UserRepository();
  }
  async create(userId, task) {
    console.log(userId, task);
    try {
      const user = await this.userRepository.get(userId);
      const newTodo = await this.to_DoRepository.create({
        user: userId,
        task: task,
      });
      user.todos.push(newTodo);
      await user.save();
      return newTodo;
    } catch (error) {
      console.log("something went wrong at service layer ");
      throw error;
    }
  }
}
export default To_DoService;
