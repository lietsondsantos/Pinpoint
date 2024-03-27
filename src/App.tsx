import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ThemeProvider } from 'styled-components'

import { useTheme } from '@/contexts'
import Home from '@/pages/Home'
import GlobalStyle from '@/styles/GlobalStyle'
import { DarkTheme, LightTheme } from '@/styles/theme'

import 'leaflet/dist/leaflet.css'

const queryClient = new QueryClient()

function App() {
  const theme = useTheme(state => state.theme)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <Home />
        <GlobalStyle />
        <SpeedInsights />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
