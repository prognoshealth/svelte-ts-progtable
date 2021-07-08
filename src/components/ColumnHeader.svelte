<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";

  export let columns: Array<ColumnDefinition> = [];
</script>

{#each columns as column}
  <div>{column.displayName}</div>
{/each}
