<!-- GENERAL FOOTER -->

<section class="vab__footerGeneral">
	<div class="vab__section--large-centered vab__gap--xs-xsmall-s-small-l-xlarge">
		<div class="vab__grid">
			<div class="vab__box--xs-w100p-m-w40p">
			    <div class="vab__box--xs-w50p vab__layout--xs-pv-small-xs-ph-xxsmall">
			        <div class="vab__box__inner">
						<?php foreach($content->footer->general->item[0]->subs->sub as $sub): ?>
							<ul class="vab__footerGeneral__list">
								<?php foreach ($sub->item as $item): ?>
								<li class="vab__footerGeneral__item"><a href="#0" class="vab__footerGeneral__link __trigger_footerClick"><?php echo $item->label; ?></a></li>
								<?php endforeach; ?>
							</ul>
						<?php endforeach; ?>
			        </div>
			    </div>

			    <div class="vab__box--xs-w50p vab__layout--xs-p-small vab__footerGeneral__borders">
			        <div class="vab__box__inner">
						<?php foreach($content->footer->general->item[1]->subs->sub as $sub): ?>
						<ul class="vab__footerGeneral__list">
							<?php foreach ($sub->item as $item): ?>
								<li class="vab__footerGeneral__item"><a href="#0" class="vab__footerGeneral__link __trigger_footerClick"><?php echo $item->label; ?></a></li>
							<?php endforeach; ?>
						</ul>
						<?php endforeach; ?>
			        </div>
			    </div>
			</div>

			<div class="vab__box--xs-w100p-m-w60p vab__layout--m-pv-small">
			    <div class="vab__box--xs-w100p-m-w33p">
			        <div class="vab__box__inner">

						<?php foreach($content->footer->general->item[2]->subs->sub as $sub): ?>
						<ul class="vab__footerGeneral__dd__list">
							<li class="vab__footerGeneral__dd__item _trigger__subMenu"><?php echo $sub->label; ?> <i class="vab__footerGeneral__dd__icon vab__icon--chevron-down"></i>
								<div class="vab__footerGeneral__dd__sub">
									<ul class="vab__footerGeneral__dd__sub__list">
										<?php foreach($sub->item as $item): ?>
										<li class="vab__footerGeneral__dd__sub__item"><a href="#0" class="vab__footerGeneral__dd__sub__link __trigger_footerClick"><?php echo $item->label; ?></a></li>
										<?php endforeach; ?>
									</ul>
								</div>
							</li>
						</ul>
						<?php endforeach; ?>

			        </div>
			    </div>

			    <div class="vab__box--xs-w100p-m-w33p">
			        <div class="vab__box__inner">

						<?php foreach($content->footer->general->item[3]->subs->sub as $sub): ?>
							<ul class="vab__footerGeneral__dd__list">
								<li class="vab__footerGeneral__dd__item _trigger__subMenu"><?php echo $sub->label; ?> <i class="vab__footerGeneral__dd__icon vab__icon--chevron-down"></i>
									<div class="vab__footerGeneral__dd__sub">
										<ul class="vab__footerGeneral__dd__sub__list">
											<?php foreach($sub->item as $item): ?>
												<li class="vab__footerGeneral__dd__sub__item"><a href="#0" class="vab__footerGeneral__dd__sub__link __trigger_footerClick"><?php echo $item->label; ?></a></li>
											<?php endforeach; ?>
										</ul>
									</div>
								</li>
							</ul>
						<?php endforeach; ?>

			        </div>
			    </div>

			    <div class="vab__box--xs-w100p-m-w33p">
			        <div class="vab__box__inner">

						<?php foreach($content->footer->general->item[4]->subs->sub as $sub): ?>
							<ul class="vab__footerGeneral__dd__list">
								<li class="vab__footerGeneral__dd__item _trigger__subMenu"><?php echo $sub->label; ?> <i class="vab__footerGeneral__dd__icon vab__icon--chevron-down"></i>
									<div class="vab__footerGeneral__dd__sub">
										<ul class="vab__footerGeneral__dd__sub__list">
											<?php foreach($sub->item as $item): ?>
												<li class="vab__footerGeneral__dd__sub__item"><a href="#0" class="vab__footerGeneral__dd__sub__link __trigger_footerClick"><?php echo $item->label; ?></a></li>
											<?php endforeach; ?>
										</ul>
									</div>
								</li>
							</ul>
						<?php endforeach; ?>

			        </div>
			    </div>
			</div>

		</div>
	</div>
</section>

<section class="vab__footerGeneral__misc">
	<div class="vab__section--large-centered vab__gap--m-small-l-xlarge">

		<div class="vab__footerGeneral__misc__nav">
	        <ul class="vab__footerGeneral__misc__nav__list">
	            <li class="vab__footerGeneral__misc__nav__item"><?php echo $content->footer->misc->label; ?></li>
				<?php foreach ($content->footer->misc->item as $item): ?>
					<li class="vab__footerGeneral__misc__nav__item"><a href="#0" class="vab__footerGeneral__misc__nav__link __trigger_footerClick"><?php echo $item->label; ?></a></li>
				<?php endforeach; ?>
	        </ul>
	    </div>

		<?php if($language === 'nl'): ?>
		<div class="vab__footerGeneral__social">
	        <ul class="vab__footerGeneral__social__list">
	            <li class="vab__footerGeneral__social__item"><?php echo $content->footer->social->label; ?></li>
	            <li class="vab__footerGeneral__social__item"><a href="#0" class="vab__footerGeneral__social__link __trigger_footerClick" target="_blank"><i class="vab__footerGeneral__social__icon vab__icon--facebook"></i></a></li>
	            <li class="vab__footerGeneral__social__item"><a href="#0" class="vab__footerGeneral__social__link __trigger_footerClick" target="_blank"><i class="vab__footerGeneral__social__icon vab__icon--linkedin"></i></a></li>
	            <li class="vab__footerGeneral__social__item"><a href="#0" class="vab__footerGeneral__social__link __trigger_footerClick" target="_blank"><i class="vab__footerGeneral__social__icon vab__icon--twitter"></i></a></li>
			</ul>
	    </div>
		<?php endif; ?>

	</div>
</section>
