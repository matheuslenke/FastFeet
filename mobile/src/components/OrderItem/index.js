import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
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
} from './styles';

import ProgressBar from '~/components/ProgressBar';

export default function OrderItem({ order, handleDetails }) {
  return (
    <Container>
      {order ? (
        <>
          <Head>
            <Icon name="local-shipping" size={25} color="#7D40E7" />
            <OrderTitle>{order?.product}</OrderTitle>
          </Head>
          <ProgressBar currentStep={order?.currentStep} />
          <OrderFooter>
            <OrderDate>
              <DateTitle>Data</DateTitle>
              <DateInfo>{order?.formattedDate}</DateInfo>
            </OrderDate>
            <OrderCity>
              <CityTitle>Cidade</CityTitle>
              <CityInfo>{order?.recipient.city}</CityInfo>
            </OrderCity>
            <OrderDetails
              onPress={() => {
                handleDetails(order);
              }}
            >
              <DetailsTitle>Ver detalhes</DetailsTitle>
            </OrderDetails>
          </OrderFooter>
        </>
      ) : (
        <Text>Nada para mostrar</Text>
      )}
    </Container>
  );
}

OrderItem.propTypes = {
  handleDetails: PropTypes.func.isRequired,
  order: PropTypes.object.isRequired,
};
