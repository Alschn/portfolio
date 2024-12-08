<script>
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { BLUR_FADE_DELAY } from '$lib/config';
	import { DATA } from '$lib/data/resume';
</script>

<section id="hero">
	<div class="mx-auto w-full max-w-2xl space-y-8">
		<div class="flex justify-between gap-2">
			<div class="flex flex-1 flex-col space-y-1.5">
				<BlurFade
					delay={BLUR_FADE_DELAY}
					class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
					yOffset={8}>{DATA.hero.title}</BlurFade
				>
				<BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}
					>{DATA.hero.subtitle}</BlurFade
				>
			</div>
			<BlurFade delay={BLUR_FADE_DELAY}>
				<Avatar.Root class="size-28 border">
					<Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
					<Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
				</Avatar.Root>
			</BlurFade>
		</div>
	</div>
</section>
