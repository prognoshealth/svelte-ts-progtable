<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";

  export let column: ColumnDefinition = null;
  export let rowData: string[] = [];
  export let index: number;

  const fieldValue = rowData[index];
</script>

<td class="field">{fieldValue}</td>
