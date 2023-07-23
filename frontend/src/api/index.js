/* eslint-disable no-param-reassign */

async function csrfFetch(url, options = {}) {
  options.method = options.method || 'GET';
  options.headers = options.headers || {};

  // if the options.method is not 'GET', then set the "Content-Type" header to
  // "application/json" and the "X-CSRF-Token" header to the value of the
  // "X-CSRF-Token" cookie
  if (options.method.toUpperCase() !== 'GET') {
    options.headers['Content-Type'] = options.headers['Content-Type'] || 'application/json';
    options.headers['X-CSRF-Token'] = sessionStorage.getItem('X-CSRF-Token');
  }

  const res = await fetch(url, options);

  if (res.status >= 400) throw res;

  return res;
}

export function storeCSRFToken(response) {
  const csrfToken = response.headers.get('X-CSRF-Token');
  if (csrfToken) sessionStorage.setItem('X-CSRF-Token', csrfToken);
}

export async function restoreCSRF() {
  const response = await csrfFetch('/api/session');
  storeCSRFToken(response);
  return response;
}

export default csrfFetch;
