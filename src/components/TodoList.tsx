import React, {useState} from 'react';

type tasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

type buttonNamePropsType = "All" | "Active" | "Completed";

export const TodoList = () => {

    const tasks = [
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "NodeJS", isDone: false},
        {id: 5, title: "NPM", isDone: true},
        {id: 6, title: "Babel", isDone: false},
        {id: 7, title: "Yarn", isDone: false}
    ];

    let [filteredTasks, setFilteredTasks] = useState(tasks);

    const removeTask = (id: number) => {
        setFilteredTasks(filteredTasks.filter((el: tasksPropsType) => (el.id !== id)));
    }

    const filterTaskList = (buttonName: buttonNamePropsType) => {
        if ( buttonName === "Active" ) {
            setFilteredTasks(tasks.filter((el: tasksPropsType) => (!el.isDone)));
        } else if ( buttonName === "Completed" ) {
            setFilteredTasks(tasks.filter((el: tasksPropsType) => (el.isDone)));
        } else {
            setFilteredTasks(tasks);
        }
    }

    return (
        <div>

            <ul>
                {filteredTasks.map((el: tasksPropsType) => {
                    return (
                        <li key={el.id}><input type="checkbox" defaultChecked={el.isDone}/> {el.title} <button onClick={() => removeTask(el.id)}>x</button></li>
                    )
                })}
            </ul>

            <button onClick={() => filterTaskList("All")}>All</button>
            <button onClick={() => filterTaskList("Active")}>Active</button>
            <button onClick={() => filterTaskList("Completed")}>Completed</button>

        </div>
    );
};