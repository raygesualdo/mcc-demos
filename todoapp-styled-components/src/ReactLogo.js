import React from 'react'
import styled, { keyframes } from 'styled-components'

const reactLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const AnimatedImg = styled.img`
  animation: ${reactLogoSpin} infinite 20s linear;
  position: absolute;
  bottom: -120px;
  left: 50%;
  width: 120px;
  margin-left: -60px;
`

const ReactLogo = () => (
  <AnimatedImg src="logo.svg" alt="logo" />
)

export default ReactLogo
