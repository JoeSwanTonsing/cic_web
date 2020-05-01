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

function hosp_ON(){
  if($('#hospital').hasClass('d-none')){
    $('#hospital').removeClass('d-none');
  }
  $('#hospital').addClass('d-block')
}

function hosp_OFF(){
  if($('#hospital').hasClass('d-block')){
    $('#hospital').removeClass('d-block');
  }
  $('#hospital').addClass('d-none')
}



function showHome(){
  sec_hide();
  homeOn();
}

function showHospital(){
  homeOff()
  sec_hide();
  hosp_ON();
}

function showPharmacy(){

}

$(document).ready( function () {
  $('#data_table').DataTable({
    paging: false,
  });

  $("#lang").change(function(){
    var lg = $("#lang").val();
    if(lg=='en'){
      window.location.replace("index.html");
    }
    else if(lg=='pai'){
      window.location.replace("paite.html"); 
    }
  });

  $("#nav_home").click(function(){
    showHome();
  })
  $("#nav_hospital").click(function(){
    showHospital();
  })
})