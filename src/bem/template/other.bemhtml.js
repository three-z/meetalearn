block('template-other').replace()(function() {
	return [
		{
			block: 'go-up',
			content: [
				{
					tag: 'a',
					attrs: {'href': '#'},
					content:
						'Up'
				}
			]
		},
		{
			block: 'fast-messages',
			content: [
				{
					block: 'fast-messages-popup',
					attrs: {'id': 'fast-messages-inbox'},
					content: [
						{
							elem: 'title',
							content: [
								'Сообщения',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'fast-messages-inbox',
									content: [
										{
											block: 'fast-messages-inbox-list',
											tag: 'ul',
											content: [
												{
													avatar: '1',
													name:
														'Константин Барсуков',
													date:
														'16 июн<br>' +
														'в 16:49',
													text:
														'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
												},
												{
													avatar: '2',
													name:
														'Марина Соловьева',
													date:
														'16 июн<br>' +
														'в 16:49',
													text:
														'It was obvious that sleeping in a tent during.'
												},
												{
													avatar: '1',
													name:
														'Константин Барсуков',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
												},
												{
													avatar: '2',
													name:
														'Марина Соловьева',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during.'
												},
												{
													avatar: '1',
													name:
														'Константин Барсуков',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
												},
												{
													avatar: '2',
													name:
														'Марина Соловьева',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during.'
												},
												{
													avatar: '1',
													name:
														'Константин Барсуков',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
												},
												{
													avatar: '2',
													name:
														'Марина Соловьева',
													date:
													'16 июн<br>' +
													'в 16:49',
													text:
														'It was obvious that sleeping in a tent during.'
												}
											].map(function(item) {
												return {
													block: 'fast-messages-inbox-list-item',
													tag: 'li',
													content: [
														{
															elem: 'other',
															content: [
																{
																	elem: 'avatar',
																	content: [
																		{
																			block: 'template-avatar',
																			avatar: item.avatar,
																			size: 'tiny'
																		}
																	]
																},
																{
																	elem: 'date',
																	content: item.date
																}
															]
														},
														{
															elem: 'info',
															content: [
																{
																	elem: 'name',
																	content: item.name
																},
																{
																	elem: 'text',
																	content: [
																		{
																			tag: 'a',
																			attrs: {'href': '#'},
																			content: item.text
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
				},
				{
					block: 'fast-messages-popup',
					attrs: {'id': 'fast-messages-dialog'},
					content: [
						{
							elem: 'title',
							content: [
								'Константин Барсуков',
								{
									elem: 'close',
									tag: 'a',
									content:
										'Закрыть'
								}
							]
						},
						{
							elem: 'content',
							content: [
								{
									block: 'fast-messages-dialog',
									content: [
										{
											block: 'fast-messages-dialog-list',
											tag: 'ul',
											content: [
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'user',
															content: [
																{
																	elem: 'other',
																	content: [
																		{
																			elem: 'avatar',
																			content: [
																				{
																					block: 'template-avatar',
																					avatar: '1',
																					size: 'tiny'
																				}
																			]
																		},
																		{
																			elem: 'date',
																			content:
																				'16 июн<br>' +
																				'в 16:49'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Константин Барсуков'
																		},
																		{
																			elem: 'text',
																			content:
																				'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'self',
															content: [
																{
																	elem: 'self-text',
																	content:
																		'Реализовать вложенность фотографий в папки.'
																},
																{
																	elem: 'self-date',
																	content:
																		'16 июн в 16:49'
																}
															]
														}
													]
												},
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'user',
															content: [
																{
																	elem: 'other',
																	content: [
																		{
																			elem: 'avatar',
																			content: [
																				{
																					block: 'template-avatar',
																					avatar: '1',
																					size: 'tiny'
																				}
																			]
																		},
																		{
																			elem: 'date',
																			content:
																			'16 июн<br>' +
																			'в 16:49'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Константин Барсуков'
																		},
																		{
																			elem: 'text',
																			content:
																				'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'self',
															content: [
																{
																	elem: 'self-text',
																	content:
																		'Реализовать вложенность фотографий в папки.'
																},
																{
																	elem: 'self-date',
																	content:
																		'16 июн в 16:49'
																}
															]
														}
													]
												},
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'user',
															content: [
																{
																	elem: 'other',
																	content: [
																		{
																			elem: 'avatar',
																			content: [
																				{
																					block: 'template-avatar',
																					avatar: '1',
																					size: 'tiny'
																				}
																			]
																		},
																		{
																			elem: 'date',
																			content:
																			'16 июн<br>' +
																			'в 16:49'
																		}
																	]
																},
																{
																	elem: 'info',
																	content: [
																		{
																			elem: 'name',
																			content:
																				'Константин Барсуков'
																		},
																		{
																			elem: 'text',
																			content:
																				'It was obvious that sleeping in a tent during the winter is totally different compared to nice and warm summer nights.'
																		}
																	]
																}
															]
														}
													]
												},
												{
													block: 'fast-messages-dialog-list-item',
													tag: 'li',
													content: [
														{
															elem: 'self',
															content: [
																{
																	elem: 'self-text',
																	content:
																		'Реализовать вложенность фотографий в папки.'
																},
																{
																	elem: 'self-date',
																	content:
																		'16 июн в 16:49'
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
									block: 'fast-messages-dialog-new',
									content: [
										{
											elem: 'textarea',
											tag: 'textarea',
											attrs: {'placeholder': 'Сообщение...'}
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'fast-messages-count',
					tag: 'a',
					attrs: {'href': '#'},
					content: [
						{
							elem: 'notification',
							tag: 'span',
							content:
								'7'
						}
					]
				}
			]
		}
	];
});