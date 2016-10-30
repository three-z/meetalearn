$(document).ready(function() {

	activeCallback.add(function() {
		$('.page input[type="radio"],' +
		  '.fancybox-skin input[type="radio"],' +
		  '.page input[type="checkbox"],' +
		  '.fancybox-skin input[type="checkbox"],' +
		  '.page input[type="file"],' +
		  '.fancybox-skin input[type="file"],' +
		  '.page select,' +
		  '.fancybox-skin select').styler({
			fileBrowse: 'Выбрать файл',
			filePlaceholder: ''
		});
	});

	$('.filter-languages').mCustomScrollbar({
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

	$('.popup-open').fancybox({
		padding: 0,
		fitToView: false,
		closeBtn: false
	});

	$('.popup__close').on('click', function(e) {
		e.preventDefault();

		$.fancybox.close();
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