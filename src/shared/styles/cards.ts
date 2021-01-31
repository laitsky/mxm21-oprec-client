import styled from 'styled-components';

export const LoginFormCard = styled.div`
  background-color: #fafafa;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  transition: 0.3s;
  padding: 2.5em 3em 2.5em 3em;
  border-radius: 7px;
  
  @media (max-width: 450px) {
    padding: 1.5em;
  }

  @media (max-height: 667px) {
    height: 100vh;
    width: 100vw;
  }

`