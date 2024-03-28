import { Wrapper } from './styles'
import { useTheme } from '@/contexts'

const Header = () => {
  const setTheme = useTheme(state => state.setTheme)

  return (
    <Wrapper>
      <div className='leftSide'>
        <h1 className='leftSide__title'>Pinpoint</h1>

        <h2 className='leftSide__description'>
          Online tool that allows you to track and identify the origin of an IP
          address.
        </h2>
      </div>

      <div className='rightSide'>
        <select
          name='theme'
          className='rightSide__select rightSide__select--theme'
          onChange={e => setTheme(e.target.value)}
        >
          <option value='light'>Light</option>
          <option value='dark'>Dark</option>
        </select>
      </div>
    </Wrapper>
  )
}

export default Header
