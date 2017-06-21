<?php
/*

Template Name: Om Sidan

*/

 get_header();  ?>
<?php if( have_posts() ) : ?>
  <div class="article__wrapper">
<?php  while ( have_posts() ) : the_post();
    ?>



        <section class="section__about">
          <?php the_post_thumbnail(); ?>
            <div class="section__container__content">
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

endif;?>
<?php if ( is_active_sidebar( 'newsletter' ) ) : ?>
  <div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
    <?php dynamic_sidebar( 'newsletter' ); ?>
  </div><!-- #primary-sidebar -->
<?php endif; ?>
</div>





<?php get_footer(); ?>
