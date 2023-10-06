import React from "react";
import TaskList from "../taskList/taskList";

function task() {
    return (
        <>
         <div className="task">
            <div className="title">
                <p>Title</p>
                <input type="text" />
            </div>
            <div className="description">
                <p>Description</p>
                <input type="text" />
            </div>
            <div className="bttn">
                <button>Add</button>
            </div>
            <TaskList/>
         </div>
        </>
    )
}

export default task