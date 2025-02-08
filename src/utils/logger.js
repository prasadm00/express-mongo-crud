import winston from 'winston';

// Define log format
const logFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Create a logger instance
const logger = winston.createLogger({
  level: 'info', // Logging level (e.g., 'error', 'warn', 'info', 'debug')
  format: winston.format.combine(
    winston.format.timestamp(), // Add timestamp to logs
    logFormat // Apply custom log format
  ),
  transports: [
    // Log to the console
    new winston.transports.Console(),
    // Log to a file
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }), // Log only errors to a file
    new winston.transports.File({ filename: 'logs/combined.log' }), // Log all levels to a file
  ],
});

export default logger;