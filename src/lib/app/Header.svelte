<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Select from '$lib/components/ui/select';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	import User from 'lucide-svelte/icons/user';
	import Settings from 'lucide-svelte/icons/settings';
	import { BriefcaseBusiness, LogOutIcon } from 'lucide-svelte';
	import { LogOut } from 'lucide-svelte';

	import  MegaphoneImage from '$lib/images/megaphone.png';
	import  InfoImage from '$lib/images/info.png';

	

	let selected = { value: '1', label: 'Business One' };
</script>

<header class="relative z-10 w-full bg-white px-6 py-4 shadow">
	<ul class="flex flex-row justify-end gap-x-2">
		<li class="mr-2 border-r pr-6">
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
			<Button size="icon" variant="ghost"><BriefcaseBusiness class="h-4 w-4" /></Button>
		</li>
		<li>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class="md:order-first">
					<Button size="icon" variant="ghost"><User class="h-4 w-4" /></Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="min-w-[300px]">
					<DropdownMenu.Label class="">
						<div class="p-2 pl-1 gap-4 flex flex-row items-center">
							<div class="w-9 h-9 bg-blue-300 rounded-full relative flex justify-center items-center"><span class="absolute">RK</span></div>
							<div class="flex flex-col"><span class="text-base">Ryan Keon</span><span class="text-xs">r.w.keon@gmail.com</span></div>
						</div>
					</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Group>
						<DropdownMenu.Item>My Account</DropdownMenu.Item>
						<DropdownMenu.Item>Subscriptions</DropdownMenu.Item>
						<DropdownMenu.Item>Contact Support</DropdownMenu.Item>
						<DropdownMenu.Separator />
						<DropdownMenu.Item><LogOutIcon class="h-3.5 w-3.5 mr-2" />Log Out</DropdownMenu.Item>
					</DropdownMenu.Group>
					<DropdownMenu.Separator />
					<DropdownMenu.Label class="flex flex-col gap-2">
						<div class="p-4 gap-4 flex flex-row items-center  rounded-lg bg-slate-50 hover:bg-orange-50 hover:cursor-pointer">
							<img src={MegaphoneImage} width="54" alt="New announcements" class="w-8">
							<span class="text-sm font-normal">View our latest updates and features.</span>
						</div>
						<div class="p-4 gap-4 flex flex-row items-center  rounded-lg bg-slate-50 hover:bg-blue-50 hover:cursor-pointer">
							<img src={InfoImage} width="54" alt="New announcements" class="w-8">
							<span class="text-sm font-normal">Need help? Visit our online guides.</span>
						</div>
					</DropdownMenu.Label>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</li>
	</ul>
</header>
