import client from '../client'

export const getCredentialsToAttest = () => {
  return client.get(`/credentials/to-attest`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

export const getCredentialsAttested = () => {
  return client.get(`/credentials/attested`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

export const attestCredential = (credentialId: any) => {
  return client.post(`/credentials/${credentialId}/attest`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}

export const getCredentialById = (credentialId: any) => {
  return client.get(`/credentials/${credentialId}/credential`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}