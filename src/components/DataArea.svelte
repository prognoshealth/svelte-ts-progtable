<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";
  import ColumnHeader from "./ColumnHeader.svelte";
  import DataRow from "./DataRow.svelte";

  export let columns: Array<ColumnDefinition> = [];
  export let rows: Array<Array<string>> = [];
</script>

<table class="data-table">
  <ColumnHeader {columns} />
  {#each rows as rowData}
    <DataRow {columns} {rowData} />
  {/each}
</table>
