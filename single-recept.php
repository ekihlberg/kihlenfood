<?php get_header();  ?>
<div class="article__wrapper">
    <?php if( have_posts() ) :
      while ( have_posts() ) : the_post();?>
      <section>




        <div class="section__top__image" style="background-image:url('<?php echo the_post_thumbnail_url(); ?>');">

            <div class="overlay"><h1><?php the_title(); ?></h1></div>
        </div>

      </section>
    <?php  endwhile;
  else:
    echo  'Tyvärr, Det finns inget innehåll att visa';
  endif;



  ?>





  <section class="section__recipe content">


    <div class="section__recipe_top">
      <h2>
        <?php the_title(); ?>
      </h2>
      <div class="section__recipe__ingridi">

        <?php
        if( have_rows('ingridients') ):?>


        <?php  while ( have_rows('ingridients') ) : the_row();?>


          <?php the_sub_field('antal');?> <?php the_sub_field('enhet');?> <?php the_sub_field('namn');?></br>


        <?php endwhile;?>


      <?php endif;

      ?>
    </div>

  </div>
  <div class="title">
    <?php if (get_field('portioner')): ?>
      <p class="ruler"><?php the_field('portioner'); ?> Portioner </p>
    <?php endif; ?>

  </div>
  <div class="section__recipe__content">
    <div class="section__recipe__content__ingress">
      <?php the_excerpt(); ?>
    </div>
    <div class="section__recipe__content__text">
      <?php the_content(); ?>
    </div>

  </div><?php
  if( have_rows('bilder') ):?>


  <?php  while ( have_rows('bilder') ) : the_row();?>


    <?php $image = get_sub_field('bild');?>
    <img  class="recipe__image" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" />
  </br>


  <?php endwhile;?>


<?php endif;?>

  </section>
  <?php if ( is_active_sidebar( 'newsletter' ) ) : ?>
    <div id="primary-sidebar" class="primary-sidebar widget-area" role="complementary">
      <?php dynamic_sidebar( 'newsletter' ); ?>
    </div><!-- #primary-sidebar -->
  <?php endif; ?>

</div>
<?php get_footer(); ?>
