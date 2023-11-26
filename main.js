const allMenuText = document.querySelectorAll(".menu-text");

allMenuText.forEach((m) => {
  const allChars = m.querySelectorAll(".text-container span");
  allChars.forEach((c, i) => {
    c.style.transitionDelay = i * 30 + "ms";
  });

  const allCharsCopy = m.querySelectorAll(".text-container-copy span");
  allCharsCopy.forEach((c, i) => {
    c.style.transitionDelay = i * 30 + "ms";
  });
});
