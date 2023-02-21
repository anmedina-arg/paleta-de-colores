import { useState } from 'react';
import { IconMenu } from '../components/iconMenu/iconMenu';
import './styles.css';


export const ExampleOne = () => {
  const [visible, setVisible] = useState(false)

  function desplegable(e:any) {
    e.preventDefault();
    setVisible(!visible)
  }
  return (
    <>
      <h5 className='title' onClick={desplegable}>Ejemplo 1 <IconMenu/></h5>
      <div className={visible ? 'visible' : 'hidden'}>
        <div className='container'>
          <div className="circle one-one"></div>
          <div className="circle one-two"></div>
          <div className="circle one-three"></div>
          <div className="circle one-four"></div>
          <div className="circle one-five"></div>
        </div>
      </div>
    </>
  )
}