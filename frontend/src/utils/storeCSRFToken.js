const storeCSRFToken = (response) => {
  const csrfToken = response.headers.get('X-CSRF-Token');
  if (csrfToken) sessionStorage.setItem('X-CSRF-Token', csrfToken);
};

export default storeCSRFToken;
