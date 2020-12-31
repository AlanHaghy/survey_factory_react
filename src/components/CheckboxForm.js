import React from 'react';

function CheckboxForm({data , submitHandler}) {

    const selectAnswer = (e) => {
        e.preventDefault();
    }

    return (
        
        <form onSubmit={selectAnswer}>
            {data.formfields.map( (field,keys) => (
             <div key={keys} >
                <label  htmlFor={field.id}>{field.label}</label>
                <input  type={field.type} id={field.id} name={field.name} value={field.value}/>
            </div>
                            
             ))}
        <div className="button-container">
        <button 
                id={data.buttons.id} 
                type="submit"
                className="btn btn-primary btn-lr btn-width"
                onClick={() => submitHandler({clickValue : data.buttons.value, targetNodeId : data.buttons.target_node_id})}
                >
                {data.buttons[0].button_text}
            </button>
        </div>
        </form>

    )
}

export default CheckboxForm;
