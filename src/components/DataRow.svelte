<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";
  import Field from "./Field.svelte";

  export let columns: ColumnDefinition[] = [];
  export let rowData: string[];
</script>

<tr>
  {#each columns as column, index}
    <Field {column} {rowData} {index} />
  {/each}
</tr>
