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
								'Центр изучения иностранных языков'
						},
						{
							block: 'page-switcher',
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
														'Редактировать описание'
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
										},
										{
											elem: 'list-item',
											tag: 'li',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Участники'
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
														'Черный список'
												}
											]
										}
									]
								}
							]
						},
						{
							block: 'filter-top',
							content: [
								{
									elem: 'layout',
									content: [
										{
											elem: 'layout-left',
											content: [
												{
													elem: 'columns',
													content: [
														{
															elem: 'column',
															content: [
																{
																	elem: 'label',
																	tag: 'label',
																	attrs: {'for': 'group-users-filter-country'},
																	content:
																		'Страна'
																},
																{
																	elem: 'field',
																	content: [
																		{
																			elem: 'select',
																			tag: 'select',
																			attrs: {'id': 'group-users-filter-country', 'name': 'group-users-filter-country'},
																			content: [
																				{
																					tag: 'option',
																					attrs: {'value': 'Франция'},
																					content:
																						'Франция'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': 'Португалия', 'selected': ''},
																					content:
																						'Португалия'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': 'Россия'},
																					content:
																						'Россия'
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															elem: 'column',
															content: [
																{
																	elem: 'label',
																	tag: 'label',
																	attrs: {'for': 'group-users-filter-native-language'},
																	content:
																		'Родной язык'
																},
																{
																	elem: 'field',
																	content: [
																		{
																			elem: 'select',
																			tag: 'select',
																			attrs: {'id': 'group-users-filter-native-language', 'name': 'group-users-filter-native-language'},
																			content: [
																				{
																					tag: 'option',
																					attrs: {'value': 'Французский'},
																					content:
																						'Французский'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': 'Португальский', 'selected': ''},
																					content:
																						'Португальский'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': 'Русский'},
																					content:
																						'Русский'
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															elem: 'column',
															content: [
																{
																	elem: 'label',
																	tag: 'label',
																	attrs: {'for': 'exchange-filter-learning-language'},
																	content:
																		'Изучаемый язык'
																},
																{
																	elem: 'field',
																	content: [
																		{
																			elem: 'select',
																			tag: 'select',
																			attrs: {'id': 'exchange-filter-learning-language', 'name': 'exchange-filter-learning-language'},
																			content: [
																				{
																					tag: 'option',
																					attrs: {'value': 'Французский', 'selected': ''},
																					content:
																						'Французский'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': 'Португальский'},
																					content:
																						'Португальский'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': 'Русский'},
																					content:
																						'Русский'
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															elem: 'column',
															content: [
																{
																	elem: 'label',
																	tag: 'label',
																	attrs: {'for': 'exchange-filter-age'},
																	content:
																		'Возраст'
																},
																{
																	elem: 'field',
																	content: [
																		{
																			elem: 'select',
																			tag: 'select',
																			attrs: {'id': 'exchange-filter-age', 'name': 'exchange-filter-age-from'},
																			content: [
																				{
																					tag: 'option',
																					attrs: {'value': '18'},
																					content:
																						'18'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '21', 'selected': ''},
																					content:
																						'21'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '25'},
																					content:
																						'25'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '30'},
																					content:
																						'30'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '40'},
																					content:
																						'40'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '50'},
																					content:
																						'50'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '60'},
																					content:
																						'60'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '18'},
																					content:
																						'70'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '80'},
																					content:
																						'80'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '90'},
																					content:
																						'90'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '100'},
																					content:
																						'100'
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
																			attrs: {'name': 'exchange-filter-age-to'},
																			content: [
																				{
																					tag: 'option',
																					attrs: {'value': '18'},
																					content:
																						'18'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '21'},
																					content:
																						'21'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '25'},
																					content:
																						'25'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '30'},
																					content:
																						'30'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '40'},
																					content:
																						'40'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '50'},
																					content:
																						'50'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '60'},
																					content:
																						'60'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '18'},
																					content:
																						'70'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '80'},
																					content:
																						'80'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '90'},
																					content:
																						'90'
																				},
																				{
																					tag: 'option',
																					attrs: {'value': '100', 'selected': ''},
																					content:
																						'100'
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
											elem: 'layout-right',
											content: [
												{
													block: 'filter-gender',
													content: [
														{
															elem: 'label',
															tag: 'label',
															attrs: {'for': 'exchange-filter-gender'},
															content:
																'Пол'
														},
														{
															elem: 'field',
															content: [
																{
																	elem: 'radio-label',
																	tag: 'label',
																	content: [
																		{
																			elem: 'radio',
																			tag: 'input',
																			mods: {'type': 'male'},
																			attrs: {'type': 'radio', 'name': 'exchange-filter-gender', 'id': 'exchange-filter-gender', 'value': 'male'}
																		},
																		'М.'
																	]
																},
																{
																	elem: 'radio-label',
																	tag: 'label',
																	content: [
																		{
																			elem: 'radio',
																			tag: 'input',
																			mods: {'type': 'female'},
																			attrs: {'type': 'radio', 'name': 'exchange-filter-gender', 'value': 'female'}
																		},
																		'Ж.'
																	]
																},
																{
																	elem: 'radio-label',
																	tag: 'label',
																	content: [
																		{
																			elem: 'radio',
																			tag: 'input',
																			mods: {'type': 'any'},
																			attrs: {'type': 'radio', 'name': 'exchange-filter-gender', 'value': 'any', 'checked': ''}
																		},
																		'Любой'
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
							block: 'filter-bottom',
							content: [
								{
									elem: 'layout',
									content: [
										{
											elem: 'layout-left',
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
																			attrs: {'type': 'text', 'placeholder': 'Введите имя'}
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
																			attrs: {'type': 'checkbox', 'name': 'exchange-filter-photo', 'value': 'yes', 'checked': ''}
																		},
																		'С фотографией'
																	]
																},
																{
																	elem: 'checkbox-label',
																	tag: 'label',
																	content: [
																		{
																			elem: 'checkbox',
																			tag: 'input',
																			attrs: {'type': 'checkbox', 'name': 'exchange-filter-online', 'value': 'yes', 'checked': ''}
																		},
																		'В сети'
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
							block: 'search-result',
							content: [
								{
									elem: 'count',
									content:
										'В чёрном списке группы находится 3 пользователя'
								},
								{
									block: 'search-result-list',
									tag: 'ul',
									content: [
										{
											flag: '1',
											avatar: '1',
											avatar_status: 'online',
											name:
												'Григорий Суворов',
											lang:
											'Италия, Рим.<br>' +
											'Родной язык - итальянский; изучаемый язык - английский.',
											years:
												'23 г., ж.'
										},
										{
											flag: '2',
											avatar: '2',
											avatar_status: 'offline',
											name:
												'Анна Богданова',
											lang:
											'Италия, Рим.<br>' +
											'Родной язык - итальянский; изучаемый язык - английский.',
											years:
												'23 г., ж.'
										},
										{
											flag: '3',
											avatar: '3',
											avatar_status: 'online',
											name:
												'Антон Виноградов',
											lang:
											'Италия, Рим.<br>' +
											'Родной язык - итальянский; изучаемый язык - английский.',
											years:
												'23 г., ж.'
										}
									].map(function(item) {
										return {
											block: 'search-result-list-item',
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
													elem: 'info',
													content: [
														{
															elem: 'name',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content: item.name
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
																	content: item.lang
																}
															]
														},
														{
															elem: 'years',
															content: item.years
														},
														{
															block: 'search-result-list-item-controls',
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
																						'Диалог'
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
																						'Удалить из друзей'
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
																						'Заблокировать'
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
																						'Пожаловаться модератору'
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
																						'Отправить сообщение'
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
																						'Посмотреть друзей'
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
});