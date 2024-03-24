<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';

	let invoiceLayout = "";
</script>

<Dialog.Header>
	<Dialog.Title>Setting Up Your Invoices</Dialog.Title>
</Dialog.Header>
<Dialog.Description>
	<fieldset>
		<div class="grid-row-12 grid grid-cols-12 gap-x-16">
			<div class="col-span-6">
				<h2 class="font-bold">Choose A Layout</h2>
        <p>Define the look and feel of your invoices. This can be changed later.</p>
				<div class="mt-6 grid grid-cols-3 gap-4">
					<label for="classic" class="layout-style group">
						Classic
						<input
							name="invoice_type"
							id="classic"
							value="classic"
							type="radio"
							class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
							bind:group={invoiceLayout}
							checked
						/>
						<div
							class="preview relative -z-10 bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7]"
						></div>
					</label>
					<label for="modern" class="layout-style group">
						Modern

						<input
							name="invoice_type"
							id="modern"
							value="modern"
							type="radio"
							class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
							bind:group={invoiceLayout}
							/>
						<div
							class="preview relative -z-10 bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7]"
						></div>
					</label>
					<label for="fun" class="layout-style group">
						Fun

						<input
							name="invoice_type"
							id="fun"
							value="fun"
							type="radio"
							class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
							bind:group={invoiceLayout}
							/>
						<div
							class="preview relative -z-10 bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7]"
						></div>
					</label>

					<label for="contemporary" class="layout-style group">
						Contemporary
						<input
							name="invoice_type"
							id="contemporary"
							value="contemporary"
							type="radio"
							class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
							bind:group={invoiceLayout}
							/>
						<div
							class="preview relative -z-10 bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7]"
						></div>
					</label>

					<label for="other" class="layout-style group">
						Other

						<input
							name="invoice_type"
							id="other"
							value="other"
							type="radio"
							class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
							bind:group={invoiceLayout}
							/>
						<div
							class="preview relative -z-10 bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7]"
						></div>
					</label>

					<label for="last" class="layout-style group gap-y-24">
						Last One

						<input
							name="invoice_type"
							id="last"
							value="last"
							type="radio"
							class="peer peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
							bind:group={invoiceLayout}
							/>
						<div
							class="preview relative -z-10 bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7]"
						></div>
					</label>
				</div>
			</div>

			<div
				class="invoice-layout {invoiceLayout} relative col-span-6 flex h-full w-full items-end justify-center overflow-hidden rounded border bg-slate-100 p-16 pb-0 md:min-h-[50dvh]"
			>
				<div class="h-full w-full bg-white shadow-lg p-6">
					<div class="invoice--title">Invoice #0001</div>
					<div class="invoice--details">
						<ul>
							<li>Address</li>
							<li>Number</li>
							<li>Email</li>
						</ul></div>
				</div>
			</div>
		</div>
	</fieldset>
</Dialog.Description>
<Dialog.Footer></Dialog.Footer>

<style>
	.layout-style {
		@apply relative min-h-40 items-center gap-6 overflow-hidden rounded-lg border p-4 text-lg text-slate-700 ring-1 ring-transparent hover:cursor-pointer hover:border-slate-300 has-[:checked]:bg-indigo-50/20 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-300;
	}

	.layout-style .preview {
		@apply mt-2 h-40 w-full rounded-md bg-indigo-50  transition-transform duration-300;
	}

	.invoice-layout > div {
		@apply hidden
	}

	/** Classic  */
	.invoice-layout.classic > div {
		@apply flex flex-col gap-y-1
	}

	.invoice-layout.classic .invoice--title
	{
		@apply text-xl font-bold capitalize border-b-4 pb-1;
	}

	.invoice-layout.classic .invoice--details
	{
		@apply text-base capitalize;
	}

	/** Modern */

	.invoice-layout.modern > div {
		@apply flex flex-col gap-y-1 font-serif
	}

	.invoice-layout.modern .invoice--title
	{
		@apply text-xl font-bold capitalize border-l-4 pb-1 pl-2;
	}

	.invoice-layout.modern .invoice--details
	{
		@apply text-sm capitalize;
	}



</style>
