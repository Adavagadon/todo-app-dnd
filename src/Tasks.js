import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Tasks = ({state, dispatch}) => {
  const {tasks, inputVal, inputCheck, filter} = state;

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

  const handleClearCompleted = () => {
    dispatch({type: 'CLEAR_COMPLETED'});
  }

  const handleFilter = (e) => {
    dispatch({type: 'FILTER', btn: e.target});
  }

  const handleOnDragEnd = (result) => {
    if(!result.destination) {return}
    const newTasks = state.tasks;
    const [reorderedItem] = newTasks.splice(result.source.index, 1);
    newTasks.splice(result.destination.index, 0, reorderedItem);

    dispatch({type: 'ON_DRAG_END', newTasks});
  }

  return (
    <main>
        <div className="wrapper">
          <form onSubmit={handleOnSubmit} className="tasks">
            <div className="tasks__item no-animation">
              <input type="checkbox" name="check" checked={inputCheck} onChange={handleCheckOnChange}/>
              <input type="text" name="text" autoComplete="off" onChange={handleTextOnChange} value={inputVal} placeholder="Create a new todo..."/>
            </div>
          </form>
          <section className="tasks">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="tasks">
                {(provided) => (
                  <ul {...provided.droppableProps} ref={provided.innerRef}>
                    {tasks.map((task, index) => {
                      if((filter === 'active' && !task.completed) || (filter === 'completed' && task.completed) || (filter === 'all')) {
                        return <Task key={task.id} {...task} index={index} dispatch={dispatch}/>;
                      } return '';
                    })}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
            <div className="tasks__item no-animation">
              <span className="tasks__last">{tasks.length > 0 ? `${tasks.filter(task => !task.completed).length} items left` : 'You have no tasks'}</span>
              {tasks.length > 0 ? <button className="tasks__last" onClick={handleClearCompleted}>Clear Completed</button> : ''}
            </div>
          </section>

          <section className="tasks">
            <div className="tasks__item tasks__item--center no-animation">
              <button className="tasks__filter-btn active" value="all" onClick={handleFilter}>All</button>
              <button className="tasks__filter-btn" value="active" onClick={handleFilter}>Active</button>
              <button className="tasks__filter-btn" value="completed" onClick={handleFilter}>Completed</button>
            </div>
          </section>

          <footer>
            <p>Drag and drop to reorder list</p>
          </footer>
        </div>
      </main>
  )
}

const Task = ({id, text, completed, anim, index, dispatch}) => {
  const handleCheckChange = (e) => {
    dispatch({type: 'ON_CHECK', value: e.target.checked, name: e.target.name});
  }

  const removeTask = (index) => {
    dispatch({type: 'REMOVE_TASK', index});
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <li className={(completed ? "tasks__item completed" : "tasks__item") + (anim ? '' : ' no-animation')} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
          <input type="checkbox" name={id} checked={completed} onChange={handleCheckChange}/>
          <p>{text}</p>
          <button className="tasks__remove-btn" onClick={() => removeTask(id)}></button>
        </li>
      )}
    </Draggable>
  )
}

export default Tasks;


// 