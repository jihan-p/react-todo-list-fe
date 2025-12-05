import React from 'react';
import Button from '../atoms/Button';

const TaskItem = ({ task, onComplete, onDelete }) => {
  const statusClass = task.status ? 'line-through text-gray-500' : 'text-gray-800';

  return (
    <div className="flex items-center justify-between p-3 mb-2 bg-white shadow-sm rounded">
      <p className={`flex-1 text-lg ${statusClass}`}>
        {task.name}
        {task.status && <span className="ml-2 text-xs font-medium text-green-600">(SELESAI)</span>}
      </p>

      <div className="space-x-2">
        {!task.status && (
          <Button onClick={() => onComplete(task.id)} className="bg-green-500 hover:bg-green-600 text-sm">
            Selesai
          </Button>
        )}
        <Button onClick={() => onDelete(task.id)} className="bg-red-500 hover:bg-red-600 text-sm">
          Hapus
        </Button>
      </div>
    </div>
  );
};

export default TaskItem;