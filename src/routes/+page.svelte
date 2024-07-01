<script>
	import { Button } from 'flowbite-svelte';
	import FolderCard from '$lib/components/card/FolderCard.svelte';
	import GridFileCard from '$lib/components/card/GridFileCard.svelte';
</script>

<div class="h-auto">
	<div>
		<p class="py-3">โฟรเดอร์</p>
		<div class="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
			{#each Array(10) as _, i}
				<FolderCard title={'file' + i} color="red" />
			{/each}
		</div>
		<div>
			<p class="py-3">ไฟล์</p>
			<div class="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4">
				{#each Array(10) as _, i}
					<GridFileCard title={'file' + i} color="red" />
				{/each}
			</div>
		</div>
	</div>
</div>
