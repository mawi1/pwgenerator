<script lang="ts">
  import { CharacterSet, strenght, STRENGHT_SCALE_WITH } from "./logic";

  export let selectedCharsets: CharacterSet[] = [];
  export let len: number = 0;

  $: s = strenght(selectedCharsets, len);
</script>

<div class="flex justify-between items-center bg-neutral-900 p-4 my-6">
  <span class="font-semibold tracking-widest text-gray-400 text-base"
    >STRENGHT</span
  >
  <span class="text-4xl">
    {#each Array(s) as _}&#9646;{/each}{#each Array(STRENGHT_SCALE_WITH - s) as _}&#9647;{/each}
  </span>
</div>
