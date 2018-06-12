import { Injectable } 					from '@angular/core';

import { Logger } 						from './logger';

export let isDebugMode = true; // environment.isDebugMode;

const noop = (): any => undefined;

@Injectable()
export class LoggerConsoleService implements Logger {

	get info() {
		if (isDebugMode) {
			return console.info.bind(console);
		} else {
			return noop;
		}
	}

	get warn() {
		if (isDebugMode) {
			return console.warn.bind(console);
		} else {
			return noop;
		}
	}

	get error() {
		if (isDebugMode) {
			return console.error.bind(console);
		} else {
			return noop;
		}
	}

	invokeConsoleMethod(type: string, args?: any): void {
		const logFn: Function = (console)[type] || console.log || noop;
		logFn.apply(console, [args]);
	}
}
