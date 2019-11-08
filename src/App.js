import React from 'react'
import styled from 'styled-components'
// import { Tween, Timeline } from 'react-gsap'
// import { Controller, Scene } from 'react-scrollmagic'

const Wrapper = styled.div`
  position: relative;
  height: 80vh;
  width: auto;
  margin: 40px 16px 0;
  padding: 10px;
  overflow: hidden;
  background-color: silver;
`

function App() {
  return (
    <div className="App">
      <Wrapper>
        Hell Ye
      </Wrapper>
    </div>
  )
}

export default App
