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
    const newTasks = 
    [...state.tasks, {id: state.tasks.length, text: state.inputVal, completed: state.inputCheck}];
    return {...state, tasks: newTasks, inputVal: '', inputCheck: false}
  }
  if(action.type === 'ON_CHECK') {
    let newTasks = state.tasks;
    newTasks[newTasks.findIndex(task => task.text === action.name)].completed = action.value;
    return {...state, tasks: newTasks}
  }
  if(action.type === 'REMOVE_TASK') {
    const newTasks = state.tasks.filter(task => task.id !== action.index);
    return {...state, tasks: newTasks}
  }
  return state;
}

export default reducer;