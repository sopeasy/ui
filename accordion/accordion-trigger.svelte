<script lang="ts">
	import { cn } from '$lib/ui/utils.js';
	import { Accordion as AccordionPrimitive, type WithoutChild } from 'bits-ui';
	import ChevronDown from 'lucide-svelte/icons/chevron-down';

	let {
		ref = $bindable(null),
		class: className,
		level = 3,
		children,
		...restProps
	}: WithoutChild<AccordionPrimitive.TriggerProps> & {
		level?: AccordionPrimitive.HeaderProps['level'];
	} = $props();
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		bind:ref
		class={cn(
			'flex flex-1 items-center gap-2 py-4 text-base font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
			className
		)}
		{...restProps}
	>
		<ChevronDown class="size-4 shrink-0 text-primary transition-transform duration-200" />
		{@render children?.()}
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
