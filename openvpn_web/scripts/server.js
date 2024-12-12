import { spawn } from 'child_process';
import { writeFileSync, readFileSync, unlinkSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PID_FILE = join(__dirname, 'server.pid');
const PORT = 5173; // Default Vite port

function getLocalAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];

  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address);
      }
    }
  }

  return addresses;
}

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

  const addresses = getLocalAddresses();

  console.log('You can access the web application at:');
  console.log(`- Local: http://localhost:${PORT}`);
  addresses.forEach(address => {
    console.log(`- Network: http://${address}:${PORT}`);
  });
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
      console.log('The web application was stopped at:');
      console.log(`- Local: http://localhost:${PORT}`);
      getLocalAddresses().forEach(address => {
        console.log(`- Network: http://${address}:${PORT}`);
      });
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