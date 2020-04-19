import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Alert, StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  OrderCard,
  Header,
  HeadTitle,
  Info,
  Title,
  InfoText,
  StatusCard,
  DateDiv,
  Dates,
  ActionsContainer,
  ActionText,
  ProblemInfo,
  ShowProblems,
  ConfirmDelivery,
  Action,
} from './styles';

import api from '~/services/api';

import Background from '~/components/Background';
import formatDate from '~/utils/formatDate';

export default function OrderDetails({ navigation, route }) {
  const [order, setOrder] = useState(route.params.order);
  const profile = useSelector((state) => state.user.profile);

  const adress = useMemo(
    () =>
      `${order.recipient.street}, ${order.recipient.number}, ${order.recipient.city} - ${order.recipient.state}, ${order.recipient.cep}`
  );

  const status = useMemo(() => {
    if (order.currentStep === 1) {
      return 'Pendente';
    }
    if (order.currentStep === 2) {
      return 'Retirada';
    }
    if (order.currentStep === 3) {
      return 'Entregue';
    }
  });

  const confirmText = useMemo(() => {
    if (order.currentStep === 1) {
      return 'Retirar encomenda';
    }
    if (order.currentStep === 2) {
      return 'Confirmar entrega';
    }
    if (order.currentStep === 3) {
      return 'Entregue';
    }
  });

  const startDate = useMemo(() =>
    order.start_date ? formatDate(order.start_date) : '- - / - - / - -'
  );
  const endDate = useMemo(() =>
    order.end_date ? formatDate(order.end_date) : '- - / - - / - -'
  );

  async function handleConfirm() {
    try {
      if (!order.start_date) {
        const newOrder = await api.put(
          `deliveryman/${profile.id}/deliveries/${order.id}`,
          {
            start_date: new Date(),
          }
        );
        Alert.alert('Sucesso!', 'Encomenda retirada com sucesso');
        setOrder(newOrder.data);
      } else if (!order.end_date) {
        navigation.navigate('ConfirmOrder', { order });
      }
    } catch (error) {
      Alert.alert('Falha', 'Falha ao fazer requisição, tente novamente');
    }
  }

  return (
    <Background>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <OrderCard>
          <Header>
            <Icon name="local-shipping" size={25} color="#7D40E7" />
            <HeadTitle>Informações da entrega</HeadTitle>
          </Header>
          <Info>
            <Title>DESTINATÁRIO</Title>
            <InfoText>{order.recipient.name}</InfoText>
            <Title>ENDEREÇO DE ENTREGA</Title>
            <InfoText>{adress}</InfoText>
            <Title>PRODUTO</Title>
            <InfoText>{order.product}</InfoText>
          </Info>
        </OrderCard>
        <StatusCard>
          <Header>
            <Icon name="event" size={25} color="#7d40e7" />
            <HeadTitle>Situação da entrega</HeadTitle>
          </Header>
          <Info>
            <Title>STATUS</Title>
            <InfoText>{status}</InfoText>
            <Dates>
              <DateDiv>
                <Title>DATA DE RETIRADA</Title>
                <InfoText>{startDate}</InfoText>
              </DateDiv>
              <DateDiv>
                <Title>DATA DE ENTREGA</Title>
                <InfoText>{endDate}</InfoText>
              </DateDiv>
            </Dates>
          </Info>
        </StatusCard>
        <ActionsContainer>
          <ProblemInfo>
            <Action
              onPress={() => navigation.navigate('InfoProblems', { order })}
            >
              <CIcon name="close-circle-outline" size={30} color="#E74040" />
              <ActionText>Informar Problema</ActionText>
            </Action>
          </ProblemInfo>
          <ShowProblems>
            <Action
              onPress={() => navigation.navigate('ShowProblems', { order })}
            >
              <Icon name="info-outline" size={30} color="#E7BA40" />
              <ActionText>Visualizar Problemas</ActionText>
            </Action>
          </ShowProblems>
          <ConfirmDelivery>
            <Action
              disabled={confirmText === 'Entregue'}
              onPress={handleConfirm}
            >
              <CIcon name="check-circle-outline" size={30} color="#7d40e7" />
              <ActionText>{confirmText}</ActionText>
            </Action>
          </ConfirmDelivery>
        </ActionsContainer>
      </Container>
    </Background>
  );
}
