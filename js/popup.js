function reward_confirmation(ag){var myReward=$(ag).attr("src");$('.reward_confirmation').show();$('#myImgReward').attr('src',myReward);}
function account_login(){$('.account_login').show();$('.reward_confirmation').hide();}
function open_facebook(){$('.login-facebook').show();$('.account_login').hide();}
function open_twitter(){$('.login-twitter').show();$('.account_login').hide();}
function open_about_event(){$('.about_event').show();}
function open_event_rules(){$('.event_rules').show();}
function close_welcome(){$(".welcome").hide()}
function close_reward_confirmation(){$(".reward_confirmation").hide()}
function close_account_login(){$(".account_login").hide()}
function tutup_facebook(){$('.login-facebook').hide()
$('.account_login').show();}
function tutup_twitter(){$('.login-twitter').hide()
$('.account_login').show();}
function close_about_event(){$(".about_event").hide()}
function close_event_rules(){$(".event_rules").hide()}