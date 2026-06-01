import React from 'react'
import '../styles/EjemploJdr.css'

function EjemploJdr() {
  return (
    <div className="page">
      <section className="section">
        <h2>align-items</h2>
        <div className="container container-align-items">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
        </div>
      </section>

      <section className="section">
        <h2>align-content</h2>
        <div className="container container-align-content">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
          <div className="box">6</div>
          <div className="box">7</div>
          <div className="box">8</div>
        </div>
      </section>

      <section className="section">
        <h2>row-gap</h2>
        <div className="container container-row-gap">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
        </div>
      </section>

      <section className="section">
        <h2>column-gap</h2>
        <div className="container container-column-gap">
          <div className="box">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
        </div>
      </section>

      <section className="section">
        <h2>order</h2>
        <div className="container container-order">
          <div className="box order-1">1</div>
          <div className="box order-2">2</div>
          <div className="box order-3">3</div>
          <div className="box">4</div>
          <div className="box">5</div>
        </div>
      </section>

      <section className="section">
        <h2>flex-grow</h2>
        <div className="container container-flex-grow">
          <div className="box grow-1">1</div>
          <div className="box grow-2">2</div>
          <div className="box">3</div>
        </div>
      </section>

      <section className="section">
        <h2>flex-shrink</h2>
        <div className="container container-flex-shrink">
          <div className="box shrink-1">1</div>
          <div className="box">2</div>
          <div className="box">3</div>
        </div>
      </section>

      <section className="section">
        <h2>flex-basis</h2>
        <div className="container container-flex-basis">
          <div className="box basis-1">1</div>
          <div className="box basis-2">2</div>
          <div className="box basis-3">3</div>
        </div>
      </section>

      <section className="section">
        <h2>flex</h2>
        <div className="container container-flex">
          <div className="box flex-1">1</div>
          <div className="box flex-2">2</div>
          <div className="box flex-0">3</div>
        </div>
      </section>

      <section className="section">
        <h2>align-self</h2>
        <div className="container container-align-self">
          <div className="box">1</div>
          <div className="box box100">2</div>
          <div className="box">3</div>
          <div className="box">4</div>
        </div>
      </section>
    </div>
  )
}

export default EjemploJdr
