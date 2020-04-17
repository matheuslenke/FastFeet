export function getOrdersRequest(page, name) {
  return {
    type: '@orders/GET_REQUEST',
    payload: { page, name },
  };
}

export function getOrdersSuccess(orders) {
  return {
    type: '@orders/GET_SUCCESS',
    payload: { orders },
  };
}

export function getOrdersFailure() {
  return {
    type: '@orders/GET_FAILURE',
  };
}

export function postOrdersRequest(product, deliveryman, recipient) {
  return {
    type: '@orders/POST_REQUEST',
    payload: { product, deliveryman, recipient },
  };
}
export function postOrdersSuccess(product, deliveryman, recipient) {
  return {
    type: '@orders/POST_SUCCESS',
    payload: { product, deliveryman, recipient },
  };
}
export function postOrdersFailure() {
  return {
    type: '@orders/POST_FAILURE',
  };
}
export function updateOrdersRequest({
  product,
  deliveryman_id,
  recipient_id,
  orderId,
}) {
  return {
    type: '@orders/UPDATE_REQUEST',
    payload: { product, deliveryman_id, recipient_id, orderId },
  };
}
export function updateOrdersSuccess({
  product,
  deliveryman_id,
  recipient_id,
  orderId,
}) {
  return {
    type: '@orders/UPDATE_SUCCESS',
    payload: { product, deliveryman_id, recipient_id, orderId },
  };
}
export function updateOrdersFailure() {
  return {
    type: '@orders/UPDATE_FAILURE',
  };
}
