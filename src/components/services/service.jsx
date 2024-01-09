import React from "react"

import "./service.css"

const Service =()=>{
    const ServicesData = [
        {
          id: 1,
          date: 9 ,
          mois: "sep",
          title: "24-CRM",
          desc: "Notre nouvelle plateforme cloud de gestion commerciale et de gestion des commerciaux. Gérez : Votre stock, Vos clients, Vos fournisseurs, Votre banque et vos représentants commerciaux.",
          cover: "./images/dd.png",
          source: "blog1",
          margTop:"100px"
        },
        {
          id: 2,
          date: 12 ,
          mois: "sep",
          title: "24-Paie",
          desc: "Le logiciel 24-Paie vous offre beaucoup plus que les fonctions essentielles de la paie dans le respect du cadre réglementaire et légal. Etablissez une paie complète pour vos employés avec un logiciel adaptable à tous les contrats de travail et à toutes les conventions collectives. Version multi-sociétés, multi-dossiers et multi-utilisateurs.",
          cover: "./images/serv2.jpg",
          source:"blog2",
          margTop:""
        },
        {
          id: 3,
          date: 14,
          mois: "sep",
          title: "24-Gold",
          desc: "Logiciel de gestion de bijouterie gros.",
          cover: "./images/goldd.png",
          source:"blog3",
          margTop:"180px"
        },
        {
          id: 4,
          date: 14,
          mois: "sep",
          title: "Développement sur mesure (Desktop,Web et Mobile)",
          desc: "Développement sur mesure pour vos porjets desktop,web et Mobile (Android,iOS)",
          cover: "./images/serv4.jpg",
          source:"blog3",
          margTop:"130px"
        },
        {
          id: 5,
          date: 14,
          mois: "sep",
          title: "Consulting IT",
          desc: "Consulting et accompagnement digital de vos entreprises.",
          cover: "./images/serv5.jpg",
          source:"blog3",
          margTop:"160px"
        },
 
    
      ]
      
    return(<>
    <section className="  blog1 topMarign">
        <div className="container">
            <div className="heading topMargin" data-aos='zoom-in-down'>
                <h3>Découvrez nos Services</h3>
                <h1>NOS SERVICES</h1>
            </div>
            <div className="contain grid topMargin">
                {
                    ServicesData.map((val)=>{
                        return(
                        
                          <div className="container3"  key={val.id}  data-aos='flip-left'  > 
                          <img src ={val.cover} alt="" className="serviceimage"/>
                                 <div className="text marginmoin">
                               

<h2>{val.title}</h2>        
<p>{val.desc} </p> 
   
<div className="field button-field" style={{marginTop : val.margTop }}>
                        <button type="submit"  >Lien</button>
                    </div>                               </div>
                                 </div>
                        )
                    })
                }
            </div>
            <div className=" topMargin"></div>
        </div>
    </section>
    </>)
}
export default Service;