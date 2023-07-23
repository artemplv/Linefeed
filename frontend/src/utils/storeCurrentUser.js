const storeCurrentUser = (user) => {
  if (!user) {
    sessionStorage.removeItem('currentUser');
  } else {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }
};

export default storeCurrentUser;
