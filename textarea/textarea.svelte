<script lang="ts">
	import { cn } from "$lib/ui/utils.js";
	import type { WithElementRef, WithoutChildren } from "bits-ui";
	import type { HTMLTextareaAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props();
</script>

<textarea
	bind:this={ref}
	class={cn(
		"border-input bg-background placeholder:text-muted-foreground flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-primary/60 outline-[3px] transition-[outline-color] duration-250 outline-transparent",
		className,
	)}
	bind:value
	{...restProps}
></textarea>
