import React from 'react';

function Questionaire(handleAnswer, props) {

    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className="card">          
            <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.page_title}</h5>
            <div className="card-text" dangerouslySetInnerHTML={{__html:props.content}}></div>
            
            {(props.formfields) ?  
            <form onSubmit={submitHandler}>
            <div className="button-container button-col m-3">
                {props.formfields.map( (field,keys) => (
                 <div>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input key={keys} type={field.type} id={field.id} name={field.name} value={field.value}/>
                </div>
                                 
                 ))}
            </div>
            <div className="button-container button-col m-3">
            <button 
                    id={props.buttons.id} 
                    type="submit"
                    className="btn btn-primary btn-lr btn-width"
                    onClick={() => handleAnswer({clickValue : props.buttons.value, targetNodeId : props.buttons.target_node_id})}>
                    {props.buttons.button_text}
                </button>
            </div>
            </form>
            :
            <div className={`button-container ${!props.buttons_across ? 'button-col' : ''}`}>
                {props.buttons.map( (m,keys) => (
                <button 
                    id={m.id} 
                    key={keys}
                    className="btn btn-primary btn-lr btn-width"
                    onClick={() => handleAnswer({clickValue : m.value, targetNodeId : m.target_node_id})}>
                    {m.button_text}
                </button> ))}
            </div>
        }
        </div>
        </div>
    )
}

export default Questionaire;