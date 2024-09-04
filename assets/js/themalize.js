//  ------------------------------------------------------------
//  Themalize
//  ------------------------------------------------------------

let toggler = document.querySelectorAll("[data-dialog]"),
  closers = document.querySelectorAll(".close-dialog");
toggler &&
  (toggler.forEach(function (e) {
    let l = e.getAttribute("data-dialog"),
      t = document.querySelectorAll(l);
    e.addEventListener("click", (e) => {
      t.forEach(function (e) {
        e.showModal();
      });
    });
  }),
  closers.forEach(function (e) {
    e.addEventListener("click", (l) => {
      e.closest("dialog").close();
    });
}));

document.querySelectorAll("details[name]").forEach(($details) => {
  $details.addEventListener("toggle", (e) => {
    const name = $details.getAttribute("name");

    if (e.newState == "open") {
      document
        .querySelectorAll(`details[name=${name}][open]`)
        .forEach(($openDetails) => {
          if (!($openDetails == $details)) {
            $openDetails.removeAttribute("open");
          }
        });
    }
  });
});
