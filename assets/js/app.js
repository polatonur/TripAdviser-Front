document.addEventListener("DOMContentLoaded", () => {
  const scrollRight = () => {
    document.getElementById("crsl").scrollLeft += 854.859;
  };
  const scrollLeft = () => {
    document.getElementById("crsl").scrollLeft -= 854.859;
  };
  const buttonRight = document.getElementById("arrow-left");
  buttonRight.addEventListener("click", scrollLeft);

  const buttonLeft = document.getElementById("arrow-right");
  buttonLeft.addEventListener("click", scrollRight);

  document.querySelector("#btn-contact").addEventListener("click", () => {
    document
      .querySelector(".submit-screen-background")
      .classList.add("display-on");
  });
  document
    .querySelector("#btn-close-submit-box")
    .addEventListener("click", () => {
      document
        .querySelector(".submit-screen-background")
        .classList.remove("display-on");
    });

  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#user-message").value,
      };
      console.log(data);
      document.querySelector("#response").innerHTML = "Merci";

      await axios
        .post("https://tripadviser-backend.herokuapp.com/contact", data)
        .then((response) => {
          console.log(response.data);
          console.log(response.status);
        })
        .catch((err) => {
          console.log(error);
        });

      const msg = document.querySelector("#response");
      if (response.status === 200) {
        msg.innerHTML = "Bienvenu sur TripAdviser";
      } else {
        msg.innerHTML = "Oops! Une erreur est survenue. Essayez à nouveau";
      }
    });
});
