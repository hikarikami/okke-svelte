<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Select from "$lib/components/ui/select";

	import User from "lucide-svelte/icons/user"
	import Settings from "lucide-svelte/icons/settings"

	let selected = { value: "1", label: "Business One" };
</script>

<header class="relative z-10 w-full  bg-white px-6 py-4 shadow ">
	<ul class="flex flex-row justify-end gap-x-2">
		<li class="pr-6 mr-2 border-r">
			<Select.Root bind:selected>
				<Select.Trigger class="w-[180px]">
				  <Select.Value placeholder="Selected Business" />
				</Select.Trigger>
				<Select.Content>
				  <Select.Item value="1">Business One</Select.Item>
				  <Select.Item value="2">Business Two</Select.Item>
				  <Select.Item value="3">Business Three</Select.Item>
				</Select.Content>
			  </Select.Root>
		</li>
		<li>
			<Button size="icon" variant="ghost"><Settings class="h-4 w-4" /></Button>
		</li>
		<li>
			<Button size="icon" variant="ghost"><User class="h-4 w-4" /></Button>
		</li>
		
		
	</ul>
</header>
