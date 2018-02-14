window.addEventListener('load', function () {
  const $form = $('#form');
  let textInput;

  $form.submit(function (e) {
    e.preventDefault();
    console.log(e.target);
    textInput = $form.find('input').val()
    console.log(textInput);
    getEnterprise();
  });

  function getEnterprise(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.linkedin.com/v1/people/~?format=json');
    xhr.onload = addNews;
    // xhr.onerror = handleError;
    xhr.send();
    console.log(xhr);
  }


  // Función addNews
  function addNews(e) {
    console.log(e.target.responseText);
    const data = JSON.parse(e.target.responseText)
    console.log(data);

  }

});
