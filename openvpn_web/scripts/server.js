import { spawn } from 'child_process';
import { writeFileSync, readFileSync, unlinkSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PID_FILE = join(__dirname, 'server.pid');

function startServer() {
  // Start the server using npm run dev
  const server = spawn('npm', ['run', 'dev'], {
    detached: true,
    stdio: 'ignore'
  });

  // Write the PID to a file
  writeFileSync(PID_FILE, server.pid.toString());

  // Unref the process to allow the parent to exit
  server.unref();

  console.log(`Server started with PID: ${server.pid}`);
  console.log('Server is running in the background');
}

function stopServer() {
  try {
    if (existsSync(PID_FILE)) {
      const pid = parseInt(readFileSync(PID_FILE, 'utf8'));
      
      // Kill the process
      process.kill(pid);
      
      // Remove the PID file
      unlinkSync(PID_FILE);
      
      console.log(`Server with PID ${pid} has been stopped`);
    } else {
      console.log('No server is currently running');
    }
  } catch (error) {
    if (error.code === 'ESRCH') {
      console.log('Server process not found. It may have already been stopped.');
      // Clean up the PID file if it exists
      if (existsSync(PID_FILE)) {
        unlinkSync(PID_FILE);
      }
    } else {
      console.error('Error stopping server:', error);
    }
  }
}

// Handle command line arguments
const command = process.argv[2];

if (command === 'start') {
  startServer();
} else if (command === 'stop') {
  stopServer();
} else {
  console.log('Usage: node server.js [start|stop]');
}