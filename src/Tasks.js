import React from 'react'

const Tasks = ({state, dispatch}) => {
  const {tasks, inputVal, inputCheck} = state;

  const handleTextOnChange = (e) => {
    dispatch({type: 'TEXT_ON_CHANGE', value: e.target.value});
  }

  const handleCheckOnChange = (e) => {
    dispatch({type: 'NEW_CHECK_ON_CHANGE', value: e.target.checked});
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(state.inputVal !== '') {
      dispatch({type: "ON_SUBMIT"});
    }
  }

  return (
    <main>
        <div className="wrapper">
          <form onSubmit={handleOnSubmit} className="tasks">
            <div className="tasks__item">
              <input type="checkbox" name="check" checked={inputCheck} onChange={handleCheckOnChange}/>
              <input type="text" name="text" autoComplete="off" onChange={handleTextOnChange} value={inputVal} placeholder="Create a new todo..."/>
            </div>
          </form>
          <section className="tasks">
            <div className="tasks__item">
              <span className="tasks__last">{tasks.length} items left</span>
              {tasks.length > 0 ? <button className="tasks__last">Clear Completed</button> : ''}
            </div>
            {tasks.map((task) => {
              return <Task key={task.id} {...task} dispatch={dispatch}/>
            })}
          </section>

          <section className="tasks">
            <div className="tasks__item tasks__item--center">
              <button className="tasks__filter-btn active">All</button>
              <button className="tasks__filter-btn">Active</button>
              <button className="tasks__filter-btn">Completed</button>
            </div>
          </section>

          <footer>
            <p>Drag and drop to reorder list</p>
          </footer>
        </div>
      </main>
  )
}

const Task = ({id, text, completed, dispatch}) => {
  const handleCheckChange = (e) => {
    dispatch({type: 'ON_CHECK', value: e.target.checked, name: e.target.name});
  }

  const removeTask = (index) => {
    dispatch({type: 'REMOVE_TASK', index});
  }

  return (
    <div className={completed ? "tasks__item completed" : "tasks__item"}>
      <input type="checkbox" name={text} checked={completed} onChange={handleCheckChange}/>
      <p>{text}</p>
      <button className="tasks__remove-btn" onClick={() => removeTask(id)}></button>
    </div>
  )
}

export default Tasks;
