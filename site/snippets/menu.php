<!--defining webComponent and loading in the data as JSON String-->
<navigation-element children='<?= $site->children()->toJson()?>'></navigation-element>

<!--loading in the webComponent-->
<?= vite()->js("snippets/menu/Nav.svelte", try: true) ?>