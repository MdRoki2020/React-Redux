import React from 'react'
import CreateTodo from '../components/todo/CreateTodo'
import TodoList from '../components/todo/TodoList'

export default function TodoPage() {
  return (
    <div className='container my-5' >
      <div className='row'>
        <div className='col-12'>
            <div className='card shadow'>
                <div className='card-header bg-secondary text-white'>
                    <h5>Todo App</h5>
                </div>
                <div className='card-body'>
                    <CreateTodo />
                    <TodoList />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
