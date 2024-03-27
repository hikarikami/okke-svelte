<script lang="ts">
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Select from '$lib/components/ui/select';
	import { cn } from '$lib/utils.js';
	import { tick } from 'svelte';
	import { Variable } from 'lucide-svelte';
	import { Image } from 'lucide-svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';

	import logo from '$lib/images/okke-logo-dark.svg';
</script>

<div class="flex w-full items-start bg-white pt-24 md:w-8/12">
	<div class="mx-auto mt-16 flex w-full flex-col justify-center md:mt-0 md:max-w-[30em]">
		<h1 class="mt-8 text-2xl">What are you interested in using?</h1>
		<p class="mt-2 leading-relaxed">Select the options you're most keen to try out.</p>
		<form>
			<fieldset>
				<div class="mt-6 grid grid-cols-1 gap-4">
					<label for="invoices" class="layout-style group">
						Sending Invoices
						<input
							name="invoice_type"
							id="invoices"
							value="invoices"
							type="checkbox"
							class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-sm border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
						/>
					
					</label>
					<label for="tracking-expenses" class="layout-style group">
						Tracking Expenses

						<input
							name="invoice_type"
							id="tracking-expenses"
							value="tracking-expenses"
							type="checkbox"
							class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-sm border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
						/>
						
					</label>
					<label for="automating-records" class="layout-style group">
						Automating Records

						<input
							name="invoice_type"
							id="automating-records"
							value="automating-records"
							type="checkbox"
							class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-sm border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
						/>
					
					</label>

					<label for="Reports-and-GST" class="layout-style group">
						Reports &amp; GST
						<input
							name="invoice_type"
							id="Reports-and-GST"
							value="Reports-and-GST"
							type="checkbox"
							class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-sm border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
						/>
					
					</label>

					<label for="digital-payments" class="layout-style group">
						Getting Paid Online

						<input
							name="invoice_type"
							id="digital-payments"
							value="digital-payments"
							type="checkbox"
							class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-sm border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
						/>
					
					</label>

				</div>
			</fieldset>

			
			<div class="flex flex-col justify-end gap-4 md:flex-row mt-6">
				<a href="1"><Button size="default" variant="secondary" class="w-fit">Previous</Button></a>
				<a href="3"><Button size="default" variant="default" class="w-fit">Next Step</Button></a>
			</div>
		</form>
	</div>
</div>
<div class="hidden items-center justify-center bg-slate-100 sm:flex md:w-4/12">
	<Image class="h-16 w-16" />
</div>

<style>
	.layout-style {
		@apply relative min-h-8 flex items-center  gap-6 overflow-hidden rounded-lg border p-4 text-slate-700 ring-1 ring-transparent hover:cursor-pointer hover:border-slate-300 has-[:checked]:bg-indigo-50/20 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-300;
	}

	.layout-style .preview {
		@apply mt-2 h-8 w-full rounded-md bg-indigo-50  transition-transform duration-300;
	}

	.invoice-layout > div {
		@apply hidden;
	}
</style>
