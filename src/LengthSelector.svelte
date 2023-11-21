<script lang="ts">
  import { MIN_LEN, MAX_LEN } from "./logic";

  export let len = MIN_LEN;
</script>

<div class="flex justify-between items-center mb-4">
  <span>Character Lenght</span>
  <span class="text-green-300 text-3xl">{len}</span>
</div>
<input
  type="range"
  min={MIN_LEN}
  max={MAX_LEN}
  step="1"
  bind:value={len}
  class="w-full h-2 appearance-none cursor-pointer bg-neutral-900"
/>

<style>
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 26px;
    width: 26px;
    border-radius: 13px;
    cursor: pointer;
    background: #ffffff;
  }

  input[type="range"]::-moz-range-thumb {
    height: 26px;
    width: 26px;
    border-radius: 13px;
    cursor: pointer;
    background: #ffffff;
    border: none;
  }
</style>
