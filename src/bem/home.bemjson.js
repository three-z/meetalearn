({
	block: 'template-page',
	content: [
		{
			block: 'template-header-login'
		},
		{
			block: 'content',
			content: [
				{
					block: 'home-welcome',
					content: [
						{
							elem: 'photos',
							content: []
						},
						{
							elem: 'layout',
							mix: {block: 'container'},
							content: [
								{
									elem: 'layout-left',
									content: [
										{
											elem: 'text',
											content: [
												{
													tag: 'h1',
													content:
														'<span>About</span> the project'
												},
												{
													tag: 'p',
													content:
														'Meetalearn is online social networking service to learn languages<br>' +
														'with different people all over the world.'
												},
												{
													tag: 'h3',
													content:
														'Meet interesting people everywhere!<br>' +
														'Learn different languages!<br>' +
														'Find new friends!<br>' +
														'Discover the world!'
												}
											]
										}
									]
								},
								{
									elem: 'layout-right',
									content: [
										{
											block: 'home-register',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content:
														'Регистрация'
												},
												{
													block: 'home-register-form',
													content: [
														{
															elem: 'form',
															tag: 'form',
															content: [
																{
																	elem: 'row',
																	content: [
																		{
																			elem: 'columns',
																			mods: {'type': '2'},
																			content: [
																				{
																					elem: 'column',
																					content: [
																						{
																							elem: 'label',
																							tag: 'label',
																							attrs: {'for': 'register-form-first-name'},
																							content:
																								'Имя'
																						},
																						{
																							elem: 'field',
																							content: [
																								{
																									elem: 'input',
																									tag: 'input',
																									attrs: {'type': 'text', 'id': 'register-form-first-name', 'name': 'register-form-first-name'}
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'column',
																					content: [
																						{
																							elem: 'label',
																							tag: 'label',
																							attrs: {'for': 'register-form-last-name'},
																							content:
																								'Фамилия'
																						},
																						{
																							elem: 'field',
																							content: [
																								{
																									elem: 'input',
																									tag: 'input',
																									attrs: {'type': 'text', 'id': 'register-form-last-name', 'name': 'register-form-last-name'}
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
																	elem: 'row',
																	content: [
																		{
																			elem: 'label',
																			tag: 'label',
																			attrs: {'for': 'register-form-day-birth'},
																			content:
																				'Дата рождения'
																		},
																		{
																			elem: 'columns',
																			mods: {'type': '3'},
																			content: [
																				{
																					elem: 'column',
																					content: [
																						{
																							elem: 'field',
																							content: [
																								{
																									elem: 'input',
																									tag: 'input',
																									attrs: {'type': 'text', 'placeholder': 'день', 'id': 'register-form-day-birth', 'name': 'register-form-day-birth'}
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'column',
																					content: [
																						{
																							elem: 'field',
																							content: [
																								{
																									elem: 'input',
																									tag: 'input',
																									attrs: {'type': 'text', 'placeholder': 'месяц', 'id': 'register-form-month-birth', 'name': 'register-form-month-birth'}
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'column',
																					content: [
																						{
																							elem: 'field',
																							content: [
																								{
																									elem: 'input',
																									tag: 'input',
																									attrs: {'type': 'text', 'placeholder': 'год', 'id': 'register-form-year-birth', 'name': 'register-form-year-birth'}
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
																	elem: 'row',
																	content: [
																		{
																			elem: 'label',
																			tag: 'label',
																			attrs: {'for': 'register-form-gender'},
																			content:
																				'Пол'
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
																							attrs: {'type': 'radio', 'name': 'register-form-gender', 'id': 'register-form-gender', 'value': 'male', 'checked': ''}
																						},
																						'Мужской'
																					]
																				},
																				{
																					elem: 'radio-label',
																					tag: 'label',
																					content: [
																						{
																							elem: 'radio',
																							tag: 'input',
																							attrs: {'type': 'radio', 'name': 'register-form-gender', 'value': 'female'}
																						},
																						'Женский'
																					]
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'row',
																	content: [
																		{
																			elem: 'columns',
																			mods: {'type': '2'},
																			content: [
																				{
																					elem: 'column',
																					content: [
																						{
																							elem: 'label',
																							tag: 'label',
																							attrs: {'for': 'register-form-login'},
																							content:
																								'Логин'
																						},
																						{
																							elem: 'field',
																							content: [
																								{
																									elem: 'input',
																									tag: 'input',
																									attrs: {'type': 'text', 'id': 'register-form-login', 'name': 'register-form-login'}
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'column',
																					content: [
																						{
																							elem: 'label',
																							tag: 'label',
																							attrs: {'for': 'register-form-email'},
																							content:
																								'Эл. почта'
																						},
																						{
																							elem: 'field',
																							content: [
																								{
																									elem: 'input',
																									tag: 'input',
																									attrs: {'type': 'text', 'id': 'register-form-email', 'name': 'register-form-email'}
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
																	elem: 'row',
																	content: [
																		{
																			elem: 'columns',
																			mods: {'type': '2'},
																			content: [
																				{
																					elem: 'column',
																					content: [
																						{
																							elem: 'label',
																							tag: 'label',
																							attrs: {'for': 'register-form-password'},
																							content:
																								'Пароль'
																						},
																						{
																							elem: 'field',
																							content: [
																								{
																									elem: 'input',
																									tag: 'input',
																									attrs: {'type': 'password', 'id': 'register-form-password', 'name': 'register-form-password'}
																								}
																							]
																						}
																					]
																				},
																				{
																					elem: 'column',
																					content: [
																						{
																							elem: 'label',
																							tag: 'label',
																							attrs: {'for': 'register-form-password-confirm'},
																							content:
																								'Подтвердите пароль'
																						},
																						{
																							elem: 'field',
																							content: [
																								{
																									elem: 'input',
																									tag: 'input',
																									attrs: {'type': 'text', 'id': 'register-form-password-confirm', 'name': 'register-form-password-confirm'}
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
																	elem: 'controls',
																	content: [
																		{
																			elem: 'button',
																			tag: 'button',
																			attrs: {'type': 'submit'},
																			content:
																				'Зарегистрироваться'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block: 'home-register-social',
													content: [
														{
															elem: 'title',
															content:
																'или войти с помощью соцсетей:'
														},
														{
															elem: 'list',
															content: [
																{
																	block: 'template-social-links'
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
					block: 'home',
					content: [
						{
							elem: 'layout',
							mix: {block: 'container'},
							content: [
								{
									elem: 'layout-left',
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
													block: 'home-online-list',
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
														}
													].map(function(item) {
														return {
															block: 'home-online-list-item',
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
								},
								{
									elem: 'layout-right',
									content: [
										{
											block: 'home-exchange',
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
													block: 'home-exchange-list',
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
															block: 'home-exchange-list-item',
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
						}
					]
				}
			]
		}
	]
});