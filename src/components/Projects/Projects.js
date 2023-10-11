import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
export default function Projects() {
  return (
    <Container fluid className="project-section">
    <Particle />
    <Container>
      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            // imgPath={chatify}
            isBlog={false}
            title="Messenger"
            description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, styled-components, Nodejs, Express and MongoDB. Have features which allows user for realtime messaging and reactions on messages."
            ghLink="https://github.com/SatvikRajan/Chat-App"
            demoLink="*/"
          />
        </Col>
        <Col md={4} className="project-card">
          <ProjectCard
            // imgPath={chatify}
            isBlog={false}
            title="MyPortfolio"
            description="My portfolio website showcases my diverse skills, projects, and achievements. It provides a glimpse into my professional journey and expertise, serving as a compelling digital resume for potential opportunities."
            ghLink="https://github.com/SatvikRajan/PortFolio"
            demoLink="*/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            // imgPath={bitsOfCode}
            isBlog={false}
            title="CryptoTracker"
            description="Website used to track trending coins with their cost their total amount in INR and USD build with ReactJs, material-UI, and Rest Api also there is a historic graph of the coins where you can see its price till last year"
            ghLink="https://github.com/SatvikRajan/cryptotracker"
            demoLink="https://satvikcryptotracer.netlify.app/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            // imgPath={editor}
            isBlog={false}
            title="NewsHub"
            description="It is used to watch recent and latest news in many fields like sports and entertainment etc. It is made using api, bootstrap, javascript and html."
            ghLink="https://github.com/SatvikRajan/NewsHub"
            demoLink="https://satvikrajan.github.io/NewsHub/"              
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            // imgPath={leaf}
            isBlog={false}
            title="Meal Connect"
            description="Used to connect the NGO with the people who can donate or give their rest over food to the NGO and where so ever you have extra food left as vegetable waste and all it will go to GaoShala."
            ghLink="https://github.com/SatvikRajan/MealConnect"
            demoLink="hhttps://satvikrajan.github.io/MealConnect/"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            // imgPath={suicide}
            isBlog={false}
            title="TextUtils"
            description="It is a user-friendly online tool that seamlessly converts text case, copies, counts words and sentences, and offers a convenient dark mode. Ideal for versatile text manipulation."
            ghLink="https://github.com/SatvikRajan/TextUtils"
            demoLink="https://satvikrajan.github.io/TextUtils/" 
          />
        </Col>

      </Row>
    </Container>
  </Container>
  )
}
