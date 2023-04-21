import express from 'express';
import {
  createTask, deleteAllTasks, deleteTask, getAllTasks, getCurrentUserTasks, updateTask,
} from '../controllers/task.js';

const router = express.Router();

// api/tasks/all   GET request for getting  all tasks
router.get('/all', getAllTasks);

// api/tasks/   POST request for creating  task of user
router.post('/', createTask);

// api/tasks/taskID   PUT request for updating tasks of user
router.put('/:taskId', updateTask);

// api/tasks/myTasks   GET request for getting all tasks of user
router.get('/myTasks', getCurrentUserTasks);

// api/tasks/deleteAll   \DELETE request for deleting  all tasks
router.delete('/deleteAll', deleteAllTasks);

// api/tasks/all   DELETE request for deleting  a task of user
router.delete('/:taskId', deleteTask);

export default router;
