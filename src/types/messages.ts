// src/types/messages.ts

export type ExtensionMessage =
	| { type: 'open-side-panel' }
	| { type: 'close-side-panel' }
	| { type: 'ping-content' }
	| { type: 'custom'; payload: string }
