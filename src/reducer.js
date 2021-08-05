//import React from 'react';

const reducer = (state, action) => {
  if(action.type === 'THEME_SWITCH') {
    if(state.theme === 'light') {return {...state, theme: 'dark'}}
    else {return {...state, theme: 'light'}}
  }
  if(action.type === 'TEXT_ON_CHANGE') {
    return {...state, inputVal: action.value}
  }
  if(action.type === 'NEW_CHECK_ON_CHANGE') {
    console.log(action.value);
    return {...state, inputCheck: action.value}
  }
  if(action.type === 'ON_SUBMIT') {
    let val = state.inputVal.trim();
    val = val[0].toUpperCase() + val.slice(1);
    const newTasks = 
    [{id: 'id' + state.tasks.length, text: val, completed: state.inputCheck, anim: true}, ...state.tasks];
    return {...state, tasks: newTasks, inputVal: '', inputCheck: false}
  }
  if(action.type === 'ON_CHECK') {
    let newTasks = state.tasks;
    newTasks[newTasks.findIndex(task => task.id === action.name)].completed = action.value;
    return {...state, tasks: newTasks}
  }
  if(action.type === 'REMOVE_TASK') {
    const newTasks = state.tasks.filter(task => task.id !== action.index);
    return {...state, tasks: newTasks}
  }
  if(action.type === 'CLEAR_COMPLETED') {
    const newTasks = state.tasks.filter(task => !task.completed);
    return {...state, tasks: newTasks}
  }
  if(action.type === 'FILTER') {
    const btns = document.querySelectorAll('.tasks__filter-btn');
    for(let btn of btns) {
      btn.classList.remove('active');
    }
    action.btn.classList.add('active');
    return {...state, filter: action.btn.value};
  }
  if(action.type === 'ON_DRAG_END') {
    let newTasks = action.newTasks;
    newTasks.map(task => task.anim = false);
    return {...state, tasks: newTasks}
  }
  return state;
}

export default reducer;