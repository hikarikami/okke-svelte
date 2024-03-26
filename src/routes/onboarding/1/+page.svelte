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

	const industries = [
		{ value: 'web_design', label: 'Web Design' },
		{ value: 'cleaning_services', label: 'Cleaning Services' },
		{ value: 'consulting', label: 'Consulting' },
		{ value: 'retail', label: 'Retail' },
		{ value: 'e-commerce', label: 'E-commerce' },
		{ value: 'restaurants', label: 'Restaurants' },
		{ value: 'healthcare', label: 'Healthcare' },
		{ value: 'legal_services', label: 'Legal Services' },
		{ value: 'real_estate', label: 'Real Estate' },
		{ value: 'construction', label: 'Construction' },
		{ value: 'manufacturing', label: 'Manufacturing' },
		{ value: 'education', label: 'Education' },
		{ value: 'financial_services', label: 'Financial Services' },
		{ value: 'insurance', label: 'Insurance' },
		{ value: 'transportation', label: 'Transportation' },
		{ value: 'hospitality', label: 'Hospitality' },
		{ value: 'technology', label: 'Technology' },
		{ value: 'agriculture', label: 'Agriculture' },
		{ value: 'energy', label: 'Energy' },
		{ value: 'entertainment', label: 'Entertainment' },
		{ value: 'publishing', label: 'Publishing' },
		{ value: 'non-profit', label: 'Non-profit' },
		{ value: 'government', label: 'Government' },
		{ value: 'personal_services', label: 'Personal Services' },
		{ value: 'beauty_&_wellness', label: 'Beauty & Wellness' },
		{ value: 'fitness', label: 'Fitness' },
		{ value: 'food_&_beverage', label: 'Food & Beverage' },
		{ value: 'event_planning', label: 'Event Planning' },
		{ value: 'marketing', label: 'Marketing' },
		{ value: 'photography', label: 'Photography' }
	];

	let open = false;
	let value = '';

	$: selectedValue = industries.find((f) => f.value === value)?.label ?? 'Search an industry...';

	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger(triggerId: string) {
		open = false;
		tick().then(() => {
			document.getElementById(triggerId)?.focus();
		});
	}
</script>

<div class="flex w-full items-start pt-24 bg-white md:w-8/12">
	<div class="mx-auto mt-16 flex w-full flex-col justify-center md:mt-0 md:max-w-[30em]">
		<!-- <a href="/"><img src={logo} alt="okke" width="64" class="w-20" /></a> -->
		<form>
			<h1 class="mt-8 text-2xl">Let's get started!</h1>
			<p class="mt-2 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
			<div class="form mt-8 grid gap-6">
				<div class="grid w-full items-center gap-2">
					<Label for="email">Business name</Label>
					<Input type="email" id="email" placeholder="" />
				</div>

                <div class="grid gap-2 w-full">
                    <Label >What industry is your business in?</Label>
				<Popover.Root bind:open let:ids>
					<Popover.Trigger asChild let:builder>
						<Button
							builders={[builder]}
							variant="outline"
							role="combobox"
							aria-expanded={open}
                            
							class=" justify-between"
						>
							{selectedValue}
						</Button>
					</Popover.Trigger>

					<Popover.Content class="h-64 w-full p-0"
                    sameWidth={true}>
						<Command.Root>
							<Command.Input placeholder="Search Industries..." class="h-9" />
							<Command.Empty>Nothing found</Command.Empty>
							<Command.Group class="pb-24">
								<ScrollArea class="h-6 w-full">
									{#each industries as industry}
										<Command.Item
											value={industry.value}
											onSelect={(currentValue) => {
												value = currentValue;
												closeAndFocusTrigger(ids.trigger);
											}}
										>
											{industry.label}
										</Command.Item>
									{/each}
								</ScrollArea></Command.Group
							>
						</Command.Root>
					</Popover.Content>
				</Popover.Root>
                </div>

                <div class="grid w-full items-center gap-2">
					<Label for="email">Type of business</Label>
					<Select.Root>
                        <Select.Trigger class="">
                          <Select.Value placeholder="Select business type"  />
                        </Select.Trigger>
                        <Select.Content>
                          <Select.Group>
                           
                            <Select.Item value="1" label="Sole trader"
          >Sole trader</Select.Item >
                          </Select.Group>
                        </Select.Content>
                        <Select.Input name="favoriteFruit" />
                      </Select.Root>
				</div>

				<div class="flex flex-col gap-4 md:flex-row justify-end">
					<Button size="default" variant="default" class="w-fit">Next Step</Button>
					
				</div>
			</div>
		</form>
	</div>
</div>
<div class="hidden items-center justify-center bg-slate-100 sm:flex md:w-6/12">
	<Image class="h-16 w-16" />
</div>
