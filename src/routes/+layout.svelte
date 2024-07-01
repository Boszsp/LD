<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { Search, Button } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import {
		ChartPieSolid,
		GridSolid,
		MailBoxSolid,
		UserSolid,
		ArrowRightToBracketOutline,
		EditOutline
	} from 'flowbite-svelte-icons';
	import {
		Sidebar,
		SidebarBrand,
		SidebarGroup,
		SidebarItem,
		SidebarWrapper
	} from 'flowbite-svelte';
	let spanClass = 'flex-1 ms-3 whitespace-nowrap';
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
			<SidebarGroup border>
				<SidebarItem label="My Drive" href="/">
					<svelte:fragment slot="icon">
						<ChartPieSolid
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Document" href="/docs" >
					<svelte:fragment slot="icon">
						<GridSolid
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Gallery" href="/gallery" >
					<svelte:fragment slot="icon">
						<MailBoxSolid
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem
					label="Explore"
					href="/explore"
				>
					<svelte:fragment slot="icon">
						<UserSolid
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign In">
					<svelte:fragment slot="icon">
						<ArrowRightToBracketOutline
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
				<SidebarItem label="Sign Up">
					<svelte:fragment slot="icon">
						<EditOutline
							class="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
						/>
					</svelte:fragment>
				</SidebarItem>
			</SidebarGroup>
		</SidebarWrapper>
	</Sidebar>
	<div class="h-full w-10/12 overflow-hidden">
		<nav class="mb-5 flex w-full px-5 py-2">
			<form action="explore" method="get" class="flex w-1/2 gap-2">
				<Search name="search" class="w-full" size="md" />
				<Button type="submit" class="!p-2.5">
					<SearchOutline class="h-4 w-4" />
				</Button>
			</form>
		</nav>
		<div class="h-full w-full overflow-hidden px-5">
			<main class="h-full w-full overflow-auto rounded-xl bg-white p-5 pb-24 drop-shadow">
				<slot></slot>
			</main>
		</div>
	</div>
</div>
