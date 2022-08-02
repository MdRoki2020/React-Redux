import Swal from 'sweetalert2'
import store from '../../redux/store/Store'
import { EditTodo } from './TodoSlice'

export function TodoEditAlert(i,item){
    Swal.fire({
        title: 'Update Task Name',
        input: 'text',
        inputValue:item,
        inputValidator:(value)=>{
            if(value){
                store.dispatch(EditTodo({index:i,task:value}))
            }
        }

      })
}