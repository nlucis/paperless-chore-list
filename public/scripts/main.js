
document.addEventListener('DOMContentLoaded', () => {
  /*  
   *  Instead of using a centralized DB, because I am poor AF and cant afford that,
   *  Use per-device local storage of avatar and name values, and some form of lite implementation
   *  to share those values among other users when connected.
  */
  const persistence = window.localStorage;
  const userPrefs = {
    name: 'Awwjay',
    avatarID: 'avatar1'
  };
  persistence.setItem('userPrefs', userPrefs);

  // * -- User Avatar --
  const avatarURI = `public/assets/${persistence.getItem('avatar')}.jpeg`;
  const userAvatar = document.createElement('img');
  userAvatar.src = avatarURI;
  userAvatar.setAttribute('class', 'avatar');

  // * -- User Name --
  const usernameLabel = document.createElement('h5');

  document.getElementById('name-badge').append(
    userAvatar, 
    usernameLabel
  );
});