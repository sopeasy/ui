<script lang="ts">
    import { cn } from "$lib/ui/utils.js";
    let {
        class: className,
        progressClass,
        active = true,
    }: {
        class: string;
        progressClass: string;
        active: boolean;
    } = $props();

    let animationFinished = $state(false);
    let shouldShow = $state(true);

    // Watch for active changes
    $effect(() => {
        if (active) {
            shouldShow = true;
            animationFinished = false;
        }
    });

    function handleAnimationEnd() {
        if (!active) {
            shouldShow = false;
        }
        animationFinished = true;
    }
</script>

<div class={cn("h-1.5 w-full overflow-hidden bg-green-100", className)}>
    {#if shouldShow}
        <div
            onanimationend={handleAnimationEnd}
            onanimationstart={() => {
                animationFinished = false;
            }}
            class={cn(
                "progress left-right h-full w-full bg-green-500",
                progressClass,
                active ? "infinite-progress" : "single-progress",
            )}
        ></div>
    {/if}
</div>

<style>
    .progress {
        transform-origin: 0% 50%;
    }

    .infinite-progress {
        animation: progress 1.5s infinite ease-in-out;
    }

    .single-progress {
        animation: progress 1.5s ease-in-out;
    }

    @keyframes progress {
        0% {
            transform: translateX(0) scaleX(0);
        }
        40% {
            transform: translateX(0) scaleX(0.4);
        }
        100% {
            transform: translateX(100%) scaleX(0.5);
        }
    }
</style>
