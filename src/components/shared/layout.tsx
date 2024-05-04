import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const Layout = () => {
  return (
    <div>
      <Header />
      <main className='mt-[50px]'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
