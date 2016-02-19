import React, { Component } from 'react'

import Board from './Board.jsx'

class App extends Component {

  render () {
    // Add the header
    return <div className='app'>
      <header>
        <h1>
          <span className='tic'>Tic</span>
          <span className='tac'>Tac</span>
          <span className='toe'>Toe</span>
        </h1>
      </header>
      <Board/>
    </div>
  }
}

export default App
