import React from 'react';
import ToDo from './Todo.js'


   export default function List(props){
    
     let list = props.myToDo.map((e,i)=>{
         return   <ToDo idx={i} myTask={e}/>
        })
       return <div>{list}</div>
   }
