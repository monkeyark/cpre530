import React from 'react'
import { ReactNode } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface TutorialCardProps {
  title: string;
  description: string;
  children: ReactNode;
}

function TutorialCard({ title, description, children }: TutorialCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default function OpenVPNTutorial() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">OpenVPN Installation and Deployment Tutorial</h1>
      <Tabs defaultValue="introduction">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="introduction">Introduction</TabsTrigger>
          <TabsTrigger value="server-setup">Server Setup</TabsTrigger>
          <TabsTrigger value="client-setup">Client Setup</TabsTrigger>
          <TabsTrigger value="configuration">Configuration</TabsTrigger>
          <TabsTrigger value="deployment">Deployment</TabsTrigger>
          <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
        </TabsList>
        <TabsContent value="introduction">
          <TutorialCard
            title="Introduction to OpenVPN"
            description="Learn about OpenVPN and its benefits"
          >
            <p>OpenVPN is an open-source VPN protocol that uses SSL/TLS for key exchange. It's known for its flexibility, security, and cross-platform compatibility. This tutorial will guide you through the process of setting up an OpenVPN server and client.</p>
            <h3 className="text-lg font-semibold mt-4">Key Features:</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Strong encryption using OpenSSL library</li>
              <li>Compatibility with NAT and dynamic IP addresses</li>
              <li>Scalability to many clients</li>
              <li>Support for mobile devices</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Video Introduction to OpenVPN</h3>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <iframe
                  src="https://www.youtube.com/embed/UUyMwUrwSTs"
                  title="Introduction to OpenVPN"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </AspectRatio>
            </div>
          </TutorialCard>
        </TabsContent>
        <TabsContent value="server-setup">
          <TutorialCard
            title="OpenVPN Server Setup"
            description="Step-by-step guide to set up an OpenVPN server"
          >
            <ol className="list-decimal pl-6 space-y-2">
              <li>Update your system:
                <code className="block bg-gray-100 p-2 mt-1 rounded">
                  sudo apt update && sudo apt upgrade -y
                </code>
              </li>
              <li>Install OpenVPN and Easy-RSA:
                <code className="block bg-gray-100 p-2 mt-1 rounded">
                  sudo apt install openvpn easy-rsa -y
                </code>
              </li>
              <li>Set up the CA directory:
                <code className="block bg-gray-100 p-2 mt-1 rounded">
                  {`make-cadir ~/openvpn-ca
cd ~/openvpn-ca`}
                </code>
              </li>
              <li>Configure the CA variables in vars file</li>
              <li>Build the CA:
                <code className="block bg-gray-100 p-2 mt-1 rounded">
                  {`source vars
./clean-all
./build-ca`}
                </code>
              </li>
              <li>Generate server certificate and key:
                <code className="block bg-gray-100 p-2 mt-1 rounded">
                  ./build-key-server server
                </code>
              </li>
              <li>Generate Diffie-Hellman parameters:
                <code className="block bg-gray-100 p-2 mt-1 rounded">
                  ./build-dh
                </code>
              </li>
              <li>Copy the generated files to /etc/openvpn</li>
              <li>Configure the OpenVPN server</li>
              <li>Enable IP forwarding and configure firewall rules</li>
              <li>Start and enable the OpenVPN service:
                <code className="block bg-gray-100 p-2 mt-1 rounded">
                  {`sudo systemctl start openvpn@server
sudo systemctl enable openvpn@server`}
                </code>
              </li>
            </ol>
          </TutorialCard>
        </TabsContent>
        <TabsContent value="client-setup">
          <TutorialCard
            title="OpenVPN Client Setup"
            description="Instructions for setting up OpenVPN clients"
          >
            <h3 className="text-lg font-semibold mb-2">For Linux:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Install OpenVPN:
                <code className="block bg-gray-100 p-2 mt-1 rounded">
                  sudo apt install openvpn -y
                </code>
              </li>
              <li>Copy the client configuration file and certificates from the server</li>
              <li>Connect to the VPN:
                <code className="block bg-gray-100 p-2 mt-1 rounded">
                  sudo openvpn --config client.ovpn
                </code>
              </li>
            </ol>
            <h3 className="text-lg font-semibold mt-4 mb-2">For Windows:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Download and install the OpenVPN client from the official website</li>
              <li>Copy the client configuration file and certificates to the OpenVPN config directory</li>
              <li>Right-click the OpenVPN GUI icon in the system tray and select "Connect"</li>
            </ol>
            <h3 className="text-lg font-semibold mt-4 mb-2">For macOS:</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Install Tunnelblick from the official website</li>
              <li>Double-click the .ovpn file to import it into Tunnelblick</li>
              <li>Click the Tunnelblick icon in the menu bar and select "Connect"</li>
            </ol>
          </TutorialCard>
        </TabsContent>
        <TabsContent value="configuration">
          <TutorialCard
            title="OpenVPN Configuration"
            description="Key configuration options for OpenVPN"
          >
            <h3 className="text-lg font-semibold mb-2">Server Configuration:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><code>port 1194</code>: The port OpenVPN listens on</li>
              <li><code>proto udp</code>: The protocol to use (UDP or TCP)</li>
              <li><code>dev tun</code>: Use a routed IP tunnel</li>
              <li><code>server 10.8.0.0 255.255.255.0</code>: The IP range for VPN clients</li>
              <li><code>push "redirect-gateway def1 bypass-dhcp"</code>: Route all client traffic through the VPN</li>
              <li><code>push "dhcp-option DNS 208.67.222.222"</code>: Set DNS servers for clients</li>
              <li><code>keepalive 10 120</code>: Keep the connection alive</li>
              <li><code>comp-lzo</code>: Use compression</li>
              <li><code>user nobody</code> and <code>group nogroup</code>: Drop privileges after startup</li>
            </ul>
            <h3 className="text-lg font-semibold mt-4 mb-2">Client Configuration:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><code>client</code>: Specify that this is a client configuration</li>
              <li><code>remote your_server_ip 1194</code>: The server's IP and port</li>
              <li><code>resolv-retry infinite</code>: Keep trying to resolve the server's hostname</li>
              <li><code>nobind</code>: Don't bind to a specific local port</li>
              <li><code>persist-key</code> and <code>persist-tun</code>: Keep trying to reconnect</li>
              <li><code>remote-cert-tls server</code>: Verify the server certificate</li>
            </ul>
          </TutorialCard>
        </TabsContent>
        <TabsContent value="deployment">
          <TutorialCard
            title="OpenVPN Deployment"
            description="Best practices for deploying OpenVPN"
          >
            <ol className="list-decimal pl-6 space-y-2">
              <li>Choose a reliable hosting provider with good network performance</li>
              <li>Ensure your server has adequate resources (CPU, RAM, bandwidth) for the expected number of clients</li>
              <li>Use a firewall to restrict access to only necessary ports (typically 1194 UDP for OpenVPN)</li>
              <li>Regularly update OpenVPN and the operating system to patch security vulnerabilities</li>
              <li>Implement strong authentication methods, such as certificate-based authentication or two-factor authentication</li>
              <li>Monitor server logs and set up alerts for unusual activities</li>
              <li>Create and maintain backups of your OpenVPN configuration and certificates</li>
              <li>Consider using configuration management tools like Ansible for easier deployment and management</li>
              <li>Implement a secure method for distributing client configurations and certificates</li>
              <li>Set up proper logging and auditing to track connection attempts and usage</li>
              <li>Consider setting up a failover server for high-availability deployments</li>
            </ol>
          </TutorialCard>
        </TabsContent>
        <TabsContent value="troubleshooting">
          <TutorialCard
            title="Troubleshooting OpenVPN"
            description="Common issues and their solutions"
          >
            <h3 className="text-lg font-semibold mb-2">1. Connection Issues:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Check if the OpenVPN service is running on the server</li>
              <li>Verify that the correct ports are open on the firewall</li>
              <li>Ensure the client configuration matches the server settings</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">2. Authentication Failures:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Verify that the client certificates are valid and not expired</li>
              <li>Check if the server's certificate authority is correctly configured</li>
              <li>Ensure the client is using the correct credentials</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">3. Slow Connection Speeds:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Try changing the VPN protocol from UDP to TCP or vice versa</li>
              <li>Check if compression is enabled and try disabling it</li>
              <li>Verify that the server has adequate bandwidth</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">4. DNS Leaks:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Ensure that the server is pushing the correct DNS settings to clients</li>
              <li>Check if the client's DNS settings are being overridden by local network settings</li>
            </ul>
            <h3 className="text-lg font-semibold mb-2">5. TLS Handshake Failures:</h3>
            <ul className="list-disc pl-6">
              <li>Verify that the server and client clocks are synchronized</li>
              <li>Check if the correct TLS version is being used</li>
              <li>Ensure that the client and server have the latest security updates</li>
            </ul>
          </TutorialCard>
        </TabsContent>
      </Tabs>
    </div>
  )
}

