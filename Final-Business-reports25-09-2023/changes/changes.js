$(document).ready(function() {  


    //--- Business Report Gallery Banner section ----//


$('.business_report_gallery_sec .report_galleryBox').each(function() {
    var myImage = $(this);
    myImage.on('click', function() {
      $('.report_galleryBox').removeClass('large_width');
      myImage.toggleClass('large_width');
    });
  });
  
  
  //--- Business Report Gallery Banner section ----//

    // Business Page Hide and Show

    $(".reportPara").hide();
    $(".reportVideos").hide();
    $(".reportNews").show();

    $(".reportShow").click(function(){
    $(".reportPara").show();
    $(".reportVideos").hide();
    $(".reportNews").hide();
  });
    
  $(".videoShow").click(function(){
    $(".reportVideos").show();
    $(".reportPara").hide();
    $(".reportNews").hide();
  });

  $(".newShow").click(function(){
    $(".reportNews").show();
    $(".reportPara").hide();
    $(".reportVideos").hide();
  });



// Business Page Hide and Show
  
})
