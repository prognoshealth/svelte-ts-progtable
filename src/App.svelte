<script lang="ts">
  import ColumnDefinition from "./components/ColumnDefinition";

  import ProgTable from "./components/ProgTable.svelte";

  // Title at the top of the ProgTable
  const title: string = "Example Table";
  // Column Definitions. The order here is the initial order of display.
  // You can add and remove columns later, and nulls are allowed for empty columns.
  const columns: ColumnDefinition[] = [
    new ColumnDefinition("id", "Unique_Identifier", "id"),
    new ColumnDefinition("num_col", "Number Column", "number-column"),
    new ColumnDefinition("text_col", "Text Column", "text-column"),
    null,
    new ColumnDefinition("unique-col", "Unique-value column", "unique-column"),
  ];
  //
</script>

<main>
  <div id="example-progtable">
    <ProgTable {title} {columns} />
  </div>
</main>

<style>
  #example-progtable {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
</style>
