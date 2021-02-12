import React from 'react';
import './styles.css';
import produto1 from '../Assets/produto1.jpeg';

export default function Iogurte() {

    return(
        <div className="mainha">

            <div className="photo">
                <img src={produto1}/>

            </div>

            <div className="text">
                <h2>Os sortes da Yogoberry de Maracujá possui as seguintes informações nutricionais:</h2>
                <br></br>
                <h5>Carboidratos: 20g</h5>
                <br></br>
                <h5>Fibras alimentares: 0g</h5>
                <br></br>
                <h5>Açúcares: 0g</h5>
                <br></br>
                <h5>Gorduras: 0g</h5>
                <br></br>
                <h5>Vitamina C: 0g</h5>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <h5>Valor: R$18,90</h5>
              

            </div>
            
        </div>

    )
    
}