import To_DoService from "../services/to_do-service.js";

const to_DoService = new To_DoService();
export const createTodo = async (req, res) => {
  try {
    const userId = req.body.userId;
    const task = req.body.task;
    const response = await to_DoService.create(userId, task);
    return res.status(201).json({
      success: true,
      message: "Successfully created a new user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong at controller",
      data: {},
      err: error,
    });
  }
};
