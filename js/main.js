var slider = null;
$(document).ready(function(){	
    $('input[name=page_url]').val(window.location.href);
    $('input[name=phone]').mask("+7 (999) 999-9999");
    $(".form-top").validate({
       rules:{
            name:{
                required: false,
            },
            phone:{
                required: true,
            },
            sdata:{
                required: true,
            },
            fdata:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            },
            sdata:{
                required: "",
            },
            fdata:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(form).ajaxSubmit();
    $('.form-top').find('input[type=text]').val('');
    $('.form-top').find('button[type=submit]').text("Отправлено");
    return false;
  }
    });
   $(".form-mid1").validate({
       rules:{
            name:{
                required: false,
            },
            phone:{
                required: true,
            },
            sdata:{
                required: true,
            },
            fdata:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            },
            sdata:{
                required: "",
            },
            fdata:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(form).ajaxSubmit();
    $('.form-mid1').find('input[type=text]').val('');
    $('.form-mid1').find('button[type=submit]').text("Отправлено");
    return false;
  }
    });    
     $(".form-mid2").validate({
       rules:{
            name:{
                required: false,
            },           
            phone:{
                required: true,
            },
            sdata:{
                required: true,
            },
            fdata:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            },
            sdata:{
                required: "",
            },
            fdata:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(form).ajaxSubmit();
    $('.form-mid2').find('input[type=text]').val('');
    $('.form-mid2').find('button[type=submit]').text("Отправлено");
    return false;
  }
    });      
    $(".form-bottom").validate({
       rules:{
            name:{
                required: false,
            },
            phone:{
                required: true,
            },
            sdata:{
                required: true,
            },
            fdata:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            },
            sdata:{
                required: "",
            },
            fdata:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(form).ajaxSubmit();
    $('.form-bottom').find('input[type=text]').val('');
    $('.form-bottom').find('button[type=submit]').text("Отправлено");
    return false;
  }
    });  
    
    $(".form-flat1").validate({
       rules:{
           
            name:{
                required: false,
            },
            phone:{
                required: true,
            },
            sdata:{
                required: true,
            },
            fdata:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            },
            sdata:{
                required: "",
            },
            fdata:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(form).ajaxSubmit();
    $('.form-flat1').find('input[type=text]').val('');
    $('.form-flat1').find('button[type=submit]').text("Отправлено");
    return false;
  }
    });
        $(".form-flat2").validate({
       rules:{            
            name:{
                required: false,
            },                      
            phone:{
                required: true,
            },
            sdata:{
                required: true,
            },
            fdata:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            },
            sdata:{
                required: "",
            },
            fdata:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(form).ajaxSubmit();
    $('.form-flat2').find('input[type=text]').val('');
    $('.form-flat2').find('button[type=submit]').text("Отправлено");
    return false;
  }
    });
        $(".form-flat3").validate({
       rules:{           
            name:{
                required: false,
            },
            phone:{
                required: true,
            },
            sdata:{
                required: true,
            },
            fdata:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            },
            sdata:{
                required: "",
            },
            fdata:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(form).ajaxSubmit();
    $('.form-flat3').find('input[type=text]').val('');
    $('.form-flat3').find('button[type=submit]').text("Отправлено");
    return false;
  }
    });
        $(".form-flat4").validate({
       rules:{           
            name:{
                required: false,
            },           
            phone:{
                required: true,
            },
            sdata:{
                required: true,
            },
            fdata:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            },
            sdata:{
                required: "",
            },
            fdata:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(".form-flat4").ajaxSubmit();
    $(".form-flat4").find('input[type=text]').val('');
    $(".form-flat4").find('button[type=submit]').text("Отправлено");
    return false;
  }
    });
        $(".form-flat5").validate({
       rules:{ 
            name:{
                required: false,
            },           
            phone:{
                required: true,
            },
            sdata:{
                required: true,
            },
            fdata:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            },
            sdata:{
                required: "",
            },
            fdata:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(form).ajaxSubmit();
    $('.form-flat5').find('input[type=text]').val('');
    $('.form-flat5').find('button[type=submit]').text("Отправлено");
    return false;
  }
    });
        $(".form-flat6").validate({
       rules:{
           
            name:{
                required: false,
            },
            phone:{
                required: true,
            },
            sdata:{
                required: true,
            },
            fdata:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            },
            sdata:{
                required: "",
            },
            fdata:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(form).ajaxSubmit();
    $('.form-flat6').find('input[type=text]').val('');
    $('.form-flat6').find('button[type=submit]').text("Отправлено");
    return false;
  }
    });
    $(".form-flat7").validate({
        rules:{
            
            name:{
                required: false,
            },
             phone:{
                 required: true,
             },
             sdata:{
                 required: true,
             },
             fdata:{
                 required: true,
             }
             
        },
         messages:{
             name:{
                 required: "",
             },
             
             phone:{
                 required: "",
             },
             sdata:{
                 required: "",
             },
             fdata:{
                 required: "",
             }
        }, 
   submitHandler: function(form) {
     $(form).ajaxSubmit();
     $('.form-flat7').find('input[type=text]').val('');
     $('.form-flat7').find('button[type=submit]').text("Отправлено");
     return false;
   }
     });
         $(".form-flat8").validate({
        rules:{
            
            name:{
                required: false,
            },
             phone:{
                 required: true,
             },
             sdata:{
                 required: true,
             },
             fdata:{
                 required: true,
             }
             
        },
         messages:{
             name:{
                 required: "",
             },
             
             phone:{
                 required: "",
             },
             sdata:{
                 required: "",
             },
             fdata:{
                 required: "",
             }
        }, 
   submitHandler: function(form) {
     $(form).ajaxSubmit();
     $('.form-flat8').find('input[type=text]').val('');
     $('.form-flat8').find('button[type=submit]').text("Отправлено");
     return false;
   }
     });
         $(".form-flat9").validate({
        rules:{
            
            name:{
                required: false,
            },
            
             phone:{
                 required: true,
             },
             sdata:{
                 required: true,
             },
             fdata:{
                 required: true,
             }
             
        },
         messages:{
             name:{
                 required: "",
             },
             
             phone:{
                 required: "",
             },
             sdata:{
                 required: "",
             },
             fdata:{
                 required: "",
             }
        }, 
   submitHandler: function(form) {
     $(form).ajaxSubmit();
     $('.form-flat9').find('input[type=text]').val('');
     $('.form-flat9').find('button[type=submit]').text("Отправлено");
     return false;
   }
     });
     $(".call-back").validate({
       rules:{
           
            name:{
                required: false,
            },
            phone:{
                required: true,
            }
            
       },
        messages:{
            name:{
                required: "",
            },
            
            phone:{
                required: "",
            }
       }, 
  submitHandler: function(form) {
    $(form).ajaxSubmit();
    $('.call-back').find('input[type=text]').val('');
    $('.call-back').find('button[type=submit]').text("Отправлено");
    return false;
  }
    });
