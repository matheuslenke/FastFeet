import styled from 'styled-components';
import { lighten } from 'polished';

export const ProblemItem = styled.tr`
  color: #666;
  font-size: 16px;
  margin-top: 20px;
  border-top: 20px solid transparent;
  text-align: left;

  td:nth-child(1) {
    width: 120px;
  }
  td {
    background: #fff;
    padding: 20px;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      text-align: right;
    }
  }
`;

export const ProblemsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const ModalInfo = styled.div`
  section + section {
    border-top: 1px solid #eee;
    margin-top: 10px;
    padding-top: 10px;
  }
  section {
    h2 {
      font-size: 14px;
      font-weight: bold;
      color: #444;
      margin-bottom: 10px;
    }
    div {
      display: flex;
    }
    h3 {
      font-weight: bold;
      font-size: 16px;
      margin-right: 5px;
    }
  }
`;
