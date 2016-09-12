<?php include( 'config.php' ); ?>

<?php include( INCLUDES . '/head.php' ); ?>

<?php ( !$is_plain ) && include( MOLECULES . '/cookies.php'); ?>

<?php ( !$is_plain ) && include( ORGANISMS . '/header.php' ); ?>

<?php if( !$is_plain && strpos($file, 'homepage') === false): ?>
	<section class="vab__section--large-centered vab__gap--xs-xsmall-s-small vab__layout--xs-mt-xsmall-s-mt-small">
		<?php include( MOLECULES . '/breadcrumb.php'); ?>
	</section>
<?php endif; ?>

<?php if( $is_plain ): echo '<section class="vab__section--large-centered vab__gap--xs-xsmall-s-small vab__layout--xs-mt-medium-s-mt-large"><a class="vab__link--directional-primair-2-bkwd" href="/nl/index-overview" />Ga terug naar overzicht</a></section><section class="vab__section--large-centered vab__gap--xs-xsmall-s-small vab__layout--xs-mt-medium-s-mt-large">'; endif; ?>

		<?php include( $thePath ); ?>

<?php if( $is_plain ): echo '</section>'; endif; ?>

<?php ( !$is_plain ) && include( ORGANISMS . '/footer.php' ); ?>

<?php include( INCLUDES . '/foot.php' ); ?>