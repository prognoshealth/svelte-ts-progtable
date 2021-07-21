<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";

  export let columns: ColumnDefinition[] = [];
</script>

{#if columns.length > 0}
  <tr class="column-row">
    {#each columns as column}
      {#if column == null}
        <th class="column-head" />
      {:else}
        <th class="column-head">{column.displayName}</th>
      {/if}
    {/each}
  </tr>
{/if}
