import { useState } from 'react'
import './App.css'
import Task from './components/task/task'

function App() {
  return (
      <>
         <div className="task">
          <h1>My to do list</h1>
            <div className="wrapper">
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
                  <button>Todo</button>
                  <button>Complete</button>
              </div>
            </div>
         </div>
        </>
  )
}

export default App
