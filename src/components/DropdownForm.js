import React from 'react';

function DropdownForm({data , handleAnswer}) {

    const selectAnswer = (e) => {
        e.preventDefault();
        console.log('event: ',e);
    }

    return (
        
        <form onSubmit={selectAnswer}>
            <div className="form-group">
            <label htmlFor={data.formfields.id}>{data.formfields.label}</label>
            <select className="form-control" id={data.formfields.id}>
            
            {data.formfields[0].options.split('\r\n').map( (field,keys) => (
                <option key={keys}>{field}</option>))}
            </select>
             </div>

        <div className="button-container">
        <button 
                id={data.buttons.id} 
                type="submit"
                className="btn btn-primary btn-lr btn-width"
                onClick={() => handleAnswer({clickValue : data.buttons.value, targetNodeId : data.buttons.target_node_id})}
                >
                {data.buttons[0].button_text}
            </button>
        </div>
        </form>

    )
}

export default DropdownForm;
