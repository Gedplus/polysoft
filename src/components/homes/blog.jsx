import React from "react"
import "./expertise.css"
const Blog =()=>{
    const Blogdata1 = [
        {
          id: 1,

          title: "Notre vision",
          cover: "./images/vision.png",

          category: "<p>D'être un leader du secteur sur le marché local, nos ambitions dépassent les frontières nous visons à s'internationaliser avec des partenaires ciblés notammant sur l'Afrique</p>",
        },
        {
          id: 2,
 
          title: "Notre mission",
          cover: "./images/mission.png",

          category: "<p>Notre mission est de créer des solutions de gestion performantes et innovantes pour les PME et les accompagner dans leur process de digitatlisation. Nous adaptons nos logiciels aux besoins les plus specifiques du client et nous offrons des solutions sur mesure</p>",
        },
        {
          id: 3,

          title: "Nos valeurs",
          cover: "./images/value-proposition.png",

          category:     "<p>- Innovation,<br/> - Satisfaction client, <br/> - Engagement, <br/>- Résponsabilité.</p>",
        },
   
      ]

    return(
        <>
        <section className="blog services">
            <div className="container ">
                <div className="heading" data-aos='zoom-in-down'>
                    <h3>Pourquoi nous choisir ?</h3>
                    <h1>NOS VALEURS </h1>
                    </div>
                    <div className="contain grid topMargin">
                        {Blogdata1.map((val)=>{
                            return(
                                <div className="container2"  key={val.id}  data-aos='flip-left'  > 
                                 <img src ={val.cover} alt="" className="image2"/>
                                        <div className="text marginmoin">
                                            <span>{val.date}</span>

<h2>{val.title}</h2>        
<div dangerouslySetInnerHTML={ {__html: val.category} } />                             </div>
                                        </div>
                            )})}
                                </div>
               </div> </section></>
    )
}
export default Blog;