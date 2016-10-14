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