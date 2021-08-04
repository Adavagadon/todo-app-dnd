import React from 'react'

const App = () => {
  return (
    <>
      <header>
        <div className="wrapper">
          <div className="header">
            <h1>TODO</h1>
            <button className="theme-switch"></button>
          </div>
        </div>
      </header>
      <main>
        <div className="wrapper">
          <form onChange="" class="tasks">
            <div className="tasks__item">
              <input type="checkbox" name="" id="" />
              <input type="text" name="" id="" placeholder="Create a new todo..."/>
            </div>
          </form>
          <section className="tasks">
            <div className="tasks__item completed">
              <input type="checkbox" name="" id="" />
              <p>Task Text</p>
              <button className="tasks__remove-btn"></button>
            </div>
            <div className="tasks__item">
              <input type="checkbox" name="" id="" />
              <p>Task Text</p>
              <button className="tasks__remove-btn"></button>
            </div>
            <div className="tasks__item">
              <input type="checkbox" name="" id="" />
              <p>Task Text</p>
              <button className="tasks__remove-btn"></button>
            </div>
            <div className="tasks__item">
              <span className="tasks__last">5 items left</span>
              <button className="tasks__last">Clear Completed</button>
            </div>
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
    </>
  )
}

export default App
