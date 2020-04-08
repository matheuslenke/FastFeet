import styled from 'styled-components';

export const Container = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  button {
    background: transparent;
    border: none;
  }
`;
export const Background = styled.div`
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

export const Content = styled.section`
  position: fixed;
  z-index: 4;
  text-align: left;
  background: white;
  border-radius: 8px;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);
`;
