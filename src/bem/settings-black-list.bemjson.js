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
							block: 'settings',
							content: [
								{
									block: 'search-result',
									mods: {'type': 'top'},
									content: [
										{
											elem: 'count',
											content:
												'В вашем черном списке находится 3 пользователя'
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
																								'Удалить из списка'
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
		},
		{
			block: 'template-other'
		}
	]
});