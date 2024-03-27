import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import { InformationPanel, Map, SearchField, Window } from '@/components'
import { api } from '@/services'
import { Container, Loading, Wrapper } from '@/styles/pages/Home'
import { useTheme } from '@/contexts'

const App = () => {
  const [ipAddress, setIpAddress] = useState('0.0.0.0')

  const setTheme = useTheme(state => state.setTheme)

  const { data, isError, isLoading } = useQuery({
    queryKey: ['ipData', ipAddress],
    queryFn: async () => await api.checkTheEndPoint(ipAddress),
  })

  if (isError) console.log('Houve algum erro: ', isError)

  if (data === undefined || isLoading) {
    return (
      <Loading>
        <div className='sk-cube-grid'>
          <div className='sk-cube sk-cube1' />
          <div className='sk-cube sk-cube2' />
          <div className='sk-cube sk-cube3' />
          <div className='sk-cube sk-cube4' />
          <div className='sk-cube sk-cube5' />
          <div className='sk-cube sk-cube6' />
          <div className='sk-cube sk-cube7' />
          <div className='sk-cube sk-cube8' />
          <div className='sk-cube sk-cube9' />
        </div>

        <p className='loading__text'>Loading...</p>
      </Loading>
    )
  }

  return (
    <Wrapper>
      <div className='top'>
        <div className='top__leftSide'>
          <h1 className='leftSide__title'>Pinpoint</h1>

          <h2 className='leftSide__description'>
            Online tool that allows you to track and identify the origin of an
            IP address.
          </h2>
        </div>

        <div className='top__rightSide'>
          <select
            name='theme'
            className='rightSide__select rightSide__select--theme'
            onChange={e => setTheme(e.target.value)}
          >
            <option value='light'>Light</option>
            <option value='dark'>Dark</option>
          </select>
        </div>
      </div>

      <Container>
        <div className='leftSide__wrapper'>
          <Window title='IP_Information'>
            <InformationPanel data={data} />
          </Window>

          <SearchField get={ipAddress} set={setIpAddress} />
        </div>

        <Window title='Map'>
          <Map
            lat={data.latitude.toFixed(6)}
            lng={data.longitude.toFixed(6)}
            ip={data.ip}
          />
        </Window>
      </Container>
    </Wrapper>
  )
}

export default App
