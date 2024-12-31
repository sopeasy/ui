<script lang="ts">
	import { cn } from '$lib/ui/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		ref = $bindable(),
		value = $bindable(),
		class: className,
		inputsize = 'md',
		...restProps
	}: WithElementRef<HTMLInputAttributes> & {
		inputsize?: 'sm' | 'md' | 'lg';
	} = $props();
</script>

<input
	bind:this={ref}
	class={cn(
		'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
		{
			sm: 'h-9 px-3 py-2',
			md: 'h-10 px-3 py-2',
			lg: 'h-11 px-8'
		}[inputsize],
		className
	)}
	bind:value
	{...restProps}
/>
