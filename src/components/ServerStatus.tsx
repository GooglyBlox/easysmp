'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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

const ServerStatus = () => {
  const [statusData, setStatusData] = useState<ServerStatusData | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div className="minecraft-container text-center p-6">Loading server status...</div>;
  }

  if (!statusData) {
    return <div className="minecraft-container text-center p-6">Failed to load server status.</div>;
  }

  return (
    <motion.div
      className="minecraft-container p-6 bg-gray-800 shadow-lg max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-yellow-400">Server Status</h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <StatusItem label="Status" value={statusData.online ? 'ONLINE' : 'OFFLINE'} color={statusData.online ? 'text-green-400' : 'text-red-400'} />
        <StatusItem label="Players" value={`${statusData.players.online} / ${statusData.players.max}`} color="text-yellow-400" />
        <StatusItem label="Version" value={statusData.version.name_clean} color="text-blue-400" />
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-400 mb-1">MOTD:</p>
        <p className="text-green-300">{statusData.motd.clean}</p>
      </div>
      {statusData.players.list.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold mb-2 text-yellow-400">Online Players:</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {statusData.players.list.map((player) => (
              <motion.span
                key={player.uuid}
                className="bg-gray-700 px-2 py-1 rounded text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {player.name_clean}
              </motion.span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const StatusItem = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div className="text-center">
    <p className="text-sm text-gray-400 mb-1">{label}</p>
    <p className={`text-lg font-bold ${color}`}>{value}</p>
  </div>
);

export default ServerStatus;
