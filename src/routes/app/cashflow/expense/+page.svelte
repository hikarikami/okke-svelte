
<script lang="ts">
	/**
	Expense page 
	**/

	// Components
	import PageHeader from '$lib/app/PageHeader.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { writable } from 'svelte/store';
	import { onMount} from "svelte";



	// Steps

	import StepOne from '$lib/app/modals/ExpenseOne.svelte';
	import StepTwo from '$lib/app/modals/ExpenseTwo.svelte';

	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Switch } from '$lib/components/ui/switch/index.js';
	import Button from '$lib/components/ui/button/button.svelte';

	/* Pass modal content to display */
	interface ModalStep {
		id: number;
		header: string;
		content: string;
	}

	let dialogOpen = false;

	/* Show dialogue after short delay */
	onMount(() => {
		setTimeout(() => {
		dialogOpen = true;
		}, 1200);
	});

	const currentStep = writable(1);

	const modalSteps = {
		1: StepOne,
		2: StepTwo
	};

	function goToNextStep() {
		currentStep.update((n) => (n < Object.keys(modalSteps).length ? n + 1 : n));
	}

	function goToPreviousStep() {
		currentStep.update((n) => (n > 1 ? n - 1 : n));
	}
</script>

<svelte:head>
	<title>Expenses</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto">
	<PageHeader
		title="Expenses"
		buttons={[{ label: 'Record a Receipt', href: '#', variant: 'default', showIcon: true }]}
	/>
	<div class="mt-4">
		<Dialog.Root bind:open={dialogOpen}>
			<Dialog.Trigger><Button>Create Expense</Button></Dialog.Trigger>
			<Dialog.Content>
				{#if $currentStep === 1}
					<StepOne {goToNextStep} {goToPreviousStep} />
				{:else if $currentStep === 2}
					<StepTwo {goToNextStep} {goToPreviousStep} />
				{/if}
	
				<Dialog.Footer>
					{#if $currentStep === 1}
					<Button variant="secondary" on:click={() => (dialogOpen = false)}>Cancel</Button>
					<Button on:click={goToNextStep}>Save</Button>
					{:else}
						<Button variant="secondary" on:click={goToPreviousStep}>Go Back</Button>
						<Button on:click={goToNextStep}>Continue</Button>
					{/if}
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</div>
</div>

