import React from 'react'
import MyComponent from '../anime1';
// import video from './Videos.video1.mp4'

import Footer from '../Footer';

const Home = () => {
  return (
    <div>
    <MyComponent/>
      <p className='main name'> Natalia Venkatesh </p>
      <p className = 'sub title'> Full Stack Web Developer</p>
    



        <Footer />
    </div>
  )
}

export default Home