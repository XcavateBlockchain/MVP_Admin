import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useLocation } from 'react-router-dom'
import { attestCredential, getCredentialById } from '../../api/credential'
import Layout from '../Layout'
import DeveloperCredential from '../../partials/credentials/DeveloperCredential'

const CredentialDetail = () => {
  const location = useLocation()
  const [credentialId, setCredentialId] = useState<string>('')
  const [credential, setCredential] = useState<any>(null)

  useEffect(() => {
    if (location?.state?._id) {
      const _id = location?.state?._id
      setCredentialId(_id)

      const getData = async () => {
        const getResult = await getCredentialById(_id)

        if (getResult.status === 200 && getResult?.data?.data) {
          setCredential(getResult.data.data)
        } else {
          toast.error(getResult?.data?.error || 'Unexpected error occurrs')
        }
      }

      getData()
    }
  }, [location])

  const attest = async () => {
    if (credential?._id) {
      const attestResult = await attestCredential(credential?._id)
      console.log('attestResult :: ', attestResult)
      toast.success('Attested successfully')
    } else {
      toast.warning('Failed')
    }
  }

  return (
    <Layout title={`Credential detail`}>
      <div className='flex flex-col'>
        {credential?.cTypeTitle === 'developerCredential' && credential?.contents?.claim?.contents && <DeveloperCredential contents={credential?.contents?.claim?.contents} />}
        <button onClick={attest} className='flex flex-row justify-center items-center w-[360px] h-12 bg-button opacity-[0.5] mt-10 rounded-lg shadow-sm'>
          <h4 className=' font-poppins-400 text-lg text-[#EDFAFA] uppercase'>
            {`Attest`}
          </h4>
        </button>
      </div>
    </Layout>
  )
}

export default CredentialDetail
