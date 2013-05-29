  function experience(){
    var alcatel = $('#alcatel');
    var quineq = $('#quineq');
    var essex = $('#essex');

    alcatel.hide();
    quineq.hide();
    essex.hide();

    /* ALCATEL */
    $('#experAlcatel').click(function (event) 
    { 
      event.preventDefault();
      quineq.slideUp();
      essex.slideUp();
      /*alcatel show*/
      alcatel.slideToggle(function(){
       $('html, body').animate({  
        scrollTop:$(this).offset().top  
      }, 'slow' );
       
     });

    });
    /* QUINET */
    $('#experQuineq').click(function (event) 
    { 
      event.preventDefault(); 
      quineq.slideToggle(function(){
       $('html, body').animate({  
        scrollTop:$(this).offset().top  
      } );
     });
      alcatel.slideUp();
      essex.slideUp();
    });

    /* ESSEX */
    $('#experEssex').click(function (event) 
    { 
      event.preventDefault(); 
      essex.slideToggle(function(){
       $('html, body').animate({  
        scrollTop:$(this).offset().top  
      }, 'slow' );
     });
      alcatel.slideUp();
      quineq.slideUp();
    });
  }
//function for scroll de menu
function scrollIt(){
 $('nav a.scrollMe').click(function(event){
  event.preventDefault(); 
  var id = $(this).attr("href");
  $('html, body').animate({
    scrollTop:$(id).offset().top
  }, 'slow');
});  
}

//function sending form

function contactmeColorbox(){
   $("#contact").colorbox();
   
   /*$('#sendmemessage').click(function(){
    console.log('coucou')
    $.post('send.php',$('#contactme').serialize(),function(){
      alert('success');
    });
  });
  
 

  /*var name = $('#name').val();
  var last_name = $('#last_name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  $('#contactme').submit(function(event){

    $.ajax({
      type  : "post",
      url   : "send.php",
      data  : $(this).serialize() 
    });
    
    var cadena = $(this).serialize();
    console.log(cadena);

  });*/
  

   //end of validation and sending form
}

function submitForm(){
  $('#contactme').submit(function(){
    $.post($(this).attr('action'), $(this).serialize(), function(data){
      $.colorbox({html:data});
    }, 'html');
    return false
  })

}
$(document).ready(function(){
  experience();
  scrollIt();
  contactmeColorbox();
});