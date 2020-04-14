import produce from 'immer';

const INITAL_STATE = {
  recipients: [],
  count: 0,
  loading: false,
};

export default function recipients(state = INITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@recipients/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipients/GET_SUCCESS': {
        draft.recipients = action.payload.recipients.rows;
        draft.count = action.payload.recipients.count;
        draft.loading = false;
        break;
      }
      case '@recipients/GET_FAILURE': {
        draft.loading = false;
        draft.recipients = [];
        break;
      }
      case '@recipients/UPDATE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipients/UPDATE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@recipients/UPDATE_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
