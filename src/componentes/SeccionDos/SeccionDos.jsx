import React from 'react';
import video from '../videos/videosofa.mp4';
import './SeccionDos.css'; 


const SeccionDos = () => {
    return (
        <>

            <section class="seccion-sofa">
                <video autoplay loop muted controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <p>Country living hotel. St. George Harrogate</p>
            </section>
        </>
    )
}

export { SeccionDos }