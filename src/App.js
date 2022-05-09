import React, { Component } from 'react';
import './App.css';
import sergio from '../../mi-blog/src/assets/sergio.jpg'

const Header = (props) => {
  return (
  <h1>{props.name}'s Blog</h1>
  )
};

const Blog = (props) => {
  return (
    <section>
      <p>Hola, esta es mi {props.numeral} React App original</p>
      <img  height={340} src={sergio} alt={sergio} />
      <ul style={{ textAlign: 'left' }}>
        {props.skills.map((skill) => 
          (<li key={skill.id}>{skill.name}</li>))}; 
      </ul>
    </section>
  )
};

const Footer = (props) => {
  return (
    <h3>Keep an eye {props.year}</h3>
  )
};

const skills = [
  "React",
  "Redux",
  "Node.js",
  "MongoDB",
  "MySQL",
  "HTML5",
  "CSS3",
  "JavaScript",
  "jQuery",
  "Bootstrap",
  "Tailwind CSS",
];


const skillsObject = skills.map((skill, i) => ({ id: i, name: skill }));
console.log(skillsObject);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name='Sergio' />
        <Blog numeral='segunda' skills={skillsObject} />
        <Footer year={new Date().getFullYear()} />
      </div>
    );
  }
}

export default App;
