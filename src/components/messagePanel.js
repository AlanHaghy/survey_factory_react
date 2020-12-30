import React from 'react';

function MessagePanel (handleAnswer, props) {

    return (
        <div className="card">          
            <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.page_title}</h5>
            <div className="card-text" dangerouslySetInnerHTML={{__html:props.content}}></div>
            <div className={`button-container ${!props.buttons_across ? 'button-col' : ''}`}>
                <button className="btn btn-primary btn-lr btn-width"
                    onClick={() => handleAnswer('finish')}>
                    Finish
                </button>
            </div>
        </div>
        </div>
    );

};

export default MessagePanel;