<script lang="ts">
  import type ColumnDefinition from "../ColumnDefinition";
  import DataRow from "./DataRow.svelte"

  export let columns: Array<ColumnDefinition> = [];
  export let rows: Array<Array<string>> = [];

</script>

{#each rows as rowData}
  <DataRow {columns} {rowData} />
{/each}
