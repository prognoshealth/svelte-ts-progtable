<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";
  import ColumnHeader from "./ColumnHeader.svelte";
  import DataRow from "./DataRow.svelte";
  import type FieldDefinition from "./FieldDefinition";

  export let columnDefinitions: ColumnDefinition[] = [];
  export let fieldDefinitions: FieldDefinition[][];
</script>

<section>
  <table class="data-table">
    <ColumnHeader {columnDefinitions} />
    {#each fieldDefinitions as fieldDefinitionRow}
      <DataRow {fieldDefinitionRow}/>
    {/each}
  </table>
</section>
