import { Button } from 'react-bootstrap'
import React from 'react'
import { useSelector } from 'react-redux'
import {TodoDeleteAlert} from './TodoDeleteAlert';
import {TodoEditAlert} from './TodoEditAlert';

export default function TodoList() {

    const todoItem=useSelector((state)=>state.todo.value);

  return (
    <div className='container-fluid my-4'>
      <div className='row'>
        <div className='col-12'>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Task Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoItem.map((item,i)=>
                            <tr key={i.toString()}>
                            <td>{i}</td>
                            <td>{item}</td>
                            <td><Button onClick={()=>{TodoEditAlert(i,item)}} variant="info">Update</Button> <Button onClick={()=>{TodoDeleteAlert(i)}} variant="danger">Delete</Button></td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}
