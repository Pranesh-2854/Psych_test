import './Navbar.css'
export default function Navbar() {
    return (
      <nav className="navbar">
        <h2>MindMetrics</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    );
  }