<script>
	import ContactSection from '$lib/components/portfolio/ContactSection.svelte';
	import EducationSection from '$lib/components/portfolio/EducationSection.svelte';
	import HeroSection from '$lib/components/portfolio/HeroSection.svelte';
	import ProjectsSection from '$lib/components/portfolio/ProjectsSection.svelte';
	import SkillsSection from '$lib/components/portfolio/SkillsSection.svelte';
	import WorkSection from '$lib/components/portfolio/WorkSection.svelte';
	import { DATA } from '$lib/data/resume';
	import AboutSection from '../lib/components/portfolio/AboutSection.svelte';
</script>

<svelte:head>
	<title>{DATA.name}</title>
	<meta name="description" content={DATA.description} />
	<meta property="og:title" content={DATA.name} />
	<meta property="og:description" content={DATA.description} />
	<meta property="og:url" content={DATA.url} />
	<meta property="og:site_name" content={DATA.name} />
	<meta property="og:image" content={DATA.img} />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta name="robots" content="index, follow" />
	<meta
		name="googlebot"
		content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
	/>
	<meta name="twitter:title" content={DATA.name} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={DATA.img} />
	<meta name="twitter:description" content={DATA.description} />

	<meta name="google-site-verification" content="your-google-verification-code" />
</svelte:head>

<main class="flex min-h-[100dvh] flex-col space-y-10">
	<HeroSection />

	<AboutSection />

	<WorkSection />

	<EducationSection />

	<SkillsSection />

	<ProjectsSection />

	<ContactSection />
</main>
