import React, { useState, useEffect } from 'react'
import { ICommonProps } from '../../types'
import Layout from '../Layout'
import { getCredentialsToAttest } from '../../api/credential'
import CredentialsTable from '../../partials/credentials/Table'

interface IProps extends ICommonProps {

}

const ToAttest = (props: IProps) => {
  const [credentials, setCredentials] = useState([])

  const getCredentials = async () => {
    const data = await getCredentialsToAttest()
    if (data?.status === 200 && data?.data?.data) {
      setCredentials(data?.data?.data)
    }
  }
  
  useEffect(() => {
    getCredentials()
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
