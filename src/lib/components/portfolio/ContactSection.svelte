<script>
	import { BLUR_FADE_DELAY } from '$lib/config';
	import BlurFade from '../magic/BlurFade.svelte';
</script>

<section id="contact">
	<div class="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
		<BlurFade delay={BLUR_FADE_DELAY * 2}>
			<div class="space-y-3">
				<div class="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
					Contact
				</div>
				<h2 class="text-3xl font-bold tracking-tight sm:text-5xl">Get in Touch</h2>
				<p
					class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dignissim posuere enim, id
					semper libero dictum ut. Integer finibus, nulla nec molestie tristique, ante nunc
					consequat libero
				</p>
			</div>
		</BlurFade>
	</div>
</section>
