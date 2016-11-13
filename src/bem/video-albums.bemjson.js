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
							block: 'video-albums',
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
									block: 'video-albums-list',
									tag: 'ul',
									content: [
										{
											title:
												'Название видеоальбома',
											count:
												'(7)',
											photos: [
												{
													block: 'video-albums-last-list',
													tag: 'ul',
													content: [
														{
															video: '1'
														},
														{
															video: '2'
														},
														{
															video: '3'
														},
														{
															video: '1'
														}
													].map(function(item) {
														return {
															block: 'video-albums-last-list-item',
															tag: 'li',
															content: [
																{
																	tag: item.video ? 'a' : undefined,
																	attrs: {'href': '#'},
																	content: [
																		{
																			tag: item.video ? 'img' : undefined,
																			attrs: {'src': 'img/photos/medium/' + item.video + '.jpg'}
																		}
																	]
																}
															]
														};
													})
												}
											]
										},
										{
											title:
												'Название видеоальбома',
											count:
												'(3)',
											photos: [
												{
													block: 'video-albums-last-list',
													tag: 'ul',
													content: [
														{
															video: '1'
														},
														{
															video: '2'
														},
														{
															video: '3'
														},
														{
															video: ''
														}
													].map(function(item) {
														return {
															block: 'video-albums-last-list-item',
															tag: 'li',
															content: [
																{
																	tag: item.video ? 'a' : undefined,
																	attrs: {'href': '#'},
																	content: [
																		{
																			tag: item.video ? 'img' : undefined,
																			attrs: {'src': 'img/photos/medium/' + item.video + '.jpg'}
																		}
																	]
																}
															]
														};
													})
												}
											]
										},
										{
											title:
												'Название видеоальбома',
											count:
												'(1)',
											photos: [
												{
													block: 'video-albums-last-list',
													tag: 'ul',
													content: [
														{
															video: '1'
														},
														{
															video: ''
														},
														{
															video: ''
														},
														{
															video: ''
														}
													].map(function(item) {
														return {
															block: 'video-albums-last-list-item',
															tag: 'li',
															content: [
																{
																	tag: item.video ? 'a' : undefined,
																	attrs: {'href': '#'},
																	content: [
																		{
																			tag: item.video ? 'img' : undefined,
																			attrs: {'src': 'img/photos/medium/' + item.video + '.jpg'}
																		}
																	]
																}
															]
														};
													})
												}
											]
										},
										{
											title:
												'Название видеоальбома',
											count:
												'(48)',
											photos: [
												{
													block: 'video-albums-last-list',
													tag: 'ul',
													content: [
														{
															video: '1'
														},
														{
															video: '2'
														},
														{
															video: '3'
														},
														{
															video: '1'
														}
													].map(function(item) {
														return {
															block: 'video-albums-last-list-item',
															tag: 'li',
															content: [
																{
																	tag: item.video ? 'a' : undefined,
																	attrs: {'href': '#'},
																	content: [
																		{
																			tag: item.video ? 'img' : undefined,
																			attrs: {'src': 'img/photos/medium/' + item.video + '.jpg'}
																		}
																	]
																}
															]
														};
													})
												}
											]
										}
									].map(function(item) {
										return {
											block: 'video-albums-list-item',
											tag: 'li',
											content: [
												{
													elem: 'title',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: [
																item.title,
																{
																	elem: 'count',
																	tag: 'span',
																	content: item.count
																}
															]
														}
													]
												},
												{
													elem: 'videos',
													content: item.photos
												}
											]
										};
									})
								},
								{
									elem: 'show-all',
									content: [
										{
											tag: 'a',
											attrs: {'href': '#'},
											content:
												'Показать все 11 видеоальбомов'
										}
									]
								}
							]
						},
						{
							block: 'last-videos',
							content: [
								{
									block: 'page-title',
									tag: 'h3',
									content: [
										'Последние видеозаписи',
										{
											elem: 'count',
											tag: 'span',
											content:
												'(216)'
										}
									]
								},
								{
									block: 'last-videos-search',
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
									block: 'last-videos-list',
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
											block: 'last-videos-list-item',
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