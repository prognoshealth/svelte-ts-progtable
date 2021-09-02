<script lang="ts">
  import ColumnDefinition from "./components/ColumnDefinition";
  import FieldDefinition from "./components/FieldDefinition";

  import ProgTable from "./components/ProgTable.svelte";

  // Title at the top of the ProgTable
  const title: string = "Example Table";
  // Column Definitions. The order here is the order of display..
  const columnDefinitions: ColumnDefinition[] = [
    new ColumnDefinition("id", "Unique_Identifier", "id"),
    new ColumnDefinition("num_col", "Number Column", "number-column"),
    new ColumnDefinition("text_col", "Text Column", "text-column"),
    new ColumnDefinition("unique-col", "Unique-value column", "unique-column"),
  ];
  const fieldDefinitions: FieldDefinition[][] = [
    [
      new FieldDefinition("test1", "", ""),
      new FieldDefinition("test2", "", ""),
      new FieldDefinition("test3", "", ""),
      new FieldDefinition("test4", "", ""),
    ],
  ];
</script>

<main>
  <div id="example-progtable">
    <ProgTable {title} {columnDefinitions} {fieldDefinitions} />
  </div>
</main>

<style>
  #example-progtable {
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
</style>
