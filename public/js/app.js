$(document).ready(function() {
  const $infoLoginText = $('#info-login-text');
  const $aboutWebapp = $('#about-webapp');
  
  IN.Event.on(IN, 'auth', getProfileData);

  // Logout user
  function logout() {
    IN.User.logout(onLogout);
  }

  function onLogout() {
    console.log('Logout successfully');
  }

  // Use the API call wrapper to request the member's basic profile data
  function getProfileData() {
    IN.API.Profile('me').fields('first-name', 'last-name', 'email-address', 'picture-url', 'location', 'industry', 'current-share', 'num-connections', 'summary', 'specialties', 'positions')
      .result(function(data) {
        $infoLoginText.hide();
        var userdata = data.values[0];
        // console.log(userdata.positions.values);
        $('#login-text').hide();
        // Añadiendo al DOM
        $aboutWebapp.prepend(`<div class="row"><div class="col s12 m12 l10">
        <div class="cv-page">
        <div class="name"><img src="${userdata.pictureUrl}"><h2>${userdata.firstName} ${userdata.lastName}</h2></div>
        <div class="info"><p>Email: ${userdata.emailAddress}</p><p>About me: ${userdata.summary}</p><p>Industry: ${userdata.industry}</p><p>Connections at Linkedin: ${userdata.numConnections}</p></div>
        <div class="job"><p>Last job: ${userdata.positions.values[0].company.name}</p><p>Position :${userdata.positions.values[0].title}</p></div>
        <div></div>
        </div></div></div>`);
      }).error(function(data) {
        console.log(data);
      });
  }
});
