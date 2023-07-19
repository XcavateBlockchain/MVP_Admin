import { useState, useEffect } from 'react'
import Layout from '../Layout'
import { getCredentialsAttested } from '../../api/credential'
import CredentialsTable from '../../partials/credentials/Table'

const Attested = () => {
  const [credentials, setCredentials] = useState([])

  const getCredentials = async () => {
    const data = await getCredentialsAttested()
    if (data?.status === 200 && data?.data?.data) {
      setCredentials(data?.data?.data)
    }
  }
  
  useEffect(() => {
    getCredentials()
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
