import { CartIcon } from '../../components/cart-icon/cart-icon'
import './navigation.scss'

export function Navigation() {
  return (
    <>
      <div className="navigation">
        <div className='logo-container'>
          <h3>Coder Trips - O mundo ao seu alcance</h3>
        </div>
        <div className="nav-links-container">
          <a className="nav-link">Busca de Vôos</a>
          <a className="nav-link">Minhas Viagens</a>
          <CartIcon />
        </div>
      </div>
    </>
  )
}
