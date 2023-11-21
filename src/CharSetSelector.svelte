<script lang="ts">
  import { CharacterSet } from "./logic";

  export let selected: CharacterSet[] = [];
</script>

{#each [[CharacterSet.UppercaseLetters, "Uppercase Letters"], [CharacterSet.LowercaseLetters, "Lowercase Letters"], [CharacterSet.Numbers, "Numbers"], [CharacterSet.Symbols, "Symbols"]] as [val, label]}
  <div class="my-3">
    <label for="uppercase"
      ><input
        type="checkbox"
        class="mr-4 w-4 h-4 appearance-none border-2 border-white checked:bg-white"
        bind:group={selected}
        value={val}
      />Include {label}</label
    >
  </div>
{/each}
