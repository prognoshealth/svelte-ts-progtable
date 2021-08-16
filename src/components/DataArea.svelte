<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";
  import ColumnHeader from "./ColumnHeader.svelte";
  import DataRow from "./DataRow.svelte";

  export let columns: ColumnDefinition[] = [];
  export let rows: string[][] = [];
</script>

<section>
  <table class="data-table">
    <ColumnHeader {columns} />
    {#each rows as rowData}
      <DataRow {columns} {rowData} />
    {/each}
  </table>
</section>
