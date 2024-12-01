import React from 'react';
import { Shield, Server, Download, Settings, Video } from 'lucide-react';

interface TutorialProps {
  activeTab: string;
}

export function Tutorial({ activeTab }: TutorialProps) {
  const content = {
    'Introduction': (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Video className="w-6 h-6" />
          Understanding VPN Concepts
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-[500px] rounded-lg"
            src="https://www.youtube.com/embed/UUyMwUrwSTs"
            title="Understanding VPN Concepts"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    ),
    Prerequisites: (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Prerequisites
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Linux server (Ubuntu 20.04 or later recommended)</li>
          <li>Root or sudo privileges</li>
          <li>Static IP address</li>
          <li>Basic understanding of networking concepts</li>
          <li>Open ports (UDP 1194 by default)</li>
          <li>Updated system packages</li>
        </ul>
        <div className="bg-gray-50 p-4 rounded-lg mt-4">
          <h3 className="text-lg font-semibold mb-2">System Update Commands:</h3>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`sudo apt update
sudo apt upgrade -y`}</code>
          </pre>
        </div>
      </div>
    ),
    'Server Installation': (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Server className="w-6 h-6" />
          Server Installation
        </h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">1. Install OpenVPN</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`sudo apt install openvpn easy-rsa -y`}</code>
            </pre>
          </section>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">2. Set up PKI Infrastructure</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`make-cadir ~/openvpn-ca
cd ~/openvpn-ca
./easyrsa init-pki
./easyrsa build-ca`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Generate Server Certificate</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`./easyrsa gen-req server nopass
./easyrsa sign-req server server`}</code>
            </pre>
          </section>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              Remember to keep your CA key secure and never share it. It's used to sign all client certificates.
            </p>
          </div>
        </div>
      </div>
    ),
    'Server Deployment': (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Settings className="w-6 h-6" />
          Server Deployment
        </h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">1. Configure Server</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`# Copy sample config
cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf /etc/openvpn/server/

# Edit configuration
sudo nano /etc/openvpn/server/server.conf`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. Enable IP Forwarding</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`echo 'net.ipv4.ip_forward=1' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Configure Firewall</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`sudo ufw allow OpenSSH
sudo ufw allow 1194/udp
sudo ufw enable`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">4. Start OpenVPN Service</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`sudo systemctl start openvpn-server@server
sudo systemctl enable openvpn-server@server`}</code>
            </pre>
          </section>
        </div>
      </div>
    ),
    'Client Installation': (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Download className="w-6 h-6" />
          Client Installation
        </h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">1. Generate Client Certificate</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`cd ~/openvpn-ca
./easyrsa gen-req client1 nopass
./easyrsa sign-req client client1`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. Client Configuration</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-4">Create a client configuration file with the following content:</p>
              <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                <code>{`client
dev tun
proto udp
remote your_server_ip 1194
resolv-retry infinite
nobind
persist-key
persist-tun
remote-cert-tls server
cipher AES-256-GCM
verb 3`}</code>
              </pre>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. Install OpenVPN Client</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Windows</h4>
                <p>Download and install the official OpenVPN client from the OpenVPN website.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Linux</h4>
                <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
                  <code>sudo apt install openvpn</code>
                </pre>
              </div>
            </div>
          </section>
        </div>
      </div>
    ),
  };

  return (
    <div className="py-6">
      {content[activeTab as keyof typeof content]}
    </div>
  );
}

export default Tutorial;