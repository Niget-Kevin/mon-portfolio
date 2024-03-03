import React from 'react';
import FormCoordinates from '../FormCoordinates/FormCoordinates';
import FormMessage from '../FormMessage/FormMessage';
import FormSubmitButton from '../FormSubmitButton/FormSubmitButton';
import ContactLinks from '../ContactLinks/ContactLinks';
import data from '../../Data/contact.json'
import './Form.scss'

function Form() {
    return (
        <section id="contact">
            <h2 className="contact-title">Me contacter</h2>
            <div className="contact-me">
                <form className="contact-form" >
                    <FormCoordinates />
                    <FormMessage />
                    <FormSubmitButton />
                </form>       
                <div>        
                    {data.map(data => {
                        return (
                        <ContactLinks
                            key={data.id} 
                            id={data.id} 
                            img={data.title} 
                            title={data.title}                            
                        />
                        )
                    })}
                </div> 
            </div>
        </section>
    );
}

export default Form;
