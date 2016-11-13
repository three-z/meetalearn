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
							content: [
								'Сообщения'
							]
						},
						{
							block: 'filter-bottom',
							mods: {'type': 'bottom'},
							content: [
								{
									elem: 'layout',
									content: [
										{
											elem: 'layout-switch',
											content: [
												{
													block: 'filter-switcher',
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
																				'Все сообщения'
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
																				'Диалоги'
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
																				'Беседы'
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
											elem: 'layout-center',
											content: [
												{
													block: 'filter-search',
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
												}
											]
										},
										{
											elem: 'layout-right',
											content: [
												{
													block: 'filter-options',
													content: [
														{
															elem: 'field',
															content: [
																{
																	elem: 'checkbox-label',
																	tag: 'label',
																	content: [
																		{
																			elem: 'checkbox',
																			tag: 'input',
																			attrs: {'type': 'checkbox', 'name': 'filter-online', 'value': 'yes', 'checked': ''}
																		},
																		'Online'
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
									block: 'messages-list',
									tag: 'ul',
									content: [
										{
											block: 'messages-list-item',
											tag: 'li',
											content: [
												{
													elem: 'avatars',
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
																		'Италия, Рим.<br>' +
																		'Родной язык - итальянский; изучаемый язык - английский.'
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
																				'21 ноя 2015'
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
										},
										{
											block: 'messages-list-item',
											tag: 'li',
											content: [
												{
													elem: 'avatars',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '3',
																	size: 'big',
																	status: 'online'
																}
															]
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
																		'Антон Виноградов'
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
																	'Италия, Рим.<br>' +
																	'Родной язык - итальянский; изучаемый язык - английский.'
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
																				'21 ноя 2015'
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
										},
										{
											block: 'messages-list-item',
											tag: 'li',
											content: [
												{
													elem: 'avatars',
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
																	'Италия, Рим.<br>' +
																	'Родной язык - итальянский; изучаемый язык - английский.'
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
																				'21 ноя 2015'
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
										},
										{
											block: 'messages-list-item',
											tag: 'li',
											content: [
												{
													elem: 'avatars',
													content: [
														{
															elem: 'avatar',
															content: [
																{
																	block: 'template-avatar',
																	avatar: '2',
																	size: 'big',
																	status: 'online'
																}
															]
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
																		'Анна Богданова'
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
																	'Италия, Рим.<br>' +
																	'Родной язык - итальянский; изучаемый язык - английский.'
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
																				'21 ноя 2015'
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