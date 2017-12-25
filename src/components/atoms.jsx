import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 1s forwards;
  opacity: 0;
  margin: 15px 45px;
`

export const HeaderContainer = styled.div`
  align-self: flex-start;
  flex: 1;
  font-size: 24px;
  font-weight: 600px
  padding-bottom: 20px;
`

export const Card = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
`

export const MobileCard = styled.div`
  border: 1px solid black;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }
`

export const MobileHeaderContainer = styled.div`
  align-self: flex-start;
  flex: .75;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  margin-top: 40px;

  h1 {
    margin: 0;
  }
`

export const NavigationCard = styled.section`
  margin-top: 20px;
  padding: 35px 15px;
  text-transform: uppercase;
  text-align: center;
`

export const Category = styled(Link)`
  color: #000;
  font-size: 18px;
  padding: 25px 25px;
  text-decoration: none;
  margin-bottom: 20px;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0px;
  }

  p {
    color: grey;
  }
`

export const MobileCategory = styled(Link)`
  color: #000;
  padding: 15px 15px;
  text-decoration: none;
  margin-bottom: 20px;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    margin: 0px;
  }

  p {
    color: grey;
    font-size: 17px;
    margin-top: 5px;
  }
`

export const External = styled.a`
  color: #000;
  font-size: 18px;
  padding: 25px 25px;
  text-decoration: none;
  margin-bottom: 20px;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0px;
  }

  p {
    color: grey;
  }
`

export const MobileExternal = styled.a`
  color: #000;
  padding: 15px 15px;
  text-decoration: none;
  margin-bottom: 20px;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.23), 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  }

  h2 {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 20px;
    margin: 0px;
  }

  p {
    color: grey;
    font-size: 17px;
    margin-top: 5px;
  }
`

export const Footer = styled.footer`
  text-align: center;
`
