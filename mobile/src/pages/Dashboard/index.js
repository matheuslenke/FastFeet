import React, { useState, useMemo } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Welcome,
  Avatar,
  Info,
  WelcomeInfo,
  OrdersDiv,
  Header,
  Title,
  Filter,
  FilterText,
  Filters,
  AvatarDefault,
} from './styles';

import { signOut } from '~/store/modules/auth/actions';

import Pending from './Pending';
import Delivered from './Delivered';

export default function Dashboard({ navigation }) {
  const isFocused = useIsFocused();
  const [activeTab, setActiveTab] = useState('pending');

  const profile = useSelector((state) => state.user.profile);

  const dispatch = useDispatch();

  function handleActiveTab(Tab) {
    setActiveTab(Tab);
  }

  const nameInitials = useMemo(() => {
    const splitName = profile?.name?.toUpperCase().split(' ');

    return splitName?.map((name) => name[0]);
  }, [profile]);

  function handleDetails(order) {
    navigation.navigate('OrderDetails', { order });
  }

  return (
    <Container>
      <Welcome>
        {profile.avatar ? (
          <Avatar source={{ uri: profile.avatar.url }} />
        ) : (
          <AvatarDefault>
            <Text>{nameInitials}</Text>
          </AvatarDefault>
        )}

        <Info>
          <WelcomeInfo>Bem vindo de volta,</WelcomeInfo>
          <Title>{profile.name}</Title>
        </Info>
        <TouchableOpacity onPress={() => dispatch(signOut())}>
          <Icon name="exit-to-app" size={25} color="#7d40e7" />
        </TouchableOpacity>
      </Welcome>

      <OrdersDiv>
        <Header>
          <Title>Entregas</Title>
          <Filters>
            <Filter>
              <FilterText
                onPress={() => handleActiveTab('pending')}
                active={activeTab === 'pending'}
              >
                Pendentes
              </FilterText>
            </Filter>
            <Filter onPress={() => handleActiveTab('delivered')}>
              <FilterText active={activeTab === 'delivered'}>
                Entregues
              </FilterText>
            </Filter>
          </Filters>
        </Header>
        {activeTab === 'pending' ? (
          <Pending handleDetails={handleDetails} isFocused={isFocused} />
        ) : (
          <Delivered handleDetails={handleDetails} isFocused={isFocused} />
        )}
      </OrdersDiv>
    </Container>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
