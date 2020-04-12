import produce from 'immer';

const INITAL_STATE = {
  orders: [],
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
        draft.orders = action.payload.orders;
        break;
      }
      case '@orders/GET_FAILURE': {
        draft.loading = false;
        draft.orders = [];
        break;
      }

      default:
        return state;
    }
  });
}
