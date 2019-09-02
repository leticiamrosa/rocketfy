import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 320px;
  padding: 0 15px;
  height: 100%;

  opacity: ${props => (props.done ? 0.6 : 1)};

  /* flex-grow; 0 // elemento pode esticar
    flex-shrink; 0 // possibilidade do elemento reduzir
    flex-basis; 320 // tamnho base do elemento */

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-size: 16px;
      padding: 0 10px;
      font-weight: 500;
    }

    button {
      width: 40px;
      height: 40px;
      border-radius: 18px;
      background-color: #3b5bfd;
      border: 0;
      cursor: pointer;
    }
  }

  ul {
    margin-top: 30px;
  }
`;
