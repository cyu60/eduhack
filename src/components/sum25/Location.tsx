export default function Location() {
    return (
        <div className="mt-12 max-w-6xl mx-auto pt-8">
            <h2 className="m-4 text-5xl font-medium text-[var(--darkRed)]">
                Event Location
            </h2>
            <div className="h-[400px] w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.5284139418823!2d-122.1669823!3d37.42462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbad6c545d035%3A0x21b1c44ea2bbcbb5!2sCenter%20for%20Education%20Research%20at%20Stanford%20(CERAS)!5e0!3m2!1sen!2sus!4v1749340289734!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}