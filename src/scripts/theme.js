/* Desenvolva sua lógica aqui ... */

export const darkMode = () => {
    const darkBtn = document.querySelector(".header__btn");
  
    darkBtn.addEventListener("click", () => {
      const htmldark = document.querySelector("html");

      const btn = darkBtn.classList.toggle("header__btn--dark-mode");
  
      const result = htmldark.classList.toggle("dark-mode");
  
      localStorage.setItem("@openMusictheme:dark-mode", result);
      localStorage.setItem("@openMusictheme:dark-button", btn);
    });
  };
  
export const verifyMode = () => {
    const lightInfo = JSON.parse(localStorage.getItem("@openMusictheme:dark-mode"));
  
    const htmldark = document.querySelector("html");

    const darkBtn = document.querySelector(".header__btn");
  
    if (lightInfo) {
      htmldark.classList.add("dark-mode");
      darkBtn.classList.add("header__btn--dark-mode");
    }
  };

darkMode();
verifyMode();