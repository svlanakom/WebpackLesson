(() => {
  "use strict";
  (({ name: e, location: o }) => {
    const t = document.querySelector(".profile__name"),
      n = document.querySelector(".profile__location");
    (t.textContent = e), (n.textContent = `from ${o}`);
  })({ name: "Tom", location: "The World" });
})();
