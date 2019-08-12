$(document).ready(function () {
var $grid = $('#result').isotope({
    itemSelector: '.result-item',
  });

  $('.sub-menu').on( 'click', 'a', function() {
    var filterValue = $( this ).attr('data-category');
    $grid.isotope({ filter: filterValue });
  });

  var initShow = 6; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $grid.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $grid.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $grid.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    };

  }

  //append load more button
  $grid.after('<div class="row command mm-load-more"><button id="load-more" class="btn-large btn-orange mm-btn-load-more"> Xem thêm</button></div>');

  //when load more button clicked
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });
});

$(window).scroll(function() {
  $window = $(this)
  if($('.scroll-banner')) {
    if($window.scrollTop() >= $('.table-category').offset().top && ($window.scrollTop() + $('.scroll-banner').height()) <= ($('.packages-table-Quan-tri-he-thong').offset().top + $('.packages-table-Quan-tri-he-thong').height())) {
      $('.scroll-banner').addClass('show-banner')
    } else {
      $('.scroll-banner').removeClass('show-banner')
    }
  }
})