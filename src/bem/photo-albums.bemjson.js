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
							block: 'photo-albums',
							content: [
								{
									block: 'page-title',
									tag: 'h1',
									content: [
										'Мои альбомы',
										{
											elem: 'count',
											tag: 'span',
											content:
												'(15)'
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
																		'Добавить фотографию'
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
									block: 'photo-albums-list',
									tag: 'ul',
									content: [
										{
											title:
												'My photos',
											count:
												'(7)',
											photo: '1'
										},
										{
											title:
												'My photos',
											count:
												'(457)',
											photo: '1'
										},
										{
											title:
												'My photos',
											count:
												'(21)',
											photo: '1'
										},
										{
											title:
												'My photos',
											count:
												'(7)',
											photo: '1'
										}
									].map(function(item) {
										return {
											block: 'photo-albums-list-item',
											tag: 'li',
											content: [
												{
													elem: 'title',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: [
																item.title,
																{
																	elem: 'count',
																	tag: 'span',
																	content: item.count
																}
															]
														}
													]
												},
												{
													elem: 'image',
													content: [
														{
															tag: 'a',
															attrs: {'href': '#'},
															content: [
																{
																	tag: 'img',
																	attrs: {'src': 'img/photos/medium/' + item.photo + '.jpg'}
																}
															]
														}
													]
												}
											]
										};
									})
								},
								{
									elem: 'show-all',
									content: [
										{
											tag: 'a',
											attrs: {'href': '#'},
											content:
												'Показать все 15 альбомов'
										}
									]
								}
							]
						},
						{
							block: 'last-photos',
							content: [
								{
									block: 'page-title',
									tag: 'h3',
									content: [
										'Последние добавленные фотографии',
										{
											elem: 'count',
											tag: 'span',
											content:
												'(216)'
										}
									]
								},
								{
									block: 'last-photos-list',
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
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
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
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
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
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
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
											photo: '1'
										},
										{
											photo: '2'
										},
										{
											photo: '3'
										},
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
											photo: '1'
										}
									].map(function(item) {
										return {
											block: 'last-photos-list-item',
											tag: 'li',
											content: [
												{
													block: 'popup-open',
													tag: 'a',
													attrs: {'href': '#photo'},
													content: [
														{
															tag: 'img',
															attrs: {'src': 'img/photos/medium/' + item.photo + '.jpg'}
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
			block: 'template-other'
		}
	]
});