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
            $("#demo01").animatedModal({
                modalTarget:'modal-01',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#ffffff',
            });

            //demo 02
            $("#demo02").animatedModal({
                modalTarget:'modal-02',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#ffffff',
            });

            //demo 03
            $("#demo03").animatedModal({
                modalTarget:'modal-03',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#ffffff',
            });

            //demo 04
            $("#demo04").animatedModal({
                modalTarget:'modal-04',
                animatedIn:'lightSpeedIn',
                animatedOut:'bounceOutDown',
                color:'#ffffff',
            });