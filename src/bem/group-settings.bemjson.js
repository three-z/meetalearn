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
														'Редактировать описание'
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
									elem: 'layout',
									content: [
										{
											elem: 'layout-left',
											content: [
												{
													block: 'profile-edit-settings',
													content: [
														{
															elem: 'title',
															tag: 'h3',
															content:
																'Писать на стене могут:'
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
																			attrs: {'type': 'radio', 'name': 'group-settings-wall-write', 'value': 'all'}
																		},
																		'Все'
																	]
																}
															]
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
																			attrs: {'type': 'radio', 'name': 'group-settings-wall-write', 'value': 'users'}
																		},
																		'Только пользователи сайта'
																	]
																}
															]
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
																			attrs: {'type': 'radio', 'name': 'group-settings-wall-write', 'value': 'group-users', 'checked': ''}
																		},
																		'Только участники группы'
																	]
																}
															]
														},
														{
															elem: 'title',
															tag: 'h3',
															content:
																'Просматривать стену могут:'
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
																			attrs: {'type': 'radio', 'name': 'group-settings-wall-show', 'value': 'all'}
																		},
																		'Все'
																	]
																}
															]
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
																			attrs: {'type': 'radio', 'name': 'group-settings-wall-show', 'value': 'users'}
																		},
																		'Только пользователи сайта'
																	]
																}
															]
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
																			attrs: {'type': 'radio', 'name': 'group-settings-wall-show', 'value': 'group-users', 'checked': ''}
																		},
																		'Только участники группы'
																	]
																}
															]
														}
													]
												},
												{
													block: 'profile-controls',
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
																				'Сохранить настройки'
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
											content: ' '
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