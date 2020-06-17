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
	var $globalNavigation = $( '.wds-global-navigation-wrapper' );

	OO.ui.getViewportSpacing = function () {
		var viewportTopOffset = $globalNavigation.height() || 0;

		return {
			top: viewportTopOffset,
			bottom: 0,
			left: 0,
			right: 0
		};
	};
} );
