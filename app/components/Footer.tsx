import { FC } from "react";
import { DiscogsIcon } from "./icons/DiscogsIcon";
import { BandcampIcon } from "./icons/BandcampIcon";
import { SoundCloudIcon } from "./icons/SoundCloudIcon";
import { InstagramIcon } from "./icons/InstagramIcon";

export const Footer: FC = () => {
    return (
        <footer className="mt-auto fixed bottom-0 w-full backdrop-blur-md border-t py-4 bg-white bg-opacity-50">
            <div className="flex flex-col items-center justify-cente ">
                <div className="flex space-x-6">
                    <a
                        href="https://soundcloud.com/thirdplacerecords"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary hover:scale-125 transition-transform duration-300"
                        aria-label="SoundCloud"
                    >
                        <SoundCloudIcon />
                    </a>
                    <a
                        href="https://www.instagram.com/thirdplacerecords/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary hover:scale-125 transition-transform duration-300"
                        aria-label="Instagram"
                    >
                        <InstagramIcon />
                    </a>
                    <a
                        href="https://thirdplacerecords.bandcamp.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary hover:scale-125 transition-transform duration-300"
                        aria-label="Bandcamp"
                    >
                        <BandcampIcon />
                    </a>
                    <a
                        href="https://www.discogs.com/label/1583957-Third-Place-Records"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary hover:scale-125 transition-transform duration-300"
                        aria-label="Discogs"
                    >
                        <DiscogsIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
};