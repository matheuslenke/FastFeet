import produce from 'immer';

const INITAL_STATE = {
  problems: [],
  count: 0,
  loading: false,
};

export default function problems(state = INITAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@problems/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@problems/GET_SUCCESS': {
        draft.problems = action.payload.problems.rows;
        draft.count = action.payload.problems.count;
        break;
      }
      case '@problems/GET_FAILURE': {
        draft.loading = false;
        draft.problems = [];
        break;
      }

      default:
        return state;
    }
  });
}
