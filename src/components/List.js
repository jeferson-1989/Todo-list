import React from "react";

//componente
export default function List (props) {
    const { tasks, deleteTask, onToggle, editTask, onFinishEdit } = props;
  
    return (
      <div>
        {tasks.map(element => {
          return (
            <div className="list" key={element.id}>
              <input id={'list-'+element.id} value={element.done} type="checkbox" onClick={() => onToggle(element.id)} />
              { element.isEditing ? (
                <div>
                  <input 
                    type="text" 
                    id={'list-'+element.id}
                    value={element.task} 
                    onChange={(e) => { editTask(e.target.value, element.id) }}
                  />
                  <button onClick={() => deleteTask(element.id)}> Excluir </button>
                  <button onClick={() => onFinishEdit(element.id)}> Salvar </button>
                </div>
                )
               :
                (
                  <div>
                    <label htmlFor={'list-'+element.id}
                      style={{ textDecoration: element.done ? "line-through":'none' }}
                    >{element.task}</label>
                    <button onClick={() => deleteTask(element.id)}> Excluir </button>
                    <button onClick={() => editTask(element.task, element.id)}>Editar</button>
                  </div>
                )
              }
            </div>
          );
        })}
      </div> 
    );
  }