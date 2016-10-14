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
									elem: 'layout-right',
									content: [
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
										},
										{
											block: 'header-social-login',
											content: [
												{
													block: 'template-social-links'
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
															attrs: {'href': '#', 'data-jq-dropdown': '#jq-dropdown-1'},
															content: 'Настройки'
														}
													]
												},
												{
													block: 'jq-dropdown',
													attrs: {'id': 'jq-dropdown-1'},
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
									elem: 'layout-left',
									content: [
										{
											block: 'header-navigation',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															title: 'Главная',
															active: true
														},
														{
															title: 'Языковой обмен'
														},
														{
															title: 'Профиль'
														},
														{
															title: 'Мои новости'
														},
														{
															title: 'Группы'
														},
														{
															title: 'Друзья'
														},
														{
															title: 'Сообщения'
														},
														{
															title: 'Фотографии'
														},
														{
															title: 'Видео'
														}
													].map(function(item) {
														return {
															elem: 'list-item',
															tag: 'li',
															mods: {'active': item.active ? true : undefined},
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
								}
							]
						}
					]
				}
			]
		}
	]
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
block('template-popups').replace()(function() {
	return [
		{
			block: 'popups',
			content: [
				{
					block: 'popup',
					attrs: {'id': 'photo'},
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
									block: 'photo',
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
											block: 'photo-controls',
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
									block: 'video',
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
											block: 'video-controls',
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
				}
			]
		}
	];
});