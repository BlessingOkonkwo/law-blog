import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const Layout = () => {
  return (
    <div className='bg-[#f2f2f2]'>
      <Header />
      <main className='mt-[50px] pb-[70px] h-full bg-[#f2f2f2] px-16 py-6'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
