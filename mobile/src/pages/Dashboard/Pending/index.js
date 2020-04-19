import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import OrderItem from '~/components/OrderItem';

import { Container, OrdersList, OrderContainer } from '../styles';

import api from '~/services/api';
import formatDate from '~/utils/formatDate';

export default function Pending({ handleDetails, isFocused }) {
  const [PendingOrders, setPendingOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const profile = useSelector((state) => state.user.profile);

  async function loadOrders() {
    try {
      console.tron.log(page);
      const response = await api.get(`deliveryman/${profile.id}/deliveries`, {
        params: { page },
      });

      const pending = response.data.map((order) => ({
        ...order,
        formattedDate: order.start_date
          ? formatDate(order.start_date)
          : formatDate(order.createdAt),
        currentStep: order.start_date ? 2 : 1,
      }));
      if (page >= 2) {
        const finalPending = [...PendingOrders, ...pending];
        setPendingOrders(finalPending);
      } else {
        setPendingOrders(pending);
      }

      setLoading(false);
    } catch (error) {
      console.tron.log(error);
      setLoading(false);
    }
  }

  async function loadMore() {
    setPage(page + 1);
    loadOrders();
  }

  async function refreshList() {
    setPage(1);
    setPendingOrders([]);
    loadOrders();
  }

  useEffect(() => {
    loadOrders();
  }, [isFocused]);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator color="#333" />
      ) : (
        <OrdersList
          data={PendingOrders}
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

Pending.propTypes = {
  handleDetails: PropTypes.func.isRequired,
  isFocused: PropTypes.bool,
};

Pending.defaultProps = {
  isFocused: false,
};
