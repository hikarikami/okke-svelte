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


	const expenseCategories: { value: string; label: string }[] = [
		{ value: 'office_supplies', label: 'Office Supplies' },
		{ value: 'travel', label: 'Travel Expenses' },
		{ value: 'meals_and_entertainment', label: 'Meals and Entertainment' },
		{ value: 'utilities', label: 'Utilities' },
		{ value: 'rent', label: 'Rent' },
		{ value: 'insurance', label: 'Insurance' },
		{ value: 'marketing', label: 'Marketing' },
		{ value: 'software_subscriptions', label: 'Software Subscriptions' },
		{ value: 'equipment', label: 'Equipment' },
		{ value: 'salaries', label: 'Salaries' },
		{ value: 'taxes', label: 'Taxes' },
		{ value: 'consulting_fees', label: 'Consulting Fees' },
		{ value: 'repairs_and_maintenance', label: 'Repairs and Maintenance' },
		{ value: 'advertising', label: 'Advertising' },
		{ value: 'legal_services', label: 'Legal Services' },
		{ value: 'training_and_education', label: 'Training and Education' },
		{ value: 'subscriptions', label: 'Subscriptions' },
		{ value: 'office_rent', label: 'Office Rent' },
		{ value: 'transportation', label: 'Transportation' }
	];

	let open = false;
	let value = '';
	let checked = false;
	let selected = { value: 'account1', label: 'Account 1' };

	$: selectedValue =
		expenseCategories.find((f) => f.value === value)?.label ?? 'Search categories...';

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

<Dialog.Header>
	<Dialog.Title>New Income</Dialog.Title>
</Dialog.Header>
<Dialog.Description>
	<div class="grid-row-12 grid grid-cols-12 gap-x-24">
		<!-- Left Column -->
		<div class="col-span-7">
			<form>
				<div class="form grid gap-6">
					<Tabs.Root value="business" class="w-full">
						<div class="flex flex-row items-center justify-between">
							<Label>Income Type</Label>
							<Tabs.List class="grid w-fit grid-cols-2">
								<Tabs.Trigger value="business">Business</Tabs.Trigger>
								<Tabs.Trigger value="personal">Personal</Tabs.Trigger>
							</Tabs.List>
						</div>

						<Tabs.Content value="business">
							<div class="mt-4 grid gap-4">
								<div
									class="flex w-full flex-row items-end gap-x-4 rounded-lg border bg-primary p-4"
								>
									<div class="grid w-[240px] items-center gap-2">
										<Label for="amount">Amount</Label>
										<Input type="numerical" id="amount" placeholder="0.00" />
									</div>
									<!-- category combobox -->
									<div class="grid w-full gap-2">
										<Label>Categorise as</Label>
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

											<Popover.Content class="h-64 w-full p-0" sameWidth={true}>
												<Command.Root>
													<Command.Input placeholder="Search Categories..." class="h-9" />
													<Command.Empty>Nothing found</Command.Empty>
													<Command.Group class="pb-24">
														<ScrollArea class="h-64 w-full">
															{#each expenseCategories as category}
																<Command.Item
																	value={category.value}
																	onSelect={(currentValue) => {
																		value = currentValue;
																		closeAndFocusTrigger(ids.trigger);
																	}}
																>
																	{category.label}
																</Command.Item>
															{/each}
														</ScrollArea></Command.Group
													>
												</Command.Root>
											</Popover.Content>
										</Popover.Root>
									</div>

									<Tooltip.Root>
										<Tooltip.Trigger
											><Button variant="secondary" size="icon">
												<SquareSplitHorizontal class="w-4" /></Button
											></Tooltip.Trigger
										>
										<Tooltip.Content>
											<p>Split this transaction to multiple categories</p>
										</Tooltip.Content>
									</Tooltip.Root>
								</div>

								<!-- Customer / Reference -->
								<div class="flex w-full flex-col gap-4 ">
									<div class="grid grid-cols-2 items-center gap-4">
										<DatePicker.Root weekdayFormat="short" fixedWeeks={true}>
											<div class="flex flex-col gap-2">
												<Label>Date</Label>
												<DatePicker.Input
													let:segments
													class="focus-visible:ring- flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/50 focus-visible:outline-none focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												>
													{#each segments as { part, value }}
														<div class="inline-flex select-none">
															{#if part === 'literal'}
																<DatePicker.Segment {part} class="px-1 text-muted-foreground ">
																	{value}
																</DatePicker.Segment>
															{:else}
																<DatePicker.Segment
																	{part}
																	class="rounded-5px px-1  hover:bg-muted focus:bg-muted focus:text-foreground focus-visible:!ring-0 focus-visible:ring-offset-2 aria-[valuetext=Empty]:text-muted-foreground"
																>
																	{value}
																</DatePicker.Segment>
															{/if}
														</div>
													{/each}
													<DatePicker.Trigger class="ml-auto">
														<CalendarIcon class="w-4" />
													</DatePicker.Trigger>
												</DatePicker.Input>
												<DatePicker.Content
													sideOffset={6}
													transition={flyAndScale}
													transitionConfig={{ duration: 150, y: -8 }}
													class="z-50"
												>
													<DatePicker.Calendar
														class="border bg-white  rounded  p-6 shadow-lg"
														let:months
														let:weekdays
													>
														<DatePicker.Header class="flex items-center justify-between">
															<DatePicker.PrevButton
																class="rounded-9px bg-background-alt active:scale-98 inline-flex size-10 items-center justify-center transition-all hover:bg-muted"
															>
															<ArrowLeft class="w-4" />
															</DatePicker.PrevButton>
															<DatePicker.Heading class="text-[15px] font-medium" />
															<DatePicker.NextButton
																class="rounded-9px bg-background-alt active:scale-98 inline-flex size-10 items-center justify-center transition-all hover:bg-muted"
															>
															<ArrowRight class="w-4" />
															</DatePicker.NextButton>
														</DatePicker.Header>
														<div
															class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
														>
															{#each months as month}
																<DatePicker.Grid
																	class="w-full border-collapse select-none space-y-1"
																>
																	<DatePicker.GridHead>
																		<DatePicker.GridRow class="mb-1 flex w-full justify-between">
																			{#each weekdays as day}
																				<DatePicker.HeadCell
																					class="w-10 rounded-md text-xs !font-normal text-muted-foreground"
																				>
																					<div>{day.slice(0, 2)}</div>
																				</DatePicker.HeadCell>
																			{/each}
																		</DatePicker.GridRow>
																	</DatePicker.GridHead>
																	<DatePicker.GridBody>
																		{#each month.weeks as weekDates}
																			<DatePicker.GridRow class="flex w-full">
																				{#each weekDates as date}
																					<DatePicker.Cell
																						{date}
																						class="relative size-10 !p-0 text-center text-sm"
																					>
																						<DatePicker.Day
																							{date}
																							month={month.value}
																							class="rounded-9px group relative inline-flex size-10 items-center justify-center whitespace-nowrap border border-transparent bg-transparent p-0 text-sm font-normal text-foreground transition-all hover:border-foreground data-[disabled]:pointer-events-none data-[outside-month]:pointer-events-none data-[selected]:bg-foreground data-[selected]:font-medium data-[disabled]:text-foreground/30 data-[selected]:text-background data-[unavailable]:text-muted-foreground data-[unavailable]:line-through"
																						>
																							<div
																								class="absolute top-[5px] hidden size-1 rounded-full bg-foreground transition-all group-data-[today]:block group-data-[selected]:bg-background"
																							/>
																							{date.day}
																						</DatePicker.Day>
																					</DatePicker.Cell>
																				{/each}
																			</DatePicker.GridRow>
																		{/each}
																	</DatePicker.GridBody>
																</DatePicker.Grid>
															{/each}
														</div>
													</DatePicker.Calendar>
												</DatePicker.Content>
											</div>
										</DatePicker.Root>
										<div class="grid items-center gap-2">
											<Label for="email">Paid to</Label>
										<Select.Root bind:selected>
											<Select.Trigger class="">
											<Select.Value placeholder="Account" />
											</Select.Trigger>
											<Select.Content>
											<Select.Group>
											
												
												<Select.Item value="Account1" label="Account 1"
													>Account 1</Select.Item
												>
												<Select.Item value="Account2" label="Account 2"
													>Account 1</Select.Item
												>
											
											</Select.Group>
											</Select.Content>
											<Select.Input name="account" />
										</Select.Root>
										</div>
									</div>
									<div class="flex items-end gap-4">
										<div class="grid items-center gap-2 w-full">
											<Label for="email">Customer</Label>
											<Input type="email" id="email" placeholder="Enter customer name..." />
										</div>
										<Button size="default" variant="secondary" class="leading-none"><FileText class="w-4 mr-2" /> Assign</Button>
									</div>

									<div class="grid items-center gap-2">
										<Label for="email">Reference number</Label>
										<Input type="email" id="email" placeholder="Optional reference number" />
									</div>
									<div class="grid w-full gap-2">
										<Label for="email">Description</Label>
										<Textarea
											rows={4}
											placeholder="Optional description of the transaction..."
											id="message"
										/>
									</div>
								</div>
							</div></Tabs.Content
						>
						<Tabs.Content value="personal">
							<p>Something</p>
						</Tabs.Content>
					</Tabs.Root>
				</div>
			</form>
		</div>

		<!-- Right Column-->
		<div class="col-span-4 col-start-9 flex flex-col gap-4">
			<div class="">
				<div class=" rounded-lg bg-blue-50 p-3">
					<Table.Root class=" w-full md:max-w-[440px]">
						<Table.Body>
							<Table.Row>
								<Table.Cell class="font-medium">Amount 1:</Table.Cell>
								<Table.Cell class="text-right">$250.00</Table.Cell>
							</Table.Row>
							<Table.Row>
								<Table.Cell class="font-medium"><span class="inline-flex  items-center">GST Amount:<CalendarIcon class="w-4 ml-2 " /></span></Table.Cell>
								<Table.Cell class="text-right relative">$250.00</Table.Cell>
							</Table.Row>
						</Table.Body>
						<Table.Footer>
							<Table.Row class="">
								<Table.Cell class="font-medium">Income Total:</Table.Cell>
								<Table.Cell class="text-right">$250.00</Table.Cell>
							</Table.Row>
						</Table.Footer>
					</Table.Root>
				</div>
			</div>

			<div
				class="flex flex-col items-center justify-center rounded-lg border border-dashed border-colbert-400 p-4"
			>
				<p>Drag your Receipt Here</p>
				<Button variant="link" size="sm" class="text-xs font-normal text-primary underline"
					>Or click here to upload</Button
				>
			</div>
		</div>
	</div></Dialog.Description
>
<Dialog.Footer></Dialog.Footer>

<style>
	.income-preview {
		clip-path: polygon(
			0% 100%,
			5% 95%,
			10% 100%,
			15% 95%,
			20% 100%,
			25% 95%,
			30% 100%,
			35% 95%,
			40% 100%,
			45% 95%,
			50% 100%,
			55% 95%,
			60% 100%,
			65% 95%,
			70% 100%,
			75% 95%,
			80% 100%,
			85% 95%,
			90% 100%,
			95% 95%,
			100% 100%,
			100% 0,
			0 0
		);
	}


</style>
