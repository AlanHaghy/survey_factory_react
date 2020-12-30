import React from 'react';

function MessagePanel ({data , handleAnswer}) {
   return (
    <div className={`button-container ${!data.buttons_across ? 'button-col' : ''}`}>
        <button className="btn btn-primary btn-lr btn-width"
            onClick={() => handleAnswer('retake')}>
            Retake the Test
        </button>
    </div>
    );
};

export default MessagePanel;