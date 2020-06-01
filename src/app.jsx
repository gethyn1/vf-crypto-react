import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { theme } from './theme'
import { store } from './store'
import { Pages } from './pages'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    color: ${({ theme }) => theme.colors.trout};
    font-family: ${({ theme }) => theme.fonts.body};
    margin: 0;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/" exact component={Pages.Home} />
          <Route path="/assets/:assetId" exact component={Pages.Asset} />
        </Switch>
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
)
