import React from 'react';
import './App.css';
import Greetings from './components/Greeting';
import IdCard from './components/IdCard';
import BoxColor from './components/BoxColor';
import Random from './components/Random';


function App() {
  return (
    <div className="App">

  <IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>

<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
<Greetings lang="de">Ludwig</Greetings>
<Greetings lang="es">François</Greetings>
  );

  <BoxColor r={255} g={0} b={0} />  
  <BoxColor r={128} g={255} b={0} />
  </div>
  )}

export default App;