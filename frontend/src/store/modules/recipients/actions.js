export function getRecipientsRequest(page, name) {
  return {
    type: '@recipients/GET_REQUEST',
    payload: { page, name },
  };
}

export function getRecipientsSuccess(recipients) {
  return {
    type: '@recipients/GET_SUCCESS',
    payload: { recipients },
  };
}

export function getRecipientsFailure() {
  return {
    type: '@recipients/GET_FAILURE',
  };
}
