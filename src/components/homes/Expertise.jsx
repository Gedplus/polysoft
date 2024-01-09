import React, { useEffect } from "react"
import "./expertise.css"
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import CountUp from 'react-countup';
import GroupIcon from '@mui/icons-material/Group';
import InsightsIcon from '@mui/icons-material/Insights';
import LanguageIcon from '@mui/icons-material/Language';
const Expertice =()=>{


    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
      }
      
      const divStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        height: '400px'
      }

    return(
        <>
        <section className="skill">
            <div className="container topMargin">
                <div className="heading" data-aos='zoom-in-down'>
                    <h3>INTRODUCTION</h3>
                    <h1>À PROPOS DE POLYSOFT&CO</h1>
                    </div>
                    <div className="content flex">
                    <div className=" right  mtop"  data-aos='fade-down-right'>
                    <div className="content flex">
                   <div>          </div>     <div>
               
                            <p>Une Start Up Tunisienne basée à Sfax créée en Février 2019 spécialisée dans le développement de solutions informatiques, issue du groupe familial opérant dans le secteur informatique depuis 1988, Nous croyons que chacun de nos produits doit évoluer et s'adapter aux besoins du marché afin de garantir une meilleure satisfaction client. Toujours soucieux de garantir le meilleur, nos efforts ne cesseront jamais d'évoluer graçe à un processus de développement technique et commercial complet et sur mesure.
</p>
                            <img src ="./images/heur.png" alt="" className="image"/>
                            <img src ="./images/checklist.png" alt="" className="image"/>
                            <img src ="./images/tel.png" alt="" className="image"/>
                            <img src ="./images/data1.png" alt="" className="image"/>
                            <img src ="./images/web1.png" alt="" className="image"/>
                          </div>
                    </div>
                    </div>
                    <div className="left topMargin "  data-aos='fade-down-left' >
                    <img src ="./images/imapoly.jpg" alt="" className="imageP"/>

                  
                    </div>
                </div>
                      <div >






                    </div>
                    <br/> <br/>
  
                    
                    <div className="wrapper1"  data-aos='zoom-in'>
                    <div className="container1 ">
                    <img src ="./images/costumer.png" alt="" className="image1"/>
                      <span className="num" data-val="150">
                      <span className="text">Nos clients</span>
                      <CountUp  end={150} enableScrollSpy duration={2}/></span>
                    </div>
                    <div className="container1">
                    <img src ="./images/team.png" alt="" className="image1"/>
                      <span className="num" data-val="11">  <span className="text">Collaborateurs et <br/> experts métier</span><CountUp  enableScrollSpy end={11} duration={2}/></span>
                  </div>
                    <div className="container1">
                    <img src ="./images/quality.png" alt="" className="image1"/>
                      <span className="num" data-val="50">                    <span className="text">Ans d’expérience</span><CountUp   enableScrollSpy duration={2} end={5}/> </span>
</div>
                    <div className="container1">
                    <img src ="./images/solutions.png" alt="" className="image1"/>
                      <span className="num" data-val="11"> <span className="text">Solution</span><CountUp enableScrollSpy duration={2} end={5}/></span>
                   </div>
                    
                    
                    
                    
                    </div>  </div> </section>  </>
    )
}
export default Expertice;
