<?php 
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

 // Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function aa_blocks_init() {
	register_block_type( __DIR__ . '/build/show-avatar');
}
add_action( 'init', 'aa_blocks_init' );