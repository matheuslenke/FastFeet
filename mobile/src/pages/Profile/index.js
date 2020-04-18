import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text } from 'react-native';

import {
  Container,
  Avatar,
  ProfileInfo,
  Title,
  Info,
  LogoutButton,
  AvatarDefault,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  const nameInitials = useMemo(() => {
    const splitName = profile?.name?.toUpperCase().split(' ');

    return splitName?.map((name) => name[0]);
  }, [profile]);

  return (
    <Container>
      {profile.avatar ? (
        <Avatar source={{ uri: profile.avatar.url }} />
      ) : (
        <AvatarDefault>
          <Text>{nameInitials}</Text>
        </AvatarDefault>
      )}
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
