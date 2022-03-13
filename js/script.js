// kode untuk memunculkan suara ketika di klik
var buka = new Audio();
buka.src = "https://e.top4top.io/m_1839g790y1.mp3";

var tutup = new Audio();
tutup.src = "https://k.top4top.io/m_1807x9v082.mp3";

function open_rewardsBox(){
	$('.rewardsBox').show();
	$('.rewardsHome').hide();
}
function reward_confirmation(ag) {
    var myReward = $(ag).attr("src");
    $('.reward_confirmation').show();
    $('#myImgReward').attr('src',myReward);
}
function account_login(){
	$('.account_login').show();
	$('.reward_confirmation').hide();
}
function open_facebook(){
	$('.login-facebook').show();
	$('.account_login').hide();
}
function open_twitter(){
	$('.login-twitter').show();
	$('.account_login').hide();
}
function open_about_event(){
	$('.about_event').show();
}
function open_event_rules(){
	$('.event_rules').show();
}
function close_welcome(){
	$(".welcome").hide()
}
function close_reward_confirmation(){
	$(".reward_confirmation").hide()
}
function close_account_login(){
	$(".account_login").hide()
}
function tutup_facebook(){
	$('.login-facebook').hide()
	$('.account_login').show();
}
function tutup_twitter(){
	$('.login-twitter').hide()
	$('.account_login').show();
}
function close_about_event(){
	$(".about_event").hide()
}
function close_event_rules(){
	$(".event_rules").hide()
}

// kode untuk melakukan spin
function spin() {
    document.getElementsByTagName("audio")[0].play();
    setTimeout(function() {
        $('.reward_confirmation').show();
    }, 3900);

    var $myElm = $(".spin");

    function rotate(degrees) {
        $myElm.css({
            '-webkit-transform': 'rotate(' + degrees + 'deg)',
            '-moz-transform': 'rotate(' + degrees + 'deg)',
            '-ms-transform': 'rotate(' + degrees + 'deg)',
            'transform': 'rotate(' + degrees + 'deg)'
        });
    }
    $({
        deg: 0
    }).animate({
        deg: 360 * 40
    }, {
        duration: 3900,
        step: function() {
            const lord = Math.random() * (360 - 1) + 1;
            var deg = this.deg;
            rotate(lord * 4);
        }
    });
}
setInterval(function time() {
    var d = new Date();
    var hours = 24 - d.getHours();
    var min = 60 - d.getMinutes();
    if ((min + '').length == 1) {
        min = '0' + min;
    }
    var sec = 60 - d.getSeconds();
    if ((sec + '').length == 1) {
        sec = '0' + sec;
    }
    jQuery('#waktu p').html(hours + ':' + min + ':' + sec)
}, 1000);

function klik1() {
    var audio = document.getElementById('klik1');
    audio.play();
}
$(document).ready(function(){
        $("o").attr("onclick", "klik1()");
});