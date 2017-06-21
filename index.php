<?php get_header();  ?>
<?php if( have_posts() ) : ?>
  <div class="article__wrapper">
<?php  while ( have_posts() ) : the_post();
    ?>

    <?php if (has_post_thumbnail()): ?>
      <div class="section__company__image" style="background-image:url('<?php echo the_post_thumbnail_url(); ?>');"> </div>
    <?php endif; ?>



        <section class="section__container">
            <div class="section__container__inner">
              <h1>
                <?php the_title(); ?>
              </h1>
              <div class="line"></div>
              <div class="section__container__text">
                <?php the_content(); ?>
              </div>
            </div>
        </section>
  <?php

  endwhile;
else:
 echo  'Tyvärr, Det finns inget innehåll att visa';
endif;

$args = array(
    'post_type'      => 'page',
    'posts_per_page' => -1,
    'post_parent'    => $post->ID,
    'order'          => 'ASC',
    'orderby'        => 'menu_order'
 );


$parent = new WP_Query( $args );

if ( $parent->have_posts() ) : ?>

    <?php while ( $parent->have_posts() ) : $parent->the_post(); ?>

      <div class="container bg--grey">
        <section class="section__container">

          <div class="section__container__inner">
              <?php   the_post_thumbnail(); ?>
            <h2>
              <?php the_title(); ?>
            </h2>
            <div class="line"></div>
            <div class="section__container__text">
              <?php the_content(); ?>
            </div>
          </div>
        </section>
      </div>

    <?php endwhile; ?>

<?php endif; wp_reset_query();
 ?>

 <?php if ( is_active_sidebar( 'newsletter' ) ) : ?>
   <div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
     <?php dynamic_sidebar( 'newsletter' ); ?>
   </div><!-- #primary-sidebar -->
 <?php endif; ?>
</div>





<?php get_footer(); ?>
