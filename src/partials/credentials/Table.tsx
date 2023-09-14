import CrednetialTableItem from './TableItem'
import { ICommonProps, ICredential } from '../../types'

interface IProps extends ICommonProps {
  credentials: ICredential[],
}

const CredentialsTable = (props: IProps) => {
  const { credentials } = props

  return (
    <div className='bg-white shadow-lg rounded-sm border border-main relative'>
      <header className='px-5 py-4'>
        <h2 className=' font-poppins-500 text-header text-base'>{`Counter : `} <span className='font-poppins-500 text-header text-base'>{credentials?.length || 0}</span></h2>
      </header>
      <div>
        {/* Table */}
        <div className='overflow-x-auto'>
          <table className='table-auto w-full'>
            {/* Table header */}
            <thead className='text-xs font-poppins-500 text-header uppercase bg-hover border-t border-b border-main'>
              <tr>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <div className='font-semibold text-left'></div>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Owner Name</div>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Root Hash</div>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <div className='font-semibold text-left'>Attested</div>
                </th>
                <th className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                  <div className='font-semibold text-left'>CType</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className='w-full text-sm divide-y divide-main bg-main'>
              {
                credentials.length > 0 ?
                  credentials.map((credential: ICredential, index: number) => {
                    return (
                      <CrednetialTableItem
                        key={index}
                        index={index}
                        credential={credential}
                      />
                    )
                  }) : <tr>
                    <td className='px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap'>
                      <div className='text-left'>No results</div>
                    </td>
                  </tr>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CredentialsTable
