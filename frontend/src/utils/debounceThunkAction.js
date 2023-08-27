function debounceThunkAction(callback, ms = 100) {
  let lastCall = 0;

  const delayedCallback = (...args) => (dispatch) => {
    const timeSinceLastCall = Date.now() - lastCall;
    if (timeSinceLastCall >= ms) {
      callback(...args)(dispatch);
    }
  };

  return (...args) => (dispatch) => {
    lastCall = Date.now();
    window.setTimeout(() => delayedCallback(...args)(dispatch), ms);
  };
}

export default debounceThunkAction;
