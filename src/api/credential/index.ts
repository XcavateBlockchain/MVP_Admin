import client from '../client'

export const getAllCredentials = () => {
  return client.get(`/credential`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  )
}