import {useState} from "react";
import {v4 as uuidv4} from "uuid";
export default function TodoList(){
    let [todos,setTodos] = useState([{task : "Sample Task",id:uuidv4() , isDone:false}]);
    let [newTodo,setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos , {task:newTodo , id:uuidv4() ,isDone:false}];
        } );
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
    };

    let markAsDone = (id) => {
        setTodos((prevTodos) => {
           return prevTodos.map((todo) => {
                if(todo.id == id){
                    return{
                        ...todo,
                        isDone:true,
                    };
                }else{
                    return todo;
                }
            })
    });
    };

    let markAllDone = () => {
        setTodos((prevTodos) => {
           return prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone:true,
                }
                      
            })
    });
    };

    return(
        <div>
            <input  placeholder="add a task" 
             onChange={updateTodoValue}
             value={newTodo}/>
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>
         
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
            {
                todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={todo.isDone?{textDecorationLine:"line-through"} : {}}>{todo.task}</span>
                        &nbsp; &nbsp;&nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
                        </li>
                ))
               
            }
             <button onClick={() => markAllDone()}>Mark All as  Done</button>
            </ul>
        </div>
    )
}