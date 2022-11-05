import React, { FC } from 'react'
import { SContainer } from './Container.style'

interface IContainer{
    children: React.ReactNode
}

const  Container:FC<IContainer> =({children})=> {
  return (
   <SContainer>
    {children}

   </SContainer>
  )
}

export default Container