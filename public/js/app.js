window.addEventListener('load', function () {
  // $(document).ready(function () {
  const $formSearch = $('#form-search');
  const $profileInfo = $('#profile-info');
  let member;


  $formSearch.hide();
  // Removing event listener by calling IN.Event.on() outside of onLinkedInLoad()

  IN.Event.on(IN, "auth", getProfileData);
  // Handle the successful return from the API call
  function onSuccess(data) {
    console.log(data);
    console.log(data.firstName);
    console.log(data.lastName);
    console.log(data.headline);
    // Añadiendo a la página
    $profileInfo.append(`<h3>PROFILE LINKEDIN</h3><p>${data.firstName} ${data.lastName}</p><p>${data.headline}</p>`);
    $formSearch.show();
    $('span').hide();
    $('#login-text').hide();
  }

  // Handle an error response from the API call
  function onError(error) {
    console.log(error);
  }

  // Use the API call wrapper to request the member's basic profile data
  function getProfileData() {
    IN.API.Raw("/people/~").result(onSuccess).error(onError);
  }


});

