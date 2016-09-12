<!-- AUDIENCE NAV -->

<nav class="vab__audienceNav">
	<ul class="vab__audienceNav__list">

		<?php $count = 1; ?>

		<?php foreach ($content->audienceNav->item as $item): ?>
			<li class="vab__audienceNav__item"><a href="#0" class="vab__audienceNav__link __trigger_navigationClick <?php echo $count == 1 ? '-active' : ''; ?> "><?php echo $item->label; ?></a></li>
		<?php $count++; endforeach ?>

	</ul>
</nav>