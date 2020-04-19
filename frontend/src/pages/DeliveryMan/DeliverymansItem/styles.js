import styled from 'styled-components';
import { lighten } from 'polished';

export const DeliverymanItem = styled.tr`
  color: #666;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  border-top: 20px solid transparent;

  td {
    padding: 20px;
    background: #fff;

    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    &:last-child {
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
    }
  }
`;

export const DeliverymanDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const AvatarDefault = styled.div.attrs((props) => ({
  color: props.randomColor,
  backgroundcolor: lighten(0.2, props.color),
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background: ${(props) => `${props.backgroundcolor}`};
  color: #fff;
  margin-right: 5px;

  span {
    text-shadow: 1px 1px 3px #111;
    color: ${(props) => `${props.color}`};
  }
`;

export const StatusTag = styled.object.attrs((props) => ({
  color: props.color,
  backgroundcolor: lighten(0.4, props.color),
}))`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundcolor};
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 50px;

  &::before {
    content: ' ';
    display: inline-block;
    position: relative;
    margin-right: 5px;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.color};
    border-radius: 50%;
  }
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
