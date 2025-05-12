document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const thankYou = document.getElementById("thankYouMessage");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    form.reset();
    thankYou.style.display = "block";
  });
});
