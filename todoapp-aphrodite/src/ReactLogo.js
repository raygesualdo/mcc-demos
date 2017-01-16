import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const reactLogoSpin = {
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' },
}

const styles = StyleSheet.create({
  reactLogo: {
    animationName: reactLogoSpin,
    animationDuration: '20s',
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite',
  	position: 'absolute',
  	bottom: '-120px',
  	left: '50%',
    width: '120px',
  	marginLeft: '-60px',
  },
})

const ReactLogo = () => (
  <img src="logo.svg" className={css(styles.reactLogo)} alt="logo" />
)

export default ReactLogo
