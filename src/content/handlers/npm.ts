import Install from "./Install.svelte";
import { afterLoadOrChange } from "../../logic/util";

export default function handleNPM() {
  afterLoadOrChange(() => {
    patchInstallCommand();
    patchCodeBlocks();
  });
}

console.log("b");

function patchInstallCommand() {
  const installElement = [...document.querySelectorAll("h3")].filter(
    (e) =>
      e.textContent === "Install" && e.previousElementSibling?.tagName === "H2"
  )[0];
  if (installElement === undefined) {
    console.warn("Install Hook failed, could not find element.");
    return;
  }
  const nodeJSClickButton = document.querySelector(
    ".flex-auto.truncate > code"
  );

  const mountPoint = document.createElement("div");
  installElement.after(mountPoint);

  const packageName = nodeJSClickButton?.textContent?.slice(6) ?? "Not Found";
  nodeJSClickButton?.setAttribute("data-bun_patch_ignore", "");

  const installEle = new Install({
    target: mountPoint,
    props: { packageName: packageName },
  });
}

function patchCodeBlocks() {
  let anyBunFound = false;
  const rawBlocks = [
    ...document.querySelectorAll("code"),
    ...document.querySelectorAll("pre"),
  ].filter((e) => e.getAttribute("data-bun_patch_ignore") === null);

  // checking if bun is mentioned at all.
  if (rawBlocks.filter((e) => e.textContent?.includes("bun")).length !== 0) {
    console.info("code Blocks include Bun, skipping patch");
    return;
  }

  const blocks = rawBlocks.filter(
    (e) => e.textContent?.includes("npm ") || e.textContent?.includes("npx ")
  );
  console.log(blocks);
  createBunBlock(blocks);
}

function createBunBlock(blocks: HTMLElement[]) {
  blocks.forEach((e) => {
    const newCopy = e.cloneNode(true);
    newCopy.textContent =
      newCopy.textContent
        ?.replaceAll("npm ", "bun ")
        .replaceAll("npx ", "bunx ") ?? "";
    if (newCopy.textContent === "") return;

    const parentTarget = e.parentElement?.parentElement?.classList.contains(
      "highlight"
    )
      ? e.parentElement.parentElement!
      : e.parentElement;

    const parent = parentTarget?.cloneNode(false);
    if (parent !== undefined) {
      parent.appendChild(newCopy);
      e.after(parent);
    } else {
      e.after(newCopy);
    }
  });
}
