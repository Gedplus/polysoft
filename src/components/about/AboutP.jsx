import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import GroupIcon from '@mui/icons-material/Group';
import InsightsIcon from '@mui/icons-material/Insights';
import LanguageIcon from '@mui/icons-material/Language';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CountUp from 'react-countup';
import Expertice from '../homes/Expertise';
import Blog from '../homes/blog';
const AboutP =()=> {

   


    return(<>
      <section className='back11'>
        <div className="boxB">
        <div className="headingB">
            <br/>
                    <h3>C'est l'endroit idéal</h3>
                    <hr className="solid"></hr>
                    <h1>À propos de notre Start Up</h1>
                    </div></div>
      </section>
      <div className='margin'></div>
<Expertice/>
              
                    
                    
                    
                  <Blog/>

  

    </>)
}
export default AboutP