import produce from 'immer';

const INITAL_STATE = {
  recipients: [],
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
        draft.recipients = action.payload.recipients;
        break;
      }
      case '@recipients/GET_FAILURE': {
        draft.loading = false;
        draft.recipients = [];
        break;
      }

      default:
        return state;
    }
  });
}
