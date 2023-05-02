import CartWidget from "../CartWidget/CartWidget"
const NavBar = () => 
{
    return (
        <nav>
            <h2>Ecommerce</h2>
            <div>
                <button>Pan</button>
                <button>Mermelada</button>
                <button>Facturas</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar