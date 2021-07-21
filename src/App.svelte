<script lang="ts">
  import ColumnDefinition from "./components/ColumnDefinition";

  import ProgTable from "./components/ProgTable.svelte";

  // Title at the top of the ProgTable
  const title: string = "Example Table";
  // Column Definitions. The order here is the initial order of display.
  // You can add and remove columns later, and nulls are allowed for empty columns.
  const columns: ColumnDefinition[] = [
    new ColumnDefinition("id", "Unique_Identifier"),
    new ColumnDefinition("num_col", "Number Column"),
    new ColumnDefinition("text_col", "Text Column"),
    null,
    new ColumnDefinition("unique-col", "Unique-value column"),
  ];
  //
</script>

<main>
  <ProgTable {title} {columns} />
</main>

<style>
  /*
    Example styles: choose your own to make it your own!
  */
</style>
