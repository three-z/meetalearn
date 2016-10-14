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
											mods: {'active': true},
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
															attrs: {'type': 'text', 'placeholder': 'Название', 'value': 'Центр изучения иностранных языков'}
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
		}
	]
});