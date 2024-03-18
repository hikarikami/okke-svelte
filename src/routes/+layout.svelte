<script lang="ts">
	import '../app.pcss';
	import Header from '../lib/app/Header.svelte';
	import Sidebar from '../lib/app/Sidebar.svelte';
	import './styles.css';
</script>

<div class="app h-full">
	<div class="flex flex-col h-full overflow-hidden">
		<Header></Header>
		<main class="flex flex-row h-full">
			<Sidebar />
			<div class="h-full w-full overflow-auto pt-10">
				<slot />
			</div>
		</main>
	</div>
</div>
