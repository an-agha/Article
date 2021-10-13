$(document).ready(function () {
    
    $('.expansion-btn').on('click', function(){
        $(this).closest('.service').find('.expansion').slideToggle();
        $(this).find('img').toggleClass('invert');
    });

   
});
function showNav(){
    if(navbarNav.style.display==="none"){
        document.getElementById('navbarNav').style.display='flex';
    }
    else{
        document.getElementById('navbarNav').style.display='none'; 
    }
}

function showItem(option){

    $(".article").css('display', 'none');
    $(`#${option}`).css('display', 'flex');
  
  }
