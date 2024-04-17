import React from 'react';

const PumpFunChart = () => {
    return (
        <iframe 
            id="tradingview_0e041" 
            name="tradingview_0e041" 
            data-widget-options="symbol=%24Hepe&amp;interval=5&amp;widgetbar=%7B%22details%22%3Afalse%2C%22watchlist%22%3Afalse%2C%22news%22%3Afalse%2C%22datawindow%22%3Afalse%2C%22watchlist_settings%22%3A%7B%22default_symbols%22%3A%5B%5D%7D%7D&amp;timeFrames=%5B%7B%22text%22%3A%225y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%221y%22%2C%22resolution%22%3A%221W%22%7D%2C%7B%22text%22%3A%226m%22%2C%22resolution%22%3A%22120%22%7D%2C%7B%22text%22%3A%223m%22%2C%22resolution%22%3A%2260%22%7D%2C%7B%22text%22%3A%221m%22%2C%22resolution%22%3A%2230%22%7D%2C%7B%22text%22%3A%225d%22%2C%22resolution%22%3A%225%22%7D%2C%7B%22text%22%3A%221d%22%2C%22resolution%22%3A%221%22%7D%5D&amp;locale=en&amp;uid=tradingview_0e041&amp;clientId=0&amp;userId=0&amp;chartsStorageVer=1.0&amp;debug=true&amp;timezone=Etc%2FUTC&amp;theme=dark" 
            title="Financial Chart" 
            frameBorder="0" 
            allowTransparency="true" 
            allowFullScreen
            style={{ display: 'block', width: '100%', height: '100%' }} // Corrected style attribute
            src="blob:https://pump.fun/e7ce99e0-3363-4403-a0c2-79afe5020028" // Note: Ensure this is the correct URL
            width="100%"
            height="500"
        ></iframe>
    );
};

export default PumpFunChart;