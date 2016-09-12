<!-- FOOTER -->

<footer class="vab__footer">

    <?php if( in_array( $file_name, $buPages )): ?>
        <section class="vab__footerB vab__layout--xs-mt-medium-l-mt-large vab__bgc--brand-dark ">
            <?php include( MOLECULES . '/footer/contactFooter-B.php' ); ?>
        </section>
    <?php endif; ?>

     <?php if(! in_array( $file_name, $buPages )): ?>
     	<section class="vab__footerA">
        	<?php include( MOLECULES . '/footer/contactFooter-A.php' ); ?>
    	</section>
    <?php endif; ?>

    <?php include( MOLECULES . '/footer/generalFooter.php' ); ?>

</footer>