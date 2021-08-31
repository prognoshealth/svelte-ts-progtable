<script lang="ts">
  export let title: string = "";
</script>

<section>
  {#if title.length > 0}
    <div class="title">{title}</div>
    <hr />
  {/if}
</section>
