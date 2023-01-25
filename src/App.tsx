import React from 'react';
import './App.css';
import { ExampleFour } from './components/colors/exampleFour';
import { ExampleOne } from './components/colors/exampleOne';
import { ExampleThree } from './components/colors/exampleThree';
import { ExampleTwo } from './components/colors/exampleTwo';
import { GradientFive } from './components/gradients/gradientFive';
import { GradientFour } from './components/gradients/gradientFour';
import { GradientOne } from './components/gradients/gradientOne';
import { GradientSeven } from './components/gradients/gradientSeven';
import { GradientSix } from './components/gradients/gradientSix';
import { GradientThree } from './components/gradients/gradientThree';
import { GradientTwo } from './components/gradients/gradientTwo';


function App() {
  return (
    <div className="main">
      <h2>hola soy titulo</h2>
      <ExampleOne/>
      <ExampleTwo/>
      <ExampleThree />
      <ExampleFour />
      <GradientOne />
      <GradientTwo />
      <GradientThree />
      <GradientFour />
      <GradientFive />
      <GradientSix />
      <GradientSeven />
    </div>
  );
}

export default App;
