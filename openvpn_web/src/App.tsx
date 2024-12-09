import { useState } from 'react';
import { TabNavigation } from './components/TabNavigation';
import { Tutorial } from './components/Tutorial';
import { Network } from 'lucide-react';

function App() {
  const tabs = ['Introduction', 'Video Transcript', 'Prerequisites', 'Server Installation', 'Server Deployment', 'Client Installation'];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <Network className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">OpenVPN Tutorial</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <TabNavigation
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          <div className="p-6">
            <Tutorial activeTab={activeTab} />
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      </footer>
    </div>
  );
}

export default App;