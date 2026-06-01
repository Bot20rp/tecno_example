import '../styles/Example2_sin.css'
import '../styles/Example2_con.css'

const Item = ({children}) => <div className="item">{children}</div>

const Example_2 = () => {
    return (
        <div className='contenedor-principal'>
            <div className='seccion_principal'>
                <div className='seccion_sin'>
                    <h2>Contenedor sin flexbox</h2>
                    <div id = 'items'>
                        <div id='item1'>item 1</div>
                        <div id='item2'>item 2</div>
                        <div id='item3'>item 3</div>
                        <div id='item4'>item 4</div>
                        <div id='item5'>item 5</div>
                    </div>
                </div>
                <div className='seccion_con'>
                    <h2>Contenedor con Flexbox</h2>
                    <div id = 'items_con'>
                        <div id='item_con'>item 1</div>
                        <div id='item_con'>item 2</div>
                        <div id='item_con'>item 3</div>
                        <div id='item_con'>item 4</div>
                        <div id='item_con'>item 5</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Example_2;