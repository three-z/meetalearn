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
							block: 'home-user-exchange',
							content: [
								{
									block: 'home-online',
									content: [
										{
											elem: 'title',
											tag: 'h3',
											content:
												'Языковой обмен'
										},
										{
											elem: 'show-all',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Показать все'
												}
											]
										},
										{
											elem: 'list',
											content: [
												{
													block: 'home-user-exchange-list',
													tag: 'ul',
													content: [
														{
															flag: '1',
															name: 'Австралия'
														},
														{
															flag: '2',
															name: 'Австрия'
														},
														{
															flag: '3',
															name: 'Азербайджан'
														},
														{
															flag: '1',
															name: 'Австралия'
														},
														{
															flag: '2',
															name: 'Австрия'
														},
														{
															flag: '3',
															name: 'Азербайджан'
														},
														{
															flag: '1',
															name: 'Австралия'
														},
														{
															flag: '2',
															name: 'Австрия'
														},
														{
															flag: '3',
															name: 'Азербайджан'
														},
														{
															flag: '1',
															name: 'Австралия'
														},
														{
															flag: '2',
															name: 'Австрия'
														},
														{
															flag: '3',
															name: 'Азербайджан'
														}
													].map(function(item) {
														return {
															block: 'home-user-exchange-list-item',
															tag: 'li',
															content: [
																{
																	elem: 'flag',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: [
																				{
																					tag: 'img',
																					attrs: {'src': 'img/flags/big/' + item.flag + '.png'}
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'name',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: item.name
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
						},
						{
							block: 'home-user-online',
							content: [
								{
									block: 'home-online',
									content: [
										{
											elem: 'title',
											tag: 'h3',
											content:
												'Сейчас в сети'
										},
										{
											elem: 'show-all',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Показать все'
												}
											]
										},
										{
											elem: 'list',
											content: [
												{
													block: 'home-user-online-list',
													tag: 'ul',
													content: [
														{
															flag: '1',
															avatar: '1',
															avatar_status: 'online',
															name:
															'Григорий<br>' +
															'Суворов',
															status: 'Online'
														},
														{
															flag: '2',
															avatar: '2',
															avatar_status: 'online',
															name:
															'Анна<br>' +
															'Богданова',
															status: 'Online'
														},
														{
															flag: '3',
															avatar: '3',
															avatar_status: 'offline',
															name:
															'Антон<br>' +
															'Виноградов',
															status: 'заходил 40 минут назад'
														},
														{
															flag: '1',
															avatar: '1',
															avatar_status: 'online',
															name:
															'Григорий<br>' +
															'Суворов',
															status: 'Online'
														},
														{
															flag: '2',
															avatar: '2',
															avatar_status: 'online',
															name:
															'Анна<br>' +
															'Богданова',
															status: 'Online'
														},
														{
															flag: '3',
															avatar: '3',
															avatar_status: 'offline',
															name:
															'Антон<br>' +
															'Виноградов',
															status: 'заходил 40 минут назад'
														},
														{
															flag: '1',
															avatar: '1',
															avatar_status: 'online',
															name:
															'Григорий<br>' +
															'Суворов',
															status: 'Online'
														},
														{
															flag: '2',
															avatar: '2',
															avatar_status: 'online',
															name:
															'Анна<br>' +
															'Богданова',
															status: 'Online'
														},
														{
															flag: '3',
															avatar: '3',
															avatar_status: 'offline',
															name:
															'Антон<br>' +
															'Виноградов',
															status: 'заходил 40 минут назад'
														},
														{
															flag: '1',
															avatar: '1',
															avatar_status: 'online',
															name:
															'Григорий<br>' +
															'Суворов',
															status: 'Online'
														},
														{
															flag: '2',
															avatar: '2',
															avatar_status: 'online',
															name:
															'Анна<br>' +
															'Богданова',
															status: 'Online'
														}
													].map(function(item) {
														return {
															block: 'home-user-online-list-item',
															tag: 'li',
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
																	elem: 'status',
																	content:
																	item.status
																},
																{
																	elem: 'profile',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: 'профиль'
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
						},
						{
							block: 'home-user-online',
							content: [
								{
									block: 'home-online',
									content: [
										{
											elem: 'title',
											tag: 'h3',
											content:
												'Последние зарегистрировавшиеся'
										},
										{
											elem: 'show-all',
											content: [
												{
													tag: 'a',
													attrs: {'href': '#'},
													content:
														'Показать все'
												}
											]
										},
										{
											elem: 'list',
											content: [
												{
													block: 'home-user-online-list',
													tag: 'ul',
													content: [
														{
															flag: '2',
															avatar: '2',
															avatar_status: 'online',
															name:
															'Анна<br>' +
															'Богданова',
															status: 'Online'
														},
														{
															flag: '3',
															avatar: '3',
															avatar_status: 'offline',
															name:
															'Антон<br>' +
															'Виноградов',
															status: 'заходил 40 минут назад'
														},
														{
															flag: '1',
															avatar: '1',
															avatar_status: 'online',
															name:
															'Григорий<br>' +
															'Суворов',
															status: 'Online'
														},
														{
															flag: '2',
															avatar: '2',
															avatar_status: 'online',
															name:
															'Анна<br>' +
															'Богданова',
															status: 'Online'
														},
														{
															flag: '3',
															avatar: '3',
															avatar_status: 'offline',
															name:
															'Антон<br>' +
															'Виноградов',
															status: 'заходил 40 минут назад'
														},
														{
															flag: '1',
															avatar: '1',
															avatar_status: 'online',
															name:
															'Григорий<br>' +
															'Суворов',
															status: 'Online'
														},
														{
															flag: '2',
															avatar: '2',
															avatar_status: 'online',
															name:
															'Анна<br>' +
															'Богданова',
															status: 'Online'
														},
														{
															flag: '3',
															avatar: '3',
															avatar_status: 'offline',
															name:
															'Антон<br>' +
															'Виноградов',
															status: 'заходил 40 минут назад'
														},
														{
															flag: '1',
															avatar: '1',
															avatar_status: 'online',
															name:
															'Григорий<br>' +
															'Суворов',
															status: 'Online'
														},
														{
															flag: '2',
															avatar: '2',
															avatar_status: 'online',
															name:
															'Анна<br>' +
															'Богданова',
															status: 'Online'
														}
													].map(function(item) {
														return {
															block: 'home-user-online-list-item',
															tag: 'li',
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
																	elem: 'status',
																	content:
																	item.status
																},
																{
																	elem: 'profile',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: 'профиль'
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
						},
						{
							block: 'home-news',
							content: [
								{
									block: 'template-wall'
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