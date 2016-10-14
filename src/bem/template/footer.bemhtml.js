block('template-footer').replace()(function() {
	return [
		{
			block: 'footer',
			content: [
				{
					elem: 'layout',
					mix: {block: 'container'},
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block: 'footer-navigation',
									content: [
										{
											elem: 'list',
											tag: 'ul',
											content: [
												{
													title: 'о сайте'
												},
												{
													title: 'помощь'
												},
												{
													title: 'правила'
												}
											].map(function(item) {
												return {
													elem: 'list-item',
													tag: 'li',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
															item.title
														}
													]
												};
											})
										}
									]
								}
							]
						},
						{
							elem: 'layout-middle',
							content: [
								{
									block: 'footer-copyright',
									content:
										'Copyright © 2016 <a href="#">Meetalearn</a>. All Rights reserved.'
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block: 'footer-develop',
									content:
										'сайт разработан в <a href="#">Leeft</a>'
								}
							]
						}
					]
				}
			]
		}
	];
});