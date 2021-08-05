import React, {useEffect, useReducer} from 'react'
import Tasks from './Tasks';
import reducer from './reducer';

const initialState = {
  theme: 'dark',
  inputVal: '',
  inputCheck: false,
  filter: 'all',
  tasks: []
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleThemeSwitch = () => {
    dispatch({type: 'THEME_SWITCH'});
  }

  useEffect(() => {
    if(state.theme === "dark" && document.body.classList.contains('light')) {
      document.body.classList.remove('light');
      document.body.classList.add('dark')
    }
    else if(state.theme === "light" && document.body.classList.contains('dark')){
      document.body.classList.remove('dark');
      document.body.classList.add('light')
    }
  });

  return (
    <>
      <header>
        <div className="wrapper">
          <div className="header">
            <h1>TODO</h1>
            <button className="theme-switch" onClick={handleThemeSwitch}></button>
          </div>
        </div>
      </header>
      <Tasks state={state} dispatch={dispatch}/>
    </>
  )
}

export default App;
