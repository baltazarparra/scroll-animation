import React from 'react'
import styled from 'styled-components'
import { Tween, Timeline } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'

const Wrapper = styled.div`
  position: relative;
  margin: 40px 16px 0;
  padding: 10px;
  overflow: hidden;
  background-color: silver;
`

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Controller>
          <Scene triggerHook="onLeave" duration={3500} pin>
            <Timeline
              target={
                <div>Hell Yah</div>
              }
            >
              <Tween from={{ x: '100px', rotation: -360 }} />
              <Tween to={{ x: '50px', rotation: -90 }} />
              <Timeline
                target={
                  <div>Fuc ie</div>
                }
              >
                <Tween from={{ x: '200px', rotation: -60 }} />
                <Tween to={{ x: '70px', rotation: -40 }} />
                <Timeline
                  target={
                    <div>Holly Molly</div>
                  }
                >
                  <Tween from={{ x: '140px', rotation: -100 }} />
                  <Tween to={{ x: '20px', rotation: -140 }} />
                </Timeline>
              </Timeline>
            </Timeline>
          </Scene>
        </Controller>
      </Wrapper>
    </div>
  )
}

export default App
