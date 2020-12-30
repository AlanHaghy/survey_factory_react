import React from 'react';

function CheckboxForm({data , handleAnswer}) {

    const clickAnswer = (e) => {
        e.preventDefault();
        handleAnswer = e.target.value;
    }

    const 

    return (
        
        <form onSubmit={submitHandler}>
        <div className="button-container button-col">
            {data.formfields.map( (field,keys) => (
             <div>
                <label htmlFor={field.id}>{field.label}</label>
                <input key={keys} type={field.type} id={field.id} name={field.name} value={field.value}/>
            </div>
                             
             ))}
        </div>
        <div className="button-container button-col">
        <button 
                id={data.buttons.id} 
                type="submit"
                className="btn btn-primary btn-lr btn-width"
                onClick={() => clickAnswer({clickValue : data.buttons.value, targetNodeId : data.buttons.target_node_id})}
                >
                {data.buttons.button_text}
            </button>
        </div>
        </form>

    )
}

export default CheckboxForm;
