

const Footer = () => {
    return (
        <footer className="border-t border-black/10 bg-[var(--color-background)] px-6 py-6">
            <p className="text-center text-sm text-black sm:text-base">
                © {new Date().getFullYear()} VIDE — study with an AI that adapts to you.
            </p>
        </footer>
    );
};

export default Footer;