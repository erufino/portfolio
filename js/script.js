// animated modal (popup / lightbox) JS
$("#demo01").animatedModal();

$(function() {
  // $("a[href=#menuExpand]").click(function(e) {
  // showHideMobile();
  // e.preventDefault();
  // });
  
  $(".mobileDimmer").click(function() {
    showHideMobile();
  });
});

function showHideMobile() {
  $(".mobileMenu").toggleClass("menuOpen");
  $(".mobileBodyWrapper").toggleClass("menuOpen");
  $(".mobileDimmer").toggle();
}

      //demo 01
            $("#demo01").animatedModal();

            //demo 02
            $("#demo02").animatedModal({
                modalTarget:'modal-02',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#3498db',
               
            });