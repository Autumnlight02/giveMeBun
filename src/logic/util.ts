export function afterLoadOrChange(callback: () => any) {
  window.addEventListener("locationchange", function () {
    console.log("location changed!");
  });

  if (document.readyState === "complete") {
    callback();
  } else {
    document.addEventListener("load", () => {
      callback();
    });
  }
}
