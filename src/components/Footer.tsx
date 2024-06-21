import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">EasySMP</h3>
            <p className="mb-4">Join our friendly Minecraft community today!</p>
            <Link href="#join" className="text-primary hover:underline">
              Get Started
            </Link>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-white">About</Link></li>
              <li><Link href="#features" className="hover:text-white">Features</Link></li>
              <li><Link href="#join" className="hover:text-white">Join</Link></li>
              <li><Link href="#faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <Link href="https://discord.gg/easysmp" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#7289da] text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
              Join our Discord
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p>&copy; 2024 EasySMP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;