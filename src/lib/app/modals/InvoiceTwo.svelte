<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
</script>

<Dialog.Header>
	<Dialog.Title>Example Modal 2</Dialog.Title>
</Dialog.Header>
<Dialog.Description>
	<fieldset>
		<div class="mt-4 grid grid-cols-3 gap-4">
			<label for="Modern"
       class="layout-style group">
				Classic
				<input
					name="invoice_type"
					id="Modern"
					value="Modern"
					type="radio"
					class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
					checked
				/>
        <div class="preview bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7] relative -z-10"></div>
			</label>
			<label
				for="Classic"
        class="layout-style group"
			
			>
				Modern

				<input
					name="invoice_type"
					id="Classic"
					value="Classic"
					type="radio"
					class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
				/>
       <div class="preview bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7] relative -z-10"></div>
			</label>
			<label
				for="Fun"
        class="layout-style group"
			>
				Fun

				<input
					name="invoice_type"
					id="Fun"
					value="Fun"
					type="radio"
					class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
				/>
       <div class="preview bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7] relative -z-10"></div>
			</label>

			<label
				for="Other1"
				class="layout-style group"
			>
				Other
				<input
					name="invoice_type"
					id="Other1"
					value="Fun"
					type="radio"
					class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
				/>
       <div class="preview bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7] relative -z-10"></div>
			</label>

			<label
				for="Other2"
				class="layout-style group"
			>
				Other
       
				<input
					name="invoice_type"
					id="Other2"
					value="Fun"
					type="radio"
					class="peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
				/>
       <div class="preview bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7] relative -z-10"></div>
			</label>

      <label
				for="Other3"
				class="layout-style gap-y-24 group"
			>
			Last One
       
				<input
					name="invoice_type"
					id="Other3"
					value="Fun"
					type="radio"
					class="peer peer absolute right-4 box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
				/>
        <div class="preview bg-indigo-50 group-hover:scale-90 peer-checked:scale-[1.7] relative -z-10"></div>
			</label>
		</div>
	</fieldset>
</Dialog.Description>
<Dialog.Footer></Dialog.Footer>

<style>
	.layout-style {
		@apply  relative border items-center gap-6 rounded-lg p-4 min-h-40 overflow-hidden text-lg text-slate-700 ring-1 ring-transparent hover:border-slate-300 hover:cursor-pointer has-[:checked]:bg-indigo-50/20 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-300;
	}


  .layout-style .preview {
    @apply w-full h-40 mt-2  rounded-md transition-transform  duration-300 bg-indigo-50;
  }
</style>
