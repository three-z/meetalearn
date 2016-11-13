block('template-header-login').replace()(function() {
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
											block: 'header-login',
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
																	attrs: {'type': 'text', 'placeholder': 'Логин или почта'}
																}
															]
														},
														{
															elem: 'field',
															content: [
																{
																	elem: 'input',
																	tag: 'input',
																	attrs: {'type': 'password', 'placeholder': 'Пароль'}
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
																		'Войти'
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
					block: 'header-bottom',
					content: [
						{
							elem: 'layout',
							mix: {block: 'container'},
							content: [
								{
									block: 'header-social',
									content: [
										{
											block: 'template-social-links'
										}
									]
								},
								{
									block: 'header-restore',
									content: [
										{
											tag: 'a',
											attrs: {'href': '#'},
											content:
												'Восстановить пароль'
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