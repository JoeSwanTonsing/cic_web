function homeOn(){
  if($('.home_container').hasClass('d-none')){
    $('.home_container').removeClass('d-none');
  }
  $('.home_container').addClass('d-block');
}

function homeOff(){
  if($('.home_container').hasClass('d-block')){
    $('.home_container').removeClass('d-block');
  }
  $('.home_container').addClass('d-none');
}

function sec_hide(){
  //hides all section
  if($('section').hasClass('d-block')){
    $('section').removeClass('d-block');
  }
  $('section').addClass('d-none');
}

function health_ON(){
  if($('#health').hasClass('d-none')){
    $('#health').removeClass('d-none');
  }
  $('#health').addClass('d-block')
}

function health_OFF(){
  if($('#health').hasClass('d-block')){
    $('#health').removeClass('d-block');
  }
  $('#health').addClass('d-none')
}



function showHome(){
  sec_hide();
  homeOn();
}

function showHospital(){
  homeOff()
  sec_hide();
  health_ON();
}

function showPharmacy(){

}

$(document).ready( function () {
  $("#lang").change(function(){
    var lg = $("#lang").val();
    if(lg=='en'){
      window.location.replace("index.html");
    }
    // else if(lg=='pai'){
    //   window.location.replace("paite.html"); 
    // }
  });

  $("#nav_home").click(function(){
    showHome();
  })
  $("#nav_health").click(function(){
    showHospital();
  })
})