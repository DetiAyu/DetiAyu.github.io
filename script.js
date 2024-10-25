//Custom JS untuk mengirim comment ke google sheet-->

const scriptURL = "https://script.google.com/macros/s/AKfycbxSS6vVFJYzPcCpFwGwMxE9zqfjs8o7-BJo_p3sX1UUSNViPX0Y690yqc6WsUD520Vw/exec";
const form = document.forms["comment-deti-portfolio"];
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.classList.toggle("d-none");
  btnSubmit.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle("d-none");
      btnSubmit.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      // reset form
      form.reset();
      console.log("Success!", response);
    })

    .catch((error) => console.error("Error!", error.message));
});
