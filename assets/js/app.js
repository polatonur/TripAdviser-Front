document.addEventListener("DOMContentLoaded", () => {
  // scrollbar -1
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

  //scrollbar - 2
  document
    .querySelector("#btn-l-upper-carusel")
    .addEventListener("click", () => {
      document.querySelector(".sub-header-buttons").scrollLeft += 500.859;
    });
  document
    .querySelector("#btn-r-upper-carusel")
    .addEventListener("click", () => {
      document.querySelector(".sub-header-buttons").scrollLeft -= 500.859;
    });

  //scrollbar - 3
  document.querySelector(".arrow-left-bottom").addEventListener("click", () => {
    document.querySelector(".guide-pictures").scrollLeft += 500.859;
  });
  document
    .querySelector(".arrow-right-bottom")
    .addEventListener("click", () => {
      document.querySelector(".guide-pictures").scrollLeft -= 500.859;
    });

  // btn contact
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

      const msg = document.querySelector("#response");
      await axios
        .post("https://tripadviser-backend.herokuapp.com/contact", data)
        .then((response) => {
          console.log(response);
          console.log(response.status);

          if (response.status === 200) {
            msg.innerHTML = "Bienvenu sur TripAdviser";
          } else {
            msg.innerHTML = "Oops! Une erreur est survenue. Essayez à nouveau";
          }
        })
        .catch((err) => {
          console.log(err);
          msg.innerHTML = "Oops! Une erreur est survenue. Essayez à nouveau";
        });
    });
});
