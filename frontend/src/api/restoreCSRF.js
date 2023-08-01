import { storeCSRFToken } from 'utils';
import csrfFetch from './csrfFetch';

async function restoreCSRF() {
  const response = await csrfFetch('/api/session');
  storeCSRFToken(response);
  return response;
}

export default restoreCSRF;
