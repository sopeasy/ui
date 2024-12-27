<script lang="ts">
	import { onMount } from 'svelte';
	import { Toaster as Sonner, type ToasterProps as SonnerProps } from 'svelte-sonner';

	// fix for (TypeError: window.matchMedia is not a function) err on deno deploy
	let showToast = $state(false);
	onMount(() => {
		showToast = true;
	});

	let restProps: SonnerProps = $props();
</script>

{#if showToast}
	<Sonner
		class="toaster group"
		toastOptions={{
			classes: {
				toast:
					'group toast group-[.toaster]:bg-elevated group-[.toaster]:rounded-xl group-[.toaster]:text-elevated-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
				description: 'group-[.toast]:text-muted-foreground',
				actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
				cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground'
			}
		}}
		{...restProps}
	/>
{/if}
