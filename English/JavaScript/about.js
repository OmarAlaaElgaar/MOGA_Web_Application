let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector("#sub").value = "Submitting...";
  let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbzc5s5ifNOMAKJD6FkNdoly_zWbTRo7oJ0OX-cFnkIz8d1skzhnhE5UUH_kAJv8pxL_hg/exec', {
    method: "POST",
    body: data
  })
    .then(res => res.text())
    .then(data =>{
      document.querySelector("#msg").innerHTML = data;
      document.querySelector("#sub").value = "Submit";
    });
})