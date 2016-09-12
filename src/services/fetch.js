import createfocusFetchProxy from 'focus-application/lib/fetch/fetch-proxy'
let fetch;

export const initFetch =  dispatch => {
  fetch = createfocusFetchProxy(dispatch);
}
export default (...fetchArgs) =>  fetch(...fetchArgs);
