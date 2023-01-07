
document.addEventListener('DOMContentLoaded', () => {

  /*  
   *  Instead of using a centralized DB, because I am poor AF and cant afford that,
   *  Use per-device local storage of avatar and name values, and a socket.io implementation
   *  to share those values among other users when connected.
  */
  const persistence = window.localStorage;
  persistence.setItem('avatar', 'avatar1');
  persistence.setItem('name', 'Awwjay');

  const avatarURI = `public/assets/${persistence.getItem('avatar')}.jpeg`;

  const userAvatar = document.createElement('img');
  userAvatar.src = avatarURI;
  userAvatar.setAttribute('class', 'avatar');

  document.getElementById('avatar-list').appendChild(userAvatar);
});