<script lang="ts">
	import { ScrollArea } from '$lib/ui/scroll-area';
	import { cn } from '$lib/ui/utils.js';
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLTableAttributes } from 'svelte/elements';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLTableAttributes> = $props();
</script>

<ScrollArea class="relative w-full" orientation="both">
	<table bind:this={ref} class={cn('w-full caption-bottom text-sm', className)} {...restProps}>
		{@render children?.()}
	</table>
</ScrollArea>
