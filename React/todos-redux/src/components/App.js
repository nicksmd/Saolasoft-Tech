import React from 'react'
// import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
    <div style={{margin: "100px"}}>
        <h3>Todo List:</h3>
        <AddTodo/>
        <VisibleTodoList />
        {/*<Footer />*/}
    </div>
)

export default App