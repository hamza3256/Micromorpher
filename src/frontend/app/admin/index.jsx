import React from 'react'
import ReactDOM from 'react-dom'

import App from './containers/app'

import styles from './index.css'

ReactDOM.render(
  <div className={styles.app}>
    <App />
  </div>,
  document.getElementById('root')
)
