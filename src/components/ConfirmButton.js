import React from 'react';

export default function ConfirmButton({timeline}) {
    return (

        <button className="confirm" onClick={() => timeline.play()}>
            <span className="label">Confirm</span>
            <span className="icon"></span>
            <svg className="check" width="44.419" height="36.507" viewBox="0 0 44.419 36.507">
                <path d="M130.682,218.058l 14.586,17.462,28.295-34.305" transform="translate(-129.915 -200.579)" />
            </svg>
            
        </button>
    )
}