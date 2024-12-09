import { useState, useEffect } from 'react';
import { TabNavigation } from './components/TabNavigation';
import { Tutorial } from './components/Tutorial';
import { Network } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {
  const tabs = ['Introduction', 'Video Transcript', 'Prerequisites', 'Server Installation', 'Server Deployment', 'Client Installation'];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const navigate = useNavigate();
  const location = useLocation();

  // Convert tab names to URL-friendly format
  const getTabPath = (tab: string) => `/${tab.toLowerCase().replace(/\s+/g, '-')}`;
  const getTabFromPath = (path: string) => {
    const formatted = path.slice(1).replace(/-/g, ' ');
    return tabs.find(tab => tab.toLowerCase() === formatted) || tabs[0];
  };

  // Update active tab based on URL
  useEffect(() => {
    const currentTab = getTabFromPath(location.pathname);
    setActiveTab(currentTab);
  }, [location.pathname]);

  // Handle tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(getTabPath(tab));
  };

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
            onTabChange={handleTabChange}
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