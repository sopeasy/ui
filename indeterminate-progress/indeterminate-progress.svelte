<script lang="ts">
    import { cn } from "$lib/ui/utils.js";

    let {
        class: className,
        progressClass,
    }: {
        class: string;
        progressClass: string;
    } = $props();
</script>

<div class={cn("h-1.5 w-full bg-green-100 overflow-hidden", className)}>
    <div
        class={cn(
            "progress w-full h-full bg-green-500 left-right",
            progressClass,
        )}
    ></div>
</div>

<style>
    .progress {
        animation: progress 1s infinite linear;
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
