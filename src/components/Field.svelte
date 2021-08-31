<script lang="ts">
  import type FieldDefinition from "./FieldDefinition";

  export let field: FieldDefinition;
</script>

<td class="field {field.classname} " title={field.titleText}>{field.value}</td>
