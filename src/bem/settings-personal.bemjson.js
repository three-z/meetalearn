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
											mods: {'active': true},
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
																'Имя:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	mods: {'type': 'short'},
																	attrs: {'type': 'text'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Фамилия:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	mods: {'type': 'short'},
																	attrs: {'type': 'text'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Пол:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'select',
																	tag: 'select',
																	mods: {'type': 'gender'},
																	content: [
																		{
																			tag: 'option',
																			attrs: {'value': 'Мужской', 'selected': ''},
																			content:
																				'Мужской'
																		},
																		{
																			tag: 'option',
																			attrs: {'value': 'Женский'},
																			content:
																				'Женский'
																		}
																	]
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
																	mods: {'type': 'day'},
																	content: [
																		{
																			tag: 'option',
																			attrs: {'value': '25', 'selected': ''},
																			content:
																				'25'
																		},
																		{
																			tag: 'option',
																			attrs: {'value': '26'},
																			content:
																				'26'
																		}
																	]
																},
																{
																	elem: 'select',
																	tag: 'select',
																	mods: {'type': 'month'},
																	content: [
																		{
																			tag: 'option',
																			attrs: {'value': 'Ноября', 'selected': ''},
																			content:
																				'Ноября'
																		},
																		{
																			tag: 'option',
																			attrs: {'value': 'Декабря'},
																			content:
																				'Декабря'
																		}
																	]
																},
																{
																	elem: 'select',
																	tag: 'select',
																	mods: {'type': 'year'},
																	content: [
																		{
																			tag: 'option',
																			attrs: {'value': '1991', 'selected': ''},
																			content:
																				'1991'
																		},
																		{
																			tag: 'option',
																			attrs: {'value': '1991'},
																			content:
																				'1991'
																		}
																	]
																},
																{
																	elem: 'select',
																	tag: 'select',
																	mods: {'type': 'show'},
																	content: [
																		{
																			tag: 'option',
																			attrs: {'value': 'Показывать только месяц и день', 'selected': ''},
																			content:
																				'Показывать полностью'
																		},
																		{
																			tag: 'option',
																			attrs: {'value': '1991'},
																			content:
																				'Показывать полностью'
																		}
																	]
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Родной город:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	mods: {'type': 'short'},
																	attrs: {'type': 'text'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Родной язык:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	mods: {'type': 'short'},
																	attrs: {'type': 'text'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Владею языками:'
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
																				},
																				{
																					elem: 'select',
																					tag: 'select',
																					mods: {'type': 'rating'},
																					content: [
																						{
																							tag: 'option',
																							attrs: {'value': '10', 'selected': ''},
																							content:
																								'10'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '9'},
																							content:
																								'9'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '8'},
																							content:
																								'8'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '7'},
																							content:
																								'7'
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
																				},
																				{
																					elem: 'select',
																					tag: 'select',
																					mods: {'type': 'rating'},
																					content: [
																						{
																							tag: 'option',
																							attrs: {'value': '10'},
																							content:
																								'10'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '9'},
																							content:
																								'9'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '8', 'selected': ''},
																							content:
																								'8'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '7'},
																							content:
																								'7'
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
																				},
																				{
																					elem: 'select',
																					tag: 'select',
																					mods: {'type': 'rating'},
																					content: [
																						{
																							tag: 'option',
																							attrs: {'value': '10'},
																							content:
																								'10'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '9', 'selected': ''},
																							content:
																								'9'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '8'},
																							content:
																								'8'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '7'},
																							content:
																								'7'
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
																							attrs: {'value': 'Испанский'},
																							content:
																								'Испанский'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': 'Испанский', 'selected': ''},
																							content:
																								'Китайский'
																						}
																					]
																				},
																				{
																					elem: 'select',
																					tag: 'select',
																					mods: {'type': 'rating'},
																					content: [
																						{
																							tag: 'option',
																							attrs: {'value': '10'},
																							content:
																								'10'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '9', 'selected': ''},
																							content:
																								'9'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '8'},
																							content:
																								'8'
																						},
																						{
																							tag: 'option',
																							attrs: {'value': '7'},
																							content:
																								'7'
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
																'Хочу изучить:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	mods: {'type': 'short'},
																	attrs: {'type': 'text'}
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'block',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content:
														'Информация о вас'
												},
												{
													elem: 'list',
													tag: 'dl',
													content: [
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Цель регистрации:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	attrs: {'type': 'text', 'value': 'Переписка'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'О себе:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'textarea',
																	tag: 'textarea',
																	content:
																		'Зная несколько славянских языков - довольно хорошо понимаю и другие славянские. Зная эсперанто - более-менее понимаю несложные фразы на романских языках и могу общаться с их носителями.'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'С кем хочу общаться:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'textarea',
																	tag: 'textarea',
																	content:
																		'Зная несколько славянских языков - довольно хорошо понимаю и другие славянские. Зная эсперанто - более-менее понимаю несложные фразы на романских языках и могу общаться с их носителями.'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Интересы и хобби:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	attrs: {'type': 'text', 'value': 'Активный отдых, музыка, IT'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Музыка:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	attrs: {'type': 'text'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Книги:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	attrs: {'type': 'text'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Фильмы:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	attrs: {'type': 'text'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'ТВ шоу:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	attrs: {'type': 'text'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Любимые цитаты:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	elem: 'textarea',
																	tag: 'textarea',
																	content:
																		'А toutprix (фр.) - Любой ценой. \nAudacesfortuna kuvatrr - Счастье сопутствует смелым.'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Я в других соц.сетях:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content: [
																{
																	block: 'template-social-links'
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