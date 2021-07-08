<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";
  import Header from "./Header.svelte";
  import ColumnHeader from "./ColumnHeader.svelte";
  import DataArea from "./DataArea.svelte";
  import Footer from "./Footer.svelte";

  export let id: string = "";
  export let columns: Array<ColumnDefinition> = [];
  export let rows: Array<Array<string>> = [];
</script>

<div class="progtable" id="progtable-{id}">
  <Header />
  <ColumnHeader {columns} />
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
