import React from 'react'
import {Link } from "react-router-dom"
const Footer =()=> {
    return(<>
<footer>
    <div className='container grid'>
        <div className='box'data-aos='zoom-in'>
            <img src="./images/logobb.png" alt="" data-aos='zoom-in' style={{width:"180px" , height:"45px"}}/>
            <p>Une Start Up Tunisienne basée à Sfax créée en Février 2019 spécialisée dans le développement de solutions informatiques. </p>
        </div>
        <div className='box box3 marginLeft' data-aos='zoom-in'>
            <h2>Liens utiles</h2>
            <ul>
                <li><Link className="lien" to='/'>Accueil</Link></li>
                <li><Link  className="lien" to='/About'>A propos</Link></li>
                <li><Link className="lien" to='/blog'>Services</Link></li>
               
                <li><Link className="lien" to='/Contact'>Contact </Link></li>
           
            </ul>
        </div>
      
        <div className='box  box2' data-aos='zoom-in'>
            <h2>Contactez-nous</h2>
            <div className='flex-container '>
            <div className='flex' >
            <img src ="./images/F1.png" alt="" className="imageF"/>
<p>Phone: +216 74 433 020</p>
</div>
<div className='flex' >
            <img src ="./images/F2.png" alt="" className="imageF"/>
            <p>Email: gm.polysoftco@gmail.com</p></div>
            <div className='flex' >
            <img src ="./images/F3.png" alt="" className="imageF"/>
            <p>Rte de Teniour Km 1,5 / Sfax, Tunisia, 3000</p></div>
                </div></div>

    </div>
    <div className='logal container'>
        <label htmlFor=''>© Copyright 2023 by GEDPLUS</label>
    </div>
</footer>
    </>)
}
export default Footer;