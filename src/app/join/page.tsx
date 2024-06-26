'use client';

import { useState } from 'react';
import MinecraftButton from '../../components/MinecraftButton';
import { toast, Toaster } from 'react-hot-toast';

export default function Join() {
  const [copied, setCopied] = useState(false);
  const serverAddress = "play.ezsmp.live";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(serverAddress);
      setCopied(true);
      toast.success('Server address copied!', {
        icon: '📋',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy address');
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Toaster position="bottom-center" />
      <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400 shadow-text">
        Join EasySMP
      </h1>
      <div className="panel max-w-3xl mb-12">
        <h2 className="text-3xl font-bold mb-4 text-green-400">How to Connect</h2>
        <ol className="list-decimal list-inside text-lg mb-6 space-y-4">
          <li>Open Minecraft (Java or Bedrock Edition)</li>
          <li>Go to Multiplayer or Servers</li>
          <li>Click &quot;Add Server&quot; or &quot;New Server&quot;</li>
          <li>Enter &quot;EasySMP&quot; as the server name</li>
          <li>Use &quot;play.ezsmp.live&quot; as the server address</li>
          <li>Click &quot;Done&quot; and join the server!</li>
        </ol>
        <div 
          className="bg-gray-700 p-4 rounded-lg mb-6 cursor-pointer"
          onClick={copyToClipboard}
        >
          <p className="text-xl text-center mb-2">
            Server Address:
          </p>
          <p className={`text-2xl font-bold text-yellow-400 text-center transition-all duration-300 ${
            copied ? 'scale-110' : ''
          }`}>
            {serverAddress}
          </p>
          <p className="text-sm mt-2 text-gray-400 text-center">(Click to copy)</p>
        </div>
        <p className="text-lg mb-6">
          Need help? Join our Discord server for assistance and to connect with other players!
        </p>
        <div className="flex justify-center">
          <MinecraftButton isDiscordButton className="text-xl px-8 py-3">
            Join Discord
          </MinecraftButton>
        </div>
      </div>
    </div>
  );
}