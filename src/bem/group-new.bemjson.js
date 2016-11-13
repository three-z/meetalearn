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
							content:
								'Создание новой группы'
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
													block: 'profile-avatar',
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
																			attrs: {'src': 'img/avatars/full/2.jpg'}
																		}
																	]
																}
															]
														},
														{
															block: 'profile-avatar-controls',
															content: [
																{
																	elem: 'list',
																	tag: 'ul',
																	content: [
																		{
																			elem: 'list-item',
																			tag: 'li',
																			mods: {'type': 'change-thumb'},
																			mix: {block: 'tooltip'},
																			attrs: {'title': 'Изменить миниатюру'},
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content:
																						'Изменить миниатюру'
																				}
																			]
																		},
																		{
																			elem: 'list-item',
																			tag: 'li',
																			mods: {'type': 'change-avatar'},
																			mix: {block: 'tooltip'},
																			attrs: {'title': 'Изменить фотографию'},
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content:
																						'Изменить фотографию'
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
											content: [
												{
													block: 'profile-edit-title',
													content: [
														{
															elem: 'input',
															tag: 'input',
															attrs: {'type': 'text', 'placeholder': 'Название'}
														}
													]
												},
												{
													block: 'profile-edit-description',
													content: [
														{
															elem: 'textarea',
															tag: 'textarea',
															attrs: {'placeholder': 'Описание'}
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