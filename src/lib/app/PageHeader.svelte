<script lang="ts">
	import Plus from 'lucide-svelte/icons/plus';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';

	// Components
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

    // set buttonvariants and interface to pass to Button component
	type ButtonVariant =
		| 'link'
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| undefined;

	interface Button {
		label: string;
		href: string;
		variant: ButtonVariant;
        showIcon?: boolean;
	}

	export let title: string = 'Default Page Title';
	export let buttons: Button[] = [];
</script>

<div class="flex flex-row justify-between border-b pb-2">
	<h1 class="text-2xl">{title}</h1>
	<div class="order -mt-1 flex gap-x-2">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger class="md:order-first">
                <Button size="icon" variant="outline"><EllipsisVertical class="h-4 w-4" /></Button></DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<DropdownMenu.Item>Option 1</DropdownMenu.Item>
					<DropdownMenu.Item>Option 2</DropdownMenu.Item>
					<DropdownMenu.Item>Option 3</DropdownMenu.Item>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Option 4</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
		{#each [...buttons].reverse() as { label, href, variant, showIcon }}
			<Button {href} {variant} class="leading-none">
                {#if showIcon}
                <Plus class="mr-2 w-4 h-4" />
                {/if}
                {label}
            </Button>
		{/each}
	</div>
</div>
