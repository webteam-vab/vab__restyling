<!-- SERVICE NAV -->

<nav class="vab__serviceNav">
	<ul class="vab__serviceNav__list">

		<?php if(! in_array( $file_name, $buPages )): ?>

			<?php foreach ($content->serviceNav->item as $item): ?>
				<li class="vab__serviceNav__item"><a href="#0" class="vab__serviceNav__link __trigger_navigationClick"><?php echo $item->label; ?></li>
			<?php endforeach ?>

		<?php endif; ?>

		<li class="vab__serviceNav__item"><a href="#0" class="vab__serviceNav__link __trigger_navigationClick">Contact</a></li>

	</ul>
</nav>