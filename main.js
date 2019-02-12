function changeCSSProperties() {
  const x = event.clientX; // Get the horizontal coordinate
  const y = event.clientY; // Get the vertical coordinate
  let ww = window.innerWidth;
  let wh = window.innerHeight;
  //blur from 0 to width/height / 2 up, later down
  let xblur = x < ww / 2 ? x % (ww / 2) : ww / 2 - (x % (ww / 2));
  let yblur = y < wh / 2 ? y % (wh / 2) : wh / 2 - (y % (wh / 2));

  //100% = max(xblur) + max(yblur)
  function combineVals(xb, yb, ww, wh) {
    return ((xb + yb) / (ww / 2 + wh / 2)) * 50;
  }
  let combined = combineVals(xblur, yblur, ww, wh);
  console.log(combined);
  document.documentElement.style.setProperty("--blur", `${50 - combined}px`);
}

document.addEventListener("mousemove", changeCSSProperties);
