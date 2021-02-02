import styled from 'styled-components';

export const FormComponent = styled.div`
  min-height: 100vh;
  background-color: #41ceba;
  padding: 0.5em;
  padding-bottom: 5em;
  font-family: Varela;
`;

export const FormComponent2 = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 100vh;
  background-color: #1f2c4c;
  padding-top: 3em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-bottom: 3em;
  font-family: Varela;

  @media (max-width: 360px) {
    height: 100%;
  }
`;

export const FormContainer = styled.div`
  background-color: white;
  color: black;
  box-shadow: 2px 4px 16px grey;
  width: 70%;
  font-size: 1em;
  padding: 1.5em;
  border-radius: 0.4em;

  @media (max-width: 80em) {
    width: 70%;
  }

  @media (max-width: 62em) {
    width: 70%;
  }

  @media (max-width: 48em) {
    width: 95%;
  }

  @media (max-width: 30em) {
    width: 100%;
  }
`;

export const TitleContainer = styled.div`
  background-color: #1f2c4c;
  color: white;
  box-shadow: 2px 4px 16px grey;
  width: 6em;
  font-family: Kanit;
  font-size: 2.5em;
  font-weight: 700;
  height: 1.6em;
  text-align: center;
  margin-top: 0.5em;
  border-radius: 0.4em;

  @media (max-width: 80em) {
    font-size: 2.4em;
  }

  @media (max-width: 62em) {
    font-size: 2em;
  }

  @media (max-width: 48em) {
    font-size: 2em;
  }

  @media (max-width: 30em) {
    font-size: 2em;
  }
`;

export const TitleContainer2 = styled.div`
  background-color: #1f2c4c;
  color: white;
  box-shadow: 2px 4px 16px grey;
  width: 8em;
  font-family: Kanit;
  font-size: 2.5em;
  font-weight: 700;
  height: 1.6em;
  text-align: center;
  margin-top: 0.5em;
  border-radius: 0.4em;

  @media (max-width: 80em) {
    font-size: 2.4em;
  }

  @media (max-width: 62em) {
    font-size: 2em;
  }

  @media (max-width: 48em) {
    font-size: 2em;
  }

  @media (max-width: 30em) {
    font-size: 2em;
  }
`;

export const BadgeContainer = styled.div`
  background-color: #41ceba;
  color: white;
  border: 1px solid white;
  width: 8em;
  font-family: Kanit;
  font-size: 2em;
  height: 1.5em;
  text-align: center;
  margin-top: 0.3em;
  margin-bottom: 1em;
  border-radius: 0.4em;

  @media (max-width: 80em) {
    font-size: 2em;
  }

  @media (max-width: 62em) {
    font-size: 1.7em;
  }

  @media (max-width: 48em) {
    font-size: 1.4em;
  }

  @media (max-width: 30em) {
    font-size: 1.1em;
  }
`;

export const DivisionContainer = styled.div`
  padding: 2em 3em 2em 3em;
  border-radius: 10px;
  margin-top: 2em;
  margin-bottom: 2em;
  max-width: 75vw;

  @media (max-width: 1441px) {
    max-width: 85vw;
  }

  @media (max-width: 1160px) {
    max-width: 90vw;
  }

  @media (max-width: 663px) {
    padding: 0;
  }
`;
