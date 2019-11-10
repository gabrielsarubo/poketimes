import React from 'react';
import Rainbow from '../components/hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus accusantium fuga quidem. Debitis dolorem repellendus itaque ipsa esse, nam eos odit quibusdam eum! ^Esse, officiis voluptatibus tenetur velit consequuntur ut.</p>
    </div>
  )
}

export default Rainbow(About);