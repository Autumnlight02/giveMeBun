<script lang="ts">
  export let packageName: string;

  let codeRef: HTMLElement;

  function onClick() {
    (
      document.querySelector(
        `[aria-label="Copy install command line"]`
      ) as HTMLButtonElement
    )?.click();

    navigator.clipboard.writeText("bun i " + packageName);
  }
</script>

<div
  class="d767adf4 lh-copy truncate ph0 mb3 black-80 b5be2af6 f6 flex flex-row"
>
  <svg viewBox="0 0 12.32 9.33" aria-hidden="true"
    ><g
      ><line class="st1" x1="7.6" y1="8.9" x2="7.6" y2="6.9"></line><rect
        width="1.9"
        height="1.9"
      ></rect><rect x="1.9" y="1.9" width="1.9" height="1.9"></rect><rect
        x="3.7"
        y="3.7"
        width="1.9"
        height="1.9"
      ></rect><rect x="1.9" y="5.6" width="1.9" height="1.9"></rect><rect
        y="7.5"
        width="1.9"
        height="1.9"
      ></rect></g
    ></svg
  >
  <p class="flex-auto truncate db ma0" on:click={() => onClick()}>
    <code data-bun_patch_ignore bind:this={codeRef}>bun i {packageName}</code
    ><button
      class="fbd04dd1"
      type="button"
      aria-label="Copy install command line-"
      ><svg
        aria-hidden="true"
        focusable="false"
        data-prefix="far"
        data-icon="copy"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        ><path
          d="M433.941 65.941l-51.882-51.882A48 48 0 0 0 348.118 0H176c-26.51 0-48 21.49-48 48v48H48c-26.51 0-48 21.49-48 48v320c0 26.51 21.49 48 48 48h224c26.51 0 48-21.49 48-48v-48h80c26.51 0 48-21.49 48-48V99.882a48 48 0 0 0-14.059-33.941zM266 464H54a6 6 0 0 1-6-6V150a6 6 0 0 1 6-6h74v224c0 26.51 21.49 48 48 48h96v42a6 6 0 0 1-6 6zm128-96H182a6 6 0 0 1-6-6V54a6 6 0 0 1 6-6h106v88c0 13.255 10.745 24 24 24h88v202a6 6 0 0 1-6 6zm6-256h-64V48h9.632c1.591 0 3.117.632 4.243 1.757l48.368 48.368a6 6 0 0 1 1.757 4.243V112z"
        ></path></svg
      ></button
    >
  </p>
</div>
