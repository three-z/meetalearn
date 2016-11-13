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
							block: 'video-album',
							content: [
								{
									block: 'page-title',
									tag: 'h1',
									content: [
										'Мои видеозаписи',
										{
											elem: 'count',
											tag: 'span',
											content:
												'(65)'
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
																		'Добавить видеозапись'
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
									block: 'video-album-search',
									content: [
										{
											elem: 'form',
											content: [
												{
													elem: 'field',
													content: [
														{
															elem: 'input',
															tag: 'input',
															attrs: {'type': 'text', 'placeholder': 'Поиск по видеозаписям'}
														}
													]
												},
												{
													elem: 'controls',
													content: [
														{
															elem: 'button',
															tag: 'button',
															attrs: {'type': 'submit'},
															content:
																'Найти'
														}
													]
												}
											]
										}
									]
								},
								{
									block: 'video-album-list',
									tag: 'ul',
									content: [
										{
											video: '1',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '2',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '3',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '1',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '2',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '3',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '1',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '2',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '3',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '1',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '2',
											title:
												'NASA LIVE Video : Земля из космоса'
										},
										{
											video: '3',
											title:
												'NASA LIVE Video : Земля из космоса'
										}
									].map(function(item) {
										return {
											block: 'video-album-list-item',
											tag: 'li',
											content: [
												{
													elem: 'video',
													content: [
														{
															block: 'popup-open',
															tag: 'a',
															attrs: {'href': '#video'},
															content: [
																{
																	tag: 'img',
																	attrs: {'src': 'img/photos/big/' + item.video + '.jpg'}
																}
															]
														}
													]
												},
												{
													elem: 'name',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: item.title
														}
													]
												},
												{
													elem: 'album',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Видеоальбом 1'
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