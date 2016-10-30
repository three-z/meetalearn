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
									block: 'photo-upload',
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
				}
			]
		}
	];
});