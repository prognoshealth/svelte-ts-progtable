<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";

  export let columnDefinitions: ColumnDefinition[] = [];
</script>

{#if columnDefinitions.length > 0}
  <tr class="column-row">
    {#each columnDefinitions as column}
      {#if column == null}
        <th class="column-head" />
      {:else if column.id === null}
        <th
          class="column-head {column.classname}"
          title={column.titleText}
          >{column.displayName}
        </th>
      {:else}
        <th
          id={column.id}
          class="column-head {column.classname}"
          title={column.titleText}
          >{column.displayName}
        </th>
      {/if}
    {/each}
  </tr>
{/if}
