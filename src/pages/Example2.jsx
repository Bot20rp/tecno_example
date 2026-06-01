import '../styles/Example2.css'

const Item = ({children}) => <div className="item">{children}</div>

const Example_2 = () => {
    return (
        <div className='contenedor'>
            <div>

            </div>
        </div>
     /*   <div className="page">
            <h1>Flexbox: Sin vs Con</h1>

            <section className="section">
                <h2>display</h2>
                <div className="cases">
                    <div className="case">
                        <h3>Sin display:flex</h3>
                        <div className="container baseline">
                            <Item>1</Item>
                            <Item>2</Item>
                            <Item>3</Item>
                        </div>
                    </div>
                    <div className="case">
                        <h3>Con display:flex</h3>
                        <div className="container with-flex">
                            <Item>1</Item>
                            <Item>2</Item>
                            <Item>3</Item>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>flex-direction</h2>
                <div className="cases">
                    <div className="case">
                        <h3>Sin (row por defecto)</h3>
                        <div className="container with-flex">
                            <Item>A</Item>
                            <Item>B</Item>
                            <Item>C</Item>
                        </div>
                    </div>
                    <div className="case">
                        <h3>Con `flex-direction: column`</h3>
                        <div className="container dir-column">
                            <Item>A</Item>
                            <Item>B</Item>
                            <Item>C</Item>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>flex-wrap</h2>
                <p className="hint">Reduce el ancho de la ventana para ver la diferencia.</p>
                <div className="cases">
                    <div className="case">
                        <h3>Sin (nowrap por defecto)</h3>
                        <div className="container wrap-demo nowrap">
                            <Item>1</Item>
                            <Item>2</Item>
                            <Item>3</Item>
                            <Item>4</Item>
                            <Item>5</Item>
                        </div>
                    </div>
                    <div className="case">
                        <h3>Con `flex-wrap: wrap`</h3>
                        <div className="container wrap-demo with-wrap">
                            <Item>1</Item>
                            <Item>2</Item>
                            <Item>3</Item>
                            <Item>4</Item>
                            <Item>5</Item>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>flex-flow (direction + wrap)</h2>
                <div className="cases">
                    <div className="case">
                        <h3>Sin (separa dirección y wrap)</h3>
                        <div className="container with-flex">
                            <Item>X</Item>
                            <Item>Y</Item>
                            <Item>Z</Item>
                        </div>
                    </div>
                    <div className="case">
                        <h3>Con `flex-flow: column wrap`</h3>
                        <div className="container flow-demo">
                            <Item>X</Item>
                            <Item>Y</Item>
                            <Item>Z</Item>
                            <Item>W</Item>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>justify-content</h2>
                <div className="cases">
                    <div className="case">
                        <h3>Sin (flex-start)</h3>
                        <div className="container with-flex justify-baseline">
                            <Item>left</Item>
                            <Item>mid</Item>
                            <Item>right</Item>
                        </div>
                    </div>
                    <div className="case">
                        <h3>Con `justify-content: space-between`</h3>
                        <div className="container with-flex justify-space">
                            <Item>left</Item>
                            <Item>mid</Item>
                            <Item>right</Item>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2>gap</h2>
                <div className="cases">
                    <div className="case">
                        <h3>Sin gap</h3>
                        <div className="container with-flex no-gap">
                            <Item>1</Item>
                            <Item>2</Item>
                            <Item>3</Item>
                        </div>
                    </div>
                    <div className="case">
                        <h3>Con `gap: 12px`</h3>
                        <div className="container with-flex with-gap">
                            <Item>1</Item>
                            <Item>2</Item>
                            <Item>3</Item>
                        </div>
                    </div>
                </div>
            </section>

        </div>*/
    )
}

export default Example_2;