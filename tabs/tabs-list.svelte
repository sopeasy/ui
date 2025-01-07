<script lang="ts">
	import { cn } from "$lib/ui/utils.js";
	import { Tabs as TabsPrimitive } from "bits-ui";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: TabsPrimitive.ListProps = $props();
</script>

<TabsPrimitive.List
	bind:ref
	class={cn(
		"inline-flex h-10 items-center justify-center border-b bg-background p-1 pb-0 text-muted-foreground",
		className,
	)}
	{...restProps}
/>
