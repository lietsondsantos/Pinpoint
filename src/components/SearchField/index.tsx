import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { Warning, Wrapper } from './styles'

const schemaValidation = z.object({
  search: z
    .string()
    .regex(
      /^([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/,
      'Invalid IP address',
    ),
})

type schemaType = z.infer<typeof schemaValidation>

const SearchField = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaType>({ resolver: zodResolver(schemaValidation) })

  const handleSearchAnIP = (data: schemaType) => {
    console.log(data)
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(handleSearchAnIP)}>
        <input
          type='text'
          id='search'
          placeholder='0.0.0.0'
          className='searchField'
          {...register('search')}
        />

        <button type='submit' className='btn' title='Search'>
          <MagnifyingGlass size={32} className='btn__icon' />
        </button>
      </form>

      {errors.search != null && (
        <Warning>
          <p className='warning__text'>{errors.search?.message}</p>
        </Warning>
      )}
    </Wrapper>
  )
}

export default SearchField
