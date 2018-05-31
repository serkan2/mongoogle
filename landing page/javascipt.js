/* ====== add class on pagination if the section is visible ====== */
  $(document).scroll(function() {
  var cutoff = $(window).scrollTop() + 200; // on défini la position de déclenchement (*1)
  // Find current section and highlight nav menu
  var curSec = $.find('.current'); // on cherche l'élément (section) avec la class current
  var curID = $(curSec).attr('id'); // on récupère son ID
  var curNav = $.find('a[href=#'+curID+']'); // on cherche l'élément de navigation correspondant (*2)
  $('li .op-v-link').removeClass('active'); // on nettoie la navigation de la class active présente
  $(curNav).addClass('active'); // (*2) -> on ajoute la class active
  $('section').each(function(){
  if($(this).offset().top + $(this).height() > cutoff){ // si la section est dans le champ de scroll
  $('section').removeClass('current') // on nettoie les sections de la class current présente
  $(this).addClass('current'); // on ajoute la class current à la section visible
  return false; // on stoppe l’itération (le cas contraire, seule la derniere section se verra ajouter la class)
  }
  });
  });