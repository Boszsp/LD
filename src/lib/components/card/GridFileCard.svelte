<script>
	export let color, title, href, cardClass;
	import { FileSolid } from 'flowbite-svelte-icons';
	import { Card } from 'flowbite-svelte';
</script>

<Card
	shadow={false}
	class={'bg-primary-900 !p-3 transition hover:bg-primary-800 ' + cardClass}
	{href}
>
	<div class="mb-3 flex gap-2"><FileSolid class="h-5 w-5" {color} /> {title}</div>
	<div class="aspect-[4/3] rounded bg-white"></div>
</Card>
