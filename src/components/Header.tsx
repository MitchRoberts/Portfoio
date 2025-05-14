'use client';

type HeaderProps = {
  onNavigate: (section: string) => void;
  activeSection: string;
};

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-lg font-bold cursor-pointer" onClick={() => onNavigate('home')}>
          Mitch Roberts
        </div>
        <nav className="flex space-x-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => onNavigate(item)}
              className={`uppercase text-sm tracking-widest transition-colors duration-200 ${
                activeSection === item ? 'text-pink-400' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
