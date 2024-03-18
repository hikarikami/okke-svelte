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
		title="Invoices"
		buttons={[{ label: 'Create New Invoice', href: '#', variant: 'default', showIcon: true }]}
	/>
</div>
<div>
	<Dialog.Root>
		<Dialog.Trigger>Open</Dialog.Trigger>
		<Dialog.Content class="w-[90vw]">
			<Dialog.Header>
				<Dialog.Title class="text-xl">Customise Your Invoicing</Dialog.Title>
				<Dialog.Description>
					<div class="grid-row-12 grid grid-cols-12 gap-x-16">
						<div class="col-span-6">
							<p>Let's get started by customising the look and feel of your invoices.</p>
							<div class="mt-6 flex flex-col gap-y-4">
								<div class="rounded-lg border p-4">
									<div class="flex flex-row items-end items-center gap-x-4">
										<div class="rounded-lg bg-slate-100 border border-slate-300 border-dashed w-16 h-16"></div>
										<div>
											<Label for="email">Upload your logo Email</Label>
											<p>Logos get you money or something.</p>
										</div>
										<Button size="sm" variant="secondary" class="ml-auto">Upload</Button>
										
									</div>
								</div>
								<div class="rounded-lg border p-4">
									<div class="flex flex-row  items-center justify-between gap-x-4">
										<div>
											<Label for="email">Business Email</Label>
											<p>Show your business email address on invoices for easier contact.</p>
										</div>
										<Switch id="airplane-mode" />
									</div>
								</div>
								<div class="rounded-lg border p-4">
									<div class="flex flex-row  items-center justify-between gap-x-4">
										<div>
											<Label for="email">Business Contact Number</Label>
											<p>Show your business email address on invoices for easier contact.</p>
										</div>
										<Switch id="airplane-mode" />
									</div>
								</div>
								<div class="rounded-lg border p-4">
									<div>
										<div class="flex flex-row items-center justify-between gap-x-4">
											<div>
												<Label for="email">Payment Details</Label>
												<p>Show your business email address on invoices for easier contact.</p>
											</div>
											<Switch id="airplane-mode" />
										</div>
										<div class="grid w-full gap-1.5 mt-4">
										
											<Textarea placeholder="Enter your remittance advice" id="message" />
										  </div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-span-6 flex h-full w-full rounded border bg-slate-100 relative justify-center items-end overflow-hidden p-16 pb-0">
							<div class="w-full h-full bg-white shadow-lg ">

							</div>
						</div>
					</div>
				</Dialog.Description>
			</Dialog.Header>
			<Dialog.Footer>
				<Button>Continue</Button>
			  </Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
