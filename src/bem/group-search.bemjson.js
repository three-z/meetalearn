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
							block: 'filter-bottom',
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
							block: 'search-result',
							content: [
								{
									elem: 'count',
									content: [
										'Найдено 526 человек',

										{
											block: 'search-result-switcher',
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
																		'Мои группы'
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
																		'Я владелец'
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'page-title-controls',
											content: [
												{
													elem: 'list',
													tag: 'ul',
													content: [
														{
															elem: 'list-item',
															tag: 'li',
															mods: {'type': 'add'},
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content:
																		'Создать группу'
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
									block: 'search-result-list',
									tag: 'ul',
									content: [
										{
											avatar: '5',
											name:
												'Центр изучения иностранных языков',
											count:
												'1 148 763 подписчика',
											description:
												'Наше сообщество посвящено тем, кто начал учить иностранные языки и с тех пор не может остановиться. Мы учим языки, потому что от этого наш организм выделяет дофамин (это научно доказано), и мы хотим ещё и ещё. Мы учим языки, сидя у себя в комнатах, и не всегда для того...'
										},
										{
											avatar: '6',
											name:
												'Центр изучения иностранных языков',
											count:
												'1 148 763 подписчика',
											description:
												'Наше сообщество посвящено тем, кто начал учить иностранные языки и с тех пор не может остановиться. Мы учим языки, потому что от этого наш организм выделяет дофамин (это научно доказано), и мы хотим ещё и ещё. Мы учим языки, сидя у себя в комнатах, и не всегда для того...'
										},
										{
											avatar: '5',
											name:
												'Центр изучения иностранных языков',
											count:
												'1 148 763 подписчика',
											description:
												'Наше сообщество посвящено тем, кто начал учить иностранные языки и с тех пор не может остановиться. Мы учим языки, потому что от этого наш организм выделяет дофамин (это научно доказано), и мы хотим ещё и ещё. Мы учим языки, сидя у себя в комнатах, и не всегда для того...'
										},
										{
											avatar: '6',
											name:
												'Центр изучения иностранных языков',
											count:
												'1 148 763 подписчика',
											description:
												'Наше сообщество посвящено тем, кто начал учить иностранные языки и с тех пор не может остановиться. Мы учим языки, потому что от этого наш организм выделяет дофамин (это научно доказано), и мы хотим ещё и ещё. Мы учим языки, сидя у себя в комнатах, и не всегда для того...'
										},
										{
											avatar: '5',
											name:
												'Центр изучения иностранных языков',
											count:
												'1 148 763 подписчика',
											description:
												'Наше сообщество посвящено тем, кто начал учить иностранные языки и с тех пор не может остановиться. Мы учим языки, потому что от этого наш организм выделяет дофамин (это научно доказано), и мы хотим ещё и ещё. Мы учим языки, сидя у себя в комнатах, и не всегда для того...'
										},
										{
											avatar: '6',
											name:
												'Центр изучения иностранных языков',
											count:
												'1 148 763 подписчика',
											description:
												'Наше сообщество посвящено тем, кто начал учить иностранные языки и с тех пор не может остановиться. Мы учим языки, потому что от этого наш организм выделяет дофамин (это научно доказано), и мы хотим ещё и ещё. Мы учим языки, сидя у себя в комнатах, и не всегда для того...'
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
															elem: 'count',
															content: item.count
														},
														{
															elem: 'description',
															content: item.description
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
																						'Присоединиться'
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
																						'Участники группы'
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