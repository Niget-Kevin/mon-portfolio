import React from 'react';
import'./FormSubmitButton.scss'

function FormSubmitButton() {
    return (
        <>
            <p>*champs requis</p>
            <input type="submit" value="Envoyer" className="button-send" />
            <p id="mail_success"></p>
        </>
    );
}

export default FormSubmitButton;
