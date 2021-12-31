import { Link } from "@reach/router";
import { logo } from "../../utils/sharedAssets";
const Footer = () => {
    return (
        <div className="pt-12">
            <footer id="footer" className="relative z-50 bg-gray-900">
                <div className="py-16 flex flex-col justify-center items-center">
                    <Link to="/">
                        <img src={logo} className="h-20 w-auto" alt="Logo" />
                    </Link>
                    <div className="flex gap-4 text-gray-500">
                        <p>Credit:</p>
                        <a href="https://github.com/lukePeavey/quotable" className="underline" target="_blank" rel="noreferrer">Quotable </a>
                        <a href="htpps://api.audio" className="underline" target="_blank" rel="noreferrer">API.Audio</a>
                    </div>
                    <p className="mt-6 text-xs lg:text-sm leading-none text-gray-50">{new Date().getFullYear()} Quote Reader. All Rights Reserved.</p>
                </div>
            </footer >
        </div >
    );
};
export default Footer;