// Слайдер
	/* slider = $('#flats-slider').bxSlider({pager: false}); */
	
	$('.slide').on('click',function(){
		if ($(this).hasClass('next')) slider.goToNextSlide();
		else  slider.goToPrevSlide();
		return false;
	});
	 
	$('#top .btn, #flats-slider a').fancybox();
	
	var data = new Date(), sec = 86400 - ((data.getHours()*60*60)+(data.getMinutes()*60)+data.getSeconds());
	if (data.getDay() != 7) {
		sec = 86400*(6-data.getDay())+sec;
		$('#day').text('ДО Начала АКЦИИ ОСТАЛОСЬ:');
	}
	$('#timer').timeTo(sec); 
	
	
	$('#guar').on('animateIn', function() {
		$(this).find('span').each(function() {
			var count =  parseInt($(this).attr('data-number'));
			var block = $(this);
			var timeout = null;
			var step = 1;
			timeout = setInterval(function() {
				if (step == 25) {
					block.text(count.toString());
					clearInterval(timeout);
				} else {
					block.text((Math.floor(count*step/25)).toString());
					step++;
				}
			}, 100);
		});
	});
	
	$('.flat-form .left li img').on('click',function(){
		var img =  $(this).attr('src');
		$(this).parents('ul').children('.big').children('img').attr('src',img);
		return false;
	}); 
	
});

$(document).scroll(function(){
	var wheight = $(window).height(), pos = $('#how').offset().top, pos2 = $('#guar'), scrolled = $(document).scrollTop()+wheight, speed = 200;
	if (scrolled < pos || scrolled > pos+wheight+400) {
			$("#how li").stop().css('opacity',0);
	      $("#how li").eq(0).stop().delay(speed).animate({opacity: 1}, speed);
	      $("#how li").eq(1).stop().delay(speed*2).animate({opacity: 1}, speed);
	      $("#how li").eq(2).stop().delay(speed*3).animate({opacity: 1}, speed);
	      $("#how li").eq(3).stop().delay(speed*4).animate({opacity: 1}, speed);
	      $("#how li").eq(4).stop().delay(speed*5).animate({opacity: 1}, speed);
	      $("#how li").eq(5).stop().delay(speed*6).animate({opacity: 1}, speed);
	      $("#how li").eq(6).stop().delay(speed*7).animate({opacity: 1}, speed);
	}
	if (scrolled < pos2.offset().top || $(document).scrollTop() > pos2.offset().top+320) {
		if (!pos2.hasClass('animate')) {
			pos2.addClass('animate');
			pos2.trigger('animateIn');
		}
	} 
	else {
		pos2.removeClass('animate');
		pos2.trigger('animateOut');
    }



  
});

$(document).ready(function() {
    
    $(window).scroll(function() {
        if($(this).scrollTop() != 0)
        {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();   
        }
    }); 
    $('.gotop').click(function(){
        $('body,html').animate({scrollTop:0},800);
    });

});