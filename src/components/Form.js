import React, { useState } from "react";



export default function Form (props) {
    const { onSave } = props;
  
    const [text, setText] = useState("");
  
    return (
      <form>
        <span>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button disabled={!text} onClick={() => onSave(text, setText)}>Salvar</button>
        </span>
      </form>
    );
  }