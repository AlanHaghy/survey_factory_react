import React from 'react';

function Questionaire({data , handleAnswer}) {

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
           
    <div className={`button-container ${!data.buttons_across ? 'button-col' : ''}`}>
    {data.buttons.map( (m,keys) => (
    <button 
        id={m.id} 
        key={keys}
        className="btn btn-primary btn-lr btn-width"
        onClick={() => handleAnswer({clickValue : m.value, targetNodeId : m.target_node_id})}
        >
        {m.button_text}
    </button> ))}
    </div>

    )
}

export default Questionaire;