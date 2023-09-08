import React, { useRef, useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ICommonProps } from '../types'
import SidebarLinkGroup from './SidebarLinkGroup'
import { FingerPrintSvgIcon, LogoSvgIcon } from '../assets/svgs'

interface IProps extends ICommonProps {
  sidebarOpen: boolean,
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = (props: IProps) => {
  const location = useLocation()
  const { sidebarOpen, setSidebarOpen } = props
  const { pathname } = location

  const trigger = useRef<HTMLButtonElement>(null)
  const sidebar = useRef<HTMLDivElement>(null)

  const storedSidebarExpanded = window.localStorage.getItem('sidebar-expanded')
  const [sidebarExpanded, setSidebarExpanded] = useState<Boolean>(storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true')

  // close on click outside
  useEffect(() => {
    const clickHandler = (event: any) => {
      if (!sidebar.current || !trigger.current) return
      if (!sidebarOpen || sidebar.current.contains(event.target) || trigger.current.contains(event.target)) return
      setSidebarOpen(false)
    }

    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = (event: any) => {
      if (!sidebarOpen || event.keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString())
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded')
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded')
    }
  }, [sidebarExpanded])

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-main z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-main transition-all duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-64'
          }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-center h-[100px] pr-3 sm:px-2 border-b-2 border-main">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
          <NavLink end to="/" className="flex flex-row items-center">
            <LogoSvgIcon />
            <h3 className={` ${sidebarExpanded? 'flex' : 'hidden'} font-poppins-700 text-header text-2xl ml-2`}>
              {`WANOS`}
            </h3>
          </NavLink>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <ul className="px-5 py-6">
              {/* Credentials */}
              <SidebarLinkGroup activecondition={pathname.includes('credentials')}>
                {(handleClick: () => void, open: boolean) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-header hover:text-hover truncate transition duration-150 ${pathname.includes('credentials') && 'hover:text-hover'
                          }`}
                        onClick={(e) => {
                          e.preventDefault()
                          sidebarExpanded ? handleClick() : setSidebarExpanded(true)
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center h-[42px] rounded-lg">
                            <FingerPrintSvgIcon />
                            <span className="font-poppins-400 text-lg ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              {`Credentials`}
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-main ${open && 'rotate-180'}`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-9 mt-1 ${!open && 'hidden'}`}>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/credentials/to-attest"
                              className={({ isActive }) =>
                                'block text-light hover:text-dark transition duration-150 truncate ' + (isActive ? '!text-dark' : '')
                              }
                            >
                              <span className=" font-poppins-400 text-base lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                {`To attest`}
                              </span>
                            </NavLink>
                          </li>
                          <li className="mb-1 last:mb-0">
                            <NavLink
                              end
                              to="/credentials/attested"
                              className={({ isActive }) =>
                                'block text-light hover:text-dark transition duration-150 truncate ' + (isActive ? '!text-dark' : '')
                              }
                            >
                              <span className=" font-poppins-400 text-base lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                {`Attested`}
                              </span>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  )
                }}
              </SidebarLinkGroup>
            </ul>
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="px-3 py-2">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg className="w-6 h-6 fill-current sidebar-expanded:rotate-180" viewBox="0 0 24 24">
                <path className="text-light" d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z" />
                <path className="text-dark" d="M3 23H1V1h2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
