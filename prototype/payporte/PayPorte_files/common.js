/**
 * common.js v1.0.0
 * http://www.vesnustheme.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Venustheme
 * http://www.vesnustheme.com
 */
var text_confirm_delete_item = "";
var text_cart_total = "%total% item(s) - %price%";
var text_waiting = "Adding....";
function click_delete_item( ){
   return confirm( text_confirm_delete_item );
}
function getAjaxCart() {
    jQuery.ajax({
        url: minicart_url,
        dataType: 'json', 
        type : 'get',
        success: function(data){
            var div_element = jQuery("<div>");
            jQuery(div_element).html(data.html);

            if( jQuery("#cart-total").length > 0 ) {

                var cart_total = text_cart_total.replace("%total%", data.summary_qty );
                cart_total = cart_total.replace("%price%", data.subtotal );
                
                jQuery("#cart-total").html( cart_total );
            }

            if( jQuery(div_element).find(".block-cart").length > 0){
               jQuery('.block-cart').html( jQuery(div_element).find(".block-cart").first().html() );
            }

            if(jQuery('.block-cart .btn-remove').length > 0){
                jQuery('.block-cart .btn-remove').attr('onclick','').unbind('click');
                jQuery('.block-cart .btn-remove').off("click");
                jQuery(document).on('click', '.block-cart .btn-remove', function(e){
                    e.preventDefault();
                   
                    if(click_delete_item()){
                       deleteItemCart( jQuery(this).attr("href") );  
                    }
                    
                    return false;
                });
            }
        }
    });
}
function showMiniCart(){

    getAjaxCart();
    jQuery('#cart').addClass('active');
    setTimeout(function(){
        jQuery('#cart').removeClass('active');
    }, 5000);
}

function deleteItemCart( removeUrl ){
    removeUrl += '&isAjax=1';
    jQuery.ajax({
            url: removeUrl,
            dataType: 'json',
            type: 'post',
            data: "isAjax=1",
            success: function(data) {
                showMiniCart();
            }
    });
}

