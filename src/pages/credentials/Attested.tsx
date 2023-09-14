import { useState, useEffect } from 'react'
import Layout from '../Layout'
import { getCredentialsAttested } from '../../api/credential'
import CredentialsTable from '../../partials/credentials/Table'
import { ICredential, IResponse } from '../../types'

interface ICredentialsResponse extends IResponse {
  data: {
    data: ICredential[]
  }
}

const Attested = () => {
  const [credentials, setCredentials] = useState<Array<ICredential>>([])

  const getCredentials = async () => {
    const data: ICredentialsResponse = await getCredentialsAttested()
    if (data?.status === 200 && data?.data?.data) {
      setCredentials(data?.data?.data)
    }
  }
  
  useEffect(() => {
    getCredentials()
      .catch(console.error)
  }, [])

  return (
    <Layout title='Attested Credentials'>
      <div className='p-4'>
        {credentials.length > 0 && <CredentialsTable credentials={credentials} />}
      </div>
    </Layout>
  )
}

export default Attested
