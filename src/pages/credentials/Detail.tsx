import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import { attestCredential, getCredentialById, revokeCredential } from '../../api/credential'
import Layout from '../Layout'
import DeveloperCredential from '../../partials/credentials/DeveloperCredential'
import { LoadingSvgIcon } from '../../assets/svgs'
import { ICredential, IResponse } from '../../types'

interface ILocation {
  state: {
    _id: string
  }
}

interface ICredentialResponse extends IResponse {
  data: {
    data: ICredential
    error: string
  }
}

const CredentialDetail = () => {
  const location = useLocation()
  const [credential, setCredential] = useState<ICredential>()
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const { state } = location as ILocation
    if (state?._id) {
      const _id = state?._id

      const getData = async () => {
        const getResult: ICredentialResponse = await getCredentialById(_id)

        if (getResult.status === 200 && getResult?.data?.data) {
          setCredential(getResult.data.data)
        } else {
          toast.error(getResult?.data?.error || 'Unexpected error occurrs')
        }
      }

      getData()
        .catch(console.error)
    }
  }, [location])

  function handleErrors<A extends []>(p: (...args: A) => Promise<void>): (...args: A) => void {
    return (...args: A) => {
      try {
        p(...args).catch(err => console.log("Error thrown asynchronously", err))
      } catch (err) {
        console.log("Error thrown synchronously", err)
      }
    }
  }

  const attest = handleErrors(async (): Promise<void> => {
    if (credential?._id) {
      setLoading(true)
      const attestResult = await attestCredential(credential?._id)
      if (attestResult?.status === 200) {
        setLoading(false)
        toast.success('Attested successfully')
      }
    } else {
      setLoading(false)
      toast.warning('Failed')
    }
  })

  const revoke = handleErrors(async (): Promise<void> => {
    if (credential?._id) {
      setLoading(true)
      const revokeResult = await revokeCredential(credential?._id)
      if (revokeResult?.status === 200) {
        setLoading(false)
        toast.success('Revoked successfully')
      }
    } else {
      setLoading(false)
      toast.warning('Failed')
    }
  })

  return (
    <Layout title={`Credential detail`}>
      <div className='flex flex-col'>
        {credential?.cTypeTitle === 'developerCredential' && credential?.contents?.claim?.contents && <DeveloperCredential contents={credential?.contents?.claim?.contents} />}
        {!credential?.attested && !credential?.revoked && <button onClick={attest} className='flex flex-row justify-center items-center w-[360px] h-12 bg-button opacity-[0.5] mt-10 rounded-lg shadow-sm'>
          {loading? <LoadingSvgIcon /> : <h4 className=' font-poppins-400 text-lg text-[#EDFAFA] uppercase'>
            {!credential?.attested && !credential?.revoked && `Attest`}
          </h4>}
        </button>}
        {credential?.attested && !credential?.revoked && <button onClick={revoke} className='flex flex-row justify-center items-center w-[360px] h-12 bg-button opacity-[0.5] mt-10 rounded-lg shadow-sm'>
          {loading? <LoadingSvgIcon /> : <h4 className=' font-poppins-400 text-lg text-[#EDFAFA] uppercase'>
            {credential?.attested && !credential?.revoked && `Revoke`}
          </h4>}
        </button>}
      </div>
    </Layout>
  )
}

export default CredentialDetail
