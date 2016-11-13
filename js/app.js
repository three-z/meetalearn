$(document).ready(function() {

	$('.page input[type="radio"],' +
	  '.popup input[type="radio"],' +
	  '.page input[type="checkbox"],' +
	  '.popup input[type="checkbox"],' +
	  '.page input[type="file"],' +
	  '.popup input[type="file"],' +
	  '.page select,' +
	  '.popup select').styler({
		fileBrowse: 'Выбрать файл',
		filePlaceholder: ''
	});

	$('.filter-languages, .home-online__list').mCustomScrollbar({
		scrollInertia: '0',
		axis: 'x',
		autoExpandScrollbar: true,
		scrollButtons: {
			enable: true
		},
		theme: '3d',
		advanced: {
			autoExpandHorizontalScroll: true
		}
	});

	$('.fast-messages-inbox, .fast-messages-dialog').mCustomScrollbar({
		scrollInertia: '0',
		axis: 'y',
		autoExpandScrollbar: true,
		scrollButtons: {
			enable: false
		},
		theme: '3d'
	});

	$('.popup-open').fancybox({
		padding: 0,
		fitToView: false,
		closeBtn: false
	});

	$('.popup__close').on('click', function(e) {
		e.preventDefault();

		$.fancybox.close();
	});

	$('.fast-messages-popup__close').on('click', function(e) {
		e.preventDefault();

		$(this).closest('.fast-messages-popup').hide();
	});

	$('.fast-messages-count').on('click', function(e) {
		e.preventDefault();

		$('#fast-messages-dialog').hide();
		$('#fast-messages-inbox').show();
	});

	$('.fast-messages-inbox-list-item__info a').on('click', function(e) {
		e.preventDefault();

		$('#fast-messages-inbox').hide();
		$('#fast-messages-dialog').show();
	});

	$('.profile-info__hide a').on('click', function(e) {
		e.preventDefault();

		$('#profile-personal-info').hide();
		$(this).parent().hide();
		$('.profile-info__show').show();
	});

	$('.profile-info__show a').on('click', function(e) {
		e.preventDefault();

		$('#profile-personal-info').show();
		$(this).parent().hide();
		$('.profile-info__hide').show();
	});

	$('.tooltip').tooltipster({
		theme: 'tooltipster-borderless'
	});

	$('.profile-friends-tabs').zTabs({
		switcherItem: '.profile-friends-tabs-switchers__list-item',
		switcherActiveClass: 'profile-friends-tabs-switchers__list-item_active',
		contentItem: '.profile-friends-tabs-content',
		contentActiveClass: 'profile-friends-tabs-content_active'
	});

	if ($('.fast-messages, .go-up').length) {

		$('.go-up').on('click', function (e) {
			e.preventDefault();

			$('html,body').animate({
				scrollTop: 0
			}, 100);
		});

		$(window).on('load resize scroll', function() {
			var footertotop = ($('.footer').position().top);
			var scrolltop = $(window).scrollTop() + $(window).height();
			var difference = scrolltop - footertotop;

			if (scrolltop > footertotop) {
				$('.fast-messages, .go-up').css('bottom', difference);
			}
			else  {
				$('.fast-messages, .go-up').css('bottom', 0);
			}

			var scrollTop = $(window).scrollTop();
			if (scrollTop > 100) {
				$('.go-up').addClass('go-up_active');
			}
			else {
				$('.go-up').removeClass('go-up_active');
			}
		});
	}

	var hash = window.location.hash;

	if (hash.length > 0) {
		
		$.fancybox.open({
			padding: 0,
			fitToView: false,
			closeBtn: false,
			href: hash
		});
	}
});

