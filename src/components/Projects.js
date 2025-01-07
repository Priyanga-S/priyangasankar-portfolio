import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import paper1 from "../assets/img/paper1.jpeg";
import paper2 from "../assets/img/paper2.jpeg";
import dashboard from "../assets/img/dashboard.png";
import DL from "../assets/img/DL.jpeg";
import ML from "../assets/img/ML.jpeg";
import FT from "../assets/img/FT.jpeg";
import taskmanagement from "../assets/img/taskmanagement.jpg";
import CV from "../assets/img/CV.png";

// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg2 from "../assets/img/project-img2.png";
import ncc from "../assets/img/ncc.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard1 } from "./Projectcard1";
import { ProjectCard0 } from "./ProjectCard0";

export const Projects = () => {

  const projects = [
    {
      title: "Dynamic Dashboard Application",
      description: "Angular, Dashboard, Real-time, Visualization, Decision-making.",
      imgUrl:dashboard,
    },
    {
      title: "Task Management Application",
      description: "Angular, .NET, Task Management, Collaboration, Efficiency.",
      imgUrl: taskmanagement,
    },
    {
      title: "Pulmonologist GUI Toolkit",
      description: "Angular, .NET, Task Management, Collaboration, Efficiency.",
      imgUrl: ML,
    },
    {
      title: "Navigation for Blind-CV",
      description: "Navigation, Blind People, OpenCV, Real-time Guidance, Obstacle Detection.",
      imgUrl: CV,
    },
    {
      title: "Wheeze and Crackle Analysis-DL",
      description: "Wheeze, Crackle, Deep Learning, Respiratory Conditions, Audio Analysis.",
      imgUrl: DL,
    },
    {
      title: "A Smart Mosquito control fishtank",
      description: "Arduino IDE, Mosquito Control, Fish Tank, Predator Fish, Disease Prevention.",
      imgUrl: FT,
    },
  ];
  const organisations = [
    {
      title: "National Cadet Corps",
      description: "As an NCC Air Wing cadet, I've had the privilege of participating in numerous camps and training activities, which have been integral to my personal and professional development. These experiences have not only enhanced my leadership and teamwork skills but also allowed me to excel in inter-wing competitions and earn proficiency badges.  My journey with the NCC has profoundly impacted my growth, instilling in me values of integrity and service. Committed to upholding the NCC ethos, I am eager to continue making meaningful contributions to society as a responsible citizen and future leader.",
      imgUrl:ncc,
    },];

    const Paper = [
      {
        title: "Wheeze and Crackle Analysis Using Deep Learning",
        description: "Deep Learning, Disease Classification, CNN",
        imgUrl: paper1,
        link: "https://ieeexplore.ieee.org/document/10395739",
      },
      {
        title: "GUI Toolkit for Pulmonologists",
        description: "Machine Learning, SVM, GRU, LSTM, Transformer",
        imgUrl: paper2,
        link: "https://ieeexplore.ieee.org/document/10716908",
      },
    ];
    
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Works</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Paper Publications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Organisation</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
      {Paper.map((project, index) => (
        <Col key={index} className="d-flex justify-content-center" size={12} sm={7} md={4}>
          <ProjectCard0
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            link={project.link}
          />
        </Col>
      ))}
    </Row>
                   
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          organisations.map((project, index) => {
                            return (
                              <ProjectCard1
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                      
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
