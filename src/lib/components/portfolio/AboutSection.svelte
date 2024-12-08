<script>
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import { BLUR_FADE_DELAY } from '$lib/config';
	import { DATA } from '$lib/data/resume';
	import { marked } from 'marked';
</script>

<section id="about">
	<BlurFade delay={BLUR_FADE_DELAY}>
		<h2 class="text-xl font-bold">About</h2>
	</BlurFade>
	<BlurFade delay={BLUR_FADE_DELAY * 1.4}>
		<div
			class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
		>
			{@html marked(DATA.summary)}
		</div>
	</BlurFade>
</section>
