import React from 'react'
import Up from './Up'
import Random from './Random'
import Info from './Info'
import Growth from './Growth'
import Grid from './Grid'

export default function First() {
  return (
    <div className='first'>
      <Up />
      <article>
        <Random />
        <Info />
      </article>
      <Growth />
      <Grid />
    </div>
  )
}
