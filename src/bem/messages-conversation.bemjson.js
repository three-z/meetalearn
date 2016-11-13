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
							block: 'page-title',
							tag: 'h1',
							mods: {'type': 'top'},
							content:
								'Сообщения'
						},
						{
							block: 'filter-bottom',
							mods: {'type': 'bottom'},
							content: [
								{
									elem: 'layout',
									content: [
										{
											elem: 'layout-back',
											content: [
												{
													block: 'filter-back',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: 'Все беседы'
														}
													]
												}
											]
										},
										{
											elem: 'layout-control',
											content: [
												{
													block: 'filter-control',
													content: [
														{
															elem: 'button',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#', 'data-jq-dropdown': '#jq-dropdown-control'},
																	content:
																		'Управление беседой'
																}
															]
														},
														{
															elem: 'dropdown',
															content: [
																{
																	block: 'jq-dropdown',
																	attrs: {'id': 'jq-dropdown-control'},
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
																							content: 'Добавить собеседника'
																						}
																					]
																				},
																				{
																					tag: 'li',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: 'Удалить собеседника'
																						}
																					]
																				},
																				{
																					tag: 'li',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content: 'Покинуть беседу'
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
																							content: 'Очистить историю'
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
						},
						{
							block: 'messages',
							content: [
								{
									block: 'dialog',
									content: [
										{
											elem: 'title',
											tag: 'h3',
											content: [
												'Отдых на Байкале',
												{
													elem: 'edit-title',
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Редактировать'
												}
											]
										},
										{
											block: 'dialog-add-list',
											tag: 'ul',
											content: [
												{
													block: 'dialog-add-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '1',
																	size: 'tiny',
																	status: 'online'
																}
															]
														}
													]
												},
												{
													block: 'dialog-add-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '2',
																	size: 'tiny',
																	status: 'online'
																}
															]
														}
													]
												},
												{
													block: 'dialog-add-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '3',
																	size: 'tiny',
																	status: 'online'
																}
															]
														}
													]
												},
												{
													block: 'dialog-add-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '4',
																	size: 'tiny',
																	status: 'online'
																}
															]
														}
													]
												},
												{
													block: 'dialog-add-list-item',
													tag: 'li',
													content: [
														{
															elem: 'add',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Добавить'
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'dialog-list',
											tag: 'ul',
											mods: {'type': 'no-border'},
											content: [
												{
													block: 'dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '1',
																	size: 'small',
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
																				'Алексей Пономарев'
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
																		'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights. We got equipped for this trip and our friends over at Bayerncar Oy offered us a nice BMW X5 that fit all of our gear for the drive to Norway. '
																},
																{
																	block: 'messages-list-item-controls',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'date'},
																					content:
																						'25 минут назад'
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
													block: 'dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '3',
																	size: 'small',
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
																				'Михаил Чернаков'
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
																		'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights. We got equipped for this trip and our friends over at Bayerncar Oy offered us a nice BMW X5 that fit all of our gear for the drive to Norway. '
																},
																{
																	block: 'messages-list-item-controls',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'date'},
																					content:
																						'25 минут назад'
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
													block: 'dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '2',
																	size: 'small',
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
																				'Светлана Малышева'
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
																		'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights. We got equipped for this trip and our friends over at Bayerncar Oy offered us a nice BMW X5 that fit all of our gear for the drive to Norway. '
																},
																{
																	block: 'messages-list-item-controls',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'date'},
																					content:
																						'25 минут назад'
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
													block: 'dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '1',
																	size: 'small',
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
																				'Алексей Пономарев'
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
																		'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights. We got equipped for this trip and our friends over at Bayerncar Oy offered us a nice BMW X5 that fit all of our gear for the drive to Norway. '
																},
																{
																	block: 'messages-list-item-controls',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'date'},
																					content:
																						'25 минут назад'
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
													block: 'dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '3',
																	size: 'small',
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
																				'Михаил Чернаков'
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
																		'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights. We got equipped for this trip and our friends over at Bayerncar Oy offered us a nice BMW X5 that fit all of our gear for the drive to Norway. '
																},
																{
																	block: 'messages-list-item-controls',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'date'},
																					content:
																						'25 минут назад'
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
													block: 'dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '2',
																	size: 'small',
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
																				'Светлана Малышева'
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
																		'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights. We got equipped for this trip and our friends over at Bayerncar Oy offered us a nice BMW X5 that fit all of our gear for the drive to Norway. '
																},
																{
																	block: 'messages-list-item-controls',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'date'},
																					content:
																						'25 минут назад'
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
													block: 'dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '1',
																	size: 'small',
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
																				'Алексей Пономарев'
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
																		'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights. We got equipped for this trip and our friends over at Bayerncar Oy offered us a nice BMW X5 that fit all of our gear for the drive to Norway. '
																},
																{
																	block: 'messages-list-item-controls',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'date'},
																					content:
																						'25 минут назад'
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
											block: 'dialog-new-item',
											content: [
												{
													elem: 'form',
													tag: 'form',
													content: [
														{
															elem: 'textarea',
															tag: 'textarea',
															attrs: {'placeholder': 'Введите сообщение...'}
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
					]
				}
			]
		},
		{
			block: 'template-other'
		}
	]
});