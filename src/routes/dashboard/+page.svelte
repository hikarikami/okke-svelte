<script lang="ts">
	// Components
	import PageHeader from '$lib/app/PageHeader.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as Dialog from '$lib/components/ui/dialog';

	// Icons
	import Eye from 'lucide-svelte/icons/eye';
	import Pencil from 'lucide-svelte/icons/pencil';
	import RefreshCcw from 'lucide-svelte/icons/refresh-ccw';
	
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto">
	<PageHeader
		title="Dashboard"
		buttons={[
			{ label: 'Primary', href: '#', variant: 'default', showIcon: true },
			{ label: 'Secondary', href: '#', variant: 'outline', showIcon: false }
		]}
	/>
	<div class="mt-6 grid grid-cols-2 grid-rows-1 gap-x-6 gap-y-8">
		<!-- Document Tray -->
		<div class="card">
			<div class="card--header">Document Tray</div>
			<div class="card--content">
				<div class="flex flex-row items-center justify-between">
					<div class="">7 new documents waiting</div>
					<Button variant="outline" size="icon"><Eye /></Button>
				</div>
			</div>
			<div class="card--footer"></div>
		</div>
		<div></div>

		<!-- Transactions-->
		<div class="card ">
			<div class="card--header flex items-center">
				<div class="line-clamp-1 overflow-hidden">27 New Transactions  </div>
				<Button variant="link" size="icon" class="transition ease-in hover:text-purple-500 hover:rotate-90"><RefreshCcw class="w-4 h-4"></RefreshCcw></Button>
				
			</div>
			
			<div class="card--content ">
				<div class="flex flex-row items-center">
					<div class="transactions-widget flex w-full flex-col" id="GFG">
						<div class="transaction w-full">
							<div class="flex items-center gap-x-8">
								<div class="w-16">21/03/2024</div>
								<div class=" text-right">$201.55</div>
								<div class="">
									<span>Detected as</span>
									<Badge variant="secondary">Marketing</Badge>
								</div>
								<div class="ml-auto flex">
									<Button variant="outline" size="sm">Confirm</Button>
								</div>
							</div>
						</div>

						<div class="transaction w-full divide-y">
							<div class="flex items-center gap-x-8">
								<div class="w-16">21/03/2024</div>
								<div class=" text-right">$201.55</div>
								<div class="">
									<span>Detected as</span>
									<Badge variant="secondary">Marketing</Badge>
								</div>
								<div class="ml-auto flex">
									<Button variant="outline" size="sm">Confirm</Button>
								</div>
							</div>
						</div>

						<div class="transaction w-full divide-y">
							<div class="flex items-center gap-x-8">
								<div class="w-16">21/03/2024</div>
								<div class=" text-right">$201.55</div>
								<div class="">
									<span>Detected as</span>
									<Badge variant="secondary">Marketing</Badge>
								</div>
								<div class="ml-auto flex">
									<Button variant="outline" size="sm">Confirm</Button>
								</div>
							</div>
						</div>

						<div class="transaction w-full divide-y">
							<div class="flex items-center gap-x-8">
								<div class="w-16">21/03/2024</div>
								<div class=" text-right">$201.55</div>
								<div class="">
									<span>Detected as</span>
									<Badge variant="secondary">Marketing</Badge>
								</div>
								<div class="ml-auto flex">
									<Button variant="outline" size="sm">Confirm</Button>
								</div>
							</div>
						</div>

						<div class="transaction w-full divide-y">
							<div class="flex items-center gap-x-8">
								<div class="w-16">21/03/2024</div>
								<div class=" text-right">$201.55</div>
								<div class="">
									<span>Detected as</span>
									<Badge variant="secondary">Marketing</Badge>
								</div>
								<div class="ml-auto flex">
									<Button variant="outline" size="sm">Confirm</Button>
								</div>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<div class="card--footer mt-4">
				<Button size="default">View All</Button>
			</div>
		</div>
	</div>
</div>

<style>
	.card {
		@apply rounded-md border border-slate-300 bg-white p-5;
	}

	.card .card--header {
		@apply font-medium text-slate-800;
	}

	.transactions-widget .transaction {
		@apply py-2 hover:bg-indigo-50/25 hover:cursor-pointer;
	}


	.transactions-widget .transaction:not(:first-of-type) {
		@apply border-t border-slate-100;
	}
</style>
