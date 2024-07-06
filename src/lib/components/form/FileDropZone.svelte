<script>
	import { Dropzone } from 'flowbite-svelte';

	export let value = [],
		files = [];
	const dropHandle = (event) => {
		value = [];
		event.preventDefault();
		if (event.dataTransfer.items) {
			[...event.dataTransfer.items].forEach((item, i) => {
				if (item.kind === 'file') {
					const file = item.getAsFile();
					value.push(file.name);
					files.push(file);
					value = value;
					files = files;
				}
			});
		} else {
			[...event.dataTransfer.fs].forEach((file, i) => {
				value = file.name;
				files = [file];
			});
		}
	};

	const handleChange = (event) => {
		const fs = event.target.files;
		if (fs.length > 0) {
			value.push(fs[0].name);
			files.push(fs[0]);
			value = value;
			files = files;
		}
	};

	const showFiles = (fs) => {
		if (fs.length === 1) return fs[0];
		let concat = '';
		fs.map((file) => {
			concat += file;
			concat += ',';
			concat += ' ';
		});

		if (concat.length > 40) concat = concat.slice(0, 40);
		concat += '...';
		return concat;
	};
</script>

<Dropzone
name="file"
	id="dropzone"
	on:drop={dropHandle}
	on:dragover={(event) => {
		event.preventDefault();
	}}
	on:change={handleChange}
>
	<svg
		aria-hidden="true"
		class="mb-3 h-10 w-10 text-gray-400"
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
		xmlns="http://www.w3.org/2000/svg"
		><path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
		/></svg
	>
	{#if value.length === 0}
		<p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
			<span class="font-semibold">Click to upload</span> or drag and drop
		</p>
	{:else}
		<p>{showFiles(value)}</p>
	{/if}
</Dropzone>
