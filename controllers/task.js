import Task from '../models/Task.js';
import createError from '../utils/createError.js';

export const createTask = async (req, res, next) => {
  const newTask = new Task({
    title: req.body.title,
    user: req.user.id,
    status: req.body.status,
    descriptions: req.body.descriptions,
  });
  try {
    const savedTask = await newTask.save();
    return res.status(200).json(savedTask);
  } catch (err) {
    return next(err);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.taskId).exec();
    if (!task)
      return next(createError({ status: 404, message: 'Task not found' }));
    if (task.user.toString() !== req.user.id)
      return next(createError({ status: 401, message: "It's not your todo." }));

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      {
        title: req.body.title,
        status: req.body.status,
        descriptions: req.body.descriptions,
      },
      { new: true }
    );
    return res.status(200).json(updatedTask);
  } catch (err) {
    return next(err);
  }
};

export const getAllTasks = async (req, res, next) => {
  try {
    const { title, descriptions } = req.query;
    const queryObject = {};
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 2;
    const skip = (page - 1) * limit;
    if (title) {
      queryObject.title = { $regex: title, $options: 'i' };
    }
    if (descriptions) {
      queryObject.descriptions = { $regex: descriptions, $options: 'i' };
    }
    const tasks = await Task.find(queryObject).skip(skip).limit(limit);
    return res.status(200).json(tasks);
  } catch (err) {
    return next(err);
  }
};

export const getCurrentUserTasks = async (req, res, next) => {
  try {
    const { title, descriptions } = req.query;
    const queryObject = { user: req.user.id };
    if (title) {
      queryObject.title = { $regex: title, $options: 'i' };
    }
    if (descriptions) {
      queryObject.descriptions = { $regex: descriptions, $options: 'i' };
    }
    const tasks = await Task.find(queryObject);
    return res.status(200).json(tasks);
  } catch (err) {
    return next(err);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.taskId);
    if (task.user === req.user.id) {
      return next(createError({ status: 401, message: "It's not your todo." }));
    }
    await Task.findByIdAndDelete(req.params.taskId);
    return res.json('Task Deleted Successfully');
  } catch (err) {
    return next(err);
  }
};

export const deleteAllTasks = async (req, res, next) => {
  try {
    await Task.deleteMany({ user: req.user.id });
    return res.json('All Todo Deleted Successfully');
  } catch (err) {
    return next(err);
  }
};
