import { Outlet } from 'react-router-dom'
import Header from './header'

const Layout = () => {
  return (
    <div className='bg-[#f2f2f2] h-full px-16 py-8'>
      <Header />
      <main className='mt-[50px] pb-[70px] h-full mx-auto max-w-[1128px]'>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
