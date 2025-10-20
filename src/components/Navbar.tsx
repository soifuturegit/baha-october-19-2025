import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, FolderGit2, Trophy, Heart, HandHeart, Mail, GraduationCap, ChevronRight, Image, Building2, MessageSquare, FileText } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

export default function Navbar() {
  const activeSection = useActiveSection();

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Education', href: '#education', icon: GraduationCap },
    { label: 'Experience', href: '#experience', icon: Briefcase },
    { label: 'Projects', href: '#projects', icon: FolderGit2 },
    { label: 'Gallery', href: '#gallery', icon: Image },
    { label: 'Companies', href: '#companies', icon: Building2 },
    { label: 'Founder Feedback', href: '#founder-feedback', icon: MessageSquare },
    { label: 'References', href: '#references', icon: FileText },
    { label: 'Impact & Volunteering', href: '#impact', icon: HandHeart },
    { label: 'Achievements', href: '#achievements', icon: Trophy },
    { label: 'Skills & Interests', href: '#skills-interests', icon: Heart },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Mobile Bottom Navigation - Horizontal Scroll */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-sm border-t border-emerald-500/30 pb-safe">
        <div className="relative">
          {/* Scroll indicator - left side */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-neutral-950 to-transparent z-10 flex items-center justify-start pl-2 pointer-events-none">
            <ChevronRight className="w-5 h-5 text-emerald-400 animate-pulse" />
          </div>

          {/* Scrollable nav items */}
          <div className="flex gap-2 p-3 min-w-max overflow-x-auto hide-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.href === '/'
              ? location.pathname === '/' && !activeSection
              : item.href.startsWith('#')
                ? activeSection === item.href.slice(1)
                : location.pathname === item.href;

            const NavLink = item.href.startsWith('#') ? 'a' : Link;

            const handleClick = (e: React.MouseEvent) => {
              if (item.href === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            };

            return (
              <NavLink
                key={item.label}
                to={item.href.startsWith('#') ? undefined : item.href}
                href={item.href.startsWith('#') ? item.href : undefined}
                onClick={handleClick}
                className={`
                  flex flex-col items-center gap-1 px-4 py-2 rounded-xl min-w-[80px] transition-all duration-300
                  ${isActive ? 'bg-emerald-500/20 border border-emerald-500/30' : 'hover:bg-neutral-900'}
                `}
              >
                <Icon className={`
                  w-5 h-5 transition-colors duration-300
                  ${isActive ? 'text-emerald-400' : 'text-neutral-400'}
                `} />
                <span className={`
                  text-xs font-medium whitespace-nowrap transition-colors duration-300
                  ${isActive ? 'text-white' : 'text-neutral-400'}
                `}>
                  {item.label}
                </span>
              </NavLink>
            );
          })}
          </div>
        </div>
      </nav>

      {/* Desktop Sidebar Navigation */}
      <nav className={`
        hidden lg:flex
        fixed top-0 left-0 h-screen w-[240px] bg-neutral-950/95 backdrop-blur-sm border-r border-emerald-500/30
        flex-col z-40
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-emerald-500/30">
          <Link to="/" className="relative group inline-flex items-center">
            <div className="flex items-center space-x-1.5">
              <span className="text-lg font-bold text-emerald-500 group-hover:text-emerald-400 transition-all duration-300">
                Bahauddin
              </span>
              <span className="text-lg font-light text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                Chishte
              </span>
            </div>
            <div className="absolute inset-0 -m-3 border border-neutral-800 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />
          </Link>
        </div>

        {/* Nav Items */}
        <div className="flex-1 overflow-y-auto py-6">
          <div className="px-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.href === '/'
                ? location.pathname === '/' && !activeSection
                : item.href.startsWith('#')
                  ? activeSection === item.href.slice(1)
                  : location.pathname === item.href;

              const NavLink = item.href.startsWith('#') ? 'a' : Link;

              const handleClick = (e: React.MouseEvent) => {
                if (item.href === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              };

              return (
                <NavLink
                  key={item.label}
                  to={item.href.startsWith('#') ? undefined : item.href}
                  href={item.href.startsWith('#') ? item.href : undefined}
                  onClick={handleClick}
                  className={`
                    relative group flex items-center gap-3 px-4 py-3 text-[15px] font-medium rounded-xl
                    hover:bg-neutral-900 transition-all duration-300
                    ${isActive ? 'bg-neutral-900 border-neutral-800' : ''}
                  `}
                >
                  <Icon className={`
                    w-5 h-5 transition-colors duration-300
                    ${isActive ? 'text-emerald-400' : 'text-neutral-400 group-hover:text-emerald-400'}
                  `} />
                  <span className={`
                    relative z-10 transition-colors duration-300
                    ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}
                  `}>
                    {item.label}
                  </span>
                  <div className={`
                    absolute inset-0 rounded-xl border transition-colors duration-300
                    ${isActive ? 'border-neutral-800' : 'border-transparent group-hover:border-neutral-800'}
                  `} />
                  <ChevronRight className={`
                    absolute right-3 w-4 h-4 transition-all duration-300
                    ${isActive
                      ? 'opacity-100 translate-x-0 text-emerald-400'
                      : 'opacity-0 -translate-x-2 text-neutral-400 group-hover:opacity-100 group-hover:translate-x-0'}
                  `} />
                </NavLink>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-emerald-500/30">
          <p className="text-[15px] text-neutral-500 text-center">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </nav>
    </>
  );
}