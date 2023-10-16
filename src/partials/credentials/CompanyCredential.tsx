import { ICommonProps, ICompanyContents } from '../../types'

interface IProps extends ICommonProps {
  contents: ICompanyContents
}

const CompanyCredential = (props: IProps) => {
  const { contents } = props
  
  return (
    <section className='flex flex-col'>
      <div className='flex flex-row items-center'>
        <label className=' font-poppins-500 text-light text-sm uppercase'>
          {`Company name: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.name || ''}
        </h5>
      </div>
      <div className='flex flex-row items-center mt-2'>
        <label className=' font-poppins-500 text-light text-sm uppercase'>
          {`ICompanyCredential: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.registrationNumber || ''}
        </h5>
      </div>
      <div className='flex flex-row items-center mt-2'>
        <label className=' font-poppins-500 text-light text-sm uppercase'>
          {`Company email: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.email || ''}
        </h5>
      </div>
      <div className='flex flex-row items-center mt-2'>
        <label className=' font-poppins-500 text-light text-sm uppercase'>
          {`Company phone number: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.phoneNumber || ''}
        </h5>
      </div>
      <div className='flex flex-row items-center mt-2'>
        <label className=' font-poppins-500 text-light text-sm uppercase'>
          {`Address: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.address || ''}
        </h5>
      </div>
      <div className='flex flex-row items-center mt-2'>
        <label className=' font-poppins-500 text-light text-sm uppercase'>
          {`Association website: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.associationWebsite || ''}
        </h5>
      </div>
      <div className='flex flex-row items-center mt-2'>
        <label className=' font-poppins-500 text-light text-sm uppercase'>
          {`Association membership number: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.associationMembershipNumber || ''}
        </h5>
      </div>
      <div className='flex flex-row justify-between w-full gap-4'>
        <div className='flex flex-row mt-2'>
          <label className=' font-poppins-500 text-light text-sm uppercase'>
            {`ID doc 1: `}
          </label>
          <img
            src={contents?.idDoc1 || ''}
            alt='idDoc1'
            className='w-[240px] h-[300px] object-cover ml-3'
          />
        </div>
        <div className='flex flex-row mt-2'>
          <label className=' font-poppins-500 text-light text-sm uppercase'>
            {`ID doc 2: `}
          </label>
          <img
            src={contents?.idDoc2 || ''}
            alt='idDoc1'
            className='w-[240px] h-[300px] object-cover ml-3'
          />
        </div>
      </div>
    </section>
  )
}

export default CompanyCredential
