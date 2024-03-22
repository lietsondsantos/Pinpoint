import * as L from 'leaflet'
import { useEffect } from 'react'

import { Wrapper } from './styles'

type PropTypes = {
  lat: number
  lng: number
  ip: string
}

const Map = ({ lat, lng, ip }: PropTypes) => {
  useEffect(() => {
    const map = L.map('map').setView([lat, lng], 13)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    L.marker([lat, lng])
      .addTo(map)
      .on('click', () => {
        map.setView([lat, lng], 13, { animate: true, duration: 1 })
      })
      .bindPopup(ip)
      .openPopup()

    return () => {
      map.remove()
    }
  }, [])

  return (
    <Wrapper>
      <div id='map' />
    </Wrapper>
  )
}

export default Map
