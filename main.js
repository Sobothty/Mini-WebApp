import { Footer } from './src/components/Footer.js';
import { Navbar } from './src/components/Navbar.js';

// adding navbar components
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    if (header) {
        header.innerHTML = '';
        header.appendChild(Navbar());
    }
});

// adding footer components
document.addEventListener('DOMContentLoaded', () =>{
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = '';
        footer.appendChild(Footer());
    }
});