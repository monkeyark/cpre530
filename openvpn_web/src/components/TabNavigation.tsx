import React from 'react';
import { cn } from '../utils/cn';

interface TabProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TabNavigation({ tabs, activeTab, onTabChange }: TabProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex px-6" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={cn(
              'whitespace-nowrap border-b-2 py-4 px-8 text-sm font-medium transition-colors',
              activeTab === tab
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
            )}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
}