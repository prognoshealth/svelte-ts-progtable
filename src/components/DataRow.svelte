<script lang="ts">
  import type ColumnDefinition from "./ColumnDefinition";
  import Field from "./Field.svelte";
  import type FieldDefinition from "./FieldDefinition";

  export let fieldDefinitionRow: FieldDefinition[];
</script>

<tr>
  {#each fieldDefinitionRow as fieldDefinition}
    <Field field={fieldDefinition} />
  {/each}
</tr>
