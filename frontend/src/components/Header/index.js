import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content, Profile, Navigation, ActiveLink } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Navigation>
            <NavLink exact to="/orders">
              ENCOMENDAS
            </NavLink>
            <NavLink exact to="/asfas">
              ENTREGADORES
            </NavLink>
            <NavLink exact to="/fasfas">
              DESTINATÁRIOS
            </NavLink>
            <NavLink exact to="/fasfas">
              PROBLEMAS
            </NavLink>
          </Navigation>
        </nav>

        <aside>
          <Profile>
            <strong>Admin</strong>
            <button type="button">Sair do sistema</button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
