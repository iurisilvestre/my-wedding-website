/////  ANIMATE ON SCROLLING  /////
// AOS.init({
//   offset: 150,
//   duration: 1000,
//   once: true,
//   delay: 200,
// });

/////  LOADING LOGO  /////

const loadingLogo = document.querySelector(".loading-logo");

setTimeout(() => {
  loadingLogo.classList.add("hidden");
  history.scrollRestoration = "manual";
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}, 2500);

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  loadingLogo.classList.remove("hidden");
};

/////  BUTTON SCROLL TO TOP  /////

const btnScrollToTop = document.querySelector("#btn-scroll-to-top");

btnScrollToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
  window.location = "#";
});

window.addEventListener("scroll", () => {
  window.scrollY >= 350
    ? btnScrollToTop.classList.add("active")
    : btnScrollToTop.classList.remove("active");
});

/////  NAVBAR ANIMATION  /////

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  window.scrollY >= 50
    ? navbar.classList.add("active")
    : navbar.classList.remove("active");
});

///// NAVBAR MOBILE /////

const hamburguerBtn = document.querySelector(".hamburguer-btn");
const hamburgerLines = document.querySelectorAll(".hamburguer-line");
const menuLinks = document.querySelectorAll(".navbar ul li a");
const mobileLogo = document.querySelector(".logo-circular");

hamburguerBtn.addEventListener("click", () => {
  navbar.classList.toggle("mobile");
  hamburgerLines.forEach((line) => line.classList.toggle("active"));
});

mobileLogo.addEventListener("click", () => {
  setTimeout(() => {
    navbar.classList.remove("mobile");
    hamburgerLines.forEach((line) => line.classList.toggle("active"));
  }, 300);
});

menuLinks.forEach((item) =>
  item.addEventListener("click", () => {
    setTimeout(() => {
      navbar.classList.remove("mobile");
      hamburgerLines.forEach((line) => line.classList.toggle("active"));
    }, 300);
  })
);

/////  EXPAND ICON  /////

const expandIcon = document.querySelector(".expand__icon");

window.addEventListener("scroll", () => {
  window.scrollY > 250
    ? expandIcon.classList.remove("active")
    : expandIcon.classList.add("active");
});

///// MODAL /////

const btnModalOpen = document.querySelector("#btn-modal-open");
const btnModalClose = document.querySelector("#btn-modal-close");
const modal = document.querySelector("#modal");

btnModalOpen.addEventListener("click", () => {
  modal.classList.add("modal-bg-active");
  document.querySelector("body").style.overflow = "hidden";
});

btnModalClose.addEventListener("click", () => {
  modal.classList.remove("modal-bg-active");
});

/////  FORM LABEL ANIMATION  /////

const labels = document.querySelectorAll(".label");
const inputs = document.querySelectorAll(".input-form");
const textboxLabel = document.querySelector(".textbox-label");
const textarea = document.querySelector("textarea");

labels.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.classList.add("active");
  });
});

inputs.forEach((el) => {
  el.addEventListener("focus", (e) => {
    e.target.previousElementSibling.classList.add("active");
  });
});

inputs.forEach((el) => {
  el.addEventListener("blur", (e) => {
    if (!e.target.value) {
      e.target.previousElementSibling.classList.remove("active");
    }
  });
});

textarea.addEventListener("focus", () => {
  textboxLabel.classList.add("active");
});
textarea.addEventListener("blur", () => {
  if (!textarea.value) {
    textboxLabel.classList.remove("active");
  }
});

//TEXTAREA RESIZABLE
textarea.addEventListener("input", (e) => {
  textarea.style.height = "25px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;
});

/////  FROM SUBMIT  /////
const formSubmit = document.querySelector("#form");
const formName = document.querySelector("#name");
const formEmail = document.querySelector("#email");
const formMsg = document.querySelector("#mensagem");
const formAlert = document.querySelector(".form-alert");

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch("https://formsubmit.co/ajax/iurifbsilvestre@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      nome: formName.value,
      email: formEmail.value,
      mensagem: formMsg.value,
    }),
  }).then((response) => response.json());

  fetch("https://formsubmit.co/ajax/6e019ff9a9d1c39d9fccfce83b9cd575", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      nome: formName.value,
      email: formEmail.value,
      mensagem: formMsg.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      formAlert.innerHTML = `<p>mensagem enviada</p>`;
      formName.value = "";
      formEmail.value = "";
      formMsg.value = "";
      labels.forEach((el) => {
        el.classList.remove("active");
      });
    })
    .catch((error) => {
      console.log(error);
      formAlert.innerHTML = `<p>erro ao enviar menssagem</p>`;
    });
});

/////  COUNTDOWN  /////

const countdown = () => {
  const countDate = new Date("August 28, 2023 13:00:00").getTime();
  const now = new Date().getTime();
  const difference = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDays = Math.floor(difference / day);
  const textHours = Math.floor((difference % day) / hour);
  const textMinutes = Math.floor((difference % hour) / minute);
  const textSeconds = Math.floor((difference % minute) / second);

  // document.querySelector("#days").innerHTML = textDays;
  // document.querySelector("#hours").innerHTML = textHours;
  // document.querySelector("#minutes").innerHTML = textMinutes;
  // document.querySelector("#seconds").innerHTML = textSeconds;

  document.querySelector("#days").innerHTML = "00";
  document.querySelector("#hours").innerHTML = "00";
  document.querySelector("#minutes").innerHTML = "00";
  document.querySelector("#seconds").innerHTML = "00";
};

setInterval(countdown, 1000);
