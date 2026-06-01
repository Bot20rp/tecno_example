import '../styles/Example2_sin.css'
import '../styles/Example2_con.css'

const Item = ({ children }) => <div className="item">{children}</div>

const Example_2 = () => {
    return (
        <div className='contenedor-principal'>
            <div className='seccion_principal'>
                <div className='seccion_sin'>
                    <h2>Contenedor sin flexbox</h2>
                    <div id='items'>
                        <div id='item1'>item 1</div>
                        <div id='item2'>item 2</div>
                        <div id='item3'>item 3</div>
                        <div id='item4'>item 4</div>
                        <div id='item5'>item 5</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>Contenedor con Flexbox</h2>
                    <div id='items_con'>
                        <div id='item_con'>item 1</div>
                        <div id='item_con'>item 2</div>
                        <div id='item_con'>item 3</div>
                        <div id='item_con'>item 4</div>
                        <div id='item_con'>item 5</div>
                    </div>
                </div>
            </div>
            {/* Tota la explicacion para usar espacios entre contenedores*/}
            <h1>Gap</h1>
            <div className='direcciones'>
                <div className='seccion_sin'>
                    <h2>Contenedor sin flexbox</h2>
                    <div id='itemsg'>
                        <div id='itemg1'>item 1</div>
                        <div id='itemg2'>item 2</div>
                        <div id='itemg3'>item 3</div>
                        <div id='itemg4'>item 4</div>
                        <div id='itemg5'>item 5</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>Contenedor con Flexbox</h2>
                    <div id='itemsg_con'>
                        <div id='itemg_con'>item 1</div>
                        <div id='itemg_con'>item 2</div>
                        <div id='itemg_con'>item 3</div>
                        <div id='itemg_con'>item 4</div>
                        <div id='itemg_con'>item 5</div>
                    </div>
                </div>
            </div>
            {/* Tota la explicacion para el manejo de direccion de los componentes*/}
            <h1>Flex-Direcction</h1>
            <div className='direcciones'>
                <div className='seccion_con'>
                    <h2>flex-direction: row</h2>
                    <div id='itemsr_con'>
                        <div id='itemr_con'>item 1</div>
                        <div id='itemr_con'>item 2</div>
                        <div id='itemr_con'>item 3</div>
                        <div id='itemr_con'>item 4</div>
                        <div id='itemr_con'>item 5</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>flex-direction: column</h2>
                    <div id='itemsc_con'>
                        <div id='itemc_con'>item 1</div>
                        <div id='itemc_con'>item 2</div>
                        <div id='itemc_con'>item 3</div>
                        <div id='itemc_con'>item 4</div>
                        <div id='itemc_con'>item 5</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>flex-direction: row-reverse</h2>
                    <div id='itemsrr_con'>
                        <div id='itemrr_con'>item 1</div>
                        <div id='itemrr_con'>item 2</div>
                        <div id='itemrr_con'>item 3</div>
                        <div id='itemrr_con'>item 4</div>
                        <div id='itemrr_con'>item 5</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>flex-direction: column-reverse</h2>
                    <div id='itemscc_con'>
                        <div id='itemcc_con'>item 1</div>
                        <div id='itemcc_con'>item 2</div>
                        <div id='itemcc_con'>item 3</div>
                        <div id='itemcc_con'>item 4</div>
                        <div id='itemcc_con'>item 5</div>
                    </div>
                </div>
            </div>
            <h1>Flex-Wrap</h1>
            <div className='wrap'>
                <div id='wrap_sin'>
                    <div id='itemws_sin'>item 1</div>
                    <div id='itemws_sin'>item 2</div>
                    <div id='itemws_sin'>item 3</div>
                    <div id='itemws_sin'>item 4</div>
                    <div id='itemws_sin'>item 5</div>
                </div>
                <div id='wrap_con'>
                    <div id='itemwc_con'>item 1</div>
                    <div id='itemwc_con'>item 2</div>
                    <div id='itemwc_con'>item 3</div>
                    <div id='itemwc_con'>item 4</div>
                    <div id='itemwc_con'>item 5</div>
                </div>
            </div>
            <h1>Flex-flow</h1>
            <div id='flow'>
                <div id='itemf'>item 1</div>
                <div id='itemf'>item 2</div>
                <div id='itemf'>item 3</div>
                <div id='itemf'>item 4</div>
                <div id='itemf'>item 5</div>
            </div>
            <h1>Justify-Content</h1>
            <div className='direcciones direcciones_justify'>
                <div className='seccion_con'>
                    <h2>justify-content: flex-start</h2>
                    <div id='itemsjc_start'>
                        <div id='itemjc'>item 1</div>
                        <div id='itemjc'>item 2</div>
                        <div id='itemjc'>item 3</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>justify-content: flex-end</h2>
                    <div id='itemsjc_end'>
                        <div id='itemjc'>item 1</div>
                        <div id='itemjc'>item 2</div>
                        <div id='itemjc'>item 3</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>justify-content: center</h2>
                    <div id='itemsjc_center'>
                        <div id='itemjc'>item 1</div>
                        <div id='itemjc'>item 2</div>
                        <div id='itemjc'>item 3</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>justify-content: space-between</h2>
                    <div id='itemsjc_between'>
                        <div id='itemjc'>item 1</div>
                        <div id='itemjc'>item 2</div>
                        <div id='itemjc'>item 3</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>justify-content: space-around</h2>
                    <div id='itemsjc_around'>
                        <div id='itemjc'>item 1</div>
                        <div id='itemjc'>item 2</div>
                        <div id='itemjc'>item 3</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>justify-content: space-evenly</h2>
                    <div id='itemsjc_evenly'>
                        <div id='itemjc'>item 1</div>
                        <div id='itemjc'>item 2</div>
                        <div id='itemjc'>item 3</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Example_2;