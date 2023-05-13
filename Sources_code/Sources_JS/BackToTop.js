/* HIDE-SHOW */

$(window).scroll(function() {

    if ($(this).scrollTop() != 0) {
        $('#backToTop').fadeIn();
    }
    else {
        $('#backToTop').fadeOut();
    }
});

/* 
$(window).scroll(function() là sự kiện lăn chuộc cuộn màn hình
nếu scrollTop!=0 tức nó hk ở đầu trang nữa thì hiển thị ra nút 
back to top còn không thì ngược lại
có thể thay fadeIn/fadeOut = show/hide
*/


/* BACK_TO_TOP */

$('#backToTop').click(function(){
    $('html').animate({
        scrollTop: 0
    }, 50 );
});

/* 
khi click vào hàm #backToTop thì html thực hiện chuyển động
scrollTop:0 = lên trên đầu trang web trong thời gian 0,05s (1000=1s) 
*/

/**/