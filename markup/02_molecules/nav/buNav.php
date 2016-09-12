<!-- BUSINESS UNIT NAV -->

<?php if($file_name === 'bu-banden'): ?>

	<nav class="vab__buNav _priorityPlus">

		<a href="#" class="vab__buNav__more _priorityPlus__trigger __trigger_navigationClick">Meer <i class="vab__buNav__more__icon vab__icon--chevron-down-circle"></i></a>

		<ul class="vab__buNav__list _priorityPlus__visibles">
			<li class="vab__buNav__item vab__buNav__home"><a href="#0" class="vab__buNav__link __trigger_navigationClick"><span class="vab__buNav__link__label">Home</span></a></li>
			<li class="vab__buNav__item vab__buNav__name"><a href="#0" class="vab__buNav__link __trigger_navigationClick">Banden</a></li>
			<li class="vab__buNav__item -active"><a href="#0" class="vab__buNav__link _trigger__subMenu __trigger_navigationClick"><span class="vab__buNav__link__label">Kies je banden</span><i class="vab__buNav__icon vab__icon--chevron-down"></i></a>
				<div class="vab__buNav__sub">
					<ul class="vab__buNav__sub__list">
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 01 met een zeer, zeeeer lange naam</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 02</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 03</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 04</span></a></li>
					</ul>
				</div>
			</li>
			<li class="vab__buNav__item"><a href="#0" class="vab__buNav__link _trigger__subMenu __trigger_navigationClick"><span class="vab__buNav__link__label">Info en Tips</span><i class="vab__buNav__icon vab__icon--chevron-down"></i></a>
				<div class="vab__buNav__sub">
					<ul class="vab__buNav__sub__list">
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 01</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 02</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 03</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 04</span></a></li>
					</ul>
				</div>
			</li>
			<li class="vab__buNav__item"><a href="#0" class="vab__buNav__link _trigger__subMenu __trigger_navigationClick"><span class="vab__buNav__link__label">Diensten</span><i class="vab__buNav__icon vab__icon--chevron-down"></i></a>
				<div class="vab__buNav__sub">
					<ul class="vab__buNav__sub__list">
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 01</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 02</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 03</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 04</span></a></li>
					</ul>
				</div>
			</li>
			<li class="vab__buNav__item"><a href="#0" class="vab__buNav__link __trigger_navigationClick"><span class="vab__buNav__link__label">Leasing en Fleet</span></a></li>

			<li class="vab__buNav__item vab__buNav__login">
				<a href="#0" class="vab__buNav__theLogin __trigger_navigationClick"><i class="vab__buNav__login__icon vab__icon--individu"></i>Mijn Account</a>
			</li>
		</ul>


		<ul class="vab__buNav__plusNav _priorityPlus__hiddens">
			<?php include( MOLECULES . '/nav/serviceNav.php' ); ?>
				<?php include( MOLECULES . '/nav/langNav.php' ); ?>
		</ul>
	</nav>

<?php else: ?>

	<nav class="vab__buNav _priorityPlus">

		<a href="#" class="vab__buNav__more _priorityPlus__trigger __trigger_navigationClick">Meer <i class="vab__buNav__more__icon vab__icon--chevron-down-circle"></i></a>

		<ul class="vab__buNav__list _priorityPlus__visibles">
			<li class="vab__buNav__item vab__buNav__home"><a href="#0" class="vab__buNav__link __trigger_navigationClick"><span class="vab__buNav__link__label">Home</span></a></li>
			<li class="vab__buNav__item vab__buNav__name"><a href="#0" class="vab__buNav__link __trigger_navigationClick">Rijschool</a></li>
			<li class="vab__buNav__item -active"><a href="#0" class="vab__buNav__link _trigger__subMenu __trigger_navigationClick"><span class="vab__buNav__link__label">Rijbewijzen en opleidingen</span><i class="vab__buNav__icon vab__icon--chevron-down"></i></a>
				<div class="vab__buNav__sub">
					<ul class="vab__buNav__sub__list">
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 01 met een zeer, zeeeer lange naam</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 02</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 03</span></a></li>
						<li class="vab__buNav__sub__item"><a href="#0" class="vab__buNav__sub__link __trigger_navigationClick"><span class="vab__buNav__sub__label">Item 04</span></a></li>
					</ul>
				</div>
			</li>
			<li class="vab__buNav__item"><a href="#0" class="vab__buNav__link __trigger_navigationClick"><span class="vab__buNav__link__label">Vind je rijschool</span></a></li>

			<li class="vab__buNav__item"><a href="#0" class="vab__buNav__link __trigger_navigationClick"><span class="vab__buNav__link__label">Proefexamen</span></a></li>

			<li class="vab__buNav__item"><a href="#0" class="vab__buNav__link __trigger_navigationClick"><span class="vab__buNav__link__label">Boek je rijopleiding</span></a></li>

			<li class="vab__buNav__item vab__buNav__login">
				<a href="#0" class="vab__buNav__theLogin __trigger_navigationClick"><i class="vab__buNav__login__icon vab__icon--individu"></i>Mijn Account</a>
			</li>
		</ul>


		<ul class="vab__buNav__plusNav _priorityPlus__hiddens">

			<?php include( MOLECULES . '/nav/serviceNav.php' ); ?>
				<?php include( MOLECULES . '/nav/langNav.php' ); ?>
		</ul>
	</nav>

<?php endif; ?>
