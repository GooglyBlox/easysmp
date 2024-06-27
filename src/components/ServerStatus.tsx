/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Server, Users, ChevronUp, ChevronDown, Clock, Gamepad } from 'lucide-react';
import { ServerStatusData } from '../lib/types';

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
        {isOpen ? <ChevronDown className="w-6 h-6" /> : <ChevronUp className="w-6 h-6" />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4 space-y-4 pb-16 md:pb-4 max-h-[70vh] overflow-y-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatusItem
                icon={<Server className="w-6 h-6" />}
                label="Status"
                value={statusData.online ? 'Online' : 'Offline'}
                valueColor={statusData.online ? 'text-green-400' : 'text-red-400'}
              />
              <StatusItem
                icon={<Users className="w-6 h-6" />}
                label="Players"
                value={`${statusData.players.online} / ${statusData.players.max}`}
                valueColor="text-blue-400"
              />
              <StatusItem
                icon={<Gamepad className="w-6 h-6" />}
                label="Version"
                value={statusData.version.name_clean}
                valueColor="text-yellow-400"
              />
              <StatusItem
                icon={<Clock className="w-6 h-6" />}
                label="Last Updated"
                value={new Date().toLocaleTimeString()}
                valueColor="text-purple-400"
              />
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2 text-green-400">MOTD:</h4>
              <p className="text-white">{statusData.motd.clean}</p>
            </div>
            {statusData.players.list.length > 0 && (
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2 text-green-400">Online Players:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                  {statusData.players.list.map((player) => (
                    <div
                      key={player.uuid}
                      className="bg-gray-700 px-3 py-2 rounded-md text-sm text-white flex items-center space-x-2"
                    >
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
  valueColor: string;
}> = ({ icon, label, value, valueColor }) => (
  <div className="bg-gray-800 rounded-lg p-4 shadow-md border border-gray-700 hover:border-gray-600 transition-colors duration-300">
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <div className="text-gray-400 mr-2">{icon}</div>
        <span className="text-sm font-medium text-gray-300">{label}</span>
      </div>
    </div>
    <p className={`text-lg font-bold ${valueColor} truncate`}>{value}</p>
  </div>
);

export default ServerStatus;