const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const PID_FILE = path.join(__dirname, 'server.pid');

function startServer() {
  // Start the server using npm run dev
  const server = spawn('npm', ['run', 'dev'], {
    detached: true,
    stdio: 'ignore'
  });

  // Write the PID to a file
  fs.writeFileSync(PID_FILE, server.pid.toString());

  // Unref the process to allow the parent to exit
  server.unref();

  console.log(`Server started with PID: ${server.pid}`);
  console.log('Server is running in the background');
}

function stopServer() {
  try {
    if (fs.existsSync(PID_FILE)) {
      const pid = parseInt(fs.readFileSync(PID_FILE, 'utf8'));
      
      // Kill the process
      process.kill(pid);
      
      // Remove the PID file
      fs.unlinkSync(PID_FILE);
      
      console.log(`Server with PID ${pid} has been stopped`);
    } else {
      console.log('No server is currently running');
    }
  } catch (error) {
    if (error.code === 'ESRCH') {
      console.log('Server process not found. It may have already been stopped.');
      // Clean up the PID file if it exists
      if (fs.existsSync(PID_FILE)) {
        fs.unlinkSync(PID_FILE);
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