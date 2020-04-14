import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Content, Profile, Navigation } from './styles';

import logo from '~/assets/logo.png';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="FastFeet" />
          <Navigation>
            <NavLink to="/orders">ENCOMENDAS</NavLink>
            <NavLink to="/deliverymans">ENTREGADORES</NavLink>
            <NavLink to="/recipients">DESTINATÁRIOS</NavLink>
            <NavLink to="/problems">PROBLEMAS</NavLink>
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
