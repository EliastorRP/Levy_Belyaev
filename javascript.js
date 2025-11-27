document.addEventListener("DOMContentLoaded", () => {
    
  document.querySelectorAll(".zoomable").forEach(figure => {
    const img = figure.querySelector("img");
    
    // On prépare la loupe
    const lens = document.createElement("div");
    lens.classList.add("zoom-lens");
    const zoomImg = document.createElement("img");
    zoomImg.src = img.src; // même image mais zoomée dans la loupe
    lens.appendChild(zoomImg);
    figure.appendChild(lens);

    // Taille du zoom (plus c'est grand, plus c'est zoomé)
    const ZOOM_LEVEL = 2.5;

    figure.addEventListener("mousemove", e => {
      lens.style.display = "block";

      const rect = figure.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      // position de la loupe
      lens.style.left = (x - lens.offsetWidth / 2) + "px";
      lens.style.top = (y - lens.offsetHeight / 2) + "px";

      // déplacement de l'image zoomée
      zoomImg.style.width = img.clientWidth * ZOOM_LEVEL + "px";
      zoomImg.style.height = img.clientHeight * ZOOM_LEVEL + "px";

      zoomImg.style.left = -(x * ZOOM_LEVEL - lens.offsetWidth / 2) + "px";
      zoomImg.style.top = -(y * ZOOM_LEVEL - lens.offsetHeight / 2) + "px";
    });

    figure.addEventListener("mouseleave", () => {
      lens.style.display = "none";
    });
  });

});

document.querySelectorAll(".persona-toggle").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("open");
  });
});
