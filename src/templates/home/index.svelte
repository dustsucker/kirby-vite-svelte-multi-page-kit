<svelte:options
        customElement="hello-world"
/>

<script>
    let count = 0;

</script>

<h2>Hello From Svelte</h2>

<button on:click={()=>count++}>{count}</button>

<style>
    h2 {
        color: red;
    }
</style>