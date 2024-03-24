import { Wrapper } from './styles'

type PropTypes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const InformationPanel = ({ data }: PropTypes) => {
  return (
    <Wrapper>
      <ul className='list'>
        <li className='list__item'>
          <p className='item__text'>
            IPv4:&nbsp;
            <span>{data.ip}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            City:&nbsp;
            <span>{data.city}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            State:&nbsp;
            <span>{data.region}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Country:&nbsp;
            <span>{`${data.country_name} ${data.emoji_flag}`}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Continent:&nbsp;
            <span>{data.continent_name}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Latitude:&nbsp;
            <span>{data.latitude.toFixed(6)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Longitude:&nbsp;
            <span>{data.longitude.toFixed(6)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Language:&nbsp;
            <span>
              {`${data.languages[0].name}
                (${String(data.languages[0].code).toUpperCase()})`}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Currency:&nbsp;
            <span>{`${data.currency.name} (${data.currency.code})`}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            DDD:&nbsp;
            <span>+{data.calling_code}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            ASN:&nbsp;
            <span>{data.asn.name}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            ASN Domain:&nbsp;
            <span>{data.asn.domain}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Proxy:&nbsp;
            <span>{data.threat.is_tor}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Tor:&nbsp;
            <span>{data.threat.is_proxy}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Data center:&nbsp;
            <span>{data.threat.is_datacenter}</span>
          </p>
        </li>
      </ul>
    </Wrapper>
  )
}

export default InformationPanel
