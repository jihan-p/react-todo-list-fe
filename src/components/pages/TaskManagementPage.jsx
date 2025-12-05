import React, { useState, useEffect } from 'react';
import { getAllTasks, createTask, completeTask, deleteTask } from '../../api/taskApi';
import TaskItem from '../molecules/TaskItem';
import TaskForm from '../organisms/TaskForm';

const TaskManagementPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchTasks = async () => {

    setLoading(true);
    try {
      const response = await getAllTasks();
      setTasks(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching tasks:', err);
      setError('Gagal memuat tugas. Pastikan Backend Laravel berjalan.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async (name) => {
    try {
      const response = await createTask({ name: name });
      setTasks([...tasks, response.data]);
    } catch (err) {
      console.error('Error adding task:', err);
      alert('Gagal menambah tugas.');
    }
  };

  const handleCompleteTask = async (id) => {
    try {
      await completeTask(id);
      setTasks(
        tasks.map(task =>
          task.id === id ? { ...task, status: true } : task
        )
      );
    } catch (err) {
      console.error('Error completing task:', err);
      alert('Gagal menandai tugas selesai.');
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter(task => task.id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
      alert('Gagal menghapus tugas.');
    }
  };

  if (loading) return <div className="text-center mt-10">Memuat Tugas...</div>;
  if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">🚀 Aplikasi To-Do List Sederhana</h1>
      <TaskForm onAddTask={handleAddTask} />
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Daftar Tugas ({tasks.length})</h2>
      
      <div className="space-y-3">
        {tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onComplete={handleCompleteTask} 
            onDelete={handleDeleteTask} 
          />
        ))}

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 py-10 border border-dashed rounded">Tidak ada tugas! Silakan tambahkan tugas baru.</p>
        )}
      </div>
    </div>
  );
};

export default TaskManagementPage;