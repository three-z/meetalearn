block('template-header').replace()(function() {
	return [
		{
			block : 'header',
			content : [
				{
					block: 'header-top',
					content: [
						{
							elem: 'layout',
							mix: {block: 'container'},
							content: [
								{
									elem : 'layout-left',
									content : [
										{
											block: 'template-header-logo'
										}
									]
								},
								{
									elem: 'layout-right',
									content: [
										{
											block: 'header-search',
											content: [
												{
													elem: 'form',
													tag: 'form',
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
										},
										{
											block: 'header-profile',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content: [
														{
															elem: 'avatar',
															tag: 'span',
															content: [
																{
																	tag: 'img',
																	attrs: {'src': 'img/avatars/mini/1.jpg'}
																}
															]
														},
														{
															elem: 'name',
															tag: 'span',
															content:
																'Григорий<br>' +
																'Суворов'
														}
													]
												}
											]
										},
										{
											block: 'header-settings',
											content: [
												{
													elem: 'button',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#', 'data-jq-dropdown': '#jq-dropdown-settings'},
															content: 'Настройки'
														}
													]
												},
												{
													block: 'jq-dropdown',
													attrs: {'id': 'jq-dropdown-settings'},
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
																			content: 'Настройки'
																		}
																	]
																},
																{
																	tag: 'li',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: 'Помощь'
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
																			content: 'Выход'
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
											block: 'header-exit',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Выйти'
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
					block: 'header-bottom',
					content: [
						{
							elem: 'layout',
							mix: {block: 'container'},
							content: [
								{
									block: 'header-navigation',
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
																'Главная'
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
																'Языковой обмен'
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
																'Профиль'
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
																'Мои новости'
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
																'Группы'
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
															content: [
																'Друзья',
																{
																	elem: 'count',
																	tag: 'span',
																	content:
																		'105'
																}
															]
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
															content: [
																'Сообщения',
																{
																	elem: 'count',
																	tag: 'span',
																	content:
																		'7'
																}
															]
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
																'Фотографии'
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
																'Видео'
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