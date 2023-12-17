import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: ${props =>
    `linear-gradient(to ${props.direction}, ${props.firstColor}, ${props.secondColor})`};
  width: 900px;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;
`
export const Heading = styled.h1`
  font-family: 'roboto';
  font-size: 30px;
  font-weight: bold;
  color: white;
`
export const Para = styled.p`
  font-family: 'roboto';
  font-size: 25px;
  font-weight: bold;
  color: #ededed;
`
export const Desc = styled.p`
  font-family: 'roboto';
  font-size: 25px;
  font-weight: bold;
  color: #ededed;
`
export const UnOrderList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
`
export const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 380px;
`
export const Input = styled.input`
  width: 140px;
  height: 50px;
  border: none;
  padding: 0px;
  background-color: transparent;
`
export const GeneratorButton = styled.button`
  width: 140px;
  height: 40px;
  background-color: #00c9b7;
  border: none;
  border-radius: 5px;
  color: #1e293b;
  font-size: 20px;
  margin-top: 40px;
`
