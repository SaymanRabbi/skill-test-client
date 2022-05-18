import React from 'react';
import { useQuery } from 'react-query';
import AddTask from './AddTask';
import Alltasks from './Alltasks';

const Home = () => {
    const { data: tasks, isLoading,refetch } = useQuery('task', () => fetch('https://limitless-taiga-02244.herokuapp.com/task').then(res => res.json()));
    if (isLoading) {
        return;
    }
    return (
        <div>
            <AddTask refetch={refetch}></AddTask>
            <Alltasks tasks={tasks} isLoading={isLoading} refetch={refetch}></Alltasks>
        </div>
    );
};

export default Home;