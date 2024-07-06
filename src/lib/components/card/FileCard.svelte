<script>
	export let color, title, href, cardClass,id;
	import { FileSolid,CloseOutline } from 'flowbite-svelte-icons';
	import { Card } from 'flowbite-svelte';
	import { Button } from 'flowbite-svelte';

	export let onDelete = (id,title)=>{}
</script>

<Card
	shadow={false}
	class={'bg-primary-900 !p-3  ' + cardClass}
	{href}
>
	<div class="flex gap-2"><FileSolid class="h-5 w-5" {color} /> <p class="w-full truncate">{title}</p> <Button on:click={()=>onDelete(id,title)} class="!p-2" pill={true}><CloseOutline class="h-3 w-3"  /></Button></div>
</Card>
