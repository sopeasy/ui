<script lang="ts">
	import { cn } from "$lib/ui/utils.js";
	import { Tabs as TabsPrimitive } from "bits-ui";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
	bind:ref
	class={cn(
		'relative inline-flex items-center justify-center whitespace-nowrap rounded-sm px-2 py-1.5 text-sm font-medium before:absolute before:-bottom-0.5 before:hidden before:h-0.5 before:w-full before:bg-primary before:transition-all before:duration-200 before:ease-in-out before:content-[""] hover:text-foreground focus:outline-none focus-visible:outline-none  disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:before:block ',
		className,
	)}
	{...restProps}
/>
