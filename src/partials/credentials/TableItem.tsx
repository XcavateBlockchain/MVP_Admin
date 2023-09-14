import { useNavigate } from 'react-router-dom'
import { ICommonProps, ICredential } from '../../types'

interface IProps extends ICommonProps {
  index: number
  credential: ICredential
}

const CrednetialTableItem = (props: IProps) => {
  const navigate = useNavigate()
  const { index, credential } = props

  return (
    <tr className='cursor-pointer font-poppins-400 text-light text-xs' onClick={() => navigate(`/credentials/credential`, { state: { _id: credential?._id || '' } })}>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <div className='text-left'>{index + 1}</div>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <div className='text-left'>{credential?.userId?.fullName || ''}</div>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <div className='text-left'>{credential?.rootHash || ''}</div>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <div className='text-center'>{credential?.attested || '---'}</div>
      </td>
      <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
        <div className='text-center'>{credential?.cTypeTitle || '---'}</div>
      </td>
    </tr>
  )
}

export default CrednetialTableItem