function addToCart( addtocartURL ) {
    quantity = typeof(quantity) != 'undefined' ? quantity : 1;
    
    if(addtocartURL.match(/checkout\/cart/)){
        jQuery.ajax({
            url: addtocartURL,
            dataType: 'json',
            type: 'post',
            data: "isAjax=1",
            success: function(data) {
                jQuery('.success, .warning, .attention, .information, .error').remove();

                if (data.status == "SUCCESS") {
                    jQuery('#notification').html('<div class="success" style="display: none;">' + data.message + '<a class="close btn-remove" href="javascript:;" onclick="jQuery(\'.success, .warning, .attention, .information, .error\').remove()">X</a></div>');
                    
                    jQuery('.success').fadeIn('slow').delay(5000).hide(0);
                    
                    jQuery('#cart > .heading a').click();
                    
                    jQuery('html, body').animate({ scrollTop: 0 }, 'slow'); 
                }else{
                    setLocation( addtocartURL );
                }
            }
        });
    }else{
        setLocation( addtocartURL );
    }
    
}

 (function($) {
 var SidebarMenuEffects = (function() {

    function hasParentClass( e, classname ) {
        if(e === document) return false;
        if( classie.has( e, classname ) ) {
            return true;
        }
        return e.parentNode && hasParentClass( e.parentNode, classname );
    }

    // http://coveroverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        return check;
    }

    function init() {
        
        $(document).ready( function(){

            var $mcontent = $('#mainmenutop .navbar .navbar-nav');
           
            var effect = 3;

            var $offcmenu = $('<nav id="menu-offcanvas" class="offcanvas-menu offcanvas-effect-'+effect+' hidden-lg hidden-md"><div class="menu-offcanvas-inner"></div></nav>');
            $(".menu-offcanvas-inner", $offcmenu ).append( $mcontent.clone() );

            $("body").append( $offcmenu ); 
            $(".navbar-nav", $offcmenu  ).removeClass("navbar-nav").removeClass("nav").addClass("menu-offcanvas-content");
            $(".menu-offcanvas-inner").append("<div class='button-close-menu'><i class='fa fa-times-circle-o'></i></div>");

            var $btn = $("#mainmenutop .navbar-toggle, .menu-offcanvas-inner .button-close-menu");

             var eventtype = mobilecheck() ? 'touchstart' : 'click';  
                $($btn).bind( eventtype, function(e){  
                $("#offcanvas-container").toggleClass(  "offcanvas-menu-open" ).addClass( "offcanvas-effect-"+effect );
               
                 
                $("#page").bind( eventtype , function (){
                    $("#offcanvas-container").toggleClass(  "offcanvas-menu-open" );
                    $("#page").unbind( eventtype );
                } );
                e.stopPropagation();       
               return false;
            } );
            /*  Fix First Click Menu */
            $(document.body).on(eventtype, '#menu-offcanvas [data-toggle="dropdown"]' ,function(){
                if(!$(this).parent().hasClass('open') && this.href && this.href != '#'){
                    window.location.href = this.href;
                }

            });
        } );    
    }
    init();
})();

/* Offcanvas Sidebars */
$(document).ready( function (){  
    if( $("#columns").hasClass("offcanvas-siderbars") ) { 
        //$('.offcanvas-sidebars-buttons button').hide();
        $( ".sidebar" ).parent().parent().find("section").addClass("main-column");
        $( ".sidebar" ).each( function(){
            $('[data-for="'+$(this).attr("id")+'"]').show();
            $(this).parent().attr("id","ves-"+$(this).attr("id") ).addClass("offcanvas-sidebar");
        } );
        $(".offcanvas-sidebars-buttons button").bind( "click", function(){
            if( $(this).data("for") == "column-right" ){
                 $(".offcanvas-siderbars").removeClass("column-left-active");
            }else {
                 $(".offcanvas-siderbars").removeClass("column-right-active");
            }
            $(".offcanvas-siderbars").toggleClass( $(this).data("for")+"-active" );
            $("#ves-"+$(this).data("for") ).toggleClass("canvas-show");
        } );
     }   
} );

 


$(window).ready( function(){
    /*  Fix First Click Menu */
    $(document.body).on('click', '#mainmenutop [data-toggle="dropdown"]' ,function(){
        if(!$(this).parent().hasClass('open') && this.href && this.href != '#'){
            window.location.href = this.href;
        }

    });
  
    $('[data-toggle="tooltip"]').tooltip();
    
    $(".quantity-adder .add-action").click( function(){
        if( $(this).hasClass('add-up') ) {  
            $("[name=qty]",'.quantity-adder').val( parseInt($("[name=qty]",'.quantity-adder').val()) + 1 );
        }else {
            if( parseInt($("[name=qty]",'.quantity-adder').val())  > 1 ) {
                $("input",'.quantity-adder').val( parseInt($("[name=qty]",'.quantity-adder').val()) - 1 );
            } 
        }
    } );

    /* custom title style for modules in mail content */
    $( ".box-heading" ).each( function(){
         if( $(this).children('span').length  ){
            var re = /\s+/;
            var text = $(this).text().split(re);
            if( text.length > 1){ 
                var otext = $(this).text().replace( text[0], '<span>'+text[0]+'</span>');
                $(this).children('span').html( otext );
            }
       
         }
    } );

} );


    $(window).ready( function(){
        
        if(jQuery(".scrollup").length > 0) {
            // scroll-to-top button show and hide
            jQuery(document).ready(function(){
                jQuery(window).scroll(function(){
                    if (jQuery(this).scrollTop() > 100) {
                        jQuery('.scrollup').fadeIn();
                    } else {
                        jQuery('.scrollup').fadeOut();
                }
            });
            // scroll-to-top animate
            jQuery('.scrollup').click(function(){
                jQuery("html, body").animate({ scrollTop: 0 }, 600);
                    return false;
                });
            });
        }
        /* Ajax Cart */
        /*if(typeof(ajaxCart) != "undefined" && ajaxCart){*/

            $('#cart > .heading').on('click','a', function(e) {

                e.preventDefault();

                jQuery('#cart').addClass('active');

                //$('#cart').load(minicart_url + ' #cart > *');

                getAjaxCart();

                $(document).on('mouseleave', '#cart', function() {
                    $(this).removeClass('active');
                });

                $("body").not("#cart").click(function(){
                    $(this).removeClass('active');
                })
            });
            if($('.block-cart .btn-remove').length > 0){

                $('.block-cart .btn-remove').attr('onclick','').unbind('click');
                $(document).on('click', '.block-cart .btn-remove', function(e){
                    e.preventDefault();
                   
                    if(click_delete_item()){
                       deleteItemCart( $(this).attr("href") );  
                    }
                    
                    return false;
                });
            }
            

        /*}*/

        if(typeof(productAddToCartForm) != "undefined" && typeof(ajaxCart) != "undefined" && ajaxCart){
            productAddToCartForm.submit = function(button, url) {
                if (this.validator.validate()) {
                    var form = this.form;
                    var oldUrl = form.action;
                    if (url) { form.action = url; } 
                    var e = null;

                    if(!url){ url = $('#product_addtocart_form').attr('action'); }
                    /*url = url.replace("checkout/cart","ajax/index");*/

                    var data = $('#product_addtocart_form').serialize();
                    data += '&isAjax=1';
                    /*$('#ajax_loader').show();*/
                    /*
                    jQuery(button).hide();
                    jQuery(button).parent().append('<button class="btn button ajax-loading" type="button">' + text_waiting + '</button>');
                    */
                    
                    try {
                         $.ajax({
                                url: url,
                                dataType: 'json', 
                                type : 'post',
                                data: data,
                                success: function(data){ 
                                    /*$('#ajax_loader').hide();*/
                                    /*
                                    jQuery(button).show();
                                    jQuery(".ajax-loading", jQuery(button).parent()).remove();*/

                                    jQuery('.success, .warning, .attention, .information, .error').remove();

                                    if (data.status == "SUCCESS") {
                                        jQuery('#notification').html('<div class="success" style="display: none;">' + data.message + '<a onclick="jQuery(\'.success, .warning, .attention, .information, .error\').remove()" class="close btn-remove" href="javascript:;">X</a></div>');
                                        
                                        jQuery('.success').fadeIn('slow').delay(5000).hide(0);
                                        
                                        showMiniCart();
                                        
                                        jQuery('html, body').animate({ scrollTop: 0 }, 'slow'); 
                                    }else{
                                        setLocation( url );
                                    }
                                } 
                                }); 
                    } catch (e) { } 
                    this.form.action = oldUrl; 
                    if (e) { throw e; } 
                 }
                 return false;
            }.bind(productAddToCartForm);
        }
        
    });

})(jQuery);
