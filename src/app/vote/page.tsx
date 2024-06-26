import MinecraftButton from '../../components/MinecraftButton';

const votingSites = [
  { name: "Minelist", url: "https://minelist.net/vote/4422" },
  { name: "TopG", url: "https://topg.org/minecraft-servers/server-664463" },
  { name: "Minecraft-MP", url: "https://minecraft-mp.com/server/332862/vote/" },
  { name: "Curseforge", url: "https://www.curseforge.com/servers/minecraft/game/easy-smp/vote" },
  { name: "Top Minecraft Servers", url: "https://topminecraftservers.org/server/37895" },
  { name: "MinecraftServers.org", url: "https://minecraftservers.org/vote/663064" }
];

export default function Vote() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-8 text-center shadow-text">
        Vote for EasySMP
      </h1>
      <div className="panel max-w-3xl mb-12">
        <p className="text-xl mb-6 text-center">
          Support our server by voting! Each vote helps us grow and gives you awesome in-game rewards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {votingSites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <MinecraftButton className="w-full text-lg py-3">
                Vote on {site.name}
              </MinecraftButton>
            </a>
          ))}
        </div>
        <p className="text-lg text-center">
          Remember to vote on all sites daily for maximum rewards!
        </p>
      </div>
      <MinecraftButton isDiscordButton className="text-xl px-8 py-3">
        Join Our Discord
      </MinecraftButton>
    </div>
  );
}