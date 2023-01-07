
document.addEventListener('DOMContentLoaded', () => {
  console.log('i hate plain javascript');

  /*  
   *  Instead of using a centralized DB, because I am poor AF and cant afford that,
   *  Use per-device local storage of avatar and name values, and a socket.io implementation
   *  to share those values among other users when connected.
  */

  // Just for scaffolding so I dont have to hardcode that shizz
  const avatarCount = 12;
  const indexStart = 1; // not zero-indexed in other words
  
  for (let aNum = indexStart; aNum <= avatarCount; aNum++) {
    const avatarImage = document.createElement('img');
    avatarImage.src = `public/assets/avatar${aNum}.jpeg`;
    avatarImage.setAttribute('class', 'avatar');
    document.getElementById('avatar-list').appendChild(avatarImage);
  }
});