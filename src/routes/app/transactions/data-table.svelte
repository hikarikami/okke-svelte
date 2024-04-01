<script lang="ts">
	import { createTable, Render, Subscribe, createRender } from 'svelte-headless-table';
	import { readable } from 'svelte/store';
	import * as Table from '$lib/components/ui/table';
	import DataTableActions from './data-table-actions.svelte';

    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import {
		addPagination,
		addSortBy,
		addTableFilter,
		addSelectedRows
        
	} from 'svelte-headless-table/plugins';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';

	import DataTableCheckbox from './data-table-checkbox.svelte';

	import ArrowUpDown from 'lucide-svelte/icons/arrow-up-down';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';
    import { Trash2 } from 'lucide-svelte';

	type Transaction = {
		date: string;
		description: string;
		category: string;
		type: 'income' | 'expense';
		status: 'completed' | 'pending' | 'rejected' | 'failed';
		amount: number;
		id: string;
	};

    const transactions: Transaction[] = [
    {
        date: '01/04/2024',
        description: 'Officeworks Inc. LTD. payment xxx1944',
        category: 'Sales',
        type: 'income',
        status: 'pending',
        amount: 316,
        id: 'aoz1'
    },
    {
        date: '02/14/2024',
        description: 'Marketing Services Co. expense xxx721',
        category: 'Marketing',
        type: 'expense',
        status: 'completed',
        amount: 721,
        id: 'lbn2'
    },
    {
        date: '03/23/2024',
        description: 'Consulting Revenue xxx482',
        category: 'Operations',
        type: 'income',
        status: 'pending',
        amount: 482,
        id: 'xyz3'
    },
    {
        date: '04/30/2024',
        description: 'Equipment Maintenance Ltd. expense xxx204',
        category: 'Finance',
        type: 'expense',
        status: 'completed',
        amount: 204,
        id: 'pqr4'
    },
    {
        date: '05/08/2024',
        description: 'Sales Revenue xxx845',
        category: 'Other',
        type: 'income',
        status: 'pending',
        amount: 845,
        id: 'uvw5'
    },
    {
        date: '06/19/2024',
        description: 'Travel Expenses Rejected xxx529',
        category: 'Sales',
        type: 'expense',
        status: 'rejected',
        amount: 529,
        id: 'mno6'
    },
    {
        date: '07/28/2024',
        description: 'New Client Consultation Fee xxx93',
        category: 'Marketing',
        type: 'income',
        status: 'completed',
        amount: 93,
        id: 'def7'
    },
    {
        date: '08/05/2024',
        description: 'Office Furniture Purchase Ltd. expense xxx437',
        category: 'Operations',
        type: 'expense',
        status: 'pending',
        amount: 437,
        id: 'ghi8'
    },
    {
        date: '09/14/2024',
        description: 'Quarterly Financial Report Preparation Fee xxx638',
        category: 'Finance',
        type: 'income',
        status: 'completed',
        amount: 638,
        id: 'jkl9'
    },
    {
        date: '10/23/2024',
        description: 'Research and Development Expenditure Ltd. expense xxx725',
        category: 'Other',
        type: 'expense',
        status: 'pending',
        amount: 725,
        id: 'rst10'
    },
    {
        date: '11/04/2024',
        description: 'Rejected Sales Commission xxx149',
        category: 'Sales',
        type: 'income',
        status: 'rejected',
        amount: 149,
        id: 'pqr11'
    },
    {
        date: '12/13/2024',
        description: 'Marketing Team Bonuses Ltd. expense xxx876',
        category: 'Marketing',
        type: 'expense',
        status: 'completed',
        amount: 876,
        id: 'mno12'
    },
    {
        date: '01/22/2025',
        description: 'Software Development Payment xxx312',
        category: 'Operations',
        type: 'income',
        status: 'pending',
        amount: 312,
        id: 'def13'
    },
    {
        date: '02/04/2025',
        description: 'Financial Tools Investment Ltd. expense xxx514',
        category: 'Finance',
        type: 'expense',
        status: 'completed',
        amount: 514,
        id: 'jkl14'
    },
    {
        date: '03/16/2025',
        description: 'Online Subscription Revenue xxx207',
        category: 'Other',
        type: 'income',
        status: 'pending',
        amount: 207,
        id: 'rst15'
    },
    {
        date: '04/28/2025',
        description: 'Rejected Business Trip Expenses xxx489',
        category: 'Sales',
        type: 'expense',
        status: 'rejected',
        amount: 489,
        id: 'pqr16'
    },
];


	const table = createTable(readable(transactions), {
		page: addPagination(),
		sort: addSortBy(),
		filter: addTableFilter({
			fn: ({ filterValue, value }) => value.toLowerCase().includes(filterValue.toLowerCase())
		}),
		select: addSelectedRows()
	});

	const columns = table.createColumns([
		table.column({
			accessor: 'id',
			header: (_, { pluginStates }) => {
				const { allPageRowsSelected } = pluginStates.select;
				return createRender(DataTableCheckbox, {
					checked: allPageRowsSelected
				});
			},
			cell: ({ row }, { pluginStates }) => {
				const { getRowState } = pluginStates.select;
				const { isSelected } = getRowState(row);

				return createRender(DataTableCheckbox, {
					checked: isSelected
				});
			},
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),

		table.column({
			accessor: 'date',
			header: 'Date',
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'description',
			header: 'Description'
		}),

		table.column({
			accessor: 'category',
			header: 'Category',
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'type',
			header: 'Type',
			plugins: {
				filter: {
					exclude: true
				}
			}
		}),
		table.column({
			accessor: 'amount',
			header: 'Amount',
			cell: ({ value }) => {
				const formatted = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'AUD'
				}).format(value);
				return formatted;
			}
		}),
		table.column({
			accessor: ({ id }) => id,
			header: '',
			cell: ({ value }) => {
				return createRender(DataTableActions, { id: value });
			},
			plugins: {
				sort: {
					disable: true
				},
				filter: {
					exclude: true
				}
			}
		})
	]);

	const { headerRows, pageRows, tableAttrs, tableBodyAttrs, pluginStates, rows } =
		table.createViewModel(columns);
	const { hasNextPage, hasPreviousPage, pageIndex } = pluginStates.page;
	const { filterValue } = pluginStates.filter;
    const { selectedDataIds } = pluginStates.select;
</script>

<div>
	<div class="mt-8 flex items-center">
        {#if Object.keys($selectedDataIds).length != 0 }
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button variant="outline" class="leading-none">
                    {Object.keys($selectedDataIds).length} items selected <ChevronDown class="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Group>
                  </DropdownMenu.Group>

                  <DropdownMenu.Item>Duplicate</DropdownMenu.Item>
                  <DropdownMenu.Item>Move</DropdownMenu.Item>
                  <DropdownMenu.Separator />
                  <DropdownMenu.Item><Trash2 class="w-4 h-4 mr-2" />Delete</DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
                  {/if}

           
      
		<Input
			class="ml-auto max-w-sm"
			placeholder="Filter transactions"
			type="text"
			bind:value={$filterValue}
		/>
	</div>
	<div class="mt-4 rounded-md border">
		<Table.Root {...$tableAttrs}>
			<Table.Header>
				{#each $headerRows as headerRow}
					<Subscribe rowAttrs={headerRow.attrs()}>
						<Table.Row>
							{#each headerRow.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs props={cell.props()} let:props>
                                    <Table.Head {...attrs} class="[&:has([role=checkbox])]:pl-4">
										{#if cell.id === 'amount'}
											<div class="text-right">
												<button
													class="inline-flex items-center justify-center p-0.5 hover:cursor-pointer hover:text-blue-800"
													on:click={props.sort.toggle}
													><ArrowUpDown class={'mr-2 h-4 w-4'} /><Render
														of={cell.render()}
													/></button
												>
											</div>
										{:else if cell.id === 'date' || cell.id === 'category' || cell.id === 'type'}
											<button
												class="inline-flex items-center justify-center p-0.5 hover:cursor-pointer hover:text-blue-800"
												on:click={props.sort.toggle}
											>
												<Render of={cell.render()} /><ArrowUpDown class={'ml-2 h-4 w-4'} /></button
											>
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Head>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Header>
			<Table.Body {...$tableBodyAttrs}>
				{#each $pageRows as row (row.id)}
					<Subscribe rowAttrs={row.attrs()} let:rowAttrs>
						<Table.Row {...rowAttrs}>
							{#each row.cells as cell (cell.id)}
								<Subscribe attrs={cell.attrs()} let:attrs>
									<Table.Cell {...attrs}>
										{#if cell.id === 'amount'}
											<div class="text-right font-medium">
												<Render of={cell.render()} />
											</div>
										{:else if cell.id === 'status'}
											<div class="capitalize">
												<Render of={cell.render()} />
											</div>
                                            {:else if cell.id === 'description'}
                                            <div class="max-w-[440px] min-w-[440px] line-clamp-1">
												<Render of={cell.render()} />
											</div>
										{:else if cell.id === 'date'}
											<Render of={cell.render()} />
										{:else}
											<Render of={cell.render()} />
										{/if}
									</Table.Cell>
								</Subscribe>
							{/each}
						</Table.Row>
					</Subscribe>
				{/each}
			</Table.Body>
		</Table.Root>
		<div class="flex items-center justify-end space-x-4 px-4 py-4">
			<Button
				variant="outline"
				size="sm"
				on:click={() => ($pageIndex = $pageIndex - 1)}
				disabled={!$hasPreviousPage}>Previous</Button
			>
			<Button
				variant="outline"
				size="sm"
				disabled={!$hasNextPage}
				on:click={() => ($pageIndex = $pageIndex + 1)}>Next</Button
			>
		</div>
	</div>
</div>
