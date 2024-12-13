import { Shield, Server, Download, Settings, Video, FileText, Network } from "lucide-react";

interface TutorialProps {
  activeTab: string;
}

export function Tutorial({ activeTab }: TutorialProps) {
  const content = {
    "Project Introduction": (
      <div className="space-y-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Network className="w-6 h-6" />
          OpenVPN Tutorial Project
        </h2>
        <div className="prose max-w-none">
          <h3 className="text-xl font-semibold mb-2 mt-8">Project Overview</h3>
          <p>Welcome to our OpenVPN Tutorial project. This comprehensive guide will help you understand and implement your own VPN solution.</p>
          <p>This tutorial covers everything you need to know about setting up your own VPN server, from basic concepts to detailed implementation steps.</p>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">What You'll Learn</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Understanding VPN concepts and importance</li>
              <li>Why building your own VPN is better than commercial solutions</li>
              <li>Step-by-step server setup and configuration</li>
              <li>Client configuration and deployment</li>
            </ul>
          </div>


          <h3 className="text-xl font-semibold mb-2 mt-8">Getting Started</h3>
          <p>Navigate through the tabs above to access different sections of the tutorial:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Video:</strong> Watch our explanatory videos about VPN concepts</li>
            <li><strong>Video Transcript:</strong> Read detailed transcripts of the videos</li>
            <li><strong>Server Installation:</strong> Follow our step-by-step server setup guide</li>
            <li><strong>Client Installation:</strong> Learn how to configure VPN clients</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 mt-8">Project Repository</h3>
          <p>The complete source code for this project is available on <a href="https://github.com/monkeyark/cpre530" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>.</p>
        </div>
      </div>
    ),
    Video: (
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
    "Server Installation": (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Prerequisites
        </h2>
        <div className="space-y-4">
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
            OpenVPN Server Installation
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
            OpenVPN Server Deployment
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
              1. Install OpenVPN Client
            </h3>
            <div className="space-y-4">
              <p>Download and install the official OpenVPN Connect client for your platform:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Windows</h4>
                  <p className="mb-2">Download the official OpenVPN Connect client from OpenVPN website.</p>
                  <a 
                    href="https://openvpn.net/client/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Download for Windows →
                  </a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">MacOS</h4>
                  <p className="mb-2">Get the OpenVPN Connect client for Mac.</p>
                  <a 
                    href="https://openvpn.net/client/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Download for MacOS →
                  </a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Linux</h4>
                  <p className="mb-2">Install via package manager or download from website:</p>
                  <pre className="bg-gray-800 text-white p-2 rounded-lg text-sm mb-2">
                    <code>sudo apt install openvpn</code>
                  </pre>
                  <a 
                    href="https://openvpn.net/client/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Download for Linux →
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Visit <a 
                  href="https://openvpn.net/client/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  OpenVPN's official client page
                </a> for more platforms including Android, iOS, and ChromeOS.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              2. Download Client Configuration
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">Download client configuration file with certificates:</p>
              <a
                href="/keys/bandwagon.ovpn"
                download
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Client Config
              </a>
              <p className="mt-4 text-sm text-gray-600">
                ⚠️ Keep this file secure! It contains your client certificates and private key.
              </p>
            </div>
          </section>
        </div>
      </div>
    ),
    "Video Transcript": (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="w-6 h-6" />
          Understanding VPN Concepts
        </h2>
        <div className="prose max-w-none">
         
     
              Hello everyone, It's my honor and pleasure to share some information as part of this course project.

        

          <h3 className="text-xl font-semibold mb-2 mt-8">Understanding VPN through a Bank Robbery Analogy</h3>
          <p>In this video, we'll understand what a VPN is and how it works. So let's consider this practical bank robbery example.</p>
          
          <div className="pl-4 border-l-4 border-gray-200 space-y-4">
            <p>Assume, There is a group of robbers who want to rob this particular bank. One option could be to go straight into this bank and try to rob it.</p>
            
            <p>But obviously this is a very risky option because these robbers can be tracked very easily on their way to this robbery or while coming back, police can easily track their location, the route from where they came to the bank. So it's not a very good option for any robber to straight away go and rob the bank.</p>
            
            <p>The other option which robbers might try is to actually dig a tunnel from their house directly inside the locker room of the bank. And what it helps, is that the robbers cannot be tracked through a normal route and their location also cannot be tracked. So they can directly go inside and then come back robbing the bank.</p>
            
            <p>This is a famous technique which many robbers have used in various movies, including one of the famous series Money Heist from Netflix. So in a similar way, not in a negative but in a positive way, VPN exactly does the same thing. It helps you log into a public network anonymously and privately without anyone coming to know about your credentials and about your location.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-8">How VPN Works</h3>
          <div className="pl-4 border-l-4 border-gray-200 space-y-4">
            <p>In order to work from home, we need to install a VPN client on our laptop. And this VPN client establishes a VPN tunnel, a virtual private network within the public network, which then connects to the VPN server and then from the VPN server, it connects to the company server.</p>
            
            <p>So then your information from your home network via public network to the office network. But the difference between a normal connection and a VPN connection is that even while traveling within the public network, your data and your information remains completely anonymous, completely unknown, so that there could not be any attack from the outside network within this VPN tunnel.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-8">Benefits of VPN</h3>
          <div className="pl-4 border-l-4 border-gray-200">
            <p>In this way, a VPN network enables all your information to be completely secure from the outside world. And basically what it secures:</p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>It secures your IP address</li>
              <li>It secures all your important data</li>
              <li>What you are trying to send to your office network and vice versa</li>
            </ul>
            
            <p>At no point of time, the outside network or people sitting in the public network could know that, from where the request is coming from and, where it is going, because it is completely managed by this particular VPN server.</p>
            
            <p>And it can very well be possible that you might be accessing your office network sitting in other country, your VPN server might be somewhere in Europe, and your actual office is somewhere in United States.</p>
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-8">Key Benefits</h3>
          <div className="pl-4 border-l-4 border-gray-200">
            <p>Two main benefits that VPN provides:</p>
            <ol className="list-decimal pl-6 space-y-2 my-4">
              <li>Anonymity: Hiding your identity from which location you're accessing what, what is your IP address and all that information</li>
              <li>Privacy: Hiding your activity, which websites you are visiting, what kind of work you are doing on your personal machine</li>
            </ol>
          </div>

          <h3 className="text-xl font-semibold mb-2 mt-8">Personal Use Case</h3>
          <div className="pl-4 border-l-4 border-gray-200">
            <p>Now, this is a scenario for connecting to your office network. But what for our personal use? Can we use VPN then as well? Of course, we should use VPN even while accessing a public Wi-Fi or a public network through our personal laptop.</p>
            
            <p>Take for an example, we are sitting in an airport and waiting for our flight and we randomly connect to the airport WIFI and do a banking transaction in normal manner, we connect from a mobile, and open the banking mobile app, Enter our customer ID pin then it goes to the banking server but all this critical information is being passed through a public network which is not at all secured.</p>
          </div>

          <p className="mt-8 italic">Thank you</p>
        </div>
        <h2 className="text-2xl font-bold flex items-center gap-2 mt-8">
          <FileText className="w-6 h-6" />
          Benefits of Building Your Own VPN
        </h2>
        <div className="prose max-w-none">
          <p>Why building your own VPN is good and why commercial VPN are not Effective</p>
          
          <p>Most people know VPNs from the flashy ads of VPN providers claiming to solve all your privacy and security problems. But the truth? VPNs can only help you with privacy in a limited way. And that's something these companies won't tell you.</p>

          <h3 className="text-xl font-semibold mb-2 mt-8">False Promises of VPN Companies</h3>
          <p>Commercial VPNs often advertise fear-based claims like: "Evil hackers will steal your banking details on café Wi-Fi!"</p>
          
          <p>Sure, before HTTPS was widely adopted, this was true. But today, almost every legitimate website uses HTTPS encryption. Even if a hacker tries to tamper with the connection, your browser will alert you.</p>
          
          <p>So, do you really need a VPN to protect you from something that's already secure?</p>
          
          <p>Another favorite pitch is "state-of-the-art military encryption." Here's the reality: while VPNs use AES encryption, the same encryption is used by websites and apps you use daily. It's not unique or exclusive to VPNs.</p>
          
          <p>Then there's the "no-logs" promise. Websites like NordVPN, PureVPN, and others proudly claim, "We don't keep logs," or "We never sell your data."</p>
          
          <p>Yet, history tells a different story. In 2017, PureVPN helped the FBI arrest Ryan Lin by handing over logs, proving that VPN companies may not always honor their "no-logs" claims.</p>

          <h3 className="text-xl font-semibold mb-2 mt-8">Limitations of Commercial VPNs</h3>
          <p>While VPNs can hide your IP address and encrypt traffic between you and a server, they can't:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Stop your phone from tracking your location</li>
            <li>Prevent data breaches or phishing</li>
            <li>Block tracking cookies or browser fingerprinting</li>
          </ul>

          <p>And if you've been using the same email and username for years, VPNs won't stop companies or governments from cross-referencing and indexing your data online.</p>

          <h3 className="text-xl font-semibold mb-2 mt-8">Benefits of Building Your Own VPN</h3>
          <p>Now let's talk about the solution—building your own VPN. Why is it better to build your own VPN instead of relying on commercial services?</p>
          
          <p>Because you have full control. When you use a commercial VPN, you're entrusting your sensitive data to a third party. If they experience a data breach—or worse, sell your data to advertisers—you're the one who loses.</p>
          
          <p>Setting up your own VPN means:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data Ownership: You own your data. No one else has access to your browsing traffic or logs.</li>
            <li>Customization: You can tailor your VPN to suit your specific privacy and security needs.</li>
            <li>Enhanced Safety: Unlike commercial VPNs, where you share servers with thousands of others, your personal VPN is exclusively for you.</li>
          </ul>

          <p>Even with the best efforts of VPN companies, breaches still happen. The issue is that many breaches aren't discovered for months, leaving your data exposed long enough to go public.</p>
          
          <p>With a personal VPN, you eliminate that risk. With your own VPN, you know exactly where your data is, who can access it, and how secure it is.</p>
          
          <p>You no longer have to trust a third party to protect your limited privacy. By taking control and building your own VPN, you're not just enhancing security—you're taking ownership of your online privacy.</p>
          
          <p>Privacy is not a one-click solution. It's something you build for yourself. That's what our project is.</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="py-6">{content[activeTab as keyof typeof content]}</div>
  );
}

export default Tutorial;
