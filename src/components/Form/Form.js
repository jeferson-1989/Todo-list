import React, { useState } from "react";
import './style.css';


export default function Form (props) {
    const { onSave } = props;
  
    const [text, setText] = useState("");
  
    return (
        <form className="form">
          <h1 className="title"> Todo List </h1>
          <div>
            <input maxLength="36" value={text} onChange={e => setText(e.target.value)} />
            <button className="button" onClick={() => onSave(text, setText)} disabled={!text} > Salvar </button>
          </div>
        </form>

     
    );
  }