import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import OrderItem from '~/components/OrderItem';

import { OrderContainer, Container, OrdersList } from './styles';

import api from '~/services/api';
import formatDate from '~/utils/formatDate';

export default function Delivered({ handleDetails, isFocused }) {
  const [DeliveredOrders, setDeliveredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const profile = useSelector((state) => state.user.profile);

  async function loadOrders() {
    try {
      const response = await api.get(
        `deliveryman/${profile.id}/deliveries/done`,
        {
          params: { page },
        }
      );
      const delivered = response.data.map((order) => ({
        ...order,
        formattedDate: formatDate(order.end_date),
        currentStep: 3,
      }));

      if (page >= 2) {
        const finalDelivered = [...DeliveredOrders, ...delivered];
        setDeliveredOrders(finalDelivered);
      } else {
        setDeliveredOrders(delivered);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.tron.log(error);
    }
  }

  async function loadMore() {
    setPage(page + 1);
    loadOrders();
  }

  async function refreshList() {
    setPage(1);
    setDeliveredOrders([]);
    loadOrders();
  }

  useEffect(() => {
    loadOrders();
  }, [isFocused]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="#333" size={30} />
      ) : (
        <OrdersList
          data={DeliveredOrders}
          keyExtractor={(order) => String(order.id)}
          renderItem={({ item }) => (
            <OrderContainer>
              <OrderItem
                order={item}
                handleDetails={() => handleDetails(item)}
              />
            </OrderContainer>
          )}
          onEndReachedThreshold={0.1}
          onEndReached={loadMore}
          onRefresh={refreshList}
          refreshing={refreshing}
        />
      )}
    </Container>
  );
}

Delivered.propTypes = {
  handleDetails: PropTypes.func.isRequired,
  isFocused: PropTypes.bool,
};

Delivered.defaultProps = {
  isFocused: false,
};
