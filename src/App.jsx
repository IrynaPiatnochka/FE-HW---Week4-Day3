// import { useState } from 'react'
import './App.css'

const Header = () => {
  return (
    <div className="header">
      <img src="https://annemariesegal.com/wp-content/uploads/2017/04/adobestock_86346713-cropped-young-woman-in-suit.jpg?w=1200" alt="Background" />
      <h1>Isla Calder</h1>
    </div>
  );
}

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>Hi, I am Isla Calder, a software engineer. With 5 years of experience in the tech industry, I bring expertise in full-stack development, cloud computing, and agile methodologies to the table. My goal is to leverage my skills to build innovative software solutions that drive business growth and enhance user experiences. Let us work together.</p>
    </div>
  );
}

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>Email: islacalder@gmail.com</p>
      <p>LinkedIn: linkedin.com</p>
    </div>
  );
}

const App = () => {
  return (
    <div className="app">
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;