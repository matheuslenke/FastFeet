import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ActionsList = styled.div`
  position: absolute;
  z-index: 2;
  width: 120px;
  left: calc(50% - 60px);
  top: calc(100% + 10px);
  background: rgba(255, 255, 255, 1);
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  padding: 10px 10px;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.4));

  &::before {
    content: '';
    position: absolute;
    z-index: 3;
    left: calc(50% - 7px);
    top: -7px;
    width: 0;
    height: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-bottom: 7px solid #fff;
  }
`;

export const Visualize = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: none;
  border: 0;
  padding: 5px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 5px;
  svg {
    margin-right: 5px;
  }
`;

export const Edit = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: none;
  border: 0;
  padding: 5px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  svg {
    margin-right: 5px;
  }
`;

export const Delete = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: none;
  border: 0;
  padding-top: 5px;
  svg {
    margin-right: 5px;
  }
`;
