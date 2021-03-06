block('template-header-logo').replace()(function() {
	return [
		{
			block: 'header-logo',
			content: [
				{
					tag: 'a',
					attrs: {'href': '#'},
					content: [
						{
							tag: 'img',
							attrs: {'src': 'img/header/logo.png', 'width': '120px', 'height': '20px'}
						}
					]
				}
			]
		}
	];
});

block('template-social-links').replace()(function() {
	return [
		{
			block: 'social-links',
			content: [
				{
					elem: 'list',
					tag: 'ul',
					content: [
						{
							type: 'facebook',
							title: 'Facebook'
						},
						{
							type: 'odnoklassniki',
							title: 'Одноклассники'
						},
						{

							type: 'twitter',
							title: 'Twitter'
						},
						{
							type: 'vkontakte',
							title: 'ВКонтакте'
						},
						{
							type: 'linkedin',
							title: 'LinkedIn'
						},
						{
							type: 'youtube',
							title: 'YouTube'
						},
						{
							type: 'instagram',
							title: 'Instagram'
						}
					].map(function(item) {
						return {
							elem: 'list-item',
							tag: 'li',
							mods: {'type': item.type},
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
	];
});

block('template-avatar').replace()(function() {
	return [
		{
			block: 'avatar',
			mods: {'size': this.ctx.size ? this.ctx.size : undefined, 'status': this.ctx.status ? this.ctx.status : undefined, 'border': this.ctx.border ? this.ctx.border : undefined},
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
									attrs: {'src': 'img/avatars/' + this.ctx.size + '/' + this.ctx.avatar + '.jpg'}
								}
							]
						}
					]
				}
			]
		}
	];
});

block('template-flag').replace()(function() {
	return [
		{
			block: 'flag',
			mods: {'size': this.ctx.size ? this.ctx.size : undefined},
			content: [
				{
					tag: 'a',
					attrs: {'href': '#'},
					content: [
						{
							tag: 'img',
							attrs: {'src': 'img/flags/' + this.ctx.size + '/' + this.ctx.flag + '.png'}
						}
					]
				}
			]
		}
	];
});

block('template-like').replace()(function() {
	return [
		{
			block: 'like',
			mods: {'active': this.ctx.active ? this.ctx.active : undefined},
			content: [
				{
					tag: 'a',
					attrs: {'href': '#'},
					content:
						'мне нравится'
				}
			]
		}
	];
});

block('template-comments').replace()(function() {
	return [
		{
			block: 'comments',
			content: [
				{
					elem: 'show-all',
					content: [
						{
							tag: 'a',
							attrs: {'href': '#'},
							content:
								'Показать все 15 комментариев'
						}
					]
				},
				{
					block: 'comments-list',
					tag: 'ul',
					content: [
						{
							flag: '2',
							avatar: '2',
							avatar_status: 'offline',
							name:
								'Оксана Макарова',
							lang:
								'Аргентина, Буэнос-Айрес, испанский язык.',
							text:
								'Боже, какая красота! Гора Фицрой- прекраснейшая!! Спасибо за радость от просмотра фото).<br>' +
								'АААААА!!!! Классс!!!!  Невероятно красивая природа! Потрясающие места и виды!'
						},
						{
							flag: '3',
							avatar: '3',
							avatar_status: 'online',
							liked: true,
							name:
								'София Бандарчук',
							reply:
								'ответила Оксане Макаровой',
							lang:
								'Аргентина, Буэнос-Айрес, испанский язык.',
							text:
								'А я там была =P<br>' +
								'По природе у меня возникли некоторые ассоциации с Новой Зеландией. Хотя и сложно сравнивать!'
						}
					].map(function(item) {
						return {
							block: 'comments-list-item',
							tag: 'li',
							content: [
								{
									elem: 'avatar',
									content: [
										{
											block: 'template-avatar',
											avatar: item.avatar,
											size: 'small',
											status: item.avatar_status
										}
									]
								},
								{
									elem: 'info',
									content: [
										{
											elem: 'name',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content: item.name
												},
												{
													elem: 'reply-to',
													tag: 'span',
													content: item.reply ? item.reply : undefined
												}
											]
										},
										{
											elem: 'lang',
											content: [
												{
													elem: 'flag',
													content: [
														{
															block: 'template-flag',
															flag: item.flag,
															size: 'small'
														}
													]
												},
												{
													elem: 'lang-info',
													content:
														'Аргентина, Буэнос-Айрес, испанский язык.'
												}
											]
										},
										{
											elem: 'text',
											content: item.text
										},
										{
											elem: 'other',
											content: [
												{
													elem: 'date',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'25 минут назад'
														}
													]
												},
												{
													elem: 'reply',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Ответить'
														}
													]
												},

												{
													elem: 'like',
													content: [
														{
															block: 'template-like',
															active: item.liked ? item.liked : undefined
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
				},
				{
					block: 'comments-new-item',
					content: [
						{
							elem: 'form',
							tag: 'form',
							content: [
								{
									elem: 'textarea',
									tag: 'textarea',
									attrs: {'placeholder': 'Комментировать...'}
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
										}
									]
								},
								{
									elem: 'avatar',
									content: [
										{
											block: 'template-avatar',
											avatar: '1',
											size: 'small'
										}
									]
								},
								{
									block: 'comments-new-item-attach',
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
		}
	];
});

block('template-wall').replace()(function() {
	return [
		{
			block: 'wall',
			content: [
				{
					block: 'wall-list',
					tag: 'ul',
					content: [
						{
							block: 'wall-list-item',
							tag: 'li',
							content: [
								{
									elem: 'avatar',
									content: [
										{
											block: 'template-avatar',
											avatar: '1',
											size: 'big',
											status: 'online'
										}
									]
								},
								{
									elem: 'info',
									content: [
										{
											elem: 'name',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Григорий Суворов'
												}
											]
										},
										{
											elem: 'lang',
											content: [
												{
													elem: 'flag',
													content: [
														{
															block: 'template-flag',
															flag: '1',
															size: 'small'
														}
													]
												},
												{
													elem: 'lang-info',
													content:
														'Аргентина, Буэнос-Айрес, испанский язык.'
												}
											]
										},
										{
											elem: 'text',
											content:
												'Национальный парк Лос-Гласьярес, Аргентина.<br>' +
												'<br>' +
												'Национальный парк, расположенный в Патагонии, на территории аргентинской провинции Санта-Крус.<br>' +
												'Своим названием парк обязан огромной ледяной шапке в Андах, которая питает 47 больших ледников, из которых только 13 стекают в сторону Атлантического океана. Этот ледяной массив является крупнейшим после льдов Антарктиды и Гренландии.'
										},
										{
											elem: 'images',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content: [
														{
															tag: 'img',
															attrs: {'src': 'img/photos/big/1.jpg'}
														}
													]
												}
											]
										},
										{
											elem: 'other',
											content: [
												{
													elem: 'date',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'сегодня в 9:58'
														}
													]
												},
												{
													elem: 'comment',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Комментировать'
														}
													]
												},
												{
													elem: 'like',
													content: [
														{
															block: 'template-like'
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
							block: 'wall-list-item',
							tag: 'li',
							content: [
								{
									elem: 'avatar',
									content: [
										{
											block: 'template-avatar',
											avatar: '1',
											size: 'big',
											status: 'online'
										}
									]
								},
								{
									elem: 'info',
									content: [
										{
											elem: 'name',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Григорий Суворов'
												}
											]
										},
										{
											elem: 'lang',
											content: [
												{
													elem: 'flag',
													content: [
														{
															block: 'template-flag',
															flag: '1',
															size: 'small'
														}
													]
												},
												{
													elem: 'lang-info',
													content:
														'Аргентина, Буэнос-Айрес, испанский язык.'
												}
											]
										},
										{
											elem: 'text',
											content:
												'Гора Фицрой находится в территории национального парка Лос‑Гласьярес, на границе между<br>' +
												'Аргентиной и Чили. Окрестности вершины опутаны множеством трекинговых троп, популярных среди туристов. Самый ближайший населенный пункт — Эль‑Чалтен, откуда ходит автобус из Эль‑Калафате.<br>' +
												'Самый ближайший населенный пункт — Эль‑Чалтен, откуда ходит автобус из Эль‑Калафате.'
										},
										{
											elem: 'images',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content: [
														{
															tag: 'img',
															attrs: {'src': 'img/photos/big/2.jpg'}
														}
													]
												}
											]
										},
										{
											elem: 'other',
											content: [
												{
													elem: 'date',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'сегодня в 9:58'
														}
													]
												},
												{
													elem: 'like',
													content: [
														{
															block: 'template-like'
														}
													]
												}
											]
										},
										{
											elem: 'comments',
											content: [
												{
													block: 'template-comments'
												}
											]
										}
									]
								},
								{
									block: 'wall-list-item-controls',
									content: [
										{
											elem: 'list',
											tag: 'ul',
											content: [
												{
													elem: 'list-item',
													tag: 'li',
													mods: {'type': 'edit'},
													mix: {block: 'tooltip'},
													attrs: {'title': 'Редактировать'},
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Редактировать'
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
	];
});

block('template-rating').replace()(function() {
	return [
		{
			block: 'rating',
			tag: 'span',
			mods: {'rating': this.ctx.rating ? this.ctx.rating : undefined}
		}
	];
});
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
block('template-header-login').replace()(function() {
	return [
		{
			block : 'header',
			content : [
				{
					block: 'header-top',
					content: [
						{
							elem: 'layout',
							mix: {block: 'container'},
							content: [
								{
									elem : 'layout-left',
									content : [
										{
											block: 'template-header-logo'
										}
									]
								},
								{
									elem: 'layout-right',
									content: [
										{
											block: 'header-login',
											content: [
												{
													elem: 'form',
													tag: 'form',
													content: [
														{
															elem: 'field',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	attrs: {'type': 'text', 'placeholder': 'Логин или почта'}
																}
															]
														},
														{
															elem: 'field',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	attrs: {'type': 'password', 'placeholder': 'Пароль'}
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
																		'Войти'
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
					block: 'header-bottom',
					content: [
						{
							elem: 'layout',
							mix: {block: 'container'},
							content: [
								{
									block: 'header-social',
									content: [
										{
											block: 'template-social-links'
										}
									]
								},
								{
									block: 'header-restore',
									content: [
										{
											tag: 'a',
											attrs: {'href': '#'},
											content:
												'Восстановить пароль'
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
block('template-header').replace()(function() {
	return [
		{
			block : 'header',
			content : [
				{
					block: 'header-top',
					content: [
						{
							elem: 'layout',
							mix: {block: 'container'},
							content: [
								{
									elem : 'layout-left',
									content : [
										{
											block: 'template-header-logo'
										}
									]
								},
								{
									elem: 'layout-right',
									content: [
										{
											block: 'header-search',
											content: [
												{
													elem: 'form',
													tag: 'form',
													content: [
														{
															elem: 'field',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	attrs: {'type': 'text', 'placeholder': 'Поиск'}
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
											block: 'header-profile',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content: [
														{
															elem: 'avatar',
															tag: 'span',
															content: [
																{
																	tag: 'img',
																	attrs: {'src': 'img/avatars/mini/1.jpg'}
																}
															]
														},
														{
															elem: 'name',
															tag: 'span',
															content:
																'Григорий<br>' +
																'Суворов'
														}
													]
												}
											]
										},
										{
											block: 'header-settings',
											content: [
												{
													elem: 'button',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#', 'data-jq-dropdown': '#jq-dropdown-settings'},
															content: 'Настройки'
														}
													]
												},
												{
													block: 'jq-dropdown',
													attrs: {'id': 'jq-dropdown-settings'},
													content: [
														{
															block: 'jq-dropdown-menu',
															tag: 'ul',
															content: [
																{
																	tag: 'li',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: 'Настройки'
																		}
																	]
																},
																{
																	tag: 'li',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: 'Помощь'
																		}
																	]
																},
																{
																	block: 'jq-dropdown-divider',
																	tag: 'li',
																	content: []
																},
																{
																	tag: 'li',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: 'Выход'
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
											block: 'header-exit',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Выйти'
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
					block: 'header-bottom',
					content: [
						{
							elem: 'layout',
							mix: {block: 'container'},
							content: [
								{
									block: 'header-navigation',
									content: [
										{
											elem: 'list',
											tag: 'ul',
											content: [
												{
													elem: 'list-item',
													tag: 'li',
													mods: {'active': true},
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Главная'
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
																'Языковой обмен'
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
																'Профиль'
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
																'Мои новости'
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
																'Группы'
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
															content: [
																'Друзья',
																{
																	elem: 'count',
																	tag: 'span',
																	content:
																		'105'
																}
															]
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
															content: [
																'Сообщения',
																{
																	elem: 'count',
																	tag: 'span',
																	content:
																		'7'
																}
															]
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
																'Фотографии'
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
																'Видео'
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
block('template-other').replace()(function() {
	return [
		{
			block: 'go-up',
			content: [
				{
					tag: 'a',
					attrs: {'href': '#'},
					content:
						'Up'
				}
			]
		},
		{
			block: 'fast-messages',
			content: [
				{
					block: 'fast-messages-popup',
					attrs: {'id': 'fast-messages-inbox'},
					content: [
						{
							elem: 'title',
							content: [
								'Сообщения',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'fast-messages-inbox',
									content: [
										{
											block: 'fast-messages-inbox-list',
											tag: 'ul',
											content: [
												{
													avatar: '1',
													name:
														'Константин Барсуков',
													date:
														'16 июн<br>' +
														'в 16:49',
													text:
														'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
												},
												{
													avatar: '2',
													name:
														'Марина Соловьева',
													date:
														'16 июн<br>' +
														'в 16:49',
													text:
														'It was obvious that sleeping in a tent during.'
												},
												{
													avatar: '1',
													name:
														'Константин Барсуков',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
												},
												{
													avatar: '2',
													name:
														'Марина Соловьева',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during.'
												},
												{
													avatar: '1',
													name:
														'Константин Барсуков',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
												},
												{
													avatar: '2',
													name:
														'Марина Соловьева',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during.'
												},
												{
													avatar: '1',
													name:
														'Константин Барсуков',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
												},
												{
													avatar: '2',
													name:
														'Марина Соловьева',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during.'
												}
											].map(function(item) {
												return {
													block: 'fast-messages-inbox-list-item',
													tag: 'li',
													content: [
														{
															elem: 'other',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: item.avatar,
																			size: 'tiny'
																		}
																	]
																},
																{
																	elem: 'date',
																	content: item.date
																}
															]
														},
														{
															elem: 'info',
															content: [
																{
																	elem: 'name',
																	content: item.name
																},
																{
																	elem: 'text',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: item.text
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
				},
				{
					block: 'fast-messages-popup',
					attrs: {'id': 'fast-messages-dialog'},
					content: [
						{
							elem: 'title',
							content: [
								'Константин Барсуков',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'fast-messages-dialog',
									content: [
										{
											block: 'fast-messages-dialog-list',
											tag: 'ul',
											content: [
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'user',
															content: [
																{
																	elem: 'other',
																	content: [
																		{
																			elem: 'avatar',
																			content: [
																				{
																					block: 'template-avatar',
																					avatar: '1',
																					size: 'tiny'
																				}
																			]
																		},
																		{
																			elem: 'date',
																			content:
																				'16 июн<br>' +
																				'в 16:49'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Константин Барсуков'
																		},
																		{
																			elem: 'text',
																			content:
																				'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'self',
															content: [
																{
																	elem: 'self-text',
																	content:
																		'Реализовать вложенность фотографий в папки.'
																},
																{
																	elem: 'self-date',
																	content:
																		'16 июн в 16:49'
																}
															]
														}
													]
												},
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'user',
															content: [
																{
																	elem: 'other',
																	content: [
																		{
																			elem: 'avatar',
																			content: [
																				{
																					block: 'template-avatar',
																					avatar: '1',
																					size: 'tiny'
																				}
																			]
																		},
																		{
																			elem: 'date',
																			content:
																			'16 июн<br>' +
																			'в 16:49'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Константин Барсуков'
																		},
																		{
																			elem: 'text',
																			content:
																				'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'self',
															content: [
																{
																	elem: 'self-text',
																	content:
																		'Реализовать вложенность фотографий в папки.'
																},
																{
																	elem: 'self-date',
																	content:
																		'16 июн в 16:49'
																}
															]
														}
													]
												},
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'user',
															content: [
																{
																	elem: 'other',
																	content: [
																		{
																			elem: 'avatar',
																			content: [
																				{
																					block: 'template-avatar',
																					avatar: '1',
																					size: 'tiny'
																				}
																			]
																		},
																		{
																			elem: 'date',
																			content:
																			'16 июн<br>' +
																			'в 16:49'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Константин Барсуков'
																		},
																		{
																			elem: 'text',
																			content:
																				'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'self',
															content: [
																{
																	elem: 'self-text',
																	content:
																		'Реализовать вложенность фотографий в папки.'
																},
																{
																	elem: 'self-date',
																	content:
																		'16 июн в 16:49'
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
									block: 'fast-messages-dialog-new',
									content: [
										{
											elem: 'textarea',
											tag: 'textarea',
											attrs: {'placeholder': 'Сообщение...'}
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'fast-messages-count',
					tag: 'a',
					attrs: {'href': '#'},
					content: [
						{
							elem: 'notification',
							tag: 'span',
							content:
								'7'
						}
					]
				}
			]
		}
	];
});
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
							attrs: {'rel': 'stylesheet', 'href': '//fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese'}
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
									block: 'push',
									content: ''
								}
							]
						},
						{
							block: 'template-footer'
						},
						{
							block: 'template-popups'
						},
						{
							tag: 'script',
							attrs: {'src': 'bower_components/jquery/dist/jquery.min.js'}
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
block('template-popups').replace()(function() {
	return [
		{
			block: 'popups',
			content: [
				{
					block: 'popup',
					attrs: {'id': 'photo'},
					mods: {'type': 'media'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Основной альбом  (10 из 345)',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'media',
									content: [
										{
											elem: 'avatar',
											content: [
												{
													block: 'template-avatar',
													avatar: '4',
													size: 'big'
												}
											]
										},
										{
											elem: 'text',
											content:
												'Гора Фицрой находится в территории национального парка Лос‑Гласьярес, на границе между<br>' +
												'Аргентиной и Чили. Окрестности вершины опутаны множеством трекинговых троп, популярных среди туристов. Самый ближайший населенный пункт — Эль‑Чалтен, откуда ходит автобус из Эль‑Калафате.<br>' +
												'Самый ближайший населенный пункт — Эль‑Чалтен, откуда ходит автобус из Эль‑Калафате.'
										},
										{
											block: 'media-controls',
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
																		'Удалить'
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
																		'Перенести'
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
																		'Поделиться'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'show',
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
																	attrs: {'src': 'img/photos/big/3.jpg'}
																}
															]
														}
													]
												},
												{
													elem: 'previous',
													tag: 'a',
													content:
														'Предыдущее'
												},
												{
													elem: 'next',
													tag: 'a',
													content:
														'Следующее'
												}
											]
										},
										{
											elem: 'other',
											content: [
												{
													elem: 'date',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'сегодня в 9:58'
														}
													]
												},
												{
													elem: 'comment',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Комментировать'
														}
													]
												},
												{
													elem: 'like',
													content: [
														{
															block: 'template-like'
														}
													]
												}
											]
										},
										{
											elem: 'comments',
											content: [
												{
													block: 'template-comments'
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
					block: 'popup',
					attrs: {'id': 'video'},
					mods: {'type': 'media'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Основной альбом  (10 из 345)',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'media',
									content: [
										{
											elem: 'avatar',
											content: [
												{
													block: 'template-avatar',
													avatar: '4',
													size: 'big'
												}
											]
										},
										{
											elem: 'text',
											content:
												'Гора Фицрой находится в территории национального парка Лос‑Гласьярес, на границе между<br>' +
												'Аргентиной и Чили. Окрестности вершины опутаны множеством трекинговых троп, популярных среди туристов. Самый ближайший населенный пункт — Эль‑Чалтен, откуда ходит автобус из Эль‑Калафате.<br>' +
												'Самый ближайший населенный пункт — Эль‑Чалтен, откуда ходит автобус из Эль‑Калафате.'
										},
										{
											block: 'media-controls',
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
																		'Удалить'
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
																		'Перенести'
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
																		'Поделиться'
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'show',
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
																	attrs: {'src': 'img/photos/big/3.jpg'}
																}
															]
														}
													]
												},
												{
													elem: 'previous',
													tag: 'a',
													content:
														'Предыдущее'
												},
												{
													elem: 'next',
													tag: 'a',
													content:
														'Следующее'
												}
											]
										},
										{
											elem: 'other',
											content: [
												{
													elem: 'date',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'сегодня в 9:58'
														}
													]
												},
												{
													elem: 'comment',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Комментировать'
														}
													]
												},
												{
													elem: 'like',
													content: [
														{
															block: 'template-like'
														}
													]
												}
											]
										},
										{
											elem: 'comments',
											content: [
												{
													block: 'template-comments'
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
					block: 'popup',
					attrs: {'id': 'thumb'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Выбор миниатюры',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'thumb',
									content: [
										{
											elem: 'text',
											content:
												'Осталось выбрать область для маленьких фотографий.<br>' +
												'Выбранная миниатюра будет использоваться в новостях, личных сообщениях и комментариях.'
										},
										{
											elem: 'images',
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
																	attrs: {'src': 'img/avatars/full/1.jpg'}
																}
															]
														}
													]
												},
												{
													elem: 'avatar',
													content: [
														{
															block: 'template-avatar',
															avatar: '1',
															size: 'big'
														}
													]
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
														'Сохранить изменения'
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
					block: 'popup',
					attrs: {'id': 'group-users'},
					content: [
						{
							elem: 'title',
							content: [
								{
									block: 'popup-switcher',
									content: [
										{
											elem: 'list',
											tag: 'ul',
											content: [
												{
													elem: 'list-item',
													tag: 'li',
													mods: {'active': true},
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Участники группы (1 897 005)'
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
																'Друзья в сообществе (4)'
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
																'Поиск по участниками'
														}
													]
												}
											]
										}
									]
								},
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'group-users',
									content: [
										{
											block: 'group-users-list',
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
												},
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
												},
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
													block: 'group-users-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: item.avatar,
																	size: 'big',
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
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'popup',
					attrs: {'id': 'group-friends'},
					content: [
						{
							elem: 'title',
							content: [
								{
									block: 'popup-switcher',
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
																'Участники группы (1 897 005)'
														}
													]
												},
												{
													elem: 'list-item',
													tag: 'li',
													mods: {'active': true},
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Друзья в сообществе (4)'
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
																'Поиск по участниками'
														}
													]
												}
											]
										}
									]
								},
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'group-users',
									content: [
										{
											block: 'group-users-list',
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
												}
											].map(function(item) {
												return {
													block: 'group-users-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: item.avatar,
																	size: 'big',
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
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'popup',
					attrs: {'id': 'group-exit'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Вы собираетесь выйти из группы?',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'group-exit',
									content: [
										{
											tag: 'a',
											attrs: {'href': '#'},
											content:
												'Да'
										},
										{
											tag: 'a',
											attrs: {'href': '#'},
											content:
												'Отмена'
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'popup',
					attrs: {'id': 'photo-upload'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Загрузка новой фотографии',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'media-upload',
									content: [
										{
											elem: 'file',
											tag: 'input',
											attrs: {'type': 'file'}
										},
										{
											elem: 'text',
											content:
												'Друзьям будет проще узнать Вас, если Вы загрузите свою настоящую фотографию. Вы можете загрузить изображение в формате JPG, GIF или PNG.<br>' +
												'<br>' +
												'Если у Вас возникают проблемы с загрузкой, попробуйте выбрать фотографию меньшего размера.'
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'popup',
					attrs: {'id': 'group-complaint'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Пожаловаться на группу: <strong>Центр изучения иностранных языков</strong>',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'complaint',
									content: [
										{
											elem: 'layout',
											content: [
												{
													elem: 'layout-left',
													content: [
														{
															elem: 'title',
															content:
																'Вы собираетесь пожаловаться на эту группу:'
														},
														{
															block: 'complaint-group',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: '6',
																			size: 'big'
																		}
																	]
																},
																{
																	elem: 'name',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Центр изучения иностранных языков'
																		}
																	]
																},
																{
																	elem: 'profile',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: 'группа'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'layout-right',
													content: [
														{
															block: 'complaint-form',
															content: [
																{
																	elem: 'row',
																	content: [
																		{
																			elem: 'label',
																			tag: 'label',
																			content:
																				'Тема жалобы:'
																		},
																		{
																			elem: 'field',
																			content: [
																				{
																					elem: 'input',
																					tag: 'input',
																					attrs: {'type': 'text', 'value': 'Тема'}
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'row',
																	content: [
																		{
																			elem: 'label',
																			tag: 'label',
																			content:
																				'Материал на который вы жалуетесь:'
																		},
																		{
																			elem: 'link',
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content:
																						'Автоматически генерируемая ссылка на материал'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'row',
																	content: [
																		{
																			elem: 'field',
																			content: [
																				{
																					elem: 'textarea',
																					tag: 'textarea',
																					content:
																						'Укажите причину'
																				}
																			]
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
																				'Отправить жалобу'
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
				},
				{
					block: 'popup',
					attrs: {'id': 'user-complaint'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Пожаловаться на пользорвателя: <strong>Christian Bale</strong>',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'complaint',
									content: [
										{
											elem: 'layout',
											content: [
												{
													elem: 'layout-left',
													content: [
														{
															elem: 'title',
															content:
																'Вы собираетесь пожаловаться на этого пользователя:'
														},
														{
															block: 'complaint-user',
															content: [
																{
																	elem: 'flag',
																	content: [
																		{
																			block: 'template-flag',
																			flag: '1',
																			size: 'small'
																		}
																	]
																},
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: '1',
																			size: 'big',
																			status: 'online'
																		}
																	]
																},
																{
																	elem: 'name',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: 'Christian<br>Bale'
																		}
																	]
																},
																{
																	elem: 'status',
																	content: 'Online'
																},
																{
																	elem: 'profile',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: 'профиль'
																		}
																	]
																}
															]
														}
													]
												},
												{
													elem: 'layout-right',
													content: [
														{
															block: 'complaint-form',
															content: [
																{
																	elem: 'row',
																	content: [
																		{
																			elem: 'label',
																			tag: 'label',
																			content:
																				'Тема жалобы:'
																		},
																		{
																			elem: 'field',
																			content: [
																				{
																					elem: 'input',
																					tag: 'input',
																					attrs: {'type': 'text', 'value': 'Тема'}
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'row',
																	content: [
																		{
																			elem: 'label',
																			tag: 'label',
																			content:
																				'Материал на который вы жалуетесь:'
																		},
																		{
																			elem: 'link',
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content:
																						'Автоматически генерируемая ссылка на материал'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'row',
																	content: [
																		{
																			elem: 'field',
																			content: [
																				{
																					elem: 'textarea',
																					tag: 'textarea',
																					content:
																						'Укажите причину'
																				}
																			]
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
																				'Отправить жалобу'
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
				},
				{
					block: 'popup',
					attrs: {'id': 'confirm-delete-user'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Удалить из беседы Дарью Чехову?',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'confirm-delete-user',
									content: [
										{
											elem: 'text',
											content:
												'Вы уверены, что хотите исключить Дарью Чехову из беседы? Это действие нельзя будет отменить.'
										},
										{
											elem: 'controls',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Отмена'
												},
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Удалить'
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
					block: 'popup',
					attrs: {'id': 'confirm-black-list'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'<strong>Григорий Осипов</strong> добавлен в черный список',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'confirm-black-list',
									content: [
										{
											elem: 'text',
											content:
												'Всех пользователей добавленных в черный список можно посмотреть на вкладке <a href="#">Настройки</a><br>' +
												'Также можно настроить отключение данного уведомления'
										},
										{
											elem: 'controls',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Продолжить'
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
					block: 'popup',
					attrs: {'id': 'delete-user'},
					content: [
						{
							elem: 'title',
							content: [
								'Удалить собеседника',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'delete-user',
									content: [
										{
											block: 'delete-user-list',
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
												},
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
												}
											].map(function(item) {
												return {
													block: 'delete-user-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: item.avatar,
																	size: 'big',
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
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'popup',
					attrs: {'id': 'photo-new'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Новая фотография',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'media-upload',
									content: [
										{
											elem: 'file',
											tag: 'input',
											attrs: {'type': 'file'}
										},
										{
											elem: 'controls',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Прикрепить'
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
					block: 'popup',
					attrs: {'id': 'video-new'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Новое видео',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'media-upload',
									content: [
										{
											elem: 'input',
											tag: 'input',
											attrs: {'type': 'text', 'placeholder': 'https://www.youtube.com/'}
										},
										{
											elem: 'text',
											content:
												'Вы можете указать ссылку на страницу видеозаписи на таких сайтах, как Youtube, Rutube, Vimeo и другие.'
										},
										{
											elem: 'controls',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Прикрепить'
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
					block: 'popup',
					attrs: {'id': 'video-attach'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Прикрепить видеозапись',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'video-attach',
									content: [
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
											block: 'video-albums',
											content: [
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
					block: 'popup',
					attrs: {'id': 'photo-attach'},
					content: [
						{
							elem: 'title',
							tag: 'h3',
							content: [
								'Прикрепить фотографию',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'photo-attach',
									content: [
										{
											block: 'photo-albums',
											content: [
												{
													block: 'photo-albums-list',
													tag: 'ul',
													content: [
														{
															title:
																'My photos',
															count:
																'(7)',
															photo: '1'
														},
														{
															title:
																'My photos',
															count:
																'(457)',
															photo: '1'
														},
														{
															title:
																'My photos',
															count:
																'(21)',
															photo: '1'
														},
														{
															title:
																'My photos',
															count:
																'(7)',
															photo: '1'
														}
													].map(function(item) {
														return {
															block: 'photo-albums-list-item',
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
																	elem: 'image',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: [
																				{
																					tag: 'img',
																					attrs: {'src': 'img/photos/medium/' + item.photo + '.jpg'}
																				}
																			]
																		}
																	]
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
																'Показать все 15 альбомов'
														}
													]
												}
											]
										},
										{
											block: 'last-photos-list',
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
													block: 'last-photos-list-item',
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
				}
			]
		}
	];
});