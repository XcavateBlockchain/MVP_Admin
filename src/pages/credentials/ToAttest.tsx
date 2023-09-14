import { useState, useEffect } from 'react'
import Layout from '../Layout'
import { getCredentialsToAttest } from '../../api/credential'
import CredentialsTable from '../../partials/credentials/Table'
import { ICredential, IResponse } from '../../types'

interface ICredentialResponse extends IResponse {
  data: {
    data: ICredential[]
  }
}

const ToAttest = () => {
  const [credentials, setCredentials] = useState<Array<ICredential>>([])

  const getCredentials = async () => {
    const data: ICredentialResponse = await getCredentialsToAttest()
    if (data?.status === 200 && data?.data?.data) {
      setCredentials(data?.data?.data)
    }
  }
  
  useEffect(() => {
    getCredentials()
      .catch(console.error)
  }, [])

  return (
    <Layout title='Credentials to be attested'>
      <div className='p-4'>
        {credentials.length > 0 && <CredentialsTable credentials={credentials} />}
      </div>
    </Layout>
  )
}

export default ToAttest
