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
															attrs: {'href': '#', 'data-jq-dropdown': '#jq-dropdown-1'},
															content: 'Настройки'
														}
													]
												},
												{
													block: 'jq-dropdown',
													attrs: {'id': 'jq-dropdown-1'},
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
									elem: 'layout-left',
									content: [
										{
											block: 'header-navigation',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															title: 'Главная',
															active: true
														},
														{
															title: 'Языковой обмен'
														},
														{
															title: 'Профиль'
														},
														{
															title: 'Мои новости'
														},
														{
															title: 'Группы'
														},
														{
															title: 'Друзья'
														},
														{
															title: 'Сообщения'
														},
														{
															title: 'Фотографии'
														},
														{
															title: 'Видео'
														}
													].map(function(item) {
														return {
															elem: 'list-item',
															tag: 'li',
															mods: {'active': item.active ? true : undefined},
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																	item.title
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
				}
			]
		}
	]
});