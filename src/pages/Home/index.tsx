import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

import {
  Header,
  InformationPanel,
  Loading,
  Map,
  SearchField,
  Window,
} from '@/components'
import { api } from '@/services'
import { Container, Wrapper } from './styles'

const Home = () => {
  const [ipAddress, setIpAddress] = useState('0.0.0.0')

  const { data, isError, isLoading } = useQuery({
    queryKey: ['ipData', ipAddress],
    queryFn: async () => await api.checkTheEndPoint(ipAddress),
  })

  if (isError) console.log('Houve algum erro: ', isError)

  if (data === undefined || isLoading) {
    return <Loading />
  }

  return (
    <Wrapper>
      <Header />

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

export default Home
