<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";
  import Header from "./components/Header.svelte";
  import ColumnHeader from "./components/ColumnHeader.svelte";
  import DataArea from "./components/DataArea.svelte";
  import Footer from "./components/Footer.svelte";

  export let id: string = "";
  export let columns: Array<ColumnDefinition> = [];
  export let rows: Array<Array<string>> = [];
</script>

<div class="progtable" id="progtable-{id}">
  <Header />
  <ColumnHeader {columns}/>
  <DataArea {columns} {rows}/>
  <Footer />
</div>

<style>
  #progtable {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  #progtable.h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media screen and (min-width: 640px) {
    #progtable {
      max-width: none;
    }
  }
</style>
