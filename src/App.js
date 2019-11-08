import React from 'react'
import styled from 'styled-components'
import { Tween, Timeline } from 'react-gsap'
import { Controller, Scene } from 'react-scrollmagic'

const Wrapper = styled.div`
  position: relative;
  background-color: #222;
  background-image: url(https://pngriver.com/wp-content/uploads/2018/04/Download-Raven-PNG.png);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: top;

  font-family: monospace;
  font-size: 1.6em;
  overflow: hidden;
`

function App() {
  return (
    <Wrapper>
      <Controller>
        <Scene duration={3200} pin>
          <Timeline
            target={
              <div
                style={{
                  background: '#f00'
                }}
              >
                Quoth the
              </div>
            }
          >
            <Tween duration={1} ease="Power3.easeOut" from={{ x: '100px' }} />
            <Tween to={{ x: '50px' }} />
            <Timeline
              delay={-2}
              target={
                <div
                  style={{
                    background: '#f99'
                  }}
                >
                  Raven:
                </div>
              }
            >
              <Tween duration={1} ease="Power3.easeOut" from={{ x: '200px', y: '-10px' }} />
              <Tween to={{ x: '70px', y: '5px' }} />
              <Timeline
                delay={-1}
                target={
                  <h1
                    style={{
                      background: '#f55'
                    }}
                  >
                    Nevermoar!
                  </h1>
                }
              >
                <Tween duration={2} ease="Power3.easeOut" from={{ x: '140px', y: '60px' }} />
                <Tween to={{ x: '20px', y: '30px' }} />
              </Timeline>
            </Timeline>
          </Timeline>
        </Scene>
      </Controller>
    </Wrapper>
  )
}

export default App
