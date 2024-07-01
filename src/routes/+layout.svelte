<script>
	// Supports weights 100-900
	import '@fontsource-variable/noto-sans-thai';
	import '../app.css';

	import { page } from '$app/stores';
	import { Search, Button } from 'flowbite-svelte';
	import {
		SearchOutline,
		HomeSolid,
		FileLinesSolid,
		ImageSolid,
		RocketSolid,
		CirclePlusSolid
	} from 'flowbite-svelte-icons';
	import {
		Sidebar,
		SidebarBrand,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	let activeClass =
		'flex items-center p-2 text-base font-normal  bg-primary-800 dark:bg-primary-200 rounded-lg dark:text-white hover:bg-primary-700';

	$: activeUrl = $page.url.pathname;
	let site = {
		name: 'LocalDrive',
		href: '/',
		img: '/favicon.png'
	};
</script>

<div class="flex h-full">
	<Sidebar {activeUrl} {activeClass}>
		<SidebarWrapper class="bg-background-950">
			<SidebarGroup>
				<SidebarBrand {site} />
			</SidebarGroup>
			<SidebarGroup class="my-6">
				<Button class="shadow">
					<CirclePlusSolid class="me-2 h-5 w-5" />เพิ่ม
				</Button>
			</SidebarGroup>

			<SidebarGroup>
				<SidebarItem label="My Drive" href="/">
					<svelte:fragment slot="icon">
						<HomeSolid
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Document" href="/document">
					<svelte:fragment slot="icon">
						<FileLinesSolid
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Gallery" href="/gallery">
					<svelte:fragment slot="icon">
						<ImageSolid
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Explore" href="/explore">
					<svelte:fragment slot="icon">
						<RocketSolid
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
	<div class="h-full w-10/12 overflow-hidden">
		<header class="mb-2 flex w-full px-5 py-2">
			<form action="explore" method="get" class="flex w-1/2 gap-2">
				<Search name="search" class="w-full" size="md" />
				<Button type="submit" class="!p-2.5">
					<SearchOutline class="h-4 w-4" />
				</Button>
			</form>
		</header>
		<div class="h-full w-full overflow-hidden px-5">
			<div class="flex h-full w-full flex-col rounded-xl bg-white p-5 drop-shadow">
				<nav class="pb-5">
					<p class="text-xl">
						{activeUrl.replace('/', '')?.slice(0, 1).toUpperCase() +
							activeUrl.replace('/', '')?.slice(1) || 'Home'}
					</p>
				</nav>
				<main class="h-full w-full overflow-auto pb-24">
					<slot></slot>
				</main>
			</div>
		</div>
	</div>
</div>
