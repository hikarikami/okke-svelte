<script>
import Header from '$lib/app/Header.svelte';
import Sidebar from '$lib/app/Sidebar.svelte';
</script>

	<div class="flex flex-col h-dvh overflow-hidden">
		<Header />
		<main class="flex flex-row h-full">
			<Sidebar />
			<div class="h-full w-full overflow-auto pt-12 pb-32">
				<slot />
			</div>
		</main>
	</div>


