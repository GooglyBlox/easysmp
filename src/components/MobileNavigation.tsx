import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Info, Users, Award, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServerStatusData } from '../lib/types';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/join', label: 'Join', icon: Users },
  { href: '/vote', label: 'Vote', icon: Award },
];

const MobileNavigation: React.FC = () => {
  const [isStatusOpen, setIsStatusOpen] = useState(false);
  const [statusData, setStatusData] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const statusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('https://api.mcstatus.io/v2/status/java/play.ezsmp.live');
        if (!response.ok) {
          throw new Error('Failed to fetch server status');
        }
        const data: ServerStatusData = await response.json();
        setStatusData(data);
      } catch (error) {
        console.error('Error fetching server status:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (statusRef.current && !statusRef.current.contains(event.target as Node)) {
        setIsStatusOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleStatus = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsStatusOpen(!isStatusOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isStatusOpen && (
          <motion.div
            ref={statusRef}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-0 bottom-16 bg-gray-900 rounded-t-lg shadow-lg z-40"
            style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}
          >
            <div className="p-4 space-y-4">
              {loading ? (
                <p className="text-white text-center">Loading server status...</p>
              ) : statusData ? (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <StatusItem label="Status" value={statusData.online ? 'Online' : 'Offline'} color={statusData.online ? 'text-green-500' : 'text-red-500'} />
                    <StatusItem label="Players" value={`${statusData.players.online} / ${statusData.players.max}`} color="text-blue-500" />
                    <StatusItem label="Version" value={statusData.version.name_clean} color="text-yellow-500" />
                    <StatusItem label="MOTD" value={statusData.motd.clean} color="text-white" />
                  </div>
                  {statusData.players.list.length > 0 && (
                    <div className="mt-4">
                      <h4 className="text-lg font-semibold mb-2 text-green-400">Online Players:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {statusData.players.list.map((player) => (
                          <div key={player.uuid} className="bg-gray-800 px-3 py-2 rounded-md text-sm text-white flex items-center space-x-2">
                            <img
                              src={`https://mc-heads.net/avatar/${player.name_clean}/32`}
                              alt={`${player.name_clean}'s head`}
                              className="w-6 h-6 rounded-sm"
                            />
                            <span>{player.name_clean}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-white text-center">Failed to load server status.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 z-50">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <NavItem 
              key={item.href} 
              {...item} 
              isActive={pathname === item.href}
              onClick={() => setIsStatusOpen(false)}
            />
          ))}
          <button
            onClick={toggleStatus}
            className={`text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${
              statusData?.online ? 'text-green-500' : 'text-red-500'
            }`}
          >
            <Server className="h-6 w-6" />
          </button>
        </div>
      </nav>
    </>
  );
};

const NavItem: React.FC<{ 
  href: string; 
  label: string; 
  icon: React.ElementType; 
  isActive: boolean;
  onClick: () => void;
}> = ({ href, label, icon: Icon, isActive, onClick }) => (
  <Link 
    href={href} 
    className={`text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 ${isActive ? 'text-green-500' : ''}`}
    onClick={onClick}
  >
    <Icon className="h-6 w-6" />
  </Link>
);

const StatusItem: React.FC<{ label: string; value: string; color: string }> = ({ label, value, color }) => (
  <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-3">
    <p className="text-sm text-gray-400">{label}</p>
    <p className={`text-lg font-bold ${color}`}>{value}</p>
  </div>
);

export default MobileNavigation;