(function(window, document, undefined) {
  window.CDC = window.CDC || {};
  window.CDC.Widget = window.CDC.Widget || {};
  window.CDC.Widget.load = function () {

    // ADD POINTER/SHORTCUT FOR METRICS
    window.cdcMetrics = window.CDC.Common.metrics;

    window.cdcCommon = window.CDC.Widget.Common;

    var editor = window.CDC.Widget.Common.getCallParam("context") === "editor" ? true : false;
    var dataHost = window.CDC.Widget.Common.getCallParam("host");
    var jsonConfigUrl = window.CDC.Widget.Common.getCallParam("configUrl")
    var contentTitle = window.CDC.Widget.Common.getCallParam("title") || window.CDC.Widget.Common.getCallParam("wn") || "CDC Map Widget: Unknown Map Title";
    var contentChannel = window.CDC.Widget.Common.getCallParam("contentChannel") || null;

    if ( jsonConfigUrl ) {

        jsonConfigUrl = jsonConfigUrl.replace( /^[a-zA-Z]{3,5}\:\/{2}[a-zA-Z0-9_.:-]+\//, '' );

	    if ( jsonConfigUrl && jsonConfigUrl.charAt( 0 ) !== '/' ) {
            jsonConfigUrl = '/' + jsonConfigUrl;
        }

        if ( dataHost ) {
            jsonConfigUrl = window.location.protocol + '//' + dataHost + jsonConfigUrl;
        } else {
            jsonConfigUrl = window.location.protocol + '//' + window.CDC.Widget.Common.getSafeHostName() + jsonConfigUrl;
        }
    } else {
        jsonConfigUrl = ''
    }

    window.CDC.configParams = {
        dataHost: dataHost,
        jsonConfigUrl: jsonConfigUrl,
        contentTitle: contentTitle,
        contentChannel: contentChannel,
        editor: editor
    }

    var event = new Event('widgetConfigLoaded');

    // Dispatch the event.
    window.dispatchEvent(event);

    // INIT METRICS
    if(false === editor) {

        window.cdcMetrics.init( {
            useMetrics: true,
            trackAs: "widget",
            widgetId: "widget-165",
            contentTitle: contentTitle,
            contentChannel: contentChannel,
            feedName: jsonConfigUrl.jsonDataUrl || jsonConfigUrl,
            metricsApi: "omniture",
            translation: {
                fromKey: "varName",
                toKey: "omnitureVarName",
                appendTranslations: false
            }
        } );

        window.cdcMetrics.trackEvent( 'widget-loaded' );

    }

  };
} (window, document));
