import React from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {
    const hi : string = "Привет";
    const wel : string = "Welcome";
    const number : number = 11111;


    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const tasks2 = [
        { id: 1, title: "Hello world", isDone: true },
        { id: 2, title: "I am Happy", isDone: false },
        { id: 3, title: "Yo", isDone: false }
    ]
    return (
        <div className="App">
            <Todolist header={hi} header2={number} tasks={tasks1}/>
            <Todolist header={wel} tasks={tasks2}/>
        </div>
    );
}

export default App;
