<script lang="ts" module>
	import type { Snippet } from 'svelte';

	type ModalProps = {
		open?: boolean;
		title?: Snippet;
		description?: Snippet;
		footer?: Snippet;
		children?: Snippet;
	};
</script>

<script lang="ts">
	import MediaQuery from 'svelte-media-queries';
	import * as Dialog from '../dialog';
	import * as Drawer from '../drawer';

	let { open = $bindable(), description, footer, title, children }: ModalProps = $props();
</script>

<MediaQuery query="(min-width: 640px)" let:matches>
	{#if matches}
		<Dialog.Root bind:open>
			<Dialog.Content class="pt-4">
				<Dialog.Header>
					<Dialog.Title>
						{@render title?.()}
					</Dialog.Title>
					<Dialog.Description>
						{@render description?.()}
					</Dialog.Description>
				</Dialog.Header>
				{@render children?.()}
				{#if footer}
					<Dialog.Footer>
						{@render footer?.()}
					</Dialog.Footer>
				{/if}
			</Dialog.Content>
		</Dialog.Root>
	{:else}
		<Drawer.Root bind:open>
			<Drawer.Content class="p-3 pb-3 pt-2">
				<Drawer.Header>
					<Drawer.Title>
						{@render title?.()}
					</Drawer.Title>
					<Drawer.Description>
						{@render description?.()}
					</Drawer.Description>
				</Drawer.Header>
				{@render children?.()}
				{#if footer}
					<Drawer.Footer>
						{@render footer?.()}
					</Drawer.Footer>
				{/if}
			</Drawer.Content>
		</Drawer.Root>
	{/if}
</MediaQuery>