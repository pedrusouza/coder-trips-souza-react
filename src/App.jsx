import './App.scss'
import { Auth } from './router/auth/auth'
import { Home } from './router/home/home'
import { Navigation } from './router/navigation/navigation'
import { Shop } from './router/shop/shop'
export function App() {
  return (
    <>
      <Navigation />
      <Home /> 
      <Auth />
      <Shop />
    </>
  )
}
