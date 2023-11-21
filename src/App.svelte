<script lang="ts">
  import { CharacterSet, generate, MIN_LEN } from "./logic";
  import CharSetSelector from "./CharSetSelector.svelte";
  import LengthSelector from "./LengthSelector.svelte";
  import StrenghtMeter from "./StrenghtMeter.svelte";

  let selectedCharsets: CharacterSet[] = [];
  let len = MIN_LEN;
  let password = "";

  let hide_copied = true;
  function copy() {
    navigator.clipboard.writeText(password);
    hide_copied = false;
    setTimeout(() => {
      hide_copied = true;
    }, 1500);
  }
</script>

<main class="bg-neutral-900 h-full flex items-center justify-center">
  <div class="p-6 rounded-xl w-[600px]">
    <h1 class="text-center mb-6 text-xl">Password Generator</h1>
    <div
      class="bg-[#24232b] mb-7 p-6 text-2xl leading-none text-gray-400 flex justify-between items-start"
    >
      <span>{password}</span>
      <button
        on:click={copy}
        disabled={password === ""}
        class="text-green-300 disabled:text-gray-400 relative"
      >
        <span class="material-symbols-outlined">content_copy</span>
        <div
          class:hidden={hide_copied}
          class="copied p-1 border-2 text-sm bg-white text-black font-semibold absolute -top-[calc(100%+16px)] left-[50%] translate-x-[-50%]"
        >
          Copied!
        </div>
      </button>
    </div>
    <div class="bg-[#24232b] px-6 py-7 text-xl">
      <LengthSelector bind:len />
      <div class="mt-6" />
      <CharSetSelector bind:selected={selectedCharsets} />
      <StrenghtMeter {len} {selectedCharsets} />
      <button
        on:click={() => (password = generate(selectedCharsets, len))}
        disabled={selectedCharsets.length === 0}
        class="bg-green-300 disabled:bg-gray-400 p-4 w-full text-[#24232b] text-base font-semibold hover:bg-green-400 font-sans"
      >
        GENERATE
      </button>
    </div>
  </div>
</main>

<style>
  .hidden {
    display: none;
  }

  .copied:after {
    content: "";
    position: absolute;
    display: block;
    width: 0;
    z-index: 1;
    border-left: 13px solid transparent;
    border-right: 13px solid transparent;
    border-top: 13px solid white;
    bottom: -13px;
    left: 50%;
    transform: translatex(-50%);
  }
</style>
