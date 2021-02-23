Demo.static.pages.icons = function ( demo ) {
	var i, len, iconSet, iconsFieldset, iconWidget, selector,
		icons = {
			movement: [
				'arrowPrevious',
				'arrowNext',
				'downTriangle',
				'upTriangle',
				'first',
				'previous',
				'next',
				'last',
				'expand',
				'collapse',
				'more',
				'move',
				'draggable'
			],
			content: [
				'article',
				'articles',
				'articleAdd',
				'articleCheck',
				'articleDisambiguation',
				'articleNotFound',
				'articleSearch',
				'articleRedirect',
				'history',
				'info',
				'infoFilled',
				'folderPlaceholder',
				'die',
				'download',
				'robot',
				'tag',
				'upload',
				'window'
			],
			alerts: [
				'alert',
				'bell',
				'bellOutline',
				'error',
				'message',
				'notice',
				'speechBubble',
				'speechBubbleAdd',
				'speechBubbles',
				'tray'
			],
			interactions: [
				'add',
				'browser',
				'cancel',
				'check',
				'checkAll',
				'clear',
				'clock',
				'close',
				'ellipsis',
				'feedback',
				'funnel',
				'heart',
				'help',
				'helpNotice',
				'key',
				'keyboard',
				'lightbulb',
				'logOut',
				'newWindow',
				'pageSettings',
				'printer',
				'reload',
				'search',
				'settings',
				'subtract'
			],
			moderation: [
				'bookmarkOutline',
				'bookmark',
				'block',
				'unBlock',
				'flag',
				'unFlag',
				'lock',
				'unLock',
				'star',
				'halfStar',
				'unStar',
				'trash',
				'restore',
				'pushPin',
				'ongoingConversation'
			],
			'editing-core': [
				'edit',
				'editLock',
				'editUndo',
				'link',
				'unLink',
				'linkExternal',
				'linkSecure',
				'redo',
				'undo'
			],
			'editing-styling': [
				'bigger',
				'smaller',
				'subscript',
				'superscript',
				'bold',
				'highlight',
				'italic',
				'strikethrough',
				'underline',
				'textDirLTR',
				'textDirRTL',
				'textStyle',
				'textFormat',
			],
			'editing-list': [
				'indent',
				'listBullet',
				'listNumbered',
				'outdent',
				'structure',
			],
			'editing-advanced': [
				'alignCenter',
				'alignLeft',
				'alignRight',
				'attachment',
				'calendar',
				'code',
				'hieroglyph',
				'imageLayoutBasic',
				'imageLayoutFrame',
				'imageLayoutFrameless',
				'imageLayoutThumbnail',
				'labFlask',
				'language',
				'layout',
				'mathematics',
				'mathematicsDisplayBlock',
				'mathematicsDisplayDefault',
				'mathematicsDisplayInline',
				'markup',
				'newline',
				'noWikiText',
				'outline',
				'puzzle',
				'quotes',
				'searchCaseSensitive',
				'searchDiacritics',
				'searchRegularExpression',
				'signature',
				'specialCharacter',
				'table',
				'tableAddColumnAfter',
				'tableAddColumnBefore',
				'tableAddRowAfter',
				'tableAddRowBefore',
				'tableCaption',
				'tableMergeCells',
				'tableMoveColumnAfter',
				'tableMoveColumnBefore',
				'tableMoveRowAfter',
				'tableMoveRowBefore',
				'templateAdd',
				'wikiText'
			],
			'editing-citation': [
				'book',
				'journal',
				'newspaper',
				'reference',
				'referenceExisting',
				'references'
			],
			media: [
				'camera',
				'chart',
				'fullScreen',
				'exitFullscreen',
				'image',
				'imageAdd',
				'imageLock',
				'imageGallery',
				'imageBroken',
				'musicalScore',
				'play',
				'pause',
				'stop',
				'zoomIn',
				'zoomOut'
			],
			location: [
				'globe',
				'map',
				'mapPin',
				'mapPinAdd',
				'mapTrail'
			],
			user: [
				'userAnonymous',
				'userAvatar',
				'userAvatarOutline',
				'userGroup',
				'userTalk'
			],
			layout: [
				'menu',
				'stripeFlow',
				'stripeSummary',
				'stripeToC',
				'viewCompact',
				'viewDetails'
			],
			accessibility: [
				'bright',
				'halfBright',
				'notBright',
				'eye',
				'eyeClosed',
				'moon',
				'largerText',
				'smallerText',
				'visionSimulator'
			],
			wikimedia: [
				'logoCC',
				'logoWikidata',
				'logoWikimedia',
				'logoWikimediaCommons',
				'logoWikimediaDiscovery',
				'logoWikipedia'
			]
		},
		indicators = [
			'clear',
			'down',
			'required',
			'up'
		],
		iconsFieldsets = [],
		iconsWidgets = [],
		indicatorsFieldset = new Demo.LinkedFieldsetLayout( {
			label: 'Indicators',
			id: 'demo-section-indicators'
		} );

	for ( i = 0, len = indicators.length; i < len; i++ ) {
		indicatorsFieldset.addItems( [
			new OO.ui.FieldLayout(
				new OO.ui.IndicatorWidget( {
					indicator: indicators[ i ],
					title: indicators[ i ]
				} ),
				{
					align: 'inline',
					label: indicators[ i ]
				}
			)
		] );
	}
	for ( iconSet in icons ) {
		iconsFieldset = new Demo.LinkedFieldsetLayout( {
			label: 'Icons – ' + iconSet,
			id: 'demo-section-' + iconSet
		} );
		iconsFieldsets.push( iconsFieldset );

		for ( i = 0, len = icons[ iconSet ].length; i < len; i++ ) {
			iconWidget = new OO.ui.IconWidget( {
				icon: icons[ iconSet ][ i ],
				title: icons[ iconSet ][ i ]
			} );
			iconsWidgets.push( iconWidget );
			iconsFieldset.addItems( [
				new OO.ui.FieldLayout( iconWidget, {
					label: icons[ iconSet ][ i ],
					align: 'inline'
				} )
			] );
		}
	}

	selector = new OO.ui.ButtonSelectWidget( {
		items: [
			new OO.ui.ButtonOptionWidget( {
				label: 'None',
				flags: [],
				data: {
					progressive: false,
					destructive: false
				}
			} ),
			new OO.ui.ButtonOptionWidget( {
				label: 'Progressive',
				flags: [ 'progressive' ],
				data: {
					progressive: true,
					destructive: false
				}
			} ),
			new OO.ui.ButtonOptionWidget( {
				label: 'Destructive',
				flags: [ 'destructive' ],
				data: {
					progressive: false,
					destructive: true
				}
			} )
		]
	} );

	selector
		.on( 'select', function ( selected ) {
			iconsWidgets.forEach( function ( iconWidget ) {
				iconWidget.setFlags( selected.getData() );
			} );
		} )
		.selectItemByData( {
			progressive: false,
			destructive: false
		} );

	demo.$element.append(
		new OO.ui.PanelLayout( {
			expanded: false,
			framed: true
		} ).$element
			.addClass( 'demo-container demo-icons' )
			.attr( 'role', 'main' )
			.append(
				selector.$element,
				iconsFieldsets.map( function ( item ) { return item.$element[ 0 ]; } ),
				indicatorsFieldset.$element
			)
	);
};
