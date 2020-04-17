import produce from 'immer';

const INITAL_STATE = {
  orders: [],
  ordersCount: 0,
  loading: false,
};

export default function orders(state = INITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@orders/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@orders/GET_SUCCESS': {
        draft.orders = action.payload.orders.rows;
        draft.ordersCount = action.payload.orders.count;
        break;
      }
      case '@orders/GET_FAILURE': {
        draft.loading = false;
        draft.orders = [];
        break;
      }
      case '@orders/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@orders/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@orders/UPDATE_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
