import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const[input,setInput]=useState('');
    const handleSubmit= e=>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
          
        });
        setInput('');
       
    };
    const handleChange= e=>{
        setInput(e.target.value);
    };
    const inputref=useRef(null);
    useEffect(()=>{
          inputref.current.focus();
    });
  return (
  <form className='todo-form' onSubmit={handleSubmit}>
    <input type="text" ref={inputref} placeholder="Add a todo" value={input} name="text" className='todo-input' onChange={handleChange}/>
    <button className='todo-button'>Add Todo</button>
  </form>
  )
}

export default TodoForm