
<div class="bottom-bar"></div>
<footer class="site-footer">
  <p class="logo">Kihlen<em>food</em></p>
  <div class="social-icons">
    <a href="https://www.facebook.com/kihlenfood/" target="_blank"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
    <a href="https://www.instagram.com/kihlenfood/" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
    <a href="mailto:kihlenfood@ekihlberg.se"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>




  </div>
  <?php
  wp_nav_menu(array(
  'theme_location' => 'footer',
  'fallback_cb'=> true,
  ));

  ?>
</footer>
</div>
<?php wp_footer(); ?>
</body>
</html>
