import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tasks';

export const getAllTasks = () => axios.get(API_URL);

export const createTask = (taskData) => axios.post(API_URL, taskData);

export const updateTask = (id, taskData) => axios.put(`${API_URL}/${id}`, taskData);

export const completeTask = (id) => axios.patch(`${API_URL}/${id}/complete`);

export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);