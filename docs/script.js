(() => {
  const headline = document.getElementById("headline");

  if (!headline) {
    return;
  }

  const random = Math.random();

  if (random < 0.70) {
    headline.textContent = "Hemen geleceğiz.";
  } else if (random < 0.85) {
    headline.textContent = "Bizde heyecanlıyız.";
  } else {
    headline.textContent = "Erken gelmişsin.";
  }
})();
