import To_Do from "../models/to_do.js";
class To_DoRepository {
  async create(data) {
    try {
      const result = await To_Do.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
  async destroy(id) {
    try {
      const result = await To_Do.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await To_Do.findById(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  async getAll() {
    try {
      const result = await To_Do.find({});
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
  async update(id, data) {
    try {
      const result = await To_Do.findByIdAndUpdate(id, data, { new: true });
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
}
export default To_DoRepository;
