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
	var wikiaBarWrapper = $( '#WikiaBarWrapper' );
	var $summaryPanel = $( '.ve-ui-summaryPanel' );

	OO.ui.getViewportSpacing = function () {
		var viewportTopOffset = $globalNavigation.height() || 0;
		var viewportBottomOffset = !wikiaBarWrapper.hasClass( 'hidden' ) ? wikiaBarWrapper.height() || 0 : 0;

		viewportBottomOffset += $summaryPanel.length ? $summaryPanel.height() : 0;

		return {
			top: viewportTopOffset,
			bottom: viewportBottomOffset,
			left: 0,
			right: 0
		};
	};
} );
