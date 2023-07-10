var pop = {
  // (A) ATTACH POPUP HTML
  pWrap : null,  // html popup wrapper
  pTitle : null, // html popup title
  pText : null,  // html popup text
  init : () => {
    // (A1) POPUP WRAPPER
    pop.pWrap = document.createElement("div");
    pop.pWrap.id = "popwrap";
    document.body.appendChild(pop.pWrap);

    

    // (A2) POPUP INNERHTML
    pop.pWrap.innerHTML =
    `<div id="popbox">
      <h2 id="poptitle"></h2>
      <p id="poptext"></p>
      <div id="popclose" onclick="pop.close()">&#10006;</div>
    </div>`;
    pop.pTitle = document.getElementById("poptitle");
    pop.pText = document.getElementById("poptext");
  },

  // (B) OPEN POPUP
  open : (title, text) => {
    pop.pTitle.innerHTML = title;
    pop.pText.innerHTML = text;
  },

  // (C) CLOSE POPUP
  close : () => pop.pWrap.classList.remove("open")
};
window.addEventListener("DOMContentLoaded", pop.init);