<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";
  import Header from "./Header.svelte";
  import DataArea from "./DataArea.svelte";
  import Footer from "./Footer.svelte";

  export let title:string = "";
  export let id: string = "";
  // keeping these as simple arrays makes the coding more straightforward and faster.
  export let columns: ColumnDefinition[] = [];
  export let rows: string[][] = [];
</script>

<div class="progtable" id="progtable-{id}">
  <Header {title} />
  <DataArea {columns} {rows} />
  <Footer />
</div>

<style>
  #progtable {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media screen and (min-width: 640px) {
    #progtable {
      max-width: none;
    }
  }
</style>
