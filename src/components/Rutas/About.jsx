import React from "react";
import style from "../../css/About.module.css";

class About extends React.Component {
  // constructor() {}
  render() {
    return (
      <div className={style.container}>
        <img src="img/Perfil.png" alt="Foto de perfil" />
        <div className={style.about}>
          <h1>CRISTHIAN RIOS</h1>
          <hr></hr>
          <p>
            Soy un joven cristiano, que ama programar, desarrollar soluciones a
            traves del codigo, ofrecer a una comunidad diveras soluciones a un
            problema puntual. Soy un joven Colombiano con titulación en
            Ingeniería Mecatronica, Certificados en desarrollo de eficiencia
            energitica a través de diversas tecnologias, como Labview, Machine
            Learning con Python, diseño e instalación de modulos solares. Ttengo
            una certificación en desarrollo web, como Full Stack Developer, con
            desarrollo con tecnologias como, React, Redux, Expres, Postgres,
            Sequelize, Node.js entre muchas otras. Tengo mas de 8 años en
            experia de administración de empresa en la industria comercial, como
            ferreterias. Tengo conocimientos en la industria electrica,
            construcción de vias de media y baja tensión. Soy un joven alegre,
            apacionado, autodidacta, amante de la musica y las pelis, proactivo,
            lider y un gran compañero, me gusta trabajar en grupo pero también
            puedo desemvolverme solo
          </p>
        </div>
      </div>
    );
  }
}

export default About;
