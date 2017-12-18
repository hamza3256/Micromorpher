import React from 'react'
//import { HashRouter, Route, Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Web3Handler from '../utils/web3Handler'
import ContractHandler from '../utils/contractHandler'
import {AppStrings} from '../utils/outputStrings'
import Home from './home'
import About from './about'
import Overview from './overview'
import Help from './help'
import Admin from './admin'
import Exchange from './exchange'

import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';

// import { ThemeProvider } from 'react-css-themr';
import {rTComponents, rTLayout} from '../components/theme'

class App extends React.Component {

  constructor (props) {
    super(props)

    this.web3Handler = new Web3Handler()
    this.contractHandler = new ContractHandler(this.web3Handler)
  }

  render () {
    return (
        <div className={rTLayout.app}>
          <AppBar title={AppStrings.heading}>
            <Navigation type='horizontal'>
            <Link className={rTComponents.linkPrimary} href="#/">{AppStrings.home}</Link>
            <Link className={rTComponents.linkPrimary} href="#/admin">{AppStrings.admin}</Link>
            <Link className={rTComponents.linkPrimary} href="#/exchange">{AppStrings.exchange}</Link>
            <Link className={rTComponents.linkPrimary} href="#/about">{AppStrings.about}</Link>
            <Link className={rTComponents.linkPrimary} href="#/overview">{AppStrings.overview}</Link>
            <Link className={rTComponents.linkPrimary} href="#/help">{AppStrings.help}</Link>
            </Navigation>
          </AppBar>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/overview" component={Overview} />
          <Route path="/help" component={Help} />
          <Route path="/admin" render={() => <Admin contracts={this.contractHandler} web3={this.web3Handler} />} />
          <Route path="/exchange" render={() => <Exchange contracts={this.contractHandler} web3={this.web3Handler} />} />
        </div>
    )
  }
}

export default App
