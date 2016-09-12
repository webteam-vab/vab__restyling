<?php

	ini_set('display_errors', 1);
	error_reporting(E_ALL);

// - THE CONFIG

	function cleanArray( $files, $theArray ) {

		$thePos = false;

		foreach ( $files as $file ) {
			$thePos = array_search( $file, $theArray );
			$thePos && array_splice( $theArray, $thePos, 1 );
		}

		$theArray = array_values( $theArray );
		$theArray = array_diff( $theArray, array( '..', '.' ) );

		return $theArray;

	}

	// - LANGUAGES
	if ( ! defined( 'LANGUAGES' ) ) { define( 'LANGUAGES', 'languages' ); }

	// - RESOURCES
	if ( ! defined( 'RESOURCES' ) ) { define('RESOURCES', '/resources'); }
	if ( ! defined( 'IMAGES' ) ) 	{ define('IMAGES',  RESOURCES . '/img'); }
	if ( ! defined( 'STYLES' ) ) 	{ define('STYLES',  RESOURCES . '/css'); }
	if ( ! defined( 'SCRIPTS' ) ) 	{ define('SCRIPTS', RESOURCES . '/js'); }

	// - MARKUP
	if ( ! defined( 'MARKUP' ) ) 		{ define('MARKUP', 'markup'); }
	if ( ! defined( 'MOLECULES' ) ) 	{ define('MOLECULES', 	MARKUP . '/02_molecules'); }
	if ( ! defined( 'ORGANISMS' ) ) 	{ define('ORGANISMS', 	MARKUP . '/03_organisms'); }
	if ( ! defined( 'BUCKETS' ) ) 		{ define('BUCKETS', 	MARKUP . '/04_buckets'); }
	if ( ! defined( 'INCLUDES' ) ) 		{ define('INCLUDES', 	MARKUP . '/99_includes'); }

	// - DEFINE VARIABLES
	$content = '';
	$dir = 'BUCKETS';
	$file = '';
	$default_language = 'nl';
	$default_file = 'index';
	$is_plain = false;
	$thePath = '';

	// - DEFINE LANGUAGE
	$language = ( isset( $_GET['language'] ) ) ? $_GET['language'] : $default_language;
	$languagePath = LANGUAGES . '/' . $language . '.xml';
	$languagePath = file_exists( $languagePath ) ? $languagePath : LANGUAGES . '/' . $default_language . '.xml';

	// - DEFINE FILE
	$file = ( isset( $_GET['page'] ) ) ? $_GET['page'] : $default_file;
	$file = strpos( $file, '.php' ) ? $file : $file . '.php';
	$file_name = explode( '.', $file )[0];

	// - GET DIR
	$dir = isset( $_GET['dir'] ) ? strtoupper( $_GET['dir'] ) : $dir;

	// - GET PATH TO FILE
	$thePath = constant($dir) . '/' . $file;

	// - CHECK IF FILE EXISTS
	if ( ! file_exists( $thePath ) ) { header( 'Location: /' ); }

	// - GET ALL ORGANISMS
	$organisms = scandir( ORGANISMS );
	$organisms = cleanArray(array('.DS_Store', 'header.php', 'footer.php'), $organisms);

	// - GET ALL MOLECULES
	$molecules = scandir( MOLECULES );
	$molecules = cleanArray(array('.DS_Store', 'nav', 'audienceNav.php', 'buNav.php', 'callNav.php', 'langNav.php', 'mainNav.php', 'serviceNav.php', 'breadcrumb.php', 'formSteps.php', 'paginatie.php', 'tabel.php', 'basket.php'), $molecules);

	// - GET ALL BUCKETS
	$buckets = scandir( BUCKETS );
	$buckets = cleanArray(array('.DS_Store'), $buckets);

	// - GET ALL PAGETYPES
	$pageTypes = scandir( BUCKETS );
	$pageTypes = cleanArray(array('.DS_Store', 'index.php', 'bu-banden.php', 'bu-rijschool.php'), $pageTypes);

	// - DEFINE BUSINESS UNIT PAGES
	$buPages = array( 'bu-banden', 'bu-rijschool');

	// - IS PLAIN FILE
	$is_plain = ! in_array( $file_name . '.php', $buckets );

	// - LOAD LANGUAGE FILE
	$content = file_exists( $languagePath ) ? simplexml_load_file($languagePath) : '';
