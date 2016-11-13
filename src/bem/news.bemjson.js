({
	block: 'template-page',
	content: [
		{
			block: 'template-header'
		},
		{
			block: 'content',
			content: [
				{
					elem: 'layout',
					mix: {block: 'container'},
					content: [
						{
							block: 'page-title',
							tag: 'h1',
							content:
								'Новости'
						},
						{
							block: 'news',
							content: [
								{
									block: 'template-wall'
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'template-other'
		}
	]
});