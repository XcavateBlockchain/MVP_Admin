import { ReactNode, useState } from 'react'
import { ICommonProps } from '../types'

interface IProps extends ICommonProps {
  children: (handleClick: () => void, open: boolean) => ReactNode,
  activecondition: boolean,
}

const SidebarLinkGroup = (props: IProps) => {
  const { children, activecondition } = props
  const [open, setOpen] = useState<boolean>(activecondition)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <li className={`px-3 py-3 rounded-lg mb-0.5 last:mb-0 ${activecondition? 'bg-hover' : ''}`}>
      {children(handleClick, open)}
    </li>
  )
}

export default SidebarLinkGroup
