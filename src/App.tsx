import { useState } from 'react'
import './App.css'

import { evaluarExpresion } from './tools/calculate'
import { Button, Col, Input, Row } from 'antd'

function App() {
  const [textoMostrado, setTextoMostrado] = useState('');

  function calcularLaExpresionEscrita() {
    const nuevoTextoAMostrar = evaluarExpresion(textoMostrado) as string;
    setTextoMostrado(nuevoTextoAMostrar);
  }

  function escribirAlgoEnElTexto(nuevoChar : string) {
    setTextoMostrado(textoMostrado + nuevoChar);
  }

  return (
    <>
    <div>{textoMostrado}</div>
    <br />

    <div>
      <Row>
        <Button onClick={() => escribirAlgoEnElTexto('7')}>7</Button>
        <Button onClick={() => escribirAlgoEnElTexto('8')}>8</Button>
        <Button onClick={() => escribirAlgoEnElTexto('9')}>9</Button>
        <Button onClick={() => escribirAlgoEnElTexto('/')}>/</Button>
        <Button onClick={() => escribirAlgoEnElTexto('^2')}>x^2</Button>
      </Row>

      <Row>
        <Button onClick={() => escribirAlgoEnElTexto('4')}>4</Button>
        <Button onClick={() => escribirAlgoEnElTexto('5')}>5</Button>
        <Button onClick={() => escribirAlgoEnElTexto('6')}>6</Button>
        <Button onClick={() => escribirAlgoEnElTexto('*')}>*</Button>
        <Button onClick={() => escribirAlgoEnElTexto('^')}>x^n</Button>
      </Row>

      <Row>
        <Button onClick={() => escribirAlgoEnElTexto('1')}>1</Button>
        <Button onClick={() => escribirAlgoEnElTexto('2')}>2</Button>
        <Button onClick={() => escribirAlgoEnElTexto('3')}>3</Button>
        <Button onClick={() => escribirAlgoEnElTexto('-')}>-</Button>
        <Button onClick={() => escribirAlgoEnElTexto('%')}>%</Button>
      </Row>

      <Row>
        <Button onClick={() => escribirAlgoEnElTexto('.')}>.</Button>
        <Button onClick={() => escribirAlgoEnElTexto('0')}>0</Button>
        <Button onClick={() => calcularLaExpresionEscrita()}>=</Button>
        <Button onClick={() => escribirAlgoEnElTexto('+')}>+</Button>
        <Button onClick={() => escribirAlgoEnElTexto('*10^')}>x10^n</Button>
      </Row>
    </div>
    </>
  )
}

export default App
