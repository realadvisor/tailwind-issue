<main>
	<slot />
</main>

<style global lang="postcss">
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';

	@responsive {
		.content-visibility-unset {
			content-visibility: unset;
			contain-intrinsic-size: unset;
		}
	}
</style>
