// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-zinc-900 text-white py-10 px-5 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* DevFlix Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">DevFlix</h2>
            <p className="text-sm text-zinc-400">
              Your ultimate learning hub for DSA, Development, Core CS, and more. Powered by community, curated with love.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="/roadmaps" className="hover:underline">Roadmaps</a></li>
              <li><a href="/courses" className="hover:underline">Courses</a></li>
              <li><a href="/compiler" className="hover:underline">Online Compiler</a></li>
              <li><a href="/community" className="hover:underline">Community</a></li>
            </ul>
          </div>
  
          {/* Compilers */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Compilers</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="https://www.google.com/search?q=online+c+compiler" target="_blank" className="hover:underline">C Compiler</a></li>
              <li><a href="https://www.google.com/search?q=online+cpp+compiler" target="_blank" className="hover:underline">C++ Compiler</a></li>
              <li><a href="https://www.google.com/search?q=online+java+compiler" target="_blank" className="hover:underline">Java Compiler</a></li>
              <li><a href="https://www.google.com/search?q=online+python+compiler" target="_blank" className="hover:underline">Python Compiler</a></li>
              <li><a href="https://www.google.com/search?q=online+javascript+compiler" target="_blank" className="hover:underline">JavaScript Compiler</a></li>
              <li><a href="https://www.google.com/search?q=online+go+compiler" target="_blank" className="hover:underline">Go Compiler</a></li>
            </ul>
          </div>
  
          {/* Contact / Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li><a href="https://discord.gg/devflix" className="hover:underline" target="_blank">Join our Discord</a></li>
              <li><a href="https://twitter.com/devflix" className="hover:underline" target="_blank">Twitter / X</a></li>
              <li><a href="mailto:contact@devflix.com" className="hover:underline">Email Us</a></li>
            </ul>
          </div>
        </div>
  
        <div className="text-center text-zinc-500 text-sm mt-10 border-t border-zinc-700 pt-6">
          © {new Date().getFullYear()} DevFlix. Made with ❤️ by developers, for developers.
        </div>
      </footer>
    );
  }
  