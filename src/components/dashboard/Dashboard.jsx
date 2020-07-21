import React from 'react';
import AddTask from '../tasks/AddTask';
import Tasks from '../tasks/Tasks';

const Dashboard = () => {
    return (
        <div>
            <AddTask />
            <Tasks />
        </div>
    )
}
export default Dashboard;