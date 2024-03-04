import React from 'react';
import './PieDePagina.css'; // Asegúrate de importar el archivo CSS

const PieDePagina = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="columnTitle">
                        <h3>Logo</h3>
                    </div>
                    <div className="columnFooter">
                        <ul>
                            <li>Areas of Application</li>
                            <li>Realtors</li>
                            <li>Restaurants, Cafe, and Bars</li>
                            <li>Hotels and Apartments</li>
                            <li>Fitness Club</li>
                        </ul>
                    </div>
                    <div className="columnFooter">
                        <ul>
                            <li>Beauty Salons and Medical Centers</li>
                            <li>Real Estate</li>
                            <li>Public Institutions</li>
                            <li>Architects and Designers</li>
                        </ul>
                    </div>
                    <div className="columnFooter">
                        <ul>
                            <li>The Documents</li>
                            <li>Personal Data Processing Policy</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}

export { PieDePagina };
