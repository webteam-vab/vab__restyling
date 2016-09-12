<!-- THE HEADER -->

<header class="vab__header">
	<div class="vab__header__wrap">

		<section class="vab__section--large-centered vab__gap--m-small">

			<?php if(! in_array( $file_name, $buPages )): ?>
				<div class="vab__header__optional">
					 <?php include( MOLECULES . '/nav/audienceNav.php' ); ?>
				</div>
			<?php endif; ?>

			<div class="vab__header__inner">

				<div class="vab__header__logo">
					<a href="#0" class="vab__logo"><span class="vab__screenReader">VAB Logo</span></a>
				</div>


					<div class="vab__header__callout">
						<?php include( MOLECULES . '/nav/callNav.php' ); ?>
					</div>


				<div class="vab__header__main__mobileControl"><a href="#0" class="vab__header__burgerMenu__link _trigger__mobileMenu" data-menu="mainMenu"><span class="vab__header__theBurger"></span><span class="vab__screenReader">Menu</span></a></div>

				<div class="vab__header__main">
					<?php include( MOLECULES . '/nav/mainNav.php' ); ?>
				</div>

				<?php if(! in_array( $file_name, $buPages )): ?>
					<div class="vab__header__search">
						<?php include( MOLECULES . '/search.php' ); ?>
					</div>
				<?php endif; ?>

				<div class="vab__header__lower">
					<?php include( MOLECULES . '/nav/serviceNav.php' ); ?>
					<?php include( MOLECULES . '/nav/langNav.php' ); ?>
				</div>

				<?php if( in_array( $file_name, $buPages )): ?>
					<div class="vab__header__basket">
						<?php include( MOLECULES . '/basket.php' ); ?>
					</div>
				<?php endif; ?>

			</div>

		</section>

	</div>


</header>

<?php if( in_array( $file_name, $buPages )): ?>

<header class="vab__buHeader">
	<section class="vab__section--large-centered">

		<div class="vab__buHeader__mobileControl">
			<a href="#" class="vab__buNav__mobileControl _trigger__mobileMenu" data-menu="buMenu">Rijschool <i class="vab__buNav__mobileControl__icon vab__icon--chevron-down-circle"></i></a>
		</div>

		<div class="vab__buHeader__wrap">
			<div class="vab__buHeader__inner">
				<?php include( MOLECULES . '/nav/buNav.php' ); ?>

				<?php include( MOLECULES . '/nav/serviceNav.php' ); ?>
				<?php include( MOLECULES . '/nav/langNav.php' ); ?>
			</div>
		</div>
	</section>
</header>
<?php endif; ?>
