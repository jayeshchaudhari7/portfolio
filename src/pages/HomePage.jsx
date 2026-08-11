import React from 'react'
import TechStack from '../components/TechStack'
import Hero from '../sections/Hero'
import Social from '../sections/Social'
import ProjectShowcase from '../components/ProjectShowcase'


const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <TechStack />
      <ProjectShowcase/>
      <Social/>
    </div>
  )
}

export default HomePage
