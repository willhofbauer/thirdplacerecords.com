export function BandcampIcon({ size = 24 }: { size?: number }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            className="hover:fill-teal-400 transition-colors duration-300"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Bandcamp</title>
            <path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" />
        </svg>
    );
} 