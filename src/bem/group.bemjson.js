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
					block: 'profile',
					content: [
						{
							elem: 'layout',
							mix: {block: 'container'},
							content: [
								{
									elem: 'layout-left',
									content: [
										{
											block: 'profile-avatar',
											content: [
												{
													elem: 'image',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: [
																{
																	tag: 'img',
																	attrs: {'src': 'img/avatars/full/2.jpg'}
																}
															]
														}
													]
												},
												{
													block: 'profile-avatar-controls',
													content: [
														{
															elem: 'list',
															tag: 'ul',
															content: [
																{
																	elem: 'list-item',
																	tag: 'li',
																	mods: {'type': 'change-thumb'},
																	mix: {block: 'tooltip'},
																	attrs: {'title': 'Изменить миниатюру'},
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Изменить миниатюру'
																		}
																	]
																},
																{
																	elem: 'list-item',
																	tag: 'li',
																	mods: {'type': 'change-avatar'},
																	mix: {block: 'tooltip'},
																	attrs: {'title': 'Изменить фотографию'},
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Изменить фотографию'
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
											block: 'profile-controls',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Редактировать страницу'
																}
															]
														},
														{
															elem: 'list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Управление группой'
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'profile-friends',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Участники группы'
														},
														{
															elem: 'count',
															tag: 'span',
															content:
																'(1 897 005)'
														}
													]
												},
												{
													block: 'profile-friends-list',
													tag: 'ul',
													content: [
														{
															avatar: '1',
															avatar_status: 'online',
															name:
															'Григорий<br>' +
															'Суворов'
														},
														{
															avatar: '2',
															avatar_status: 'online',
															name:
															'Анна<br>' +
															'Богданова'
														},
														{
															avatar: '3',
															avatar_status: 'offline',
															name:
															'Антон<br>' +
															'Виноградов'
														},
														{
															avatar: '2',
															avatar_status: 'online',
															name:
															'Анна<br>' +
															'Богданова'
														},
														{
															avatar: '3',
															avatar_status: 'offline',
															name:
															'Антон<br>' +
															'Виноградов'
														},
														{
															avatar: '1',
															avatar_status: 'online',
															name:
															'Григорий<br>' +
															'Суворов'
														}
													].map(function(item) {
														return {
															block: 'profile-friends-list-item',
															tag: 'li',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: item.avatar,
																			size: 'medium',
																			status: item.avatar_status
																		}
																	]
																},
																{
																	elem: 'name',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: item.name
																		}
																	]
																}
															]
														};
													})
												},
												{
													block: 'profile-friends-more',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Показать больше'
														}
													]
												}
											]
										},
										{
											block: 'profile-photo-albums',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Фотоальбомы'
														},
														{
															elem: 'count',
															tag: 'span',
															content:
																'(7)'
														}
													]
												},
												{
													elem: 'show-all',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Все'
														}
													]
												},
												{
													block: 'profile-photo-albums-list',
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
															photo: '4'
														}
													].map(function(item) {
														return {
															block: 'profile-photo-albums-list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content: [
																		{
																			tag: 'img',
																			attrs: {'src': 'img/photos/small/' + item.photo + '.jpg'}
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
											block: 'profile-video-albums',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Видеоальбомы'
														},
														{
															elem: 'count',
															tag: 'span',
															content:
																'(23)'
														}
													]
												},
												{
													elem: 'show-all',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Все'
														}
													]
												},
												{
													block: 'profile-video-albums-list',
													tag: 'ul',
													content: [
														{
															photo: '5'
														},
														{
															photo: '6'
														},
														{
															photo: '7'
														},
														{
															photo: '8'
														}
													].map(function(item) {
														return {
															block: 'profile-video-albums-list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content: [
																		{
																			tag: 'img',
																			attrs: {'src': 'img/photos/small/' + item.photo + '.jpg'}
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
								},
								{
									elem: 'layout-right',
									content: [
										{
											block: 'profile-info',
											content: [
												{
													elem: 'name',
													tag: 'h1',
													content:
														'Центр изучения иностранных языков'
												},
												{
													elem: 'decription',
													content:
														'Наше сообщество посвящено тем, кто начал учить иностранные языки и с тех пор не может остановиться. Мы учим языки, потому что от этого наш организм выделяет дофамин (это научно доказано), и мы хотим ещё и ещё. Мы учим языки, сидя у себя в комнатах, и не всегда для того, чтобы общаться. Мы любим процесс. Мы часто бываем интровертами, и каждый новый язык помогает нам выходить на контакт с незнакомыми людьми. Мы любим языки. Говорение на очередном новом языке - это на самом деле настоящее творчество и ни с чем не сравнимый кайф.'
												}
											]
										},
										{
											block: 'profile-wall-new-item',
											content: [
												{
													elem: 'form',
													tag: 'form',
													content: [
														{
															elem: 'field',
															content: [
																{
																	elem: 'textarea',
																	tag: 'textarea',
																	attrs: {'placeholder': 'Новая запись'}
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
																		'Отправить'
																},
																{
																	block: 'profile-wall-new-item-attach',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'video'},
																					mix: {block: 'tooltip'},
																					attrs: {'title': 'Прикрепить видео'},
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content:
																								'Прикрепить видео'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'photo'},
																					mix: {block: 'tooltip'},
																					attrs: {'title': 'Прикрепить фото'},
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content:
																								'Прикрепить фото'
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
										},
										{
											block: 'profile-wall',
											content: [
												{
													elem: 'count',
													content:
														'2 записи'
												},
												{
													elem: 'list',
													content: [
														{
															block: 'template-wall'
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
		}
	]
});