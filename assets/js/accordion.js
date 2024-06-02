//  ------------------------------------------------------------
//  Exclusive accordion polyfill
//  https://codepen.io/web-dot-dev/pen/BaMbKyM
//  When a <details> element with a [name] opens, this code finds
//  the other open ones with that [name] and closes them manually.
//  ------------------------------------------------------------

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
