import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Home = () => {
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
      const slideImages = [
        {
            url: "./images/slide2.png" ,
            caption: 'Slide 1'
          },
        {
          url: "./images/slide2.png" ,
          caption: 'Slide 2'
        },
    
   
      ];
      const slideImages1 = [
        {
            url: "./images/Mobile2.png" ,
            caption: 'Slide 1'
          },
        {
          url: "./images/Mobile2.png" ,
          caption: 'Slide 2'
        },
    
   
      ];
  return (
    <><section className='home'>
        <div className="slide-container" style={{height:"800px", width:"100%" }}>
        <Slide style={{height:"800px", width:"100%"}}>
         {slideImages.map((slideImage, index)=> (
            <div key={index} style={{height:"800px", width:"100%"}}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,   backgroundPosition:"center", height:"90vh",width:"100%"}}>
               
              </div>
            </div>
          ))} 
        </Slide>
      </div>
      <div className="slide-container-mobile" style={{height:"800px", width:"100%" }}>
        <Slide style={{height:"800px", width:"100%"}}>
         {slideImages1.map((slideImage, index)=> (
            <div key={index} style={{height:"800px", width:"100%"}}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})`,   backgroundPosition:"center", height:"90vh",width:"100%"}}>
               
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    </section>
      
    </>
  )
}

export default Home
