import React from 'react';
import Task from './Task';

const Alltasks = ({tasks,isLoading,refetch}) => {
    if (isLoading) {
        return;
    }
    return (
        <div className='grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1'>
            {
                tasks.map(task=><Task refetch={refetch} taskdata={task} key={task._id}></Task>)
            }
        </div>
    );
};

export default Alltasks;