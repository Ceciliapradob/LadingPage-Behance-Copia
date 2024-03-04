import React from 'react';
import './SeccionSeis.css'; 

const SeccionSeis = () => {
    return (
        <>
            {/* <!--Seccion 6--> */}
            <section className="contact-section">
                <div className="title">
                    <h2>CONTACT US</h2>
                    <p>If you have any questions, we will be happy to answer them.</p>
                    <p>+7 906 079 55 53</p>
                    <p>oko3d.info@gmail.com</p>
                </div>
                <div className="contact-form">
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="tel" name="phone" placeholder="Phone" />
                        <textarea name="message" placeholder="Message"></textarea>

                        <div className="button-container">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export { SeccionSeis };
