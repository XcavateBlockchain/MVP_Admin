import { ReactNode, useState } from 'react'

import Header from '../partials/Header'
import Sidebar from '../partials/Sidebar'
import { ICommonProps } from '../types'

interface IProps extends ICommonProps {
  children: ReactNode,
  title: string,
}

const Layout = (props: IProps) => {
  const { children, title } = props
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  return (
    <div className='flex h-screen overflow-hidden'>

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */} 
      <div className='relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden'>

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>

            {/* Page header */}
            <div className='mb-8'>
              {/* Title */}
              <h1 className=' font-poppins-700 text-xl md:text-2xl text-header'>{title}</h1>
            </div>

            {/* Content */} 
            <div className='bg-white rounded-sm mb-8'>
              <div className='flex flex-col md:flex-row md:-mr-px'>
                {children}
              </div>
            </div>

          </div>
        </main>

      </div>
      
    </div>
  )
}

export default Layout
