<?php get_header();  ?>
<?php if( have_posts() ) : ?>
  <div class="article__wrapper">
    <div id="grid" data-columns>
<?php  while ( have_posts() ) : the_post(); ?>



        <section class="section__grid">
            <div class="section__grid__content">
              <?php if (has_post_thumbnail()): ?>
                <?php the_post_thumbnail(); ?>
                <h2 class="section__grid__content_title">
                  <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                </h2>
                 <?php else: ?>
                   <div class="color">
                     <h2 class="section__grid__content_title">
                       <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                     </h2>
                   </div>
              <?php endif; ?>



            </div>
        </section>
  <?php

  endwhile;
else:
 echo  'Tyvärr, Det finns inget innehåll att visa';
endif;
?>
</div>
</div>





<?php get_footer(); ?>
