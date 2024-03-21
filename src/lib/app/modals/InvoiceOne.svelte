<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<Dialog.Header>
	<Dialog.Title>Example Modal 1</Dialog.Title>
</Dialog.Header>
<Dialog.Description>
	<div class="grid-row-12 grid grid-cols-12 gap-x-16">
		<div class="col-span-6">
			<p>Let's get started by customising the look and feel of your invoices.</p>
			<div class="mt-6 flex flex-col gap-y-4">
				<div class="rounded-lg border p-4">
					<div class="flex flex-row items-end items-center gap-x-4">
						<div
							class="h-16 w-16 rounded-lg border border-dashed border-slate-300 bg-slate-100"
						></div>
						<div>
							<Label for="email">Upload your logo Email</Label>
							<p>Logos get you money or something.</p>
						</div>
						<Button size="sm" variant="secondary" class="ml-auto">Upload</Button>
					</div>
				</div>
				<div class="rounded-lg border p-4">
					<div class="flex flex-row items-center justify-between gap-x-4">
						<div>
							<Label for="email">Business Email</Label>
							<p>Show your business email address on invoices for easier contact.</p>
						</div>
						<Switch id="airplane-mode" />
					</div>
				</div>
				<div class="rounded-lg border p-4">
					<div class="flex flex-row items-center justify-between gap-x-4">
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
						<div class="mt-4 grid w-full gap-1.5">
							<Textarea placeholder="Enter your remittance advice" id="message" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="relative col-span-6 flex h-full w-full items-end justify-center overflow-hidden rounded border bg-slate-100 p-16 pb-0"
		>
			<div class="h-full w-full bg-white shadow-lg"></div>
		</div>
	</div>
</Dialog.Description>
<Dialog.Footer></Dialog.Footer>
