<script lang="ts">
	// Components
	import PageHeader from '$lib/app/PageHeader.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import * as Select from '$lib/components/ui/select';
	import { Switch } from "$lib/components/ui/switch";
	import { Label } from "$lib/components/ui/label/index.js";
	import * as Dialog from '$lib/components/ui/dialog';
	import { Progress } from '$lib/components/ui/progress';
	import * as Popover from "$lib/components/ui/popover";


	import Chart from 'chart.js/auto';
	import CashflowChart from '$lib/app/charts/cashflow.svelte';

	import { onMount } from 'svelte';

	onMount(() => {});

	// Icons
	import Eye from 'lucide-svelte/icons/eye';
	import Pencil from 'lucide-svelte/icons/pencil';
	import { ReceiptText } from 'lucide-svelte';
	import RefreshCcw from 'lucide-svelte/icons/refresh-ccw';
	import { TrendingUp } from 'lucide-svelte';
	import { TrendingDown } from 'lucide-svelte';
	import { Files } from 'lucide-svelte';
	import { Settings } from 'lucide-svelte';

	// default date range
	let selected = { value: '1', label: 'Past 12 months' };

	let income;
	const data = {
		labels: ['Bills', 'Drugs', 'Video Games', 'Uber Eats', 'Rent', 'Other'],
		datasets: [
			{
				label: 'Expenses',
				data: [327.5, 205.21, 151, 221, 445.0, 134],
				backgroundColor: [
					'#e60049',
					'#dc0ab4',
					'#0bb4ff',
					'#1e1b4b',
					'#50e991',
					'#ffa300',
					'#dc0ab4',
					'#b3d4ff'
				],
				// hoverOffset: 4,
				borderWidth: 0
			}
		]
	};
	const config = {
		type: 'doughnut',
		data: data,
		options: {
			borderRadius: '0',
			responsive: true,
			cutout: '65%',
			spacing: 4,
			plugins: {
				legend: {
					position: 'right',
					display: true,
					labels: {
						usePointStyle: true,
						padding: 16,
						font: {
							size: 12,
							weight: 'bold'
						}
					}
				},
				title: {
					display: false,
					text: 'Expenses'
				}
			}
		}
	};

	onMount(() => {
		const ctx = income.getContext('2d');
		// Initialize chart using default config set
		var myChart = new Chart(ctx, config);
	});
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="container mx-auto">
	<PageHeader
		title="Dashboard"
		buttons={[
			{ label: 'Primary', href: '#', variant: 'default', showIcon: true },
			{ label: 'Secondary', href: '#', variant: 'outline', showIcon: false }
		]}
	/>
	<div class="mt-6">
		<div class="card card--dark card--thick bg-pattern-1 min-h-48">
			<div class="card--content">
				<div class="flex flex-row gap-x-16">
					<div>
						<div>Income This Month</div>
						<div class="text-2xl font-medium">
							<span class="text-base text-white/75">$</span>1,340.28
						</div>
					</div>
					<div>
						<div>Income Forecast</div>
						<div class="relative mt-2">
							<div class="h-4 w-80 rounded-full bg-black/35"></div>
							<p class="absolute right-28 mt-1 text-center text-sm font-light text-white">
								<br />paid
							</p>
							<div class="absolute top-0 h-4 w-48 rounded-full bg-emerald-400"></div>
							<p class="absolute right-0 mt-1 text-center text-sm font-light text-white">
								$2,402.40<br />expected
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="mt-6 grid grid-cols-3 grid-rows-1 gap-x-6 gap-y-8">
		<!-- Cashflow Widget -->
		<div class="card col-span-2">
			<div class="card--header flex w-full flex-row">
				<h3 class="text-lg">Cashflow</h3>
				<Select.Root bind:selected>
					<Select.Trigger class="-mt-2 ml-auto w-[180px]">
						<Select.Value placeholder="Select range" />
					</Select.Trigger>
					<Select.Content>
						<Select.Item value="1">Past 12 Months</Select.Item>
						<Select.Item value="3">This Financial Year</Select.Item>
					</Select.Content>
				</Select.Root>
			</div>
			<div class="card--content">
				<CashflowChart />
			</div>
			<div class="card--footer"></div>
		</div>
		<!-- End cashflow Widget -->

		<!-- Monthly Tasks  -->
		<div class="card">
			<div class="card--header relative">
				<h3 class="text-lg">Monthly Tray</h3>
				<Popover.Root>
				<Popover.Trigger>
					<Button variant="ghost" size="icon" class="absolute -top-1.5 -right-1.5"><Settings class="w-4 h-4"/></Button></Popover.Trigger>
						<Popover.Content>
							<legend class="text-slate-800 text-sm">Show alerts for:</legend>
							<div class="flex flex-col mt-2 gap-2 divide-y border-b padding-b-2">
								<Label class="w-full flex flex-row justify-between items-center ">Income transactions <Switch /></Label>
								<Label class="w-full flex flex-row justify-between items-center pt-2">Expense transactions <Switch /></Label>
								<Label class="w-full flex flex-row justify-between items-center pt-2">Receipt uploads <Switch /></Label>
								<Label class="w-full flex flex-row justify-between items-center pt-2">User invites <Switch /></Label>
								<Label class="w-full flex flex-row justify-between items-center py-2">BAS & Tax notifications <Switch /></Label>
							</div>
							<Button variant='secondary' size='default' class="w-fit mt-4">Hide widget</Button>
						</Popover.Content>
					  </Popover.Root>
				
			</div>
			<div class="card--content">
				<div class="mt-4 grid grid-cols-1 gap-y-4">
					<div class="rounded-md bg-indigo-50/50 p-4">
						<div class="flex flex-row items-center justify-between">
							<div class="flex flex-row gap-x-2 leading-none"><ReceiptText class="w-4 h-4 text-indigo-500" /> 3 new receipts uploaded.</div>
							<Button variant="outline" size="sm">View</Button>
						</div>
					</div>
					<div class="p-4 bg-indigo-50/50 rounded-md">
						<div class="flex flex-row items-center justify-between">
							<div class="flex flex-row gap-x-2 leading-none"><TrendingUp class="w-4 h-4 text-emerald-500" /> 5 new income transactions.</div>
							<Button variant="outline" size="sm">Categorise</Button>
						</div>
					</div>
					<div class="p-4 bg-indigo-50/50 rounded-md">
						<div class="flex flex-row items-center justify-between">
							<div class="flex flex-row gap-x-2 leading-none"><TrendingDown class="w-4 h-4 text-red-500"/> 5 new expenses.</div>
							<Button variant="outline" size="sm">Categorise</Button>
						</div>
					</div>
				</div>
			</div>
			<div class="card--footer"></div>
		</div>
		<!-- End Document Tray -->

		<!-- Transactions-->
		<div class="card col-span-2">
			<div class="card--header flex items-center">
				<h3 class="text-lg">27 New Transactions</h3>
				<Button
					variant="link"
					size="icon"
					class="transition ease-in hover:rotate-90 hover:text-purple-500"
					><RefreshCcw class="h-4 w-4"></RefreshCcw></Button
				>
			</div>

			<div class="card--content">
				<div class="flex flex-row items-center">
					<div class="transactions-widget flex w-full flex-col" id="GFG">
						<div class="transaction w-full">
							<div class="flex items-center gap-x-8">
								<div class="w-16">21/03/2024</div>
								<div class=" text-right">$201.55</div>
								<div class="">
									<span>Detected as</span>
									<Badge variant="secondary">Marketing</Badge>
								</div>
								<div class="ml-auto flex">
									<Button variant="outline" size="sm">Confirm</Button>
								</div>
							</div>
						</div>

						<div class="transaction w-full divide-y">
							<div class="flex items-center gap-x-8">
								<div class="w-16">21/03/2024</div>
								<div class=" text-right">$201.55</div>
								<div class="">
									<span>Detected as</span>
									<Badge variant="secondary">Marketing</Badge>
								</div>
								<div class="ml-auto flex">
									<Button variant="outline" size="sm">Confirm</Button>
								</div>
							</div>
						</div>

						<div class="transaction w-full divide-y">
							<div class="flex items-center gap-x-8">
								<div class="w-16">21/03/2024</div>
								<div class=" text-right">$201.55</div>
								<div class="">
									<span>Detected as</span>
									<Badge variant="secondary">Marketing</Badge>
								</div>
								<div class="ml-auto flex">
									<Button variant="outline" size="sm">Confirm</Button>
								</div>
							</div>
						</div>

						<div class="transaction w-full divide-y">
							<div class="flex items-center gap-x-8">
								<div class="w-16">21/03/2024</div>
								<div class=" text-right">$201.55</div>
								<div class="">
									<span>Detected as</span>
									<Badge variant="secondary">Marketing</Badge>
								</div>
								<div class="ml-auto flex">
									<Button variant="outline" size="sm">Confirm</Button>
								</div>
							</div>
						</div>

						<div class="transaction w-full divide-y">
							<div class="flex items-center gap-x-8">
								<div class="w-16">21/03/2024</div>
								<div class=" text-right">$201.55</div>
								<div class="">
									<span>Detected as</span>
									<Badge variant="secondary">Marketing</Badge>
								</div>
								<div class="ml-auto flex">
									<Button variant="outline" size="sm">Confirm</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card--footer mt-4">
				<Button size="default">View All</Button>
			</div>
		</div>
		<!-- End Transaction Widget-->
		<!-- Expense Widget -->
		<div class="card">
			<div class="card--header flex w-full flex-row">
				<h3 class="text-lg">Expenses</h3>
			</div>

			<div class="card--content">
				<div class="gap-y-.5 mt-2 flex flex-col">
					<div class="text-sm font-normal text-slate-800">Expense This Month:</div>
					<div class="text-3xl font-medium"><span class="">$</span>894.00</div>
				</div>
				<div class="w-10/12"><canvas bind:this={income} width={200} height={200} /></div>
			</div>
			<div class="card--footer"></div>
		</div>
		<!-- End Expense Widget -->
	</div>
