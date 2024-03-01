import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <div className='contact'>
            <div className="card">
                <span className="title">Contact</span>
                <form className="form">
                    <div className="group">
                        <input type="text" id="name" name="name" placeholder="" required />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="group">
                        <input type="email" id="email" name="email" placeholder="" required />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="group">
                        <textarea id="comment" name="comment" placeholder="" rows="5" required></textarea>
                        <label htmlFor="comment">Go ahead..., I am listening</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
