import React from 'react'
import '../styles/EjemploJdr.css'

function EjemploJdr() {
  return (
    <div className="jdr-page">
      <section className="jdr-section">
        <h1>align-items</h1>
        <div className="jdr-row">
          <div className="jdr-card jdr-card--sin">
            <h2>Sin flexbox</h2>
            <div className="jdr-container jdr-container--sin">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox: flex-start</h2>
            <div className="jdr-container jdr-container--con jdr-container-align-items-start">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox: flex-end</h2>
            <div className="jdr-container jdr-container--con jdr-container-align-items-end">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jdr-section">
        <h1>align-content</h1>
        <div className="jdr-row">
          <div className="jdr-card jdr-card--sin">
            <h2>Sin flexbox</h2>
            <div className="jdr-container jdr-container--sin">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
              <div className="jdr-box">6</div>
              <div className="jdr-box">7</div>
              <div className="jdr-box">8</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox: center</h2>
            <div className="jdr-container jdr-container--con jdr-container-align-content-center">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
              <div className="jdr-box">6</div>
              <div className="jdr-box">7</div>
              <div className="jdr-box">8</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox: space-between</h2>
            <div className="jdr-container jdr-container--con jdr-container-align-content-between">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
              <div className="jdr-box">6</div>
              <div className="jdr-box">7</div>
              <div className="jdr-box">8</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jdr-section">
        <h1>row-gap</h1>
        <div className="jdr-row">
          <div className="jdr-card jdr-card--sin">
            <h2>Sin flexbox</h2>
            <div className="jdr-container jdr-container--sin">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox: row-gap 0</h2>
            <div className="jdr-container jdr-container--con jdr-container-row-gap-0">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox: row-gap 40px</h2>
            <div className="jdr-container jdr-container--con jdr-container-row-gap-40">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jdr-section">
        <h1>column-gap</h1>
        <div className="jdr-row">
          <div className="jdr-card jdr-card--sin">
            <h2>Sin flexbox</h2>
            <div className="jdr-container jdr-container--sin">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox: column-gap 0</h2>
            <div className="jdr-container jdr-container--con jdr-container-column-gap-0">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox: column-gap 20px</h2>
            <div className="jdr-container jdr-container--con jdr-container-column-gap-20">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jdr-section">
        <h1>order</h1>
        <div className="jdr-row">
          <div className="jdr-card jdr-card--sin">
            <h2>Sin flexbox (orden del HTML)</h2>
            <div className="jdr-container jdr-container--sin">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox (order)</h2>
            <div className="jdr-container jdr-container--con jdr-container-order">
              <div className="jdr-box jdr-order-1">1</div>
              <div className="jdr-box jdr-order-2">2</div>
              <div className="jdr-box jdr-order-3">3</div>
              <div className="jdr-box">4</div>
              <div className="jdr-box">5</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jdr-section">
        <h1>flex-grow</h1>
        <div className="jdr-row">
          <div className="jdr-card jdr-card--sin">
            <h2>Sin flexbox</h2>
            <div className="jdr-container jdr-container--sin">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox (grow)</h2>
            <div className="jdr-container jdr-container--con jdr-container-flex-grow">
              <div className="jdr-box jdr-grow-1">1</div>
              <div className="jdr-box jdr-grow-2">2</div>
              <div className="jdr-box">3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jdr-section">
        <h1>flex-shrink</h1>
        <div className="jdr-row">
          <div className="jdr-card jdr-card--sin">
            <h2>Sin flexbox</h2>
            <div className="jdr-container jdr-container--sin">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox (shrink)</h2>
            <div className="jdr-container jdr-container--con jdr-container-flex-shrink">
              <div className="jdr-box jdr-shrink-1">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jdr-section">
        <h1>flex-basis</h1>
        <div className="jdr-row">
          <div className="jdr-card jdr-card--sin">
            <h2>Sin flexbox</h2>
            <div className="jdr-container jdr-container--sin">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox (basis)</h2>
            <div className="jdr-container jdr-container--con jdr-container-flex-basis">
              <div className="jdr-box jdr-basis-1">1</div>
              <div className="jdr-box jdr-basis-2">2</div>
              <div className="jdr-box jdr-basis-3">3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jdr-section">
        <h1>flex</h1>
        <div className="jdr-row">
          <div className="jdr-card jdr-card--sin">
            <h2>Sin flexbox</h2>
            <div className="jdr-container jdr-container--sin">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox (flex shorthand)</h2>
            <div className="jdr-container jdr-container--con jdr-container-flex">
              <div className="jdr-box jdr-flex-1">1</div>
              <div className="jdr-box jdr-flex-2">2</div>
              <div className="jdr-box jdr-flex-0">3</div>
            </div>
          </div>
        </div>
      </section>

      <section className="jdr-section">
        <h1>align-self</h1>
        <div className="jdr-row">
          <div className="jdr-card jdr-card--sin">
            <h2>Sin flexbox</h2>
            <div className="jdr-container jdr-container--sin">
              <div className="jdr-box">1</div>
              <div className="jdr-box">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
            </div>
          </div>
          <div className="jdr-card jdr-card--con">
            <h2>Con flexbox (align-self)</h2>
            <div className="jdr-container jdr-container--con jdr-container-align-self">
              <div className="jdr-box">1</div>
              <div className="jdr-box jdr-box100">2</div>
              <div className="jdr-box">3</div>
              <div className="jdr-box">4</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EjemploJdr
