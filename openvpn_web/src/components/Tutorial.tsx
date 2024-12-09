import { Shield, Server, Download, Settings, Video } from "lucide-react";

interface TutorialProps {
  activeTab: string;
}

export function Tutorial({ activeTab }: TutorialProps) {
  const content = {
    Introduction: (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Video className="w-6 h-6" />
          Understanding VPN Concepts
        </h2>
        <div className="w-full">
          <iframe
            className="w-full h-[500px] rounded-lg"
            src="https://www.youtube.com/embed/R48lpEIdRfI"
            title="Understanding VPN Concepts"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Video className="w-6 h-6" />
          Benefits of Building Your Own VPN
        </h2>
        <div className="w-full">
          <iframe
            className="w-full h-[500px] rounded-lg"
            src="https://www.youtube.com/embed/7pqxaVuQlYM"
            title="Benefits of Building Your Own VPN"
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
          <h3 className="text-lg font-semibold mb-2">
            System Update Commands:
          </h3>
          <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <code>{`sudo apt update
sudo apt upgrade -y`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold flex items-center gap-2 mt-8">
          <Server className="w-6 h-6" />
          Server Installation Steps
        </h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">1. Install OpenVPN</h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`sudo apt install openvpn easy-rsa -y`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              2. Set up PKI Infrastructure
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`make-cadir ~/openvpn-ca
cd ~/openvpn-ca
./easyrsa init-pki
./easyrsa build-ca`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              3. Generate Server Certificate
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`./easyrsa gen-req server nopass
./easyrsa sign-req server server`}</code>
            </pre>
          </section>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              Remember to keep your CA key secure and never share it. It's used
              to sign all client certificates.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold flex items-center gap-2 mt-8">
          <Settings className="w-6 h-6" />
          Server Deployment Steps
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
            <h3 className="text-xl font-semibold mb-2">
              2. Enable IP Forwarding
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`echo 'net.ipv4.ip_forward=1' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              3. Configure Firewall
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`sudo ufw allow OpenSSH
sudo ufw allow 1194/udp
sudo ufw enable`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              4. Start OpenVPN Service
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`sudo systemctl start openvpn-server@server
sudo systemctl enable openvpn-server@server`}</code>
            </pre>
          </section>
        </div>
      </div>
    ),
    "Server Installation": (
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
            <h3 className="text-xl font-semibold mb-2">
              2. Set up PKI Infrastructure
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`make-cadir ~/openvpn-ca
cd ~/openvpn-ca
./easyrsa init-pki
./easyrsa build-ca`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              3. Generate Server Certificate
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`./easyrsa gen-req server nopass
./easyrsa sign-req server server`}</code>
            </pre>
          </section>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              Remember to keep your CA key secure and never share it. It's used
              to sign all client certificates.
            </p>
          </div>
        </div>
      </div>
    ),
    "Server Deployment": (
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
            <h3 className="text-xl font-semibold mb-2">
              2. Enable IP Forwarding
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`echo 'net.ipv4.ip_forward=1' | sudo tee -a /etc/sysctl.conf
sudo sysctl -p`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              3. Configure Firewall
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`sudo ufw allow OpenSSH
sudo ufw allow 1194/udp
sudo ufw enable`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              4. Start OpenVPN Service
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`sudo systemctl start openvpn-server@server
sudo systemctl enable openvpn-server@server`}</code>
            </pre>
          </section>
        </div>
      </div>
    ),
    "Client Installation": (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Download className="w-6 h-6" />
          Client Installation
        </h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">
              1. Generate Client Certificate
            </h3>
            <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
              <code>{`cd ~/openvpn-ca
./easyrsa gen-req client1 nopass
./easyrsa sign-req client client1`}</code>
            </pre>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              2. Client Configuration
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-4">
                Create a client configuration file with the following content:
              </p>
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
            <h3 className="text-xl font-semibold mb-2">
              3. Install OpenVPN Client
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Windows</h4>
                <p>
                  Download and install the official OpenVPN client from the
                  OpenVPN website.
                </p>
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
    "Video Transcript": (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Video className="w-6 h-6" />
          Understanding VPN Concepts Transcript
        </h2>
        <div className="prose max-w-none">
          <p>Hello everyone,</p>
          <p>It's my honor and pleasure to share some information as part of this course project.</p>
          
          <h3>Understanding VPN through a Bank Robbery Analogy</h3>
          <p>In this video, we'll understand what a VPN is and how it works. So let's consider this practical bank robbery example.</p>
          
          <p>Assume, There is a group of robbers who want to rob this particular bank. One option could be to go straight into this bank and try to rob it.</p>
          
          <p>But obviously this is a very risky option because these robbers can be tracked very easily on their way to this robbery or while coming back, police can easily track their location, the route from where they came to the bank. So it's not a very good option for any robber to straight away go and rob the bank.</p>
          
          <p>The other option which robbers might try is to actually dig a tunnel from their house directly inside the locker room of the bank. And what it helps, is that the robbers cannot be tracked through a normal route and their location also cannot be tracked. So they can directly go inside and then come back robbing the bank.</p>
          
          <p>This is a famous technique which many robbers have used in various movies, including one of the famous series Money Heist from Netflix. So in a similar way, not in a negative but in a positive way, VPN exactly does the same thing. It helps you log into a public network anonymously and privately without anyone coming to know about your credentials and about your location.</p>
          
          <h3>How VPN Works</h3>
          <p>In order to work from home, we need to install a VPN client on our laptop. And this VPN client establishes a VPN tunnel, a virtual private network within the public network, which then connects to the VPN server and then from the VPN server, it connects to the company server.</p>
          
          <p>So then your information from your home network via public network to the office network. But the difference between a normal connection and a VPN connection is that even while traveling within the public network, your data and your information remains completely anonymous, completely unknown, so that there could not be any attack from the outside network within this VPN tunnel.</p>
          
          <h3>Benefits of VPN</h3>
          <p>In this way, a VPN network enables all your information to be completely secure from the outside world. And basically what it secures:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>It secures your IP address</li>
            <li>It secures all your important data</li>
            <li>What you are trying to send to your office network and vice versa</li>
          </ul>
          
          <p>At no point of time, the outside network or people sitting in the public network could know that, from where the request is coming from and, where it is going, because it is completely managed by this particular VPN server.</p>
          
          <p>And it can very well be possible that you might be accessing your office network sitting in other country, your VPN server might be somewhere in Europe, and your actual office is somewhere in United States.</p>
          
          <h3>Key Benefits</h3>
          <p>Two main benefits that VPN provides:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Anonymity: Hiding your identity, location, IP address, and related information</li>
            <li>Privacy: Hiding your activity, which websites you are visiting, and what kind of work you are doing on your personal machine</li>
          </ol>
          
          <h3>Personal Use Case</h3>
          <p>Now, this is a scenario for connecting to your office network. But what for our personal use? Can we use VPN then as well? Of course, we should use VPN even while accessing a public Wi-Fi or a public network through our personal laptop.</p>
          
          <p>Take for an example, we are sitting in an airport and waiting for our flight and we randomly connect to the airport WIFI and do a banking transaction in normal manner, we connect from a mobile, and open the banking mobile app, Enter our customer ID pin then it goes to the banking server but all this critical information is being passed through a public network which is not at all secured.</p>
          
          <p className="mt-8">Thank you</p>
        </div>
        <h2 className="text-2xl font-bold flex items-center gap-2 mt-8">
          <Video className="w-6 h-6" />
          Benefits of Building Your Own VPN
        </h2>
        <div className="prose max-w-none">
          <h3>The Reality of Commercial VPNs</h3>
          <p>Most people know VPNs from the flashy ads of VPN providers claiming to solve all your privacy and security problems. But the truth? VPNs can only help you with privacy in a limited way. And that's something these companies won't tell you.</p>

          <h3>False Promises of VPN Companies</h3>
          <p>Commercial VPNs often advertise fear-based claims like: "Evil hackers will steal your banking details on café Wi-Fi!"</p>
          
          <p>Sure, before HTTPS was widely adopted, this was true. But today, almost every legitimate website uses HTTPS encryption. Even if a hacker tries to tamper with the connection, your browser will alert you.</p>
          
          <p>So, do you really need a VPN to protect you from something that's already secure?</p>

          <h3>Marketing vs Reality</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Another favorite pitch is "state-of-the-art military encryption." Here's the reality: while VPNs use AES encryption, the same encryption is used by websites and apps you use daily. It's not unique or exclusive to VPNs.</li>
            <li>Then there's the "no-logs" promise. Websites like NordVPN, PureVPN, and others proudly claim, "We don't keep logs," or "We never sell your data."</li>
          </ul>

          <p>Yet, history tells a different story. In 2017, PureVPN helped the FBI arrest Ryan Lin by handing over logs, proving that VPN companies may not always honor their "no-logs" claims.</p>

          <h3>Limitations of Commercial VPNs</h3>
          <p>While VPNs can hide your IP address and encrypt traffic between you and a server, they can't:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Stop your phone from tracking your location</li>
            <li>Prevent data breaches or phishing</li>
            <li>Block tracking cookies or browser fingerprinting</li>
          </ul>

          <p>And if you've been using the same email and username for years, VPNs won't stop companies or governments from cross-referencing and indexing your data online.</p>

          <h3>Why Build Your Own VPN?</h3>
          <p>Now let's talk about the solution—building your own VPN. Why is it better to build your own VPN instead of relying on commercial services?</p>

          <p>Because you have full control. When you use a commercial VPN, you're entrusting your sensitive data to a third party. If they experience a data breach—or worse, sell your data to advertisers—you're the one who loses.</p>

          <h3>Advantages of Personal VPN</h3>
          <p>Setting up your own VPN means:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data Ownership: You own your data. No one else has access to your browsing traffic or logs.</li>
            <li>Customization: You can tailor your VPN to suit your specific privacy and security needs.</li>
            <li>Enhanced Safety: Unlike commercial VPNs, where you share servers with thousands of others, your personal VPN is exclusively for you. This drastically reduces the risk of data leaks or malicious interference.</li>
          </ul>

          <p>Even with the best efforts of VPN companies, breaches still happen. The issue is that many breaches aren't discovered for months, leaving your data exposed long enough to go public.</p>

          <h3>Taking Control</h3>
          <p>With a personal VPN, you eliminate that risk. With your own VPN, you know exactly:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Where your data is</li>
            <li>Who can access it</li>
            <li>How secure it is</li>
          </ul>

          <p>You no longer have to trust a third party to protect your limited privacy. By taking control and building your own VPN, you're not just enhancing security—you're taking ownership of your online privacy.</p>

          <p className="mt-4">Privacy is not a one-click solution. It's something you build for yourself. That's what our project is.</p>
        </div>
      </div>
    ),
    "How to use": (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Settings className="w-6 h-6" />
          How to Use This Tutorial
        </h2>
        <div className="space-y-6">
          <section>
            <h3 className="text-xl font-semibold mb-2">Navigation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the tabs above to navigate between different sections</li>
              <li>Start with the Introduction to understand VPN concepts</li>
              <li>Follow the sections in order for the best learning experience</li>
              <li>Each section can be bookmarked for later reference</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Tutorial Structure</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Introduction: Overview and basic concepts</li>
              <li>Prerequisites: What you need before starting</li>
              <li>Server Installation: Setting up the VPN server</li>
              <li>Server Deployment: Configuring and launching the server</li>
              <li>Client Installation: Setting up VPN clients</li>
            </ul>
          </section>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800">
              Tip: You can share direct links to specific sections with others by copying the URL from your browser.
            </p>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="py-6">{content[activeTab as keyof typeof content]}</div>
  );
}

export default Tutorial;
