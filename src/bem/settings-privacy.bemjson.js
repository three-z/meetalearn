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
								'Мои настройки'
						},
						{
							block: 'page-switcher',
							mods: {'type': 'bottom'},
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
														'Личная информация'
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
														'Общие'
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
														'Приватность'
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
														'Оповещения'
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
														'Черный список'
												}
											]
										}
									]
								}
							]
						},
						{
							block: 'settings',
							content: [
								{
									elem: 'content',
									content: [
										{
											elem: 'block',
											mods: {'type': 'long-label'},
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content:
														'Общие сведения'
												},
												{
													elem: 'list',
													tag: 'dl',
													content: [
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Кто может писать мне личные сообщения:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Все пользователи сайта'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Кто может оставлять записи на моей странице:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Только я'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Кто видит основную информацию моей страницы:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Все пользователи'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Кто может впросматривать стену моей страницы:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Только друзья'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Кто видит моих друзей:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Только друзья'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Кому в интернете видна моя страница:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Всем'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Кто может приглашать меня в друзья:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Пользователи, оставившие комментарии к моим записям'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Пол собеседника:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Любой'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'День рождения:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'select',
																	tag: 'select',
																	content: [
																		{
																			tag: 'option',
																			attrs: {'value': '21', 'selected': ''},
																			content:
																				'21'
																		},
																		{
																			tag: 'option',
																			attrs: {'value': '50'},
																			content:
																				'50'
																		}
																	]
																},
																{
																	elem: 'spacer',
																	tag: 'span',
																	content:
																		'-'
																},
																{
																	elem: 'select',
																	tag: 'select',
																	content: [
																		{
																			tag: 'option',
																			attrs: {'value': '100', 'selected': ''},
																			content:
																				'100'
																		},
																		{
																			tag: 'option',
																			attrs: {'value': '50'},
																			content:
																				'50'
																		}
																	]
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Континенты (страны) собеседника:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															mods: {'type': 'no-margin'},
															content: [
																{
																	elem: 'languages-list',
																	content: [
																		{
																			elem: 'languages-list-item',
																			content: [
																				{
																					elem: 'select',
																					tag: 'select',
																					mods: {'type': 'language'},
																					content: [
																						{
																							tag: 'option',
																							attrs: {'value': 'Английский', 'selected': ''},
																							content:
																								'Английский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Итальянский'},
																							content:
																								'Итальянский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Испанский'},
																							content:
																								'Испанский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Испанский'},
																							content:
																								'Китайский'
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'languages-list-item',
																			content: [
																				{
																					elem: 'select',
																					tag: 'select',
																					mods: {'type': 'language'},
																					content: [
																						{
																							tag: 'option',
																							attrs: {'value': 'Английский'},
																							content:
																								'Английский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Итальянский', 'selected': ''},
																							content:
																								'Итальянский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Испанский'},
																							content:
																								'Испанский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Испанский'},
																							content:
																								'Китайский'
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'languages-list-item',
																			content: [
																				{
																					elem: 'select',
																					tag: 'select',
																					mods: {'type': 'language'},
																					content: [
																						{
																							tag: 'option',
																							attrs: {'value': 'Английский'},
																							content:
																								'Английский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Итальянский'},
																							content:
																								'Итальянский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Испанский', 'selected': ''},
																							content:
																								'Испанский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Испанский'},
																							content:
																								'Китайский'
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'languages-list-item',
																			content: [
																				{
																					elem: 'languages-add',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content:
																								'Добавить язык'
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
															elem: 'list-label',
															tag: 'dt',
															content:
																'Заблокированные страны:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															mods: {'type': 'no-margin'},
															content: [
																{
																	elem: 'languages-list',
																	content: [
																		{
																			elem: 'languages-list-item',
																			content: [
																				{
																					elem: 'select',
																					tag: 'select',
																					mods: {'type': 'language'},
																					content: [
																						{
																							tag: 'option',
																							attrs: {'value': 'Английский', 'selected': ''},
																							content:
																								'Английский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Итальянский'},
																							content:
																								'Итальянский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Испанский'},
																							content:
																								'Испанский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Испанский'},
																							content:
																								'Китайский'
																						}
																					]
																				}
																			]
																		},
																		{
																			elem: 'languages-list-item',
																			content: [
																				{
																					elem: 'languages-add',
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content:
																								'Добавить язык'
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
															elem: 'list-label',
															tag: 'dt',
															content:
																'Исключить профиль из поисковых систем:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'checkbox-field',
																	content: [
																		{
																			elem: 'checkbox-label',
																			tag: 'label',
																			content: [
																				{
																					elem: 'checkbox',
																					tag: 'input',
																					attrs: {'type': 'checkbox', 'name': 'settings-notification-new-mess', 'checked': ''}
																				},
																				'(закрыть страницу профиля от индексации)'
																			]
																		}
																	]
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
																'Сохранить'
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