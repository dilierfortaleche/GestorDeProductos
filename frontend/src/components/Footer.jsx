import React from "react";

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3 fixed-bottom footer-height">
            <p className="mb-2 fw-bold">© 2025 Todos los derechos son de Dilier Esteban Fortaleche Lopez.</p>
            <div className="d-flex justify-content-center gap-3">
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary text-decoration-none"
                    className="link-secondary hover-link-primary"
                >
                    Facebook
                </a>
                <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary text-decoration-none"
                    className="link-secondary"
                >
                    Twitter
                </a>
                <a
                    href="https://www.linkedin.com/in/estebanfortaleche/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary text-decoration-none"
                    className="link-secondary"
                >
                    linkedin
                </a>
            </div>
        </footer>
    );
}

export default Footer;
