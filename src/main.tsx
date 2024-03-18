import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from '@/App'
import GlobalStyle from '@/styles/GlobalStyle'
import { LightTheme } from '@/styles/theme'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={LightTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
