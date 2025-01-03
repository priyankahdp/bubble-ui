import Link from 'next/link';

const Menu = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <ul>
        <li className="mb-4">
          <Link href="/" className="hover:text-gray-400">
            1. Configuration
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/about" className="hover:text-gray-400">
            2. Select the Sprint
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/contact" className="hover:text-gray-400">
            3. Select the fixed version (release)
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/contact" className="hover:text-gray-400">
            4. Add issues to the fixed version
          </Link>
        </li>

        <li className="mb-4">
          <Link href="/download" className="hover:text-gray-400">
            5. Create release page
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/upload" className="hover:text-gray-400">
            6. Create SSCM ticket
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/upload" className="hover:text-gray-400">
            7. Link tickets into SSCM
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/upload" className="hover:text-gray-400">
            8. Finalize versions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
