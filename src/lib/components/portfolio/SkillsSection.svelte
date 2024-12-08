<script>
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { BLUR_FADE_DELAY } from '$lib/config';
	import { DATA } from '$lib/data/resume';
</script>

<section id="skills">
	<div class="flex min-h-0 flex-col gap-y-3">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-xl font-bold">Skills</h2>
		</BlurFade>
		<div class="flex flex-wrap gap-1">
			{#each DATA.skills as skill, id}
				<BlurFade delay={BLUR_FADE_DELAY * id + 0.002}>
					<Badge>{skill}</Badge>
				</BlurFade>
			{/each}
		</div>
	</div>
</section>
