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
							block: 'photo-album',
							content: [
								{
									block: 'page-title',
									tag: 'h1',
									content: [
										'My photos',
										{
											elem: 'count',
											tag: 'span',
											content:
												'(457)'
										},
										{
											block: 'page-title-controls',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															mods: {'type': 'edit'},
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Редактировать альбом'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															mods: {'type': 'sort-desc'},
															mix: {block: 'tooltip'},
															attrs: {'title': 'Сортировать по убыванию'},
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Сортировать по убыванию'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															mods: {'type': 'sort-asc', 'active': true},
															mix: {block: 'tooltip'},
															attrs: {'title': 'Сортировать по возрастанию'},
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Сортировать по возрастанию'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															mods: {'type': 'add'},
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Добавить фотографию'
																}
															]
														}
													]
												}
											]
										}
									]
								},
								{
									block: 'photo-album-list',
									tag: 'ul',
									content: [
										{
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
										{
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
										{
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
										{
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
										{
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
										{
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
										{
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
										{
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
										{
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
										{
											photo: '1'
										}
									].map(function(item) {
										return {
											block: 'photo-album-list-item',
											tag: 'li',
											content: [
												{
													block: 'popup-open',
													tag: 'a',
													attrs: {'href': '#photo'},
													content: [
														{
															tag: 'img',
															attrs: {'src': 'img/photos/medium/' + item.photo + '.jpg'}
														}
													]
												}
											]
										};
									})
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