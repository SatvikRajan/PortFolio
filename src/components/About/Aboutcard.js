import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from "react-icons/im";
export default function Aboutcard() {
  return (
    <Card className="quote-card-view">
    <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Satvik Rajan </span>
          from <span className="purple"> Himachal Pradesh, India.</span>
          <br /> I am a pre final year student pursuing an Btech in Computer Science 
          at VIT Vellore.
          <br />
          Additionally, I am currently doing my internship as a Full Stack Web Developer in BootesNull.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Playing Games
          </li>
          <li className="about-activity">
            <ImPointRight /> Fitness
          </li>
          <li className="about-activity">
            <ImPointRight /> Cooking
          </li>
        </ul>

        <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to build things that make a difference!"{" "}
        </p>
        <footer className="blockquote-footer">Satvik</footer>
      </blockquote>
    </Card.Body>
  </Card>
  )
}
