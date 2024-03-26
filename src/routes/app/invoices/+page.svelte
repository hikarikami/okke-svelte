<script lang="ts">
	// Components
	import PageHeader from '$lib/app/PageHeader.svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import { writable } from 'svelte/store';
	import { onMount} from "svelte";



	// Steps

	import StepOne from '$lib/app/modals/InvoiceOne.svelte';
	import StepTwo from '$lib/app/modals/InvoiceTwo.svelte';

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
	<title>Invoices</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto">
	<PageHeader
		title="Invoices"
		buttons={[{ label: 'Create New Invoice', href: '#', variant: 'default', showIcon: true }]}
	/>
	<div class="mt-4">
		<Dialog.Root bind:open={dialogOpen}>
			<Dialog.Trigger><Button>Configure Invoice Wizard</Button></Dialog.Trigger>
			<Dialog.Content class="w-[90vw]">
				{#if $currentStep === 1}
					<StepOne {goToNextStep} {goToPreviousStep} />
				{:else if $currentStep === 2}
					<StepTwo {goToNextStep} {goToPreviousStep} />
				{/if}
	
				<Dialog.Footer>
					{#if $currentStep === 1}
						<Button on:click={goToNextStep}>Continue</Button>
					{:else}
						<Button variant="secondary" on:click={goToPreviousStep}>Go Back</Button>
						<Button on:click={goToNextStep}>Continue</Button>
					{/if}
				</Dialog.Footer>
			</Dialog.Content>
		</Dialog.Root>
	</div>
</div>

