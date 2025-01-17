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
</script>

<div class={cn("h-1.5 w-full bg-green-100 overflow-hidden", className)}>
    {#if active || !animationFinished}
        <div
            on:animationend={() => {
                animationFinished = true;
            }}
            on:animationstart={() => {
                animationFinished = false;
            }}
            class={cn(
                "progress w-full h-full bg-green-500 left-right",
                progressClass,
            )}
        ></div>
    {/if}
</div>

<style>
    .progress {
        animation: progress 1.5s infinite ease-in-out;
    }

    .left-right {
        transform-origin: 0% 50%;
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
