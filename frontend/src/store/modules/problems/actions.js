export function getProblemsRequest(page) {
  return {
    type: '@problems/GET_REQUEST',
    payload: { page },
  };
}

export function getProblemsSuccess(problems) {
  return {
    type: '@problems/GET_SUCCESS',
    payload: { problems },
  };
}

export function getProblemsFailure() {
  return {
    type: '@problems/GET_FAILURE',
  };
}
