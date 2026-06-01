import React from 'react'
import '../styles/EjemploJdr.css'

function EjemploJdr() {
  return (
    <div className="jdr-page">
      <section className="jdr-section">
        <h2>align-items</h2>
        <div className="jdr-container jdr-container-align-items">
          <div className="jdr-box">1</div>
          <div className="jdr-box">2</div>
          <div className="jdr-box">3</div>
          <div className="jdr-box">4</div>
          <div className="jdr-box">5</div>
        </div>
      </section>

      <section className="jdr-section">
        <h2>align-content</h2>
        <div className="jdr-container jdr-container-align-content">
          <div className="jdr-box">1</div>
          <div className="jdr-box">2</div>
          <div className="jdr-box">3</div>
          <div className="jdr-box">4</div>
          <div className="jdr-box">5</div>
          <div className="jdr-box">6</div>
          <div className="jdr-box">7</div>
          <div className="jdr-box">8</div>
        </div>
      </section>

      <section className="jdr-section">
        <h2>row-gap</h2>
        <div className="jdr-container jdr-container-row-gap">
          <div className="jdr-box">1</div>
          <div className="jdr-box">2</div>
          <div className="jdr-box">3</div>
          <div className="jdr-box">4</div>
          <div className="jdr-box">5</div>
        </div>
      </section>

      <section className="jdr-section">
        <h2>column-gap</h2>
        <div className="jdr-container jdr-container-column-gap">
          <div className="jdr-box">1</div>
          <div className="jdr-box">2</div>
          <div className="jdr-box">3</div>
          <div className="jdr-box">4</div>
          <div className="jdr-box">5</div>
        </div>
      </section>

      <section className="jdr-section">
        <h2>order</h2>
        <div className="jdr-container jdr-container-order">
          <div className="jdr-box jdr-order-1">1</div>
          <div className="jdr-box jdr-order-2">2</div>
          <div className="jdr-box jdr-order-3">3</div>
          <div className="jdr-box">4</div>
          <div className="jdr-box">5</div>
        </div>
      </section>

      <section className="jdr-section">
        <h2>flex-grow</h2>
        <div className="jdr-container jdr-container-flex-grow">
          <div className="jdr-box jdr-grow-1">1</div>
          <div className="jdr-box jdr-grow-2">2</div>
          <div className="jdr-box">3</div>
        </div>
      </section>

      <section className="jdr-section">
        <h2>flex-shrink</h2>
        <div className="jdr-container jdr-container-flex-shrink">
          <div className="jdr-box jdr-shrink-1">1</div>
          <div className="jdr-box">2</div>
          <div className="jdr-box">3</div>
        </div>
      </section>

      <section className="jdr-section">
        <h2>flex-basis</h2>
        <div className="jdr-container jdr-container-flex-basis">
          <div className="jdr-box jdr-basis-1">1</div>
          <div className="jdr-box jdr-basis-2">2</div>
          <div className="jdr-box jdr-basis-3">3</div>
        </div>
      </section>

      <section className="jdr-section">
        <h2>flex</h2>
        <div className="jdr-container jdr-container-flex">
          <div className="jdr-box jdr-flex-1">1</div>
          <div className="jdr-box jdr-flex-2">2</div>
          <div className="jdr-box jdr-flex-0">3</div>
        </div>
      </section>

      <section className="jdr-section">
        <h2>align-self</h2>
        <div className="jdr-container jdr-container-align-self">
          <div className="jdr-box">1</div>
          <div className="jdr-box jdr-box100">2</div>
          <div className="jdr-box">3</div>
          <div className="jdr-box">4</div>
        </div>
      </section>
    </div>
  )
}

export default EjemploJdr
