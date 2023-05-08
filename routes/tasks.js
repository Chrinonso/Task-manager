const express = require('express');
const { getAllTasks } = require('../controllers/tasks');
const { createTask } = require('../controllers/tasks');
const { getTask } = require('../controllers/tasks');
const { updateTask } = require('../controllers/tasks');
const { deleteTask } = require('../controllers/tasks');

const router = express.Router();

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)




module.exports = router; 
