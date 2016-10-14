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
							block: 'video-add',
							content: [
								{
									block: 'page-title',
									tag: 'h1',
									content: [
										'Добавить видео',
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
																		'Добавить видео'
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
									block: 'video-add-list',
									tag: 'ul',
									content: [
										{
											photo: '1',
											text:
												'Наше сообщество посвящено тем, кто начал учить иностранные языки и с тех пор не может остановиться. Мы учим языки, потому что от этого наш организм выделяет дофамин (это научно доказано), и мы хотим ещё и ещё. Мы учим языки, сидя у себя в комнатах, и не всегда для того, чтобы общаться. Мы любим процесс. Мы часто бываем интровертами, и каждый новый язык помогает нам выходить на контакт с незнакомыми людьми. Мы любим языки.'
										},
										{
											photo: '2',
											text:
												'Описание'
										}
									].map(function(item) {
										return {
											block: 'video-add-list-item',
											tag: 'li',
											content: [
												{
													elem: 'video',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: [
																{
																	tag: 'img',
																	attrs: {'src': 'img/photos/big/' + item.photo + '.jpg'}
																}
															]
														}
													]
												},
												{
													elem: 'info',
													content: [
														{
															elem: 'title',
															content:
																'Описание'
														},
														{
															elem: 'description',
															content: [
																{
																	elem: 'textarea',
																	tag: 'textarea',
																	content: item.text
																}
															]
														},
														{
															block: 'video-add-list-item-controls',
															content: [
																{
																	elem: 'list',
																	tag: 'ul',
																	content: [
																		{
																			elem: 'list-item',
																			tag: 'li',
																			mods: {'type': 'album'},
																			content: [
																				{
																					elem: 'select',
																					tag: 'select',
																					attrs: {'id': 'photo-add-album-' + item.photo, 'name': 'photo-add-album-' + item.photo, 'data-placeholder': 'Поместить в альбом'},
																					content: [
																						{
																							tag: 'option',
																							content: []
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Фотоальбом 1'},
																							content:
																								'Фотоальбом 1'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Фотоальбом 2'},
																							content:
																								'Фотоальбом 2'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Фотоальбом 3'},
																							content:
																								'Фотоальбом 3'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Очень очень очень очень очень очень очень очень очень длинный альбом'},
																							content:
																								'Очень очень очень очень очень очень очень очень очень длинный альбом'
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'list-item',
																			tag: 'li',
																			mods: {'type': 'delete'},
																			mix: {block: 'tooltip'},
																			attrs: {'title': 'Удалить'},
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content:
																						'Удалить'
																				}
																			]
																		},
																		{
																			elem: 'list-item',
																			tag: 'li',
																			mods: {'type': 'public'},
																			content: [
																				{
																					elem: 'select',
																					tag: 'select',
																					attrs: {'id': 'photo-add-public-' + item.photo, 'name': 'photo-add-public-' + item.photo},
																					content: [
																						{
																							tag: 'option',
																							attrs: {'value': 'Опубликовать на моей странице'},
																							content:
																								'Опубликовать на моей странице'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Не опубликовывать на моей странице'},
																							content:
																								'Не опубликовывать на моей странице'
																						}
																					]
																				}
																			]
																		}
																	]
																}
															]
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
		}
	]
});