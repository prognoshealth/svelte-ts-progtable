<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";
  import Field from "./Field.svelte";

  export let columns: Array<ColumnDefinition> = null;
  export const rowData: Array<string> = [];
</script>

<tr>
  {#each columns as column, index}
    <Field {column} {rowData} {index} />
  {/each}
</tr>
