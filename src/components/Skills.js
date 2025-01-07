/* eslint-disable jsx-a11y/img-redundant-alt */

import angular from "../assets/img/angular.png"
import bootstrap from "../assets/img/bootstrap.jpeg"
import csharp from "../assets/img/csharp.png"
 import sql from "../assets/img/sql.png"
import react from "../assets/img/react.png"
import python from "../assets/img/python.png"
import powerbi from "../assets/img/powerbi.png"
import Gp from "../assets/img/Gp.png"
 import Es from "../assets/img/Es.png"
import dotnetframework from "../assets/img/dotnetframework.png"
import dotcore from "../assets/img/dotcore.png"

 import css from "../assets/img/css.jpeg"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Showcasing a journey of accomplishments and expertise.<br></br> </p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={angular} alt="" />
                                <h1>Angular</h1>
                               
                            </div>
                            <div className="item">
                                <img src={react} alt="" />
                                <h1>React </h1>
                                
                            </div>
                            <div className="item">
                                <img src={dotnetframework} alt="" />
                                <h1>.NetFramework</h1>
                                
                            </div>
                            <div className="item">
                                <img src={dotcore} alt="" />
                                <h1>.NetCore</h1>
                                
                                
                            </div>
                            <div className="item">
                                <img src={csharp} alt="" />
                                <h1>C#</h1>
                               
                            </div>
                            <div className="item">
                                <img src={sql} alt="" />
                                <h1>SQL</h1>
                                
                            </div> 
                           
                            <div className="item">
                                <img src={bootstrap} alt="" />
                                <h1>Bootstrap</h1>
                                
                            </div>
                            <div className="item">
                                <img src={python} alt="" />
                                <h1>Python</h1>
                                
                            </div>
                            <div className="item">
                                <img src={powerbi} alt="" />
                                <h1>PowerBi</h1>
                                
                            </div>
                            <div className="item">
                                <img src={css} alt="" />
                                <h1>CSS</h1>
                                
                            </div>
                            
                            <div className="item">
                                <img src={Gp} alt="" />
                                <h1>Grafana Prometheus</h1>
                                
                                
                            </div>
                            <div className="item">
                                <img src={Es} alt="" />
                                <h1>Elastic Search</h1>
                                
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
