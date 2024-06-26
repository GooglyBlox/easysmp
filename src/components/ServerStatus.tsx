'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Users, ChevronUp, ChevronDown } from 'lucide-react';

interface Player {
  uuid: string;
  name_clean: string;
}

interface ServerStatusData {
  online: boolean;
  players: {
    online: number;
    max: number;
    list: Player[];
  };
  version: {
    name_clean: string;
  };
  motd: {
    clean: string;
  };
}

const ServerStatus: React.FC = () => {
  const [statusData, setStatusData] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

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
    // Emit event when component mounts and whenever isOpen changes
    window.dispatchEvent(new CustomEvent('serverStatusChange', { detail: { isOpen } }));
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(!isOpen);

  if (loading) {
    return null;
  }

  if (!statusData) {
    return null;
  }

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 md:left-16 bg-gray-900 border-t-4 border-green-500 shadow-lg z-30"
      initial={{ y: "100%" }}
      animate={{ y: isOpen ? 0 : "calc(100% - 3rem)" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div 
        className="flex items-center justify-between px-4 py-2 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex items-center space-x-2">
          <Server className={`w-6 h-6 ${statusData?.online ? 'text-green-500' : 'text-red-500'}`} />
          <span className="font-bold text-lg">Server Status</span>
        </div>
        {isOpen ? <ChevronDown className="w-6 w-6" /> : <ChevronUp className="w-6 w-6" />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 space-y-4 pb-16 md:pb-4"
          >
            <div className="grid grid-cols-3 gap-4">
              <StatusItem
                icon={<Server className="w-6 h-6" />}
                label="Status"
                value={statusData.online ? 'Online' : 'Offline'}
                color={statusData.online ? 'text-green-500' : 'text-red-500'}
              />
              <StatusItem
                icon={<Users className="w-6 h-6" />}
                label="Players"
                value={`${statusData.players.online} / ${statusData.players.max}`}
                color="text-blue-500"
              />
              <StatusItem
                icon={<Server className="w-6 h-6" />}
                label="Version"
                value={statusData.version.name_clean}
                color="text-yellow-500"
              />
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-green-400">MOTD:</h4>
              <p className="text-white">{statusData.motd.clean}</p>
            </div>
            {statusData.players.list.length > 0 && (
              <div>
                <h4 className="text-lg font-semibold mb-2 text-green-400">Online Players:</h4>
                <div className="flex flex-wrap gap-2">
                  {statusData.players.list.map((player) => (
                    <span
                      key={player.uuid}
                      className="bg-gray-800 px-2 py-1 rounded text-sm text-white"
                    >
                      {player.name_clean}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const StatusItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}> = ({ icon, label, value, color }) => (
  <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-3">
    {icon}
    <p className="text-sm text-gray-400 mt-1">{label}</p>
    <p className={`text-lg font-bold ${color}`}>{value}</p>
  </div>
);

export default ServerStatus;