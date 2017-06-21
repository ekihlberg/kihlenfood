<?php
function cellwood_script_enqueue(){
 wp_enqueue_style('style', get_stylesheet_uri());
 wp_enqueue_script('my-scripts', get_stylesheet_directory_uri().'/js/script.js', array ( 'jquery' ), 1.1, true);
  wp_enqueue_script('script', get_stylesheet_directory_uri().'/js/_showOnScroll.js', array ( 'jquery' ), 1.1, true);
  wp_enqueue_script('salvatore', get_stylesheet_directory_uri().'/js/salvatore.js', array(), 1.1, true);

  wp_enqueue_script('modernizr', get_stylesheet_directory_uri().'/js/modernizr.js', 1.1, true);
    wp_enqueue_style('font-awesome', get_stylesheet_directory_uri() . '/css/font-awesome.min.css');
};
 add_action('wp_enqueue_scripts', 'cellwood_script_enqueue');

function cellwood_theme_functionality() {
 add_theme_support('menus');
 register_nav_menu('main', __('Huvudmenyn'));
 register_nav_menu('footer', __('Menun i sidfoten'));
 add_theme_support( 'post-thumbnails' );
 add_theme_support( 'custom-logo' );
 add_post_type_support( 'page', 'excerpt' );


};
add_action('init', 'cellwood_theme_functionality');

// Register Custom Post Type
function recept_kihlenfood() {

	$labels = array(
		'name'                  => _x( 'Recept', 'Post Type General Name', 'text_domain' ),
		'singular_name'         => _x( 'Recept', 'Post Type Singular Name', 'text_domain' ),
		'menu_name'             => __( 'Recept', 'text_domain' ),
		'name_admin_bar'        => __( 'Recept', 'text_domain' ),
		'archives'              => __( 'Receptsamling', 'text_domain' ),
		'attributes'            => __( 'Recept tillläg', 'text_domain' ),
		'parent_item_colon'     => __( 'Huvudrecept', 'text_domain' ),
		'all_items'             => __( 'Alla recept', 'text_domain' ),
		'add_new_item'          => __( 'Lägg till nytt', 'text_domain' ),
		'add_new'               => __( 'Lägg till nytt', 'text_domain' ),
		'new_item'              => __( 'Nytt recept', 'text_domain' ),
		'edit_item'             => __( 'Ändra recept', 'text_domain' ),
		'update_item'           => __( 'Uppdatera recept', 'text_domain' ),
		'view_item'             => __( 'Se recept', 'text_domain' ),
		'view_items'            => __( 'Se recepten', 'text_domain' ),
		'search_items'          => __( 'Sök recept', 'text_domain' ),
		'not_found'             => __( 'Hittas inte', 'text_domain' ),

	);
	$args = array(
		'label'                 => __( 'Recept', 'text_domain' ),
		'description'           => __( 'Recept på sidan', 'text_domain' ),
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'trackbacks', 'revisions', 'custom-fields', 'page-attributes', ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 20,
		'menu_icon'             => 'dashicons-carrot',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'recept', $args );

}
add_action( 'init', 'recept_kihlenfood', 0 );
function arphabet_widgets_init() {

	register_sidebar( array(
		'name'          => 'Nyhetsbrev',
		'id'            => 'newsletter',
		'before_widget' => '<div class="newsletter">',
		'after_widget'  => '</div>',
		'before_title'  => '<h3>',
		'after_title'   => '</h2>',
	) );

}
add_action( 'widgets_init', 'arphabet_widgets_init' );

  ?>
