import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

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
  OrdersList,
  Order,
  Head,
  OrderTitle,
  OrderFooter,
  OrderDate,
  DateTitle,
  DateInfo,
  OrderCity,
  CityTitle,
  CityInfo,
  OrderDetails,
  DetailsTitle,
  Filters,
} from './styles';

import ProgressBar from '~/components/ProgressBar';

export default function Dashboard() {
  return (
    <Container>
      <Welcome>
        <Avatar
          source={{ uri: 'https://api.adorable.io/avatar/100/deliveryman.png' }}
        />
        <Info>
          <WelcomeInfo>Bem vindo de volta,</WelcomeInfo>
          <Title>Gaspar Antunes</Title>
        </Info>
        <TouchableOpacity>
          <Icon name="exit-to-app" size={25} color="#7d40e7" />
        </TouchableOpacity>
      </Welcome>

      <OrdersDiv>
        <Header>
          <Title>Entregas</Title>
          <Filters>
            <Filter>
              <FilterText active>Pendentes</FilterText>
            </Filter>
            <Filter>
              <FilterText>Entregues</FilterText>
            </Filter>
          </Filters>
        </Header>
        <OrdersList>
          <Order>
            <Head>
              <Icon name="local-shipping" size={25} color="#7D40E7" />
              <OrderTitle>Encomenda 01</OrderTitle>
            </Head>
            <ProgressBar />
            <OrderFooter>
              <OrderDate>
                <DateTitle>Data</DateTitle>
                <DateInfo>14/01/2020</DateInfo>
              </OrderDate>
              <OrderCity>
                <CityTitle>Cidade</CityTitle>
                <CityInfo>Diadema</CityInfo>
              </OrderCity>
              <OrderDetails>
                <DetailsTitle>Ver detalhes</DetailsTitle>
              </OrderDetails>
            </OrderFooter>
          </Order>
        </OrdersList>
      </OrdersDiv>
    </Container>
  );
}
