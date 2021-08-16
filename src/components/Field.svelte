<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";

  export let column: ColumnDefinition = null;
  export let rowData: string[] = [];
  export let index: number;

  const fieldValue: string = rowData[index];
</script>

<td class="field {column.classname}">{fieldValue}</td>
