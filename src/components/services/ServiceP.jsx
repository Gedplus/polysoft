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
import Service from './service';
const SericeP =()=> {

   


    return(<>
      <section className='back11'>
        <div className="boxB">
        <div className="headingB">
            <br/>
                    <h3>C'est l'endroit idéal</h3>
                    <hr className="solid"></hr>
                    <h1>Nos services</h1>
                    </div></div>
      </section>
      <div className='margin'></div>
<Service/>
              
                    
                    
                    


  

    </>)
}
export default SericeP