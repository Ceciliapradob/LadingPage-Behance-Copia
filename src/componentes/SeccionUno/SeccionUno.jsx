import React from 'react';
import Imagen1 from '../assets/img1.jpg';
import './SeccionUno.css';

const SeccionUno = () => {
    return (
        <>
            {/*         
        <!--Primera seccion--> */}
            <section className="section-images-one">
                <div className="container-img">
                    <div className="box">
                        <div className="img">
                            <img src={Imagen1} alt="Imagen 1" />
                        </div>
                        <div className="content">
                            <h3>ESSENCE OF TECHNOLOGY</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>
                        </div>
                    </div>
                </div>
                {/* <!--imagen 2--> */}
                <div className="container-img2">
                    <div className="box2">
                        <div className="img2">
                            <img src={Imagen1} alt="Imagen 1" />
                        </div>
                        <div className="content2">
                            <h3>EFFECT OF PRESENCE</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>
                        </div>
                    </div>
                </div>
                {/*Imagen 3*/}
                <div className="container-img">
                    <div className="box">
                        <div className="img">
                            <img src={Imagen1} alt="Imagen 1" />
                        </div>
                        <div className="content">
                            <h3>ESSENCE OF TECHNOLOGY</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. .</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SeccionUno;
