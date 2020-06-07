import styled from 'styled-components'
import defaultBcg from '../images/room-2.jpeg'

const StyledHero = styled.header `
  min-height: calc(100vh - 66px);
  background: url(${props=>props.img?props.img:defaultBcg }) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`
export default StyledHero