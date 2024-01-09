import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CountUp from 'react-countup';
const Contact =()=> {
    const Blogdata1 = [
        {
          id: 1,

          title: "Télephone",
          cover: "./images/telephone-call.png",

          category: "+216 74 433 020",
        },
        {
          id: 2,
 
          title: "Email",
          cover: "./images/email.png",

          category: "gm.polysoftco@gmail.com",
        },
        {
          id: 3,

          title: "Adresse",
          cover: "./images/location-pin.png",

          category:"Rte de Teniour Km 1,5 / Sfax, Tunisia, 3000",
        },
   
      ]
    return(<>
      <section className='back11'>
        <div className="boxB">
        <div className="headingB">
            <br/>
                    <h3>C'est l'endroit idéal</h3>
                    <hr className="solid"></hr>
                    <h1>Contactez-nous</h1>
                    </div></div>
      </section>
   
      <div className="container MarginTop ">
      <div className="contain grid topMargin">
                        {Blogdata1.map((val)=>{
                            return(
                                <div className="container4"  key={val.id}  data-aos='flip-left'  > 
                                 <img src ={val.cover} alt="" className="image2"/>
                                        <div className="text marginmoin">
                                            <span>{val.date}</span>

<h2>{val.title}</h2>        
<p>{val.category} </p>                                </div>
                                        </div>
                            )})}
                                </div></div>
 
  
   <section className="skill" style={{padding:"0px"}}>
            <div className="container ">
                <div className="heading  topMargin" data-aos='zoom-in-down' >
                    <h3>CONTACTEZ-NOUS</h3>
                 
                    </div></div></section>
      <div className="div">
            <div className="form-content">
             
            <form  className="form2" >
              
                <div className="field input-field">
                        <input type="text" placeholder="Nom et prénom" className="input" data-aos='flip-left'  />
                    </div>
                    <div className="field input-field">
                        <input type="email" placeholder="Email" className="input" data-aos='flip-right' />
                    </div>
                
                    <div className="field input-field">
                        <input type="text" placeholder="sujet" className="input"  data-aos='flip-up' />
                    </div>
                
       
                    <div className="field1 input-field">
                        <textarea type="text" placeholder="Message" className="input" data-aos='flip-down' />
                    </div>
                
                    <div className="field button-field">
                        <button type="submit" data-aos='zoom-in-up' >Envoyer</button>
                    </div>
                  
                    
               </form>
                <br/><br/>
            </div>
            </div>

    </>)
}
export default Contact