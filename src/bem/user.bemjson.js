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
					block: 'profile',
					content: [
						{
							elem: 'layout',
							mix: {block: 'container'},
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
																	attrs: {'src': 'img/avatars/full/3.jpg'}
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
																		'Отправить сообщение'
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
																		'Добавить в друзья'
																}
															]
														}
													]
												}
											]
										},
										{
											block: 'profile-photos',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Мои фотографии'
														},
														{
															elem: 'count',
															tag: 'span',
															content:
																'(105)'
														}
													]
												},
												{
													elem: 'show-all',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Все'
														}
													]
												},
												{
													block: 'profile-photos-list',
													tag: 'ul',
													content: [
														{
															photo: '1'
														},
														{
															photo: '2'
														},
														{
															photo: '3'
														}
													].map(function(item) {
														return {
															block: 'profile-photos-list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content: [
																		{
																			tag: 'img',
																			attrs: {'src': 'img/photos/mini/' + item.photo + '.jpg'}
																		}
																	]
																}
															]
														};
													})
												}

											]
										},
										{
											block: 'profile-friends',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Друзья'
														},
														{
															elem: 'count',
															tag: 'span',
															content:
																'(775)'
														}
													]
												},
												{
													block: 'profile-friends-tabs',
													content: [
														{
															block: 'profile-friends-tabs-switchers',
															content: [
																{
																	elem: 'list',
																	tag: 'ul',
																	content: [
																		{
																			elem: 'list-item',
																			tag: 'li',
																			mods: {'type': 'friends', 'active': true},
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content:
																						'Друзья'
																				}
																			]
																		},
																		{
																			elem: 'list-item',
																			tag: 'li',
																			mods: {'type': 'potential-friends'},
																			content: [
																				{
																					tag: 'a',
																					attrs: {'href': '#'},
																					content:
																						'Возможные друзья'
																				}
																			]
																		}
																	]
																}
															]
														},
														{
															block: 'profile-friends-tabs-content',
															mods: {'active': true},
															content: [
																{
																	block: 'profile-friends-list',
																	tag: 'ul',
																	content: [
																		{
																			avatar: '1',
																			avatar_status: 'online',
																			name:
																				'Григорий<br>' +
																				'Суворов'
																		},
																		{
																			avatar: '2',
																			avatar_status: 'online',
																			name:
																				'Анна<br>' +
																				'Богданова'
																		},
																		{
																			avatar: '3',
																			avatar_status: 'offline',
																			name:
																				'Антон<br>' +
																				'Виноградов'
																		},
																		{
																			avatar: '2',
																			avatar_status: 'online',
																			name:
																				'Анна<br>' +
																				'Богданова'
																		},
																		{
																			avatar: '3',
																			avatar_status: 'offline',
																			name:
																				'Антон<br>' +
																				'Виноградов'
																		},
																		{
																			avatar: '1',
																			avatar_status: 'online',
																			name:
																				'Григорий<br>' +
																				'Суворов'
																		}
																	].map(function(item) {
																		return {
																			block: 'profile-friends-list-item',
																			tag: 'li',
																			content: [
																				{
																					elem: 'avatar',
																					content: [
																						{
																							block: 'template-avatar',
																							avatar: item.avatar,
																							size: 'medium',
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
																				}
																			]
																		};
																	})
																},
																{
																	block: 'profile-friends-more',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Показать больше'
																		}
																	]
																}
															]
														},
														{
															block: 'profile-friends-tabs-content',
															content: [
																{
																	block: 'profile-friends-list',
																	tag: 'ul',
																	content: [
																		{
																			avatar: '2',
																			avatar_status: 'online',
																			name:
																				'Анна<br>' +
																				'Богданова'
																		},
																		{
																			avatar: '3',
																			avatar_status: 'offline',
																			name:
																				'Антон<br>' +
																				'Виноградов'
																		},
																		{
																			avatar: '1',
																			avatar_status: 'online',
																			name:
																				'Григорий<br>' +
																				'Суворов'
																		},
																		{
																			avatar: '3',
																			avatar_status: 'offline',
																			name:
																				'Антон<br>' +
																				'Виноградов'
																		},
																		{
																			avatar: '2',
																			avatar_status: 'online',
																			name:
																				'Анна<br>' +
																				'Богданова'
																		},
																		{
																			avatar: '1',
																			avatar_status: 'online',
																			name:
																				'Григорий<br>' +
																				'Суворов'
																		}
																	].map(function(item) {
																		return {
																			block: 'profile-friends-list-item',
																			tag: 'li',
																			content: [
																				{
																					elem: 'avatar',
																					content: [
																						{
																							block: 'template-avatar',
																							avatar: item.avatar,
																							size: 'medium',
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
																				}
																			]
																		};
																	})
																},
																{
																	block: 'profile-friends-more',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Показать больше'
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
											block: 'profile-photo-albums',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Фотоальбомы'
														},
														{
															elem: 'count',
															tag: 'span',
															content:
																'(7)'
														}
													]
												},
												{
													elem: 'show-all',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Все'
														}
													]
												},
												{
													block: 'profile-photo-albums-list',
													tag: 'ul',
													content: [
														{
															photo: '1'
														},
														{
															photo: '2'
														},
														{
															photo: '3'
														},
														{
															photo: '4'
														}
													].map(function(item) {
														return {
															block: 'profile-photo-albums-list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content: [
																		{
																			tag: 'img',
																			attrs: {'src': 'img/photos/small/' + item.photo + '.jpg'}
																		}
																	]
																}
															]
														};
													})
												}

											]
										},
										{
											block: 'profile-video-albums',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Видеоальбомы'
														},
														{
															elem: 'count',
															tag: 'span',
															content:
																'(23)'
														}
													]
												},
												{
													elem: 'show-all',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Все'
														}
													]
												},
												{
													block: 'profile-video-albums-list',
													tag: 'ul',
													content: [
														{
															photo: '5'
														},
														{
															photo: '6'
														},
														{
															photo: '7'
														},
														{
															photo: '8'
														}
													].map(function(item) {
														return {
															block: 'profile-video-albums-list-item',
															tag: 'li',
															content: [
																{
																	tag: 'a',
																	attrs: {'href': '#'},
																	content: [
																		{
																			tag: 'img',
																			attrs: {'src': 'img/photos/small/' + item.photo + '.jpg'}
																		}
																	]
																}
															]
														};
													})
												}

											]
										},
										{
											block: 'profile-groups',
											content: [
												{
													elem: 'title',
													tag: 'h3',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Группы'
														},
														{
															elem: 'count',
															tag: 'span',
															content:
																'(155)'
														}
													]
												},
												{
													elem: 'show-all',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Все'
														}
													]
												},
												{
													block: 'profile-groups-list',
													tag: 'ul',
													content: [
														{
															avatar: '4',
															name:
																'Наука и Техника',
															description:
																'Публичная страница',
															count:
																'1 148 763 подписчика'
														},
														{
															avatar: '5',
															name:
																'Ябпорулил',
															description:
																'Ценители хороших Машин',
															count:
																'1 201 898 подписчиков'
														},
														{
															avatar: '6',
															name:
																'Физика',
															description:
																'Планета физика',
															count:
																'98 955 подписчиков'
														}
													].map(function(item) {
														return {
															block: 'profile-groups-list-item',
															tag: 'li',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: item.avatar,
																			size: 'small',
																			border: 'none'
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
																			elem: 'description',
																			content: item.description
																		},
																		{
																			elem: 'count',
																			content: item.count
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
											block: 'profile-info',
											content: [
												{
													elem: 'name',
													tag: 'h1',
													content:
														'Christian Bale'
												},
												{
													elem: 'status',
													content:
														'Online'
												},
												{
													elem: 'decription',
													content:
														'Audacesfortuna kuvatrr'
												},
												{
													elem: 'block',
													content: [
														{
															tag: 'dl',
															content: [
																{
																	tag: 'dt',
																	content:
																		'День рождения:'
																},
																{
																	tag: 'dd',
																	content:
																		'1 августа'
																},
																{
																	tag: 'dt',
																	content:
																		'Родной город:'
																},
																{
																	tag: 'dd',
																	content:
																		'Rio de Janeiro'
																},
																{
																	tag: 'dt',
																	content:
																		'Родной язык:'
																},
																{
																	tag: 'dd',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Португальский'
																		}
																	]
																},
																{
																	tag: 'dt',
																	content:
																		'Владею языками:'
																},
																{
																	tag: 'dd',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Английский'
																		},
																		'&nbsp;',
																		{
																			block: 'template-rating',
																			rating: '10'
																		},
																		' ; ',
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Итальянский'
																		},
																		'&nbsp;',
																		{
																			block: 'template-rating',
																			rating: '8'
																		},
																		' ; ',
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Испанский'
																		},
																		'&nbsp;',
																		{
																			block: 'template-rating',
																			rating: '5'
																		},
																		' ; ',
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Китайский'
																		},
																		'&nbsp;',
																		{
																			block: 'template-rating',
																			rating: '9'
																		},
																		'.'
																	]
																},
																{
																	tag: 'dt',
																	content:
																		'Хочу изучить:'
																},
																{
																	tag: 'dd',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Хинди'
																		},
																		', ',
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Японский'
																		},
																		', ',
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content:
																				'Иврит'
																		},
																		'.'
																	]
																}
															]
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															tag: 'h3',
															content:
																'Личная информация:'
														},
														{
															tag: 'dl',
															content: [
																{
																	tag: 'dt',
																	content:
																		'Цель регистрации:'
																},
																{
																	tag: 'dd',
																	content:
																		'Переписка'
																},
																{
																	tag: 'dt',
																	content:
																		'О себе:'
																},
																{
																	tag: 'dd',
																	content:
																		'Зная несколько славянских языков - довольно хорошо понимаю и другие славянские. Зная эсперанто - более-менее понимаю несложные фразы на романских языках и могу общатьсяс их носителями.'
																},
																{
																	tag: 'dt',
																	content:
																		'С кем я хочу общаться:'
																},
																{
																	tag: 'dd',
																	content: [
																		'Зная несколько славянских языков - довольно хорошо понимаю и другие славянские. Зная эсперанто - более-менее понимаю несложные фразы на романских языках и могу общатьсяс их носителями.'
																	]
																},
																{
																	tag: 'dt',
																	content:
																		'Интересы и хобби:'
																},
																{
																	tag: 'dd',
																	content:
																		'Активный отдых, музыка, IT'
																},
																{
																	tag: 'dt',
																	content:
																		'Музыка:'
																},
																{
																	tag: 'dd',
																	content:
																		'Hans Zimmer'
																},
																{
																	tag: 'dt',
																	content:
																		'Книги:'
																},
																{
																	tag: 'dd',
																	content:
																		'Ужасы, фантастика, научные'
																},
																{
																	tag: 'dt',
																	content:
																		'Фильмы:'
																},
																{
																	tag: 'dd',
																	content:
																		'Отступники, Silent Hill, Престиж, Назад в будущее'
																},
																{
																	tag: 'dt',
																	content:
																		'ТВ шоу:'
																},
																{
																	tag: 'dd',
																	content:
																		'Адская кухня'
																},
																{
																	tag: 'dt',
																	content:
																		'Любимые цитаты:'
																},
																{
																	tag: 'dd',
																	content:
																		'А toutprix (фр.) - Любой ценой.<br>' +
																		'Audacesfortuna kuvatrr - Счастье сопутствует смелым.'
																},
																{
																	tag: 'dt',
																	content:
																		'Я в других соц.сетях:'
																},
																{
																	tag: 'dd',
																	content: [
																		{
																			block: 'template-social-links'
																		}
																	]
																},
																{
																	tag: 'dt',
																	content:
																		'Моё местоположение:'
																},
																{
																	tag: 'dd',
																	content: [
																		{
																			block: 'profile-location',
																			content: [
																				{
																					elem: 'map',
																					content: [
																						'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1715.6363795188784!2d40.558843915925024!3d64.53220919049191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4418343024fd4fab%3A0xe95fe87aae8b8ebf!2z0YPQuy4g0KPRgNC40YbQutC-0LPQviwgMTcsINCQ0YDRhdCw0L3Qs9C10LvRjNGB0LosINCQ0YDRhdCw0L3Qs9C10LvRjNGB0LrQsNGPINC-0LHQuy4sIDE2MzAwMg!5e0!3m2!1sru!2sru!4v1474192669126" width="596" height="348" frameborder="0" style="border:0" allowfullscreen></iframe>'
																					]
																				},
																				{
																					elem: 'actions',
																					content: [
																						{
																							block: 'profile-location-search',
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
																													attrs: {'type': 'text', 'placeholder': 'Поиск по названию города или улицы'}
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
																							block: 'profile-location-controls',
																							content: [
																								{
																									elem: 'list',
																									tag: 'ul',
																									content: [
																										{
																											elem: 'list-item',
																											tag: 'li',
																											mods: {'type': 'save'},
																											content: [
																												{
																													tag: 'a',
																													attrs: {'href': '#'},
																													content:
																														'Сохранить'
																												}
																											]
																										},
																										{
																											elem: 'list-item',
																											tag: 'li',
																											mods: {'type': 'delete'},
																											mix: {block: 'tooltip'},
																											attrs: {'title': 'Удалить'},
																											content: [
																												{
																													tag: 'a',
																													attrs: {'href': '#'},
																													content:
																														'Удалить'
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
														}
													]
												},
												{
													elem: 'hide',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content:
																'Скрыть подробную информацию'
														}
													]
												}
											]
										},
										{
											block: 'profile-wall-new-item',
											content: [
												{
													elem: 'form',
													tag: 'form',
													content: [
														{
															elem: 'field',
															content: [
																{
																	elem: 'textarea',
																	tag: 'textarea',
																	attrs: {'placeholder': 'Новая запись'}
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
																		'Отправить'
																},
																{
																	block: 'profile-wall-new-item-attach',
																	content: [
																		{
																			elem: 'list',
																			tag: 'ul',
																			content: [
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'video'},
																					mix: {block: 'tooltip'},
																					attrs: {'title': 'Прикрепить видео'},
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content:
																								'Прикрепить видео'
																						}
																					]
																				},
																				{
																					elem: 'list-item',
																					tag: 'li',
																					mods: {'type': 'photo'},
																					mix: {block: 'tooltip'},
																					attrs: {'title': 'Прикрепить фото'},
																					content: [
																						{
																							tag: 'a',
																							attrs: {'href': '#'},
																							content:
																								'Прикрепить фото'
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
											block: 'profile-wall',
											content: [
												{
													elem: 'count',
													content:
														'2 записи'
												},
												{
													elem: 'list',
													content: [
														{
															block: 'template-wall'
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