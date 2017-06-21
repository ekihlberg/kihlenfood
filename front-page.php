<?php get_header();  ?>
  <div class="article__wrapper">
<?php if( have_posts() ) :
  while ( have_posts() ) : the_post();?>
    <section>




    <div class="section__top__image" style="background-image:url('<?php echo the_post_thumbnail_url(); ?>');">
      <div class="overlay"><h1>Kihlen<em>food</em></h1></div>


    </div>

</section>
  <?php  endwhile;
else:

endif;



 ?>
<section class="wrapper">

 <?php


 $receptshow = new Wp_Query(array(
     'post_type'=> 'recept',
     'posts_per_page' => 2,
   )
 );

 if( $receptshow->have_posts() ) :
   while ( $receptshow->have_posts() ) : $receptshow->the_post();
    ?>


    <section class="section__recipeshow">
    <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
    <h2><?php the_title(); ?></h2>

    </section>


 <?php  endwhile;?>
 <a class="btn btn--center" href="<?php echo get_post_type_archive_link( 'recept' ); ?>">Se fler recept</a>
 <div class="title">
 </div>


 <?php else:
 endif;
wp_reset_postdata();


  ?>


  <?php if ( is_active_sidebar( 'newsletter' ) ) : ?>
  	<div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
  		<?php dynamic_sidebar( 'newsletter' ); ?>
  	</div><!-- #primary-sidebar -->
  <?php endif; ?>
</section>

</div>

<?php get_footer(); ?>
