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
											mods: {'active': true},
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
									block: 'settings-personal',
									mods: {'type': 'grid'},
									content: [
										{
											elem: 'block',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content:
														'Изменить пароль'
												},
												{
													elem: 'list',
													tag: 'dl',
													content: [
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Старый пароль:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															mods: {'type': 'short'},
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	mods: {'type': 'short'},
																	attrs: {'type': 'password'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Новый пароль:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															mods: {'type': 'short'},
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	mods: {'type': 'short'},
																	attrs: {'type': 'password'}
																}
															]
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Повторите пароль:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															mods: {'type': 'short'},
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	mods: {'type': 'short'},
																	attrs: {'type': 'password'}
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
																'Изменить пароль'
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
														'Номер Вашего телефона'
												},
												{
													elem: 'list',
													tag: 'dl',
													content: [
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Текущий номер:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															mods: {'type': 'short'},
															content:
																'+7 *** *** ** 33'
														},
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Новый номер:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															mods: {'type': 'short'},
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
												},
												{
													elem: 'controls',
													content: [
														{
															elem: 'button',
															tag: 'button',
															attrs: {'type': 'submit'},
															content:
																'Привязать номер телефона'
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
														'Адрес Вашей электронной почты'
												},
												{
													elem: 'list',
													tag: 'dl',
													content: [
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Текущий адрес:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															mods: {'type': 'short'},
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
															mods: {'type': 'short'},
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
												},
												{
													elem: 'controls',
													content: [
														{
															elem: 'button',
															tag: 'button',
															attrs: {'type': 'submit'},
															content:
																'Сохранить адрес'
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
														'Вы можете удалить свою страницу'
												},
												{
													elem: 'note',
													content:
														'Пожалуйста, укажите причину удаления Вашей страницы'
												},
												{
													elem: 'list',
													tag: 'dl',
													content: [
														{
															elem: 'list-label',
															tag: 'dt',
															content:
																'Укажите причину:'
														},
														{
															elem: 'list-item',
															tag: 'dd',
															mods: {'type': 'short'},
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
												},
												{
													elem: 'controls',
													content: [
														{
															elem: 'button',
															tag: 'button',
															attrs: {'type': 'submit'},
															content:
																'Удалить свою страницу'
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
});