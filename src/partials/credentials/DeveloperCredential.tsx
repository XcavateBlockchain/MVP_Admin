import { ICommonProps } from '../../types'

interface IProps extends ICommonProps {
  contents: any
}

const DeveloperCredential = (props: IProps) => {
  const { contents } = props
  
  return (
    <section className='flex flex-col'>
      <div className='flex flex-row items-center'>
        <label className=' font-poppins-500 text-light text-sm uppercase'>
          {`Full name: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.fullName || ''}
        </h5>
      </div>
      <div className='flex flex-row items-center mt-2'>
        <label className=' font-poppins-500 text-light text-sm uppercase'>
          {`Phone number: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.phoneNumber || ''}
        </h5>
      </div>
      <div className='flex flex-row items-center mt-2'>
        <label className=' font-poppins-500 text-light text-sm uppercase'>
          {`Email: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.email || ''}
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
          {`Profession: `}
        </label>
        <h5 className=' font-poppins-400 text-header text-sm ml-2'>
          {contents?.profession || ''}
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

export default DeveloperCredential
