import { Injectable } from '@angular/core';
import { LogLevel } from './loglevel';
import { LogEntry } from './logEntry';

@Injectable({
    providedIn: 'root'
})
export class LogService {
    logLevel: LogLevel = LogLevel.All;
    logWithDate: boolean = false;

    debug(message: string, ...optionalParameters: any[]): void {
        this.writeToLog(message, LogLevel.Debug, optionalParameters);
    }

    info(message: string, ...optionalParameters: any[]): void {
        this.writeToLog(message, LogLevel.Info, optionalParameters);
    }

    warn(message: string, ...optionalParameters: any[]): void {
        this.writeToLog(message, LogLevel.Warn, optionalParameters);
    }

    error(message: string, ...optionalParameters: any[]): void {
        this.writeToLog(message, LogLevel.Error, optionalParameters);
    }

    fatal(message: string, ...optionalParameters: any[]): void {
        this.writeToLog(message, LogLevel.Fatal, optionalParameters);
    }

    log(message: string, ...optionalParameters: any[]): void {
        this.writeToLog(message, LogLevel.All, optionalParameters);
    }

    private writeToLog(message: string, logLevel: LogLevel, optionalParameters: any[]): void {
        if (this.shouldLog(logLevel)) {
            let entry: LogEntry = new LogEntry();
            entry.message = message;
            entry.level = logLevel;
            entry.extraInfo = optionalParameters;
            entry.logWithDate = this.logWithDate;
            console.log(entry.buildLogString());
        }
    }

    private shouldLog(logLevel: LogLevel): boolean {
        let ret: boolean = false;
        if ((logLevel >= this.logLevel && logLevel != LogLevel.Off) || (this.logLevel == LogLevel.All)) {
            ret = true;
        }
        return ret;
    }

}