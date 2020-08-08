import React from 'react';

import './confirmationForm.css';

export default function ConfirmationForm ({ onConfirm, onDecline, message}) {
    
    return (
        <div id="form_background">
            <div className="center card_view shadow" id="conf_form">
                <div>
                    <p id="conf_text" >
                        { message }
                    </p>
                </div>
                <div id ="conf_form_buttonBox">
                    <div className="button conf_button" onClick={ onDecline }>
                        Cancel
                    </div>
                    <div className="button conf_button" onClick={ onConfirm }>
                        Yes
                    </div>
                </div>
            </div>
        </div>
    )
}