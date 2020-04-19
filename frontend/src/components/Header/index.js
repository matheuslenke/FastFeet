import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container, Content, Profile, Navigation } from './styles';

import logo from '~/assets/logo.png';
import { signOut } from '~/store/modules/auth/actions';
import history from '~/services/history';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
    history.push('/');
  }
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
            <button onClick={handleSignOut} type="button">
              Sair do sistema
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
