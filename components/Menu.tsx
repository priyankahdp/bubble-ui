import Link from 'next/link';

const Menu = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <ul>
        <li className="mb-4">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/about" className="hover:text-gray-400">
            Select the Sprint
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/contact" className="hover:text-gray-400">
            Select the fixed version (release)/Add issues to the fixed version
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/download" className="hover:text-gray-400">
            Create release page
          </Link>
        </li>
        <li className="mb-4">
          <Link href="/upload" className="hover:text-gray-400">
            Create SSCM ticket/Link tickets into SSCM
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
