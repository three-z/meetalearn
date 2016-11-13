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