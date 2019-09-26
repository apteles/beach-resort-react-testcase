import styled from 'styled-components'
import defaultImage from '../../images/room-1.jpeg'

export const Header = styled.header`
    min-height: 60vh;
    background: url(${(props) => props.image || defaultImage }) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`