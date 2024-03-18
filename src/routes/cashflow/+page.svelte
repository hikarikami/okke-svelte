<script lang="ts">
	// Components
	import PageHeader from '$lib/app/PageHeader.svelte';
	import * as Dialog from '$lib/components/ui/dialog';

	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<svelte:head>
	<title>Invoices</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto">
	<PageHeader
		title="Cashflow"
		buttons={[{ label: 'blah', href: '#', variant: 'default', showIcon: true }]}
	/>
</div>
<div>
	<h1>Cashflow</h1>
</div>
