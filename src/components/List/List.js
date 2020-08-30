import React from "react";
import './style.css';

//componente
export default function List (props) {
    const { tasks, deleteTask, onToggle, editTask, onFinishEdit } = props;
  
    return (
      <div className="form-content">
        {tasks.map(element => {
          return (
            <div className="list" key={element.id}>
              <input className="checkbox" id={'list-'+element.id} value={element.done} type="checkbox" onClick={() => onToggle(element.id)} />
              { element.isEditing ? (
                <div className="align-content">
                  <input
                    maxLength="36"
                    className=""
                    type="text" 
                    id={'list-'+element.id}
                    value={element.task} 
                    onChange={(e) => { editTask(e.target.value, element.id) }}
                  />
                  <div>
                    <button className="buttons" onClick={() => deleteTask(element.id)}> Excluir </button>
                    <button className="buttons" onClick={() => onFinishEdit(element.id)}> Salvar </button>
                  </div>
                </div>
                )
               :
                (
                  <div className="align-content">
                    <label htmlFor={'list-'+element.id}
                      className="todo-item"
                      style={{ textDecoration: element.done ? "line-through":'none'}}
                    >{element.task}</label>
                    <div>
                      <button className="buttons" onClick={() => deleteTask(element.id)}> Excluir </button>
                      <button className="buttons" onClick={() => editTask(element.task, element.id)}>Editar</button>
                    </div>
                  </div>
                )
              }
            </div>
          );
        })}
      </div> 
    );
  }