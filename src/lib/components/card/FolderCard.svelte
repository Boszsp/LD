<script>
	export let color, title, href, cardClass;
	import { FolderSolid } from 'flowbite-svelte-icons';
	import { Card } from 'flowbite-svelte';
</script>

<Card
	shadow={false}
	class={'bg-primary-900 !p-3 transition hover:bg-primary-800 ' + cardClass}
	{href}
>
	<div class="flex gap-2"><FolderSolid class="h-5 w-5" {color} /> {title}</div>
</Card>
