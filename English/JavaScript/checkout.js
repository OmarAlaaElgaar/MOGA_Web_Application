let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector("#sub").value = "Submitting...";
  let data = new FormData(form);
  fetch('https://script.google.com/macros/s/AKfycbxzbMy1jlEuAS5zUD9MrF_ewe6I3zoGzeKSRO3izcaCgDyclZOVnD2E6IcGvd7tuLCP/exec', {
    method: "POST",
    body: data
  })
    .then(res => res.text())
    .then(data =>{
      document.querySelector("#msg").innerHTML = data;
      document.querySelector("#sub").value = "Submit";
    });
})