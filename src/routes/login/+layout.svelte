<script lang="ts">
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import Button from '$lib/components/ui/button/button.svelte';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { cn } from '$lib/utils.js';
	import { tick } from 'svelte';
	import { Variable } from 'lucide-svelte';
	import { Image } from 'lucide-svelte';

	import logo from '$lib/images/okke-logo-dark.svg';

</script>

<main class="flex h-dvh w-full flex-col sm:flex-row overflow-hidden">
	<div class="flex items-center bg-white w-full md:w-8/12">
		<div class="mx-auto flex flex-col w-full justify-center mt-16 md:mt-0 md:max-w-[30em]">
			<a href="/"><img src={logo} alt="okke" width=64 class="w-20" /></a>
			<form>
				<h1 class="text-2xl mt-8">Sign in to your account.</h1>
				<p class="mt-2 leading-relaxed">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
				<div class="form mt-8 grid gap-6">
					<div class="grid w-full items-center gap-2">
						<Label for="email">Email</Label>
						<Input type="email" id="email" placeholder="" />
					</div>
					<div class="grid w-full items-center gap-2 relative">
						<Label for="password">Password</Label>
						<Input type="password" id="password" placeholder="" />
						<a href="#" class="absolute right-0 -top-1 text-sm text-primary hover:underline">Forgotten your password?</a>
					</div>
					<div class="flex flex-col gap-4">
						<a href="/onboarding/1"><Button size="default" variant="default" class="w-full">Continue</Button></a>
						<Button size="default" variant="ghost" class="w-full">Need an account? Sign Up!</Button>
					</div>
					
				</div>
			
		</div>
	</div>
	<div class="bg-slate-100 hidden sm:flex md:w-6/12 justify-center items-center">
		<Image class="w-16 h-16"/>
	</div>
</main>
