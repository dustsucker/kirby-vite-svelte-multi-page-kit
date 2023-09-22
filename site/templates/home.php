<?php $template = $page->template() ?>

<?php snippet('header'); ?>

<h1><?= $page->title() ?></h1>

<!--use web component-->
<hello-world></hello-world>

<!--import your svelte files-->
<?= vite()->js("templates/$template/index.svelte", try: true) ?>

<?php snippet('footer'); ?>