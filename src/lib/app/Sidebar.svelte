<script lang="ts">
	import Mail from "lucide-svelte/icons/mail";
 	import { Button } from "$lib/components/ui/button/index.js";

let menuItems = [
	{ label: 'Dashboard', href: "/app/dashboard"},
	{ label: 'Invoices',  href: "/app/invoices"},
	{ label: 'Cashflow',  href: "/app/cashflow"},
	]
</script>

<nav class="w-64 p-4 min-h-full border-r bg-gray-50 leading-none">

<ul class="flex flex-col gap-y-1">
	{#each menuItems as {label, href}}
	<li>
		<Button {href} variant={"outline"} class="w-full justify-start leading-none"><Mail class="h-4 w-4 mr-2" /> {label}</Button>
	</li>
	{/each}

</ul>
</nav>
