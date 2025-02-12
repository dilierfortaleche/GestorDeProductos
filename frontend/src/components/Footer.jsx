import React from "react";

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3 fixed-bottom footer-height">
            <p className="mb-2 fw-bold">© 2025 Todos los derechos son de Dilier Esteban Fortaleche Lopez.</p>
            <div className="d-flex justify-content-center gap-3">
                <a
                    href="https://www.facebook.com/profile.php?id=100092180977566"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-withe text-decoration-none link-withe hover-link-primary"
                >
                    Facebook
                </a>
                <a
                    href="https://www.instagram.com/fortalechedilier?igsh=YXN1emEzY25yc2F2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-withe text-decoration-none link-withe hover-link-primary"
                >
                    instagram
                </a>
                <a
                    href="https://www.linkedin.com/in/estebanfortaleche/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-withe text-decoration-none link-withe hover-link-primary"
                >
                    linkedin
                </a>
            </div>
        </footer>
    );
}

export default Footer;
