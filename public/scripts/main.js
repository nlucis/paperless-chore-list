
document.addEventListener('DOMContentLoaded', () => {

  // * -- Day, Week & Month (+1 since zero-indexed) -- 
  const dt = new Date();
  const day = dt.getDay()+1;
  const month = dt.getMonth()+1;
  const year = dt.getFullYear();
  const dt_formatted = `Day: ${day} | Month: ${month} | Year: ${year}`;
  console.log(dt_formatted);

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
  persistence.setItem('userPrefs', JSON.stringify(userPrefs));
  const config = JSON.parse(persistence.getItem('userPrefs'));

  // * -- User Avatar --
  const avatarURI = `public/assets/${config.avatarID}.jpeg`;
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