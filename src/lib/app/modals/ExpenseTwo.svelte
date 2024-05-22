<script lang="ts">

	import * as Dialog from '$lib/components/ui/dialog';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Table from '$lib/components/ui/table';
	import * as Select from '$lib/components/ui/select';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import { DatePicker } from 'bits-ui';
	import { flyAndScale } from '$lib/utils';
	import { tick } from 'svelte';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	

	import { cn } from '$lib/utils.js';

	/** Icons */
	import { CircleHelp } from 'lucide-svelte';
	import { SquareSplitHorizontal } from 'lucide-svelte';
	import CalendarIcon from 'lucide-svelte/icons/calendar';
	import { ArrowLeft } from 'lucide-svelte';
	import { ArrowRight } from 'lucide-svelte';
	import { FileText } from 'lucide-svelte';
	import { Info } from 'lucide-svelte';
	
	let checked = false;
</script>

<Dialog.Header>
	<Dialog.Title>New Expense</Dialog.Title>
</Dialog.Header>
<Dialog.Description>
	<div class="flex flex-col max-w-[640px]">
		<!-- Left Column -->
		
		<p>Looks like this is the first time you've recorded this expense.</p>
		<Tabs.Root value="business" class="w-full">
			<div class="flex flex-row items-center justify-between mt-4">
				<Label class="flex items-center">How often do you pay this?<Tooltip.Root>
					<Tooltip.Trigger><Info class="w-4 ml-1" /></Tooltip.Trigger>
					<Tooltip.Content>
						<p class="max-w-64 text-sm font-normal">Record an expense as a one-off, or have it repeat as often as needed. </p>
					</Tooltip.Content>
				  </Tooltip.Root></Label>
				<Tabs.List class="grid w-fit grid-cols-2">
					<Tabs.Trigger value="business">One-off Expense</Tabs.Trigger>
					<Tabs.Trigger value="personal">Recurring</Tabs.Trigger>
				</Tabs.List>
			</div>
			</Tabs.Root>
	
	
		
</Dialog.Description>
<Dialog.Footer></Dialog.Footer>
