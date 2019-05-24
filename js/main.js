/*global $, jQuery, alert*/
$(document).ready(function() {

    'use strict';

  // ========================================================================= //
  //  Porfolio isotope and filter
  // add jQuery to submit form, add iframe to popup overlay, add queryselector to get elementbyid and change CSS theme
  // ========================================================================= //


  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });
  
});