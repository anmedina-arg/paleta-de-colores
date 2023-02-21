import { useState } from 'react';
import './styles.css';


export const ExampleFour = () => {
  const [visible, setVisible] = useState(false)

  function desplegable(e:React.MouseEvent) {
    e.preventDefault();
    setVisible(!visible)
  }
  return (
    <>
      <h5 className='title' onClick={desplegable}>Ejemplo 1</h5>
      <div className={visible ? 'visible' : 'hidden'}>
        <div className='container'>
          <div className="circle four-one"></div>
          <div className="circle four-two"></div>
          <div className="circle four-three"></div>
          <div className="circle four-four"></div>
        </div>
      </div>
    </>
  )
}