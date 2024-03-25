import { FormatResponseData } from '@/utils'
import { Wrapper } from './styles'

type PropTypes = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const InformationPanel = ({ data }: PropTypes) => {
  const currentTime = new Date(String(data.time_zone.current_time))

  return (
    <Wrapper>
      <ul className='list'>
        <li className='list__item'>
          <p className='item__text'>
            IPv4:&nbsp;
            <span>{FormatResponseData(data.ip)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            City:&nbsp;
            <span>{FormatResponseData(data.city)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            State:&nbsp;
            <span>{FormatResponseData(data.region)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Country:&nbsp;
            <span>
              {FormatResponseData(`${data.country_name} ${data.emoji_flag}`)}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Continent:&nbsp;
            <span>{FormatResponseData(data.continent_name)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Current Time:&nbsp;
            <span>{FormatResponseData(currentTime.toLocaleString())}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Latitude:&nbsp;
            <span>{FormatResponseData(data.latitude.toFixed(6))}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Longitude:&nbsp;
            <span>{FormatResponseData(data.longitude.toFixed(6))}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Language:&nbsp;
            <span>
              {FormatResponseData(`${data.languages[0].name}
                (${String(data.languages[0].code).toUpperCase()})`)}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Currency:&nbsp;
            <span>
              {FormatResponseData(`${data.currency.name}
                (${data.currency.code})`)}
            </span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            DDD:&nbsp;
            <span>+{FormatResponseData(data.calling_code)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            ASN:&nbsp;
            <span>{FormatResponseData(data.asn.name)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            ASN Domain:&nbsp;
            <span>{FormatResponseData(data.asn.domain)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Proxy:&nbsp;
            <span>{FormatResponseData(data.threat.is_tor)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Tor:&nbsp;
            <span>{FormatResponseData(data.threat.is_proxy)}</span>
          </p>
        </li>

        <li className='list__item'>
          <p className='item__text'>
            Data Center:&nbsp;
            <span>{FormatResponseData(data.threat.is_datacenter)}</span>
          </p>
        </li>
      </ul>
    </Wrapper>
  )
}

export default InformationPanel
