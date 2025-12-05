import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName);
      setTaskName(''); // Reset input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6 p-4 bg-gray-100 rounded shadow">
      <Input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Nama tugas baru..."
        className="flex-grow"
      />
      <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
        Tambah Tugas
      </Button>
    </form>
  );
};

export default TaskForm;