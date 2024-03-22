import { useState } from 'react'

import { MagnifyingGlass } from '@phosphor-icons/react'

import { Wrapper } from './styles'

const SearchField = () => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSearchAnIP = () => {
    console.log(inputValue)
  }

  return (
    <Wrapper>
      <input
        className='searchField'
        type='text'
        name='search'
        id='search'
        placeholder='0.0.0.0'
        value={inputValue}
        onChange={e => setInputValue(String(e.target.value))}
      />

      <button
        type='button'
        className='btn'
        title='Search'
        onClick={() => handleSearchAnIP()}
      >
        <MagnifyingGlass size={32} className='btn__icon' />
      </button>
    </Wrapper>
  )
}

export default SearchField
