import React from 'react'

import {Header} from './styles'

export default function HeroStyled({children, image}){
    
    return (
        <Header image={image}>{children}</Header>
    )
}