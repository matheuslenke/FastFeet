export function getDeliverymansRequest(page, name) {
  return {
    type: '@deliverymans/GET_REQUEST',
    payload: { page, name },
  };
}

export function getDeliverymansSuccess(deliverymans) {
  return {
    type: '@deliverymans/GET_SUCCESS',
    payload: { deliverymans },
  };
}

export function getDeliverymansFailure() {
  return {
    type: '@deliverymans/GET_FAILURE',
  };
}

export function storeDeliverymansRequest(data) {
  return {
    type: '@deliverymans/STORE_REQUEST',
    payload: { data },
  };
}
export function storeDeliverymansSuccess(deliveryman) {
  return {
    type: '@deliverymans/STORE_SUCCESS',
    payload: { deliveryman },
  };
}
export function storeDeliverymansFailure() {
  return {
    type: '@deliverymans/STORE_FAILURE',
  };
}
export function updateDeliverymansRequest(deliveryman) {
  return {
    type: '@deliverymans/UPDATE_REQUEST',
    payload: { deliveryman },
  };
}
export function updateDeliverymansSuccess({ deliveryman }) {
  return {
    type: '@deliverymans/UPDATE_SUCCESS',
    payload: { deliveryman },
  };
}
export function updateDeliverymansFailure() {
  return {
    type: '@deliverymans/UPDATE_FAILURE',
  };
}
