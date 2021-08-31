<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";
  import type FieldDefinition from "./FieldDefinition";
  import Header from "./Header.svelte";
  import DataArea from "./DataArea.svelte";
  import Footer from "./Footer.svelte";

  export let title: string = "";
  export let id: string = "";
  // keeping these as simple arrays makes the coding more straightforward and faster.
  export let columnDefinitions: ColumnDefinition[] = [];
  export let fieldDefinitions: FieldDefinition[][] = [];
</script>

<div class="progtable" {id}>
  <Header {title} />
  <DataArea {columnDefinitions} {fieldDefinitions} />
  <Footer />
</div>

<style>
  .progtable {
    padding: 1em;
    max-width: 240px;
  }

  @media screen and (min-width: 640px) {
    .progtable {
      max-width: none;
    }
  }
</style>
