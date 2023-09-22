<!--Defining the tag and props learn More -> https://svelte.dev/docs/custom-elements-api -->
<svelte:options
customElement={{
    tag: 'navigation-element',
    props: {
        children: { reflect: true, type: 'Object', attribute: 'element-index' },
    }
}}/>

<script>
    export let children = [];

    /*you should keep trak of your data structure provided by kirby */
    console.log(children);
</script>

<nav>
    <ul>
        {#each Object.keys(children) as childKey}
        <li>
            <a href={children[childKey].url}>{children[childKey].content.title}</a>
        </li>
        {/each}
    </ul>
</nav>