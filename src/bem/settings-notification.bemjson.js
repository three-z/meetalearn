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
											mods: {'active': true},
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
											mods: {'type': 'medium-label'},
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content:
														'Оповещения по электронной почте:'
												},
												{
													elem: 'list',
													tag: 'dl',
													content: [
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'E-mail для оповещений:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															content:
																'grego********v@gmail.com'
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Новый адрес:'
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
																},
																{
																	elem: 'button',
																	tag: 'button',
																	attrs: {'type': 'submit'},
																	mods: {'type': 'inline'},
																	content:
																		'Сохранить адрес'
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'&nbsp;'
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
																				'Новые сообщения'
																			]
																		}
																	]
																},
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
																					attrs: {'type': 'checkbox', 'name': 'settings-notification-new-wall', 'checked': ''}
																				},
																				'Новые записи на стене'
																			]
																		}
																	]
																},
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
																					attrs: {'type': 'checkbox', 'name': 'settings-notification-friend', 'checked': ''}
																				},
																				'Запросы в друзья'
																			]
																		}
																	]
																},
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
																					attrs: {'type': 'checkbox', 'name': 'settings-notification-comment-photo', 'checked': ''}
																				},
																				'Комментарии к фотографиям'
																			]
																		}
																	]
																},
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
																					attrs: {'type': 'checkbox', 'name': 'settings-notification-comment-wall', 'checked': ''}
																				},
																				'Комментарии на стене'
																			]
																		}
																	]
																},
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
																					attrs: {'type': 'checkbox', 'name': 'settings-notification-reminders', 'checked': ''}
																				},
																				'Напоминания'
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