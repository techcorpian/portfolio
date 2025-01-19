import React from 'react'
import Contacts from './Contacts'
import Journey from './Journey'
import Landing from './Landing'
import LandingOL from './LandingOL'
import Projects from './Projects'
import Skills from './Skills'

const Home = () => {
  return (
    <div>
        <section id="home">
          <Landing/>
          <LandingOL/>
        </section>
        <section id="journey"><Journey/></section>
        <section id="skills"><Skills/></section>
        <section id="projects"><Projects/></section>
        <section id="contacts"><Contacts/></section>
    </div>
  )
}

export default Home