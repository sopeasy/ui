<script lang="ts">
	import { cn } from '$lib/ui/utils.js';
	import { Select as SelectPrimitive, type WithoutChild } from 'bits-ui';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';

	let {
		ref = $bindable(null),
		hideArrow = false,
		class: className,
		children,
		...restProps
	}: WithoutChild<SelectPrimitive.TriggerProps> & {
		hideArrow?: boolean;
	} = $props();
</script>

<SelectPrimitive.Trigger
	bind:ref
	class={cn(
		'group flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-muted-foreground [&>span]:line-clamp-1',
		className
	)}
	{...restProps}
>
	{@render children?.()}
	{#if !hideArrow}
		<ChevronDown class="size-4 opacity-50 transition-opacity group-hover:opacity-100" />
	{/if}
</SelectPrimitive.Trigger>
