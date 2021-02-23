/*!
 * OOUI v0.19.0---base-0.35.1
 * https://www.mediawiki.org/wiki/OOUI
 *
 * Copyright 2011–2021 OOUI Team and other contributors.
 * Released under the MIT license
 * http://oojs.mit-license.org
 *
 * Date: 2021-02-23T17:25:27Z
 */
( function ( OO ) {

'use strict';

/**
 * @class
 * @extends OO.ui.Theme
 *
 * @constructor
 */
OO.ui.FandomTheme = function OoUiFandomTheme() {
	OO.ui.FandomTheme.parent.call( this );
};

OO.inheritClass( OO.ui.FandomTheme, OO.ui.Theme );

OO.ui.theme = new OO.ui.FandomTheme();

$( function () {
	OO.ui.isMobile = function () {
		var $body = $( 'body' );

		return ( $body.hasClass( 'skin-mobileve' ) || $body.hasClass( 'skin-fandommobile' ) );
	};

	OO.ui.getViewportSpacing = function () {
		var $globalNavigation = $( '.wds-global-navigation-wrapper' );
		var $wikiaBarWrapper = $( '#WikiaBarWrapper' );
		var $summaryPanel = $( '.ve-ui-summaryPanel' );

		var viewportTopOffset = $globalNavigation.height() || 0;
		var viewportBottomOffset = !$wikiaBarWrapper.hasClass( 'hidden' ) ? $wikiaBarWrapper.height() || 0 : 0;

		viewportBottomOffset += $summaryPanel.length ? $summaryPanel.outerHeight() : 0;

		return {
			top: viewportTopOffset,
			bottom: viewportBottomOffset,
			left: 0,
			right: 0
		};
	};
} );

}( OO ) );

//# sourceMappingURL=oojs-ui-fandom.js.map.json