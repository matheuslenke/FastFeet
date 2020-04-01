import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      height: auto;
      max-width: 30%;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Navigation = styled.div`
  a {
    color: #888;
    font-size: 15px;
    padding-right: 10px;
    transition: color 0.2s;

    &:hover {
      color: ${darken(0.3, '#888')};
    }
    &.active {
      color: #444;
      font-weight: bold;
    }
  }
`;

export const ActiveLink = styled.a``;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;

  strong {
    color: #666;
  }

  button {
    padding-top: 5px;
    background: none;
    border: none;
    color: #de3b3b;
  }
`;
