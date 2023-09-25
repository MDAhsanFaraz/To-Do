import User from "../models/user.js";
class UserRepository {
  async create(data) {
    try {
      const result = await User.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in user repo");
      throw error;
    }
  }
  async destroy(id) {
    try {
      const result = await User.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in user repo");
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await User.findById(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in user repo");
      throw error;
    }
  }

  async getWithToDo(id) {
    try {
      const result = await User.findById(id).populate({ path: "to_do" });
    } catch (error) {}
  }

  async getAll() {
    try {
      const result = await User.find({});
      return result;
    } catch (error) {
      console.log("Something went wrong in user repo");
      throw error;
    }
  }
  async update(id, data) {
    try {
      const result = await User.findByIdAndUpdate(id, data, { new: true });
      return result;
    } catch (error) {
      console.log("Something went wrong in user repo");
      throw error;
    }
  }
}
export default UserRepository;
