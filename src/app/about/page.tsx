import MinecraftButton from '../../components/MinecraftButton';

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-center text-yellow-400 shadow-text">
        About EasySMP
      </h1>
      <div className="panel max-w-3xl mb-12">
        <p className="text-xl mb-6">
          EasySMP is a friendly and engaging Minecraft server community where players can explore, build, and connect with others in a vast and exciting world. Our server is designed to provide a balanced and enjoyable experience for both new and experienced players.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-green-400">Server Features</h2>
        <ul className="list-disc list-inside text-lg mb-6 space-y-2">
          <li>Custom world generation with breathtaking landscapes</li>
          <li>Active and helpful community</li>
          <li>Grief protection using Towny</li>
          <li>Regular events and competitions</li>
          <li>Balanced economy system</li>
          <li>Custom plugins for enhanced gameplay</li>
        </ul>
        <MinecraftButton isDiscordButton className="text-xl px-8 py-3">
          Join Our Discord
        </MinecraftButton>
      </div>
    </div>
  );
}