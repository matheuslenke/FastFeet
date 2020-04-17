import produce from 'immer';

const INITAL_STATE = {
  deliverymans: [],
  count: 0,
  loading: false,
};

export default function orders(state = INITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@deliverymans/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliverymans/GET_SUCCESS': {
        draft.deliverymans = action.payload.deliverymans.rows;
        draft.count = action.payload.deliverymans.count;
        break;
      }
      case '@deliverymans/GET_FAILURE': {
        draft.loading = false;
        draft.deliverymans = [];
        break;
      }
      case '@deliverymans/STORE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliverymans/STORE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@deliverymans/STORE_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@deliverymans/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliverymans/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@deliverymans/UPDATE_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
