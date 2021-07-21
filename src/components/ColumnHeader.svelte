<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";

  export let columns: Array<ColumnDefinition> = [];
</script>

{#if columns.length > 0}
  <tr class="column-row">
    {#each columns as column}
      <th class="column-head">{column.displayName}</th>
    {/each}
  </tr>
{/if}
