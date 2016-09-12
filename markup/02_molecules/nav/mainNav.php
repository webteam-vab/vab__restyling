<!-- MAIN NAV -->

<nav class="vab__mainNav">
	<ul class="vab__mainNav__list">

		<?php foreach ($content->mainNav->item as $item): ?>

		<li class="vab__mainNav__item <?php echo ($file_name === 'bu-rijschool' && $item->label == 'Rijschool' || $file_name === 'bu-banden' && $item->label == 'Banden')  ? '-active' : ''; ?>">
			<a href="<?php echo (isset($item->link)) ? $item->link : '#0'; ?>" class="vab__mainNav__link _trigger__subMenu __trigger_navigationClick">
				<span class="vab__mainNav__link__label"><?php echo $item->label; ?></span> <?php if (isset($item->subs)) echo '<i class="vab__mainNav__icon vab__icon--chevron-down"></i>'; ?>
			</a>

			<?php if (isset($item->subs)): ?>

			<?php $count = count($item->subs->sub) + count($item->subs->aside); ?>

				<div class="vab__mainNav__sub <?php if (isset($item->subs->aside)) echo '_has_aside'; ?> _has_<?php echo $count?>_items">

					<div class="vab__mainNav__sub__main">

						<?php foreach ($item->subs->sub as $sub): ?>
							<ul class="vab__mainNav__sub__main__list">

								<?php foreach ($sub->item as $subItem): ?>
									<li class="vab__mainNav__sub__main__item"><a href="#0" class="vab__mainNav__sub__main__link __trigger_navigationClick"><?php echo $subItem->label; ?></a></li>
								<?php endforeach ?>

							</ul>
						<?php endforeach ?>

					</div>

					<?php if (isset($item->subs->aside)): ?>
						<div class="vab__mainNav__sub__aside">
							<ul class="vab__mainNav__sub__aside__list">

								<?php foreach ($item->subs->aside->item as $asideItem): ?>
									<li class="vab__mainNav__sub__aside__item"><a href="#0" class="vab__mainNav__sub__aside__link __trigger_navigationClick"><?php echo $asideItem->label; ?></a></li>
								<?php endforeach ?>

							</ul>
						</div>
					<?php endif; ?>

				</div>
			<?php endif; ?>

		</li>
		<?php endforeach ?>

	</ul>
</nav>