export interface ICommonProps {
  className?: string
}

export interface IDeveloperCredential {
  _id: string
  userId: {
    fullName: string
  }
  rootHash: string
  attested: string
  cTypeTitle: string
  contents: {
    claim: {
      contents: IDeveloperContents
    }
  }
  revoked: boolean
}

export interface ICompanyCredential {
  _id: string
  userId: {
    fullName: string
  }
  rootHash: string
  attested: string
  cTypeTitle: string
  contents: {
    claim: {
      contents: ICompanyContents
    }
  }
  revoked: boolean
}

export interface IDeveloperContents {
  fullName: string
  phoneNumber: string
  email: string
  address: string
  profession: string
  idDoc1: string
  idDoc2: string
}

export interface ICompanyContents {
  name: string,
  registrationNumber: string,
  email: string,
  phoneNumber: string,
  address: string,
  associationWebsite: string,
  associationMembershipNumber: string,
  idDoc1: string,
  idDoc2: string,
}

export interface IResponse {
  status: number
}