import { Injectable }					from '@angular/core';

export abstract class Logger {
	info: any;
	warn: any;
	error: any;
}

@Injectable()
export class LoggerService implements Logger {

	invokeConsoleMethod(type: string, args?: any): void {
		console.log('LoggerService: invokeConsoleMethod')
	 }

	 info(mesg: string, args?: any): void {
		console.log('info: ' + mesg)
	 }

	 warn(mesg: string, args?: any): void {
		console.log('warn: ' + mesg)
	 }

	 error(mesg: string, args?: any): void {
		console.log('error: ' + mesg)
	 }

}
