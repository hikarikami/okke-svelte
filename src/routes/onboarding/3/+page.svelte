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
		<h1 class="mt-8 text-2xl">Add your first bank account</h1>
		<p class="mt-2 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempora ullam modi.</p><p class="mt-4">Dolores quia tempore facilis, eius corrupti doloribus.  </p>
		<form>
	
			<div class="form mt-8 grid gap-6 bg-slate-50 rounded-lg p-6 ">
				<div class="flex flex-row items-center">
					<Image class="h-20 w-20 mr-4" />
					<p>Connect your bank account to automatically pull transactions in or something like that.</p>
				</div>
				<Button size="default" variant="outline">Connect Now</Button>
			
			</div>
			<div class="flex flex-col justify-center gap-4 md:flex-row mt-6">
				
				<a href="3"><Button size="default" variant="ghost">No thanks, I'll skip this for now</Button></a>
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
