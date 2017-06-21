<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>

<?php // WordPress custom title script

// is the current page a tag archive page?
if (function_exists('is_tag') && is_tag()) {

	// if so, display this custom title
	echo 'Tag Archive for &quot;'.$tag.'&quot; - ';

// or, is the page an archive page?
} elseif (is_archive()) {

	// if so, display this custom title
	wp_title(''); echo ' Archive - ';

// or, is the page a search page?
} elseif (is_home()) {
  echo ' ';
} elseif (is_search()) {

	// if so, display this custom title
	echo 'Search for &quot;'.wp_specialchars($s).'&quot; - ';

// or, is the page a single post or a literal page?
} elseif (!(is_404()) && (is_single()) || (is_page())) {

	// if so, display this custom title
	wp_title(''); echo ' - ';

// or, is the page an error page?
} elseif (is_404()) {

	// yep, you guessed it
	echo 'Not Found - ';

}
// finally, display the blog name for all page types
bloginfo('name');

?>
</title>
<link href="https://fonts.googleapis.com/css?family=Libre+Baskerville:400,400i,700|Muli:400,600" rel="stylesheet">

<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
  <div class="site">
  <header>
    <div class="navbar">
      <?php the_custom_logo(); ?>
    <nav class="main-menu">

      <?php
      wp_nav_menu(array(
      'theme_location' => 'main',
      'fallback_cb'=> true,
      ));


        ?>

    </nav>

      <div class="nav-toggle">
        <span></span>
      </div>
    </div>

  </header>
