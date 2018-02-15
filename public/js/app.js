window.addEventListener('load', function () {
  const $formSearch = $('#form-search');
  const $profileInfo = $('#profile-info');
  let member;

  $formSearch.hide();

  // Hace una llamada al api cuando la autenticación esta completa
  function onLinkedInLoad() {
    IN.Event.on(IN, "auth", getProfileData);
    console.log();
  }
  console.log(onLinkedInLoad());

  // Deslogea al usuaro de la cuenta de Linkedin
  function logout() {
    IN.User.logout(onLogout);
  }
  console.log(logout());

  function onLogout() {
    console.log('Logout successfully');
  }

  function displayProfiles(profiles) {
    console.log(profiles);
    member = profiles.values[0];
    console.log(member);
  }



  // Use the API call wrapper to request the member's basic profile data
  function getProfileData() {

    IN.API.Profile("me").fields("first-name", "last-name", "email-address", "picture-url").result(function (data) {

      var userdata = data.values[0];
      var fname = userdata.firstName;
      var lname = userdata.lastName;
      var email = userdata.emailAddress;
      // console.log(profile_photo); // undefined
      // Añadiendo a la página
      $profileInfo.append(`<h3>Bienvenida ${fname} ${lname}</h3>`);
      $formSearch.show();
      $('span').hide();

      logout();
    }).error(function (data) {
      console.log(data);
    });
  }

});
