// Allows users to open the side panel by clicking on the action toolbar icon
const GOOGLE_ORIGIN = 'https://www.google.com';

// // Allows users to open the side panel by clicking on the action toolbar icon
// chrome.sidePanel
// 	.setPanelBehavior({ openPanelOnActionClick: true })
// 	.catch((error) => console.error(error));

chrome.tabs.onUpdated.addListener((tabId, _info, tab) => {
	if (!tab.url) return;
	const url = new URL(tab.url);
	console.log('Tab updated: %s', url.href);
	// Enables the side panel on google.com
	void (async () => {
		if (url.origin === GOOGLE_ORIGIN) {
			console.log('Enabling side panel for %s', url.origin);
			await chrome.sidePanel.setOptions({
				tabId,
				path: 'sidepanel.html',
				enabled: true
			});
		} else {
			console.log('Disabling side panel for %s', url.origin);
			await chrome.sidePanel.setOptions({
				tabId,
				enabled: false
			});
			await chrome.action.setPopup({ popup: 'popup.html' });
			// Also notify the panel
			await chrome.runtime.sendMessage({ type: 'NON_GOOGLE_TAB' });
		}
	})();
});