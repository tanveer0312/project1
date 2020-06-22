gsap.registerPlugin(ScrollToPlugin);

document.querySelectorAll(".btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 2 , scrollTo:{y:".contact"}});
    });
  });
  

document.querySelectorAll(".c").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 2, scrollTo:{y:".contact"}});
    });
  });

  document.querySelectorAll(".a").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 0.5, scrollTo:{y:".about"}});
    });
  });

  document.querySelectorAll(".s").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 0.5, scrollTo:{y:".services"}});
    });
  });


  document.querySelectorAll(".p").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1, scrollTo:{y:".portfolio"}});
    });
  });

  document.querySelectorAll(".back").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {duration: 1.5, scrollTo:{y:".landing"}});
    });
  });

