import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';

import {
  Container,
  Avatar,
  ProfileInfo,
  Title,
  Info,
  LogoutButton,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Avatar
        source={{ uri: 'https://api.adorable.io/avatar/100/deliveryman.png' }}
      />
      <ProfileInfo>
        <Title>Nome completo</Title>
        <Info> {profile.name}</Info>
        <Title>Email</Title>
        <Info> {profile.email}</Info>
        <Title>Data de cadastro</Title>
        <Info> {profile.createdAt}</Info>
      </ProfileInfo>

      <LogoutButton onPress={handleLogout}> Logout</LogoutButton>
    </Container>
  );
}
