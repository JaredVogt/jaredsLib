// import {EX, PS, P, T, JS, JP, UI, PI, IW} from './jaredsFunctions3.mjs'  // use this

export const EX = process.exit

// Logging shortcuts
export const PS = _ => process.stdout.write(_)  // output to console with out \n or \r
export const P = console.log
export const T = console.table

// JSON shortcuts
export const JS = _ => JSON.stringify(_,null,2)
export const JP = _ => JSON.parse(_)

// Debugging help
export const UI = _ => util.inspect(_)
export const PI = _ => P(`Inspect: ${I(_)}`)  // print out inspect message


// Winston logger
// TODO put this in a try so winston isn't required
import winston from 'winston'
const { combine, timestamp, printf, colorize, align } = winston.format;

export const IW = function(level) {
  return winston.createLogger({
    level: process.env.LOG_LEVEL || level,
    format: combine(
      colorize({ level: true }),
      timestamp({
        // format: 'YYYY-MM-DD hh:mm:ss.SSS A',
        format: 'hh:mm:ss.SSS A',
      }),
      // align(),
      printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    transports: [new winston.transports.Console()],
  });
}
// basic documentation: https://betterstack.com/community/guides/logging/how-to-install-setup-and-use-winston-and-morgan-to-log-node-js-applications/#formatting-your-log-messages
// formatting info: https://github.com/winstonjs/logform#align

