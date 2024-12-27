<script lang="ts" module>
	import type { Snippet } from 'svelte';
	import { tv } from 'tailwind-variants';

	export type KbdProps = {
		class?: string;
		size?: 'sm' | 'md' | 'lg';
		shape?: 'square' | 'rectangle';

		children?: Snippet;
	};

	export const kbdVariants = tv({
		base: 'flex rounded-sm bg-elevated border shadow-sm flex-center border-b-[3px] gap-1 font-mono font-semibold',
		variants: {
			size: {
				sm: 'h-4 text-xs',
				md: 'h-5 text-xs',
				lg: 'h-6 text-sm'
			},
			shape: {
				square: 'aspect-square',
				rectangle: 'w-max px-1'
			}
		}
	});
</script>

<script lang="ts">
	import { cn } from '../utils.js';
	const {
		class: className,
		size = 'md',
		shape = 'square',
		children,
		...restProps
	}: KbdProps = $props();
</script>

<kbd class={cn(kbdVariants({ shape, size, className }))} {...restProps}>
	{@render children?.()}
</kbd>
