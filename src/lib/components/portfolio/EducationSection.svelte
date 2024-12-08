<script>
	import BlurFade from '$lib/components/magic/BlurFade.svelte';
	import ResumeCard from '$lib/components/portfolio/ResumeCard.svelte';
	import { BLUR_FADE_DELAY } from '$lib/config';
	import { DATA } from '$lib/data/resume';
</script>

<section id="education">
	<div class="flex min-h-0 flex-col gap-y-3">
		<BlurFade delay={BLUR_FADE_DELAY}>
			<h2 class="text-xl font-bold">Education</h2>
		</BlurFade>
		{#each DATA.education as edu, id}
			<BlurFade delay={BLUR_FADE_DELAY * 1.2 + id * 0.05}>
				<ResumeCard
					href={edu.href}
					logoUrl={edu.logoUrl}
					company={edu.school}
					title={edu.degree}
					subtitle={edu.degree}
					start={edu.start}
					end={edu.end}
				/>
			</BlurFade>
		{/each}
	</div>
</section>
