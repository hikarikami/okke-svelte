<script lang="ts">
	// Components
	import PageHeader from '$lib/app/PageHeader.svelte';
	import DataTable from "./data-table.svelte";



</script>

<svelte:head>
	<title>Transactions</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto">
	<PageHeader
		title="Transactions"
		buttons={[{ label: 'Add Manual', href: '#', variant: 'default', showIcon: true }, { label: 'Refresh Feed', href: '#', variant: 'secondary', showIcon: false }]}
	/>
	<div class="mt-4">
		<DataTable />
	</div>
</div>

