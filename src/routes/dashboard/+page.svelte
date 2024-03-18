
<script lang="ts">
	
	// Components
	import PageHeader from '$lib/app/PageHeader.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from "$lib/components/ui/dialog";

	
	</script>


<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto">
	<PageHeader title="Dashboard"  buttons={[{ label: 'Primary', href: '#', variant: "default", showIcon: true }, { label: 'Secondary', href: '#', variant: "outline", showIcon: false }]} />
</div>
