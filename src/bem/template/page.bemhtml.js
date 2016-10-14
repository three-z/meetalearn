block('template-page').replace()(function() {
	return [
		'<!DOCTYPE html>',
		{
			tag: 'html',
			content: [
				{
					tag: 'head',
					content: [
						{
							tag: 'meta',
							attrs: {'charset': 'utf-8'}
						},
						{
							tag: 'title',
							content: ''
						},
						{
							tag: 'link',
							attrs: {'rel': 'stylesheet', 'href': 'bower_components/normalize.css/normalize.css'}
						},
						{
							tag: 'link',
							attrs: {'rel': 'stylesheet', 'href': 'bower_components/jquery.form-styler/jquery.formstyler.css'}
						},
						{
							tag: 'link',
							attrs: {'rel': 'stylesheet', 'href': 'bower_components/fancybox/source/jquery.fancybox.css'}
						},
						{
							tag: 'link',
							attrs: {'rel': 'stylesheet', 'href': 'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css'}
						},
						{
							tag: 'link',
							attrs: {'rel': 'stylesheet', 'href': 'bower_components/tooltipster/dist/css/tooltipster.bundle.min.css'}
						},
						{
							tag: 'link',
							attrs: {'rel': 'stylesheet', 'href': 'bower_components/tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css'}
						},
						{
							tag: 'link',
							attrs: {'rel': 'stylesheet', 'href': 'bower_components/jquery-dropdown/jquery.dropdown.min.css'}
						},
						{
							tag: 'link',
							attrs: {'rel': 'stylesheet', 'href': 'css/app.css'}
						},
						{
							tag: 'script',
							attrs: {'src': 'bower_components/jquery/dist/jquery.min.js'}
						},
						{
							tag: 'script',
							attrs: {'src': 'bower_components/webfontloader/webfontloader.js'}
						},
						{
							tag: 'script',
							content:
								'var activeCallback = $.Callbacks(); WebFontConfig = {google: {families: ["Open+Sans:300,300italic,400,400italic,600,600italic,700,700italic,800,800italic:cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese"]}, active: function(){activeCallback.fire();}}; WebFont.load(WebFontConfig);'
						}
					]
				},
				{
					tag: 'body',
					content: [
						{
							block: 'page',
							content: [
								this.ctx.content,
								{
									block: 'template-footer'
								},
								{
									block: 'template-popups'
								}
							]
						},
						{
							tag: 'script',
							attrs: {'src': 'bower_components/fancybox/source/jquery.fancybox.pack.js'}
						},
						{
							tag: 'script',
							attrs: {'src': 'bower_components/jquery.form-styler/jquery.formstyler.min.js'}
						},
						{
							tag: 'script',
							attrs: {'src': 'bower_components/jquery.ztabs/jquery.ztabs.js'}
						},
						{
							tag: 'script',
							attrs: {'src': 'bower_components/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.js'}
						},
						{
							tag: 'script',
							attrs: {'src': 'bower_components/tooltipster/dist/js/tooltipster.bundle.min.js'}
						},
						{
							tag: 'script',
							attrs: {'src': 'bower_components/jquery-dropdown/jquery.dropdown.min.js'}
						},
						{
							tag: 'script',
							attrs: {'src': 'js/app.js'}
						}
					]
				}
			]
		}
	];
});