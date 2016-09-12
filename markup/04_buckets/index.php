<section class="vab__section--large-centered vab__gap--xs-xsmall-s-small vab__layout--xs-mt-medium-s-mt-large">

	<h1 class="vab__heading--1 vab__layout--s-mb-medium">Overzicht</h1>

	<h2 class="vab__heading--2 vab__layout--s-mb-xsmall">Links</h2>

	<div class="vab__layout--s-mb-medium">

		<?php if ( count( $pageTypes ) ): ?>

			<h4 class="vab__heading--4">Pagina's</h4>

			<ul class="vab__list--bullets vab__layout--s-mb-small">
				<?php foreach ($pageTypes as $pageType): $pageType = explode('.', $pageType)[0]; ?>
					<li class="vab__list__item"><a href="<?php echo '/nl/' . $pageType; ?>" target="_blank" class="vab__link--underline"><?php echo $pageType; ?></a></li>
				<?php endforeach ?>
			</ul>

		<?php endif; ?>

		<h4 class="vab__heading--4">Nav BU Banden</h4>

		<ul class="vab__list--bullets vab__layout--s-mb-small">
			<li class="vab__list__item"><a href="/nl/bu-banden" target="_blank" class="vab__link--underline">NL</a></li>
			<li class="vab__list__item"><a href="/fr/bu-banden" target="_blank" class="vab__link--underline">FR</a></li>
		</ul>

		<h4 class="vab__heading--4">Nav BU Rijschool</h4>

		<ul class="vab__list--bullets vab__layout--s-mb-small">
			<li class="vab__list__item"><a href="/nl/bu-rijschool" target="_blank" class="vab__link--underline">NL</a></li>
			<li class="vab__list__item"><a href="/fr/bu-rijschool" target="_blank" class="vab__link--underline">FR</a></li>
		</ul>
	</div>

	<h2 class="vab__heading--2 vab__layout--s-mb-xsmall">Moleculen</h2>

	<div class="vab__layout--s-mb-medium">

		<?php if ( count( $molecules ) ): ?>
		<ul class="vab__list--bullets vab__layout--s-mb-xsmall">
			<?php foreach ($molecules as $molecule): $molecule = explode('.', $molecule)[0]; ?>

			<li class="vab__list__item"><a href="<?php echo '/molecules/' . $molecule; ?>" class="vab__link--underline"><?php echo $molecule; ?></a></li>

			<?php endforeach ?>
		</ul>
		<?php endif; ?>
	</div>

</section>