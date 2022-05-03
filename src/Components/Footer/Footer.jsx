import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export function Footer() {
  return (
    <>
      <footer className="footer text-center flex-col space-y-2 border-t-2 border-gray-300 dark:border-t-0 py-2">
        <h3 className="text-xl text-gray-800 dark:text-white">
          Made with <i className="fas fa-heart text-yellow-500"></i> by Raman
        </h3>
        <div>
          <a
            className="mx-2"
            href="https://github.com/raman1999"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="inline text-xl" />
          </a>
          <a
            className="mx-2"
            href="https://twitter.com/raman_joshi99"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter className="inline text-xl" />
          </a>
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/raman-joshi-01325b168/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="inline text-xl" />
          </a>
        </div>
      </footer>
    </>
  );
}
