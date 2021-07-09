<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";

  export const column: ColumnDefinition = null;
  export const rowData: Array<string> = null;
  export const index: number = -1;

  const fieldValue = rowData[index];
</script>

<td class="field">{fieldValue}</td>
