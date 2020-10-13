const fillDOM = document.querySelector(".fill");
 
const loaderDOM = document.querySelector(".loader");
 
const updateFill = (percent) => {
  fillDOM.style.height = `${percent}%`;
 
  if (percent >= 100) {
    loaderDOM.classList.add("loaded");
  }
};
 
// Dummy loading
let loadingPos = 0;
 
let loop;
 
const startLoop = () => {
  loop = setInterval(() => {
    if (loadingPos >= 100) {
      clearInterval(loop);
      loop = null;
    } else {
      loadingPos++;
      updateFill(loadingPos);
    }
  }, 100);
};
startLoop();
 
// Reload button
const reloadButtonDOM = document.querySelector(".reload-button");
 
let timeout;
 
reloadButtonDOM.addEventListener("click", () => {
  if (!timeout) {
    if (loop) {
      clearInterval(loop);
    }
 
    if (loaderDOM.classList.contains("loaded")) {
      loaderDOM.classList.remove("loaded");
    }
 
    loadingPos = 0;
    updateFill(loadingPos);
    timeout = setTimeout(() => {
      timeout = null;
      startLoop();
    }, 500);
  }
});
