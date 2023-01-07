
document.addEventListener('DOMContentLoaded', () => {
  console.log('i hate plain javascript');

  /*  
   *  Instead of using a centralized DB, because I am poor AF and cant afford that,
   *  Use per-device local storage of avatar and name values, and a socket.io implementation
   *  to share those values among other users when connected.
  */

  // Just for scaffolding so I dont have to hardcode that shizz
  const avatarImage = document.createElement();
  avatarImage.setAttribute('class', 'avatar');
});