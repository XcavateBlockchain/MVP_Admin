export interface ICommonProps {
  className?: string
}

export interface ICredential {
  _id: string
  userId: {
    fullName: string
  }
  rootHash: string
  attested: string
  cTypeTitle: string
  contents: {
    claim: {
      contents: IContents
    }
  }
  revoked: boolean
}

export interface IContents {
  fullName: string
  phoneNumber: string
  email: string
  address: string
  profession: string
  idDoc1: string
  idDoc2: string
}

export interface IResponse {
  status: number
}