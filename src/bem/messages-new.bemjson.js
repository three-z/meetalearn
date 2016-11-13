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
								'Создание беседы'
						},
						{
							block: 'filter-bottom',
							mods: {'type': 'bottom'},
							content: [
								{
									elem: 'layout',
									content: [
										{
											elem: 'layout-back',
											content: [
												{
													block: 'filter-back',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: 'Все беседы'
														}
													]
												}
											]
										},
										{
											elem: 'layout-search',
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
												}
											]
										},
										{
											elem: 'layout-right',
											content: [
												{
													block: 'filter-options',
													content: [
														{
															elem: 'field',
															content: [
																{
																	elem: 'checkbox-label',
																	tag: 'label',
																	content: [
																		{
																			elem: 'checkbox',
																			tag: 'input',
																			attrs: {'type': 'checkbox', 'name': 'filter-online', 'value': 'yes', 'checked': ''}
																		},
																		'Online'
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
							block: 'messages',
							content: [
								{
									block: 'dialog',
									content: [
										{
											block: 'dialog-list',
											mods: {'type': 'margin'},
											tag: 'ul',
											content: [
												{
													block: 'dialog-list-item',
													tag: 'li',
													mods: {'type': 'no-padding'},
													content: [
														{
															elem: 'checkbox-label',
															tag: 'label',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: '1',
																			size: 'small',
																			status: 'online'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Алексей Пономарев'
																		},
																		{
																			elem: 'lang',
																			content: [
																				{
																					elem: 'flag',
																					content: [
																						{
																							block: 'template-flag',
																							flag: '1',
																							size: 'small'
																						}
																					]
																				},
																				{
																					elem: 'lang-info',
																					content:
																						'Аргентина, Буэнос-Айрес, испанский язык.'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'checkbox',
																	tag: 'input',
																	attrs: {'type': 'checkbox', 'name': 'messages-new-item'}
																}
															]
														}
													]
												},
												{
													block: 'dialog-list-item',
													tag: 'li',
													mods: {'type': 'no-padding'},
													content: [
														{
															elem: 'checkbox-label',
															tag: 'label',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: '1',
																			size: 'small',
																			status: 'online'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Алексей Пономарев'
																		},
																		{
																			elem: 'lang',
																			content: [
																				{
																					elem: 'flag',
																					content: [
																						{
																							block: 'template-flag',
																							flag: '1',
																							size: 'small'
																						}
																					]
																				},
																				{
																					elem: 'lang-info',
																					content:
																						'Аргентина, Буэнос-Айрес, испанский язык.'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'checkbox',
																	tag: 'input',
																	attrs: {'type': 'checkbox', 'name': 'messages-new-item'}
																}
															]
														}
													]
												},
												{
													block: 'dialog-list-item',
													tag: 'li',
													mods: {'type': 'no-padding'},
													content: [
														{
															elem: 'checkbox-label',
															tag: 'label',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: '1',
																			size: 'small',
																			status: 'online'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Алексей Пономарев'
																		},
																		{
																			elem: 'lang',
																			content: [
																				{
																					elem: 'flag',
																					content: [
																						{
																							block: 'template-flag',
																							flag: '1',
																							size: 'small'
																						}
																					]
																				},
																				{
																					elem: 'lang-info',
																					content:
																						'Аргентина, Буэнос-Айрес, испанский язык.'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'checkbox',
																	tag: 'input',
																	attrs: {'type': 'checkbox', 'name': 'messages-new-item'}
																}
															]
														}
													]
												},
												{
													block: 'dialog-list-item',
													tag: 'li',
													mods: {'type': 'no-padding'},
													content: [
														{
															elem: 'checkbox-label',
															tag: 'label',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: '1',
																			size: 'small',
																			status: 'online'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Алексей Пономарев'
																		},
																		{
																			elem: 'lang',
																			content: [
																				{
																					elem: 'flag',
																					content: [
																						{
																							block: 'template-flag',
																							flag: '1',
																							size: 'small'
																						}
																					]
																				},
																				{
																					elem: 'lang-info',
																					content:
																						'Аргентина, Буэнос-Айрес, испанский язык.'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'checkbox',
																	tag: 'input',
																	attrs: {'type': 'checkbox', 'name': 'messages-new-item'}
																}
															]
														}
													]
												},
												{
													block: 'dialog-list-item',
													tag: 'li',
													mods: {'type': 'no-padding'},
													content: [
														{
															elem: 'checkbox-label',
															tag: 'label',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: '1',
																			size: 'small',
																			status: 'online'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Алексей Пономарев'
																		},
																		{
																			elem: 'lang',
																			content: [
																				{
																					elem: 'flag',
																					content: [
																						{
																							block: 'template-flag',
																							flag: '1',
																							size: 'small'
																						}
																					]
																				},
																				{
																					elem: 'lang-info',
																					content:
																						'Аргентина, Буэнос-Айрес, испанский язык.'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'checkbox',
																	tag: 'input',
																	attrs: {'type': 'checkbox', 'name': 'messages-new-item'}
																}
															]
														}
													]
												},
												{
													block: 'dialog-list-item',
													tag: 'li',
													mods: {'type': 'no-padding'},
													content: [
														{
															elem: 'checkbox-label',
															tag: 'label',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: '1',
																			size: 'small',
																			status: 'online'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Алексей Пономарев'
																		},
																		{
																			elem: 'lang',
																			content: [
																				{
																					elem: 'flag',
																					content: [
																						{
																							block: 'template-flag',
																							flag: '1',
																							size: 'small'
																						}
																					]
																				},
																				{
																					elem: 'lang-info',
																					content:
																						'Аргентина, Буэнос-Айрес, испанский язык.'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'checkbox',
																	tag: 'input',
																	attrs: {'type': 'checkbox', 'name': 'messages-new-item'}
																}
															]
														}
													]
												},
												{
													block: 'dialog-list-item',
													tag: 'li',
													mods: {'type': 'no-padding'},
													content: [
														{
															elem: 'checkbox-label',
															tag: 'label',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: '1',
																			size: 'small',
																			status: 'online'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Алексей Пономарев'
																		},
																		{
																			elem: 'lang',
																			content: [
																				{
																					elem: 'flag',
																					content: [
																						{
																							block: 'template-flag',
																							flag: '1',
																							size: 'small'
																						}
																					]
																				},
																				{
																					elem: 'lang-info',
																					content:
																						'Аргентина, Буэнос-Айрес, испанский язык.'
																				}
																			]
																		}
																	]
																},
																{
																	elem: 'checkbox',
																	tag: 'input',
																	attrs: {'type': 'checkbox', 'name': 'messages-new-item'}
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'count',
											content:
												'Выбрано 2 собеседника'
										},
										{
											block: 'dialog-new',
											content: [
												{
													elem: 'input',
													tag: 'input',
													attrs: {'type': 'text', 'placeholder': 'Название беседы'}
												},
												{
													elem: 'button',
													tag: 'button',
													attrs: {'type': 'submit'},
													content:
														'Создать беседу'
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