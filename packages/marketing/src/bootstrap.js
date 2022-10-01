import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const marketingMount = ele => {
    ReactDOM.render(<App />, ele)
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')
    if (devRoot) marketingMount(devRoot)
}

export { marketingMount }
