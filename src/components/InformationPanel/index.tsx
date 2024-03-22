import { Wrapper } from './styles'

const InformationPanel = () => {
  return (
    <Wrapper>
      <ul className='list'>
        <li className='list__item'>
          <p className='item__text'>
            IPv4:&nbsp;
            <span>{'196.249.224.166'}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Continent:&nbsp;
            <span>{'Africa'}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Country:&nbsp;
            <span>{'Angola'}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Regian:&nbsp;
            <span>{'Luanda'}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            City:&nbsp;
            <span>{'Luanda'}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            DDD:&nbsp;
            <span>+{'244'}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Latitude:&nbsp;
            <span>{'-8.838500022888184'}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Longitude:&nbsp;
            <span>{'13.235300064086914'}</span>
          </p>
        </li>
      </ul>
    </Wrapper>
  )
}

export default InformationPanel