</div>

<style>
	.card {
		@apply rounded-md border border-slate-300 bg-white p-5;
	}

	.card.card--dark {
		@apply bg-indigo-950 text-white;
	}

	.card.card--thick {
		@apply p-10;
	}

	.card.bg-pattern-1 {
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1002%26quot%3b)' fill='none'%3e%3cpath d='M140 122C127.49 125.92 120.31 130.18 120.31 140C120.31 151.78 125.26 161.16 140 165.2C205.1 183.04 219.7 154.64 280 183.75C338.59 212.04 328.89 231.87 377.78 280C398.89 300.78 398.29 301.41 420 321.56C473.71 371.41 502.37 359.05 528.62 420C553.71 478.27 554.01 519.6 522.67 560C499.7 589.6 471.34 560 420 560C357.9 560 353.89 568.3 295.81 560C283.89 558.3 287.68 540 280 540C272.57 540 277.08 558.36 265.59 560C207.08 568.36 202.79 560 140 560C70 560 46.67 583.33 0 560C-23.33 548.33 -3.16 524.72 0 490C3.21 454.72 12.73 451.97 12.73 420C12.73 413.47 0.63 419.89 0 413C-5.74 349.89 0 346.5 0 280C0 210 0 210 0 140C0 70 -35 35 0 0C35 -35 70 0 140 0C210 0 210 0 280 0C350 0 350 0 420 0C432.36 0 444.71 -4.22 444.71 0C444.71 5.33 433.67 11.62 420 19.09C351.31 56.62 353.1 63.13 280 90C213.1 114.59 207.34 100.92 140 122' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M609.58 140C578.55 80.48 560.13 38.71 585.13 0C605.34 -31.29 642.57 0 700 0C770 0 770 0 840 0C884.42 0 886.85 -8.97 928.85 0C956.85 5.98 957.03 11.37 980 29.89C1043.86 81.37 1057.1 75.91 1102.5 140C1127.1 174.72 1110.04 227.5 1120 227.5C1130.08 227.5 1137.22 184.61 1142.58 140C1150.9 70.86 1114.82 38.8 1147.36 0C1173.53 -31.2 1203.68 0 1260 0C1330 0 1330 0 1400 0C1470 0 1505 -35 1540 0C1575 35 1540 70 1540 140C1540 210 1540 210 1540 280C1540 346.82 1574.11 384.18 1540 413.64C1504.11 444.63 1468.88 398.63 1400 400.91C1372.63 401.81 1358.55 397.58 1347.5 420C1319.35 477.13 1352.14 511.14 1321.6 560C1308.39 581.14 1290.8 560 1260 560C1190 560 1190 560 1120 560C1072.5 560 1058.99 581.85 1025 560C988.99 536.85 1005.55 470 980 470C952.32 470 959.22 533.85 918.54 560C889.22 578.85 879.27 560 840 560C770 560 770 560 700 560C675.16 560 650.32 569.42 650.32 560C650.32 547.42 679.17 541.51 700 516C736.32 471.51 752.89 473.28 764.62 420C778.86 355.28 772.62 343.88 751.94 280C740.31 244.06 728.14 248.04 700 220.37C656.96 178.04 635.99 190.67 609.58 140' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M840 102.67C823.34 102.67 800.93 121.94 800.93 140C800.93 157.08 823.07 172.94 840 172.94C852.85 172.94 860.49 156.75 860.49 140C860.49 121.61 853.12 102.67 840 102.67' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1400 99.17C1380.27 99.17 1359.73 118.59 1359.73 140C1359.73 163.92 1380.34 189.83 1400 189.83C1419.09 189.83 1437.22 164.01 1437.22 140C1437.22 118.68 1419.01 99.17 1400 99.17' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 54.29C11.1 22.16 17.39 12.01 48.36 0C87.39 -15.14 94.18 0 140 0C210 0 210 0 280 0C303.34 0 326.67 -6.36 326.67 0C326.67 7.39 305.14 17.8 280 27.5C211.81 53.8 203.57 38.64 140 72C96.39 94.89 65.63 102.89 65.63 140C65.63 184.49 90.36 212.4 140 235.2C197.54 261.62 215.98 222.7 280 238.44C307.09 245.1 301.11 259.22 322.22 280C371.11 328.13 370.48 328.79 420 376.25C443.51 398.79 459.4 390.85 468.28 420C487.4 482.73 493.25 509.98 476 560C469.11 579.98 448 560 420 560C386.13 560 377.99 576.8 352.26 560C307.99 531.09 315.11 468.57 280 468.57C246.04 468.57 256.35 532.42 214.12 560C186.35 578.14 177.06 560 140 560C98 560 56 579.42 56 560C56 530.01 93.16 505 140 461.18C167.98 435 205.63 444.56 205.63 420C205.63 390.1 176.03 382.38 140 352.26C92.3 312.38 89.71 315.19 38.18 280C19.71 267.39 5.29 276.07 0 256.67C-13.8 206.07 0 198.34 0 140C0 97.14 -13.08 92.16 0 54.29' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M682.5 140C652.24 72.75 624.04 47.68 630 0C632.79 -22.32 665 0 700 0C770 0 770 0 840 0C850.77 0 861.54 -4.92 861.54 0C861.54 7.52 851.71 13.34 840 24.89C780.71 83.34 780.41 83.18 719.53 140C710.41 148.52 709.55 155.56 700 155.56C691.04 155.56 687.24 150.53 682.5 140' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M903.17 140C935.81 99.82 941.37 69.21 980 69.21C1019.16 69.21 1047.18 95 1058.75 140C1074.28 200.4 1016.63 222.13 1034.19 280C1047.26 323.06 1079.05 308.52 1120 341.86C1165.03 378.52 1190.93 370.75 1206.15 420C1224.63 479.82 1216.57 512.61 1187.41 560C1173.49 582.61 1153.7 560 1120 560C1103.75 560 1095.17 572.47 1087.5 560C1052.1 502.47 1066.81 486.76 1033.85 420C1013.06 377.87 1014.35 342.22 980 342.22C929.09 342.22 906.49 370.12 863.33 420C836.49 451.01 847.98 504 840 504C832.28 504 837.81 461.76 831.92 420C822.01 349.76 805.4 346.06 808.39 280C809.44 256.85 826.08 262.14 840 241.57C873.47 192.14 865.81 186 903.17 140' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1199.03 140C1178.48 75.31 1167.47 46.19 1187.59 0C1197.96 -23.81 1223.8 0 1260 0C1330 0 1330 0 1400 0C1470 0 1505 -35 1540 0C1575 35 1540 70 1540 140C1540 210 1540 210 1540 280C1540 320.31 1564.97 353.23 1540 360.61C1494.97 373.91 1466.83 347.93 1400 321.36C1365.45 307.62 1337.24 298.7 1337.24 280C1337.24 262.6 1375.53 272.89 1400 249.15C1447.67 202.89 1481.52 192.58 1481.52 140C1481.52 93.29 1441.64 50.56 1400 50.56C1356.77 50.56 1350.41 91.07 1311.78 140C1280.41 179.74 1287.52 227.91 1260 227.91C1231.14 227.91 1214.68 189.27 1199.03 140' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M0 125.71C3.05 125.71 10.94 132.47 10.94 140C10.94 149.33 2.92 159.44 0 159.44C-2.55 159.44 0 149.72 0 140C0 132.86 -2.42 125.71 0 125.71' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M140 22C124.21 22 112 6.16 112 0C112 -4.84 126 0 140 0C170.8 0 201.6 -5.33 201.6 0C201.6 5.67 169.01 22 140 22' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M700 59.39C681.16 59.39 674.87 21.37 674.87 0C674.87 -8.33 687.43 0 700 0C731.62 0 763.23 -12.52 763.23 0C763.23 17.18 725.34 59.39 700 59.39' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M945.85 140C945.85 120.42 962.83 108.54 980 108.54C997.4 108.54 1015 120.29 1015 140C1015 178.44 997.32 224.85 980 224.85C962.74 224.85 945.85 178.57 945.85 140' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1255.48 140C1240.24 70.6 1225.98 57.12 1227.82 0C1228.24 -12.88 1243.91 0 1260 0C1330 0 1330 0 1400 0C1403.5 0 1407 -0.48 1407 0C1407 0.49 1402.58 -0.59 1400 1.94C1331 69.41 1331.21 70.43 1263.84 140C1261.21 142.71 1262.04 146.51 1260 146.51C1257.86 146.51 1256.33 143.85 1255.48 140' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M1525.82 140C1533.98 119.67 1536.36 98.52 1540 98.52C1543.45 98.52 1540 119.26 1540 140C1540 210 1540 210 1540 280C1540 293.79 1549.52 307.58 1540 307.58C1513.12 307.58 1469.6 308.41 1467.2 280C1462.51 224.62 1497.58 210.41 1525.82 140' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M114.33 560C114.33 550.84 127.63 529.8 140 529.8C151.79 529.8 162.65 550.56 162.65 560C162.65 565.66 151.32 560 140 560C127.16 560 114.33 565.94 114.33 560' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3cpath d='M408.71 560C408.71 529.81 414.83 490 420 490C425.14 490 429.33 529.08 429.33 560C429.33 564.08 424.66 560 420 560C414.36 560 408.71 564.81 408.71 560' stroke='rgba(255%2c 255%2c 255%2c 0.58)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1002'%3e%3crect width='1440' height='560' fill='rgba(255,255,255,0.1)'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
		background-repeat: repeat-x repeat-y;
	}

	.card .card--header {
		@apply font-medium text-slate-800;
	}

	.transactions-widget .transaction {
		@apply py-2 hover:cursor-pointer hover:bg-indigo-50/25;
	}

	.transactions-widget .transaction:not(:first-of-type) {
		@apply border-t border-slate-100;
	}
</style>
