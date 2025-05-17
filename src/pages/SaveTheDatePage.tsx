export default function SaveTheDatePage() {
    return (
        <>
            {/* Mobile Layout */}
            <main className="relative flex flex-col h-screen lg:hidden">

                {/* Background image and overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale"
                    style={{ backgroundImage: "url('/emma.png')" }}
                    aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50" />

                {/* Text Overlay */}
                <div className="relative z-10 flex flex-col justify-between h-full text-white px-6 py-10 text-center">
                    {/* Top */}
                    <div className="animate-fade-in delay-1000">
                        <h1 className="font-serif font-black text-5xl sm:text-6xl leading-tight">
                            Save <span className="italic">the</span> Date
                        </h1>
                    </div>

                    {/* Middle */}
                    <div className="animate-fade-in delay-1000 mt-20">
                        <p className="font-sans text-lg sm:text-xl mb-1">To celebrate the wedding of</p>
                        <h2 className="font-serif text-2xl sm:text-3xl">Emma Curtis & Andrew Jones</h2>
                        <h3 className="font-serif text-3xl sm:text-4xl mt-2">15. 08. 2026</h3>
                        <p className="font-sans text-lg sm:text-xl mt-1">Grove House, London SW15</p>
                    </div>

                    {/* Bottom */}
                    <div className="animate-fade-in delay-1000 mb-2">
                        <p className="font-sans text-sm sm:text-base uppercase tracking-wider">
                            Invitation to follow
                        </p>
                    </div>
                </div>
            </main>

            {/* Desktop Layout */}
            <main className="hidden lg:flex flex-row h-screen">

                {/* Left Text Panel */}
                <div className="bg-black text-white flex flex-col justify-center items-center text-center px-6 py-10 lg:w-1/3 h-full">
                    <div className="animate-fade-in delay-1000 mb-6">
                        <h1 className="font-serif font-black text-6xl md:text-7xl leading-tight">
                            Save <span className="italic">the</span> Date
                        </h1>
                    </div>

                    <div className="animate-fade-in delay-1000 mb-6">
                        <p className="font-sans text-xl mb-1">To celebrate the wedding of</p>
                        <h2 className="font-serif text-3xl">Emma Curtis & Andrew Jones</h2>
                        <h3 className="font-serif text-4xl mt-2">15. 08. 2026</h3>
                        <p className="font-sans text-xl mt-1">Grove House, London SW15</p>
                    </div>

                    <div className="animate-fade-in delay-1000">
                        <p className="font-sans text-base uppercase tracking-wider">
                            Invitation to follow
                        </p>
                    </div>
                </div>

                {/* Right Image Panel */}
                <div
                    className="relative lg:w-2/3 h-full bg-cover bg-center grayscale"
                    style={{ backgroundImage: "url('/emma.png')" }}
                    role="img"
                    aria-label="Photo of Emma and Andrew after their engagement"
                >
                    <div className="absolute inset-0 bg-black bg-opacity-60" />
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white text-center text-sm text-gray-500 py-4 print:hidden">
                <p>Website designed and developed by Tom Curtis</p>
                <p className="mt-1">
                    Please contact <a href="mailto:hello@tcurtis.uk" className="underline">hello@tcurtis.uk</a> for enquiries.
                </p>
            </footer>
        </>
    );
}
