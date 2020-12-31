import React from 'react';

function MessagePanel ({handleAnswer}) {
   return (
    <div className="button-container">
        <button className="btn btn-primary btn-lr btn-width"
            onClick={() => handleAnswer('finish')}>
            Retake the Test
        </button>
    </div>
    );
};

export default MessagePanel;