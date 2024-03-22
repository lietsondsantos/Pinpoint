import { InformationPanel, Map, Window, SearchField } from '@/components'
import { Container, Wrapper } from '@/styles/pages/Home'

const App = () => {
  return (
    <Wrapper>
      <div className='top'>
        <h1 className='top__title'>Pinpoint</h1>

        <h2 className='top__description'>
          Online tool that allows you to track and identify the origin of an IP
          address.
        </h2>
      </div>

      <Container>
        <div>
          <Window title='IP_Information'>
            <InformationPanel />
          </Window>

          <SearchField />
        </div>

        <Window title='Map'>
          <Map lat={-8.838333} lng={13.234444} ip={'0.0.0.0'} />
        </Window>
      </Container>
    </Wrapper>
  )
}

export default App
