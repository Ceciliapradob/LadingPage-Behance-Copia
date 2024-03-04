import React from 'react';
import imagenAlta from '../assets/imgalta.jpg'; 
import imagenAlto from '../assets/imgalto.jpg'; 
import './SeccionTres.css'; 


const SeccionTres = () => {
    return (
        <>
            {/* <!--Seccion 3  secuencia imagenes --> */}

            <section class="section-images">
                <div class="image-section">
                    <div class="column">
                        <div class="image image1">
                            <img src={imagenAlta} alt="Imagen 1" />
                                <div class="caption">
                                    <h3>Subtítulo 1</h3>
                                    <p>Texto relacionado con la imagen 1.</p>
                                </div>
                        </div>
                        <div class="image image2">
                            <img src={imagenAlta} alt="Imagen 2" />
                                <div class="caption">
                                    <h3>Subtítulo 2</h3>
                                    <p>Texto relacionado con la imagen 2.</p>
                                </div>
                        </div>
                    </div>

                    {/* <!--Segunda fila--> */}

                </div>

                <div class="image-section">
                    <div class="column">
                        <div class="image image1">
                            <img src={imagenAlta} alt="Imagen 1" />
                                <div class="caption">
                                    <h3>Subtítulo 1</h3>
                                    <p>Texto relacionado con la imagen 1.</p>
                                </div>
                        </div>
                        <div class="image image2">
                            <img src={imagenAlta} alt="Imagen 2" />
                                <div class="caption">
                                    <h3>Subtítulo 2</h3>
                                    <p>Texto relacionado con la imagen 2.</p>
                                </div>
                        </div>
                    </div>
                </div>
                {/* <!--Tercera fila--> */}
                <div class="image-section">
                    <div class="column">
                        <div class="image image1">
                            <img src={imagenAlta} alt="Imagen 1" />
                                <div class="caption">
                                    <h3>Subtítulo 1</h3>
                                    <p>Texto relacionado con la imagen 1.</p>
                                </div>
                        </div>
                        <div class="image image2">
                            <img src={imagenAlta} alt="Imagen 2" />
                                <div class="caption">
                                    <h3>Subtítulo 2</h3>
                                    <p>Texto relacionado con la imagen 2.</p>
                                </div>
                        </div>
                    </div>
                </div>
                {/* <!--Cuarta fila--> */}
                <div class="image-section div">
                    <div class="column">
                        <div class="image image1">
                            <img src={imagenAlta} alt="Imagen 1" />
                                <div class="caption">
                                    <h3>Subtítulo 1</h3>
                                    <p>Texto relacionado con la imagen 1.</p>
                                </div>
                        </div>
                        <div class="image image2">
                            <img src={imagenAlta} alt="Imagen 2" />
                                <div class="caption">
                                    <h3>Subtítulo 2</h3>
                                    <p>Texto relacionado con la imagen 2.</p>
                                </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export { SeccionTres }