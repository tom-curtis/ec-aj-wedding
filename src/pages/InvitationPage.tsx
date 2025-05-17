import { useEffect, useRef } from 'react';

export default function InvitationPage() {
    const backgroundRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (backgroundRef.current) {
                const offset = window.pageYOffset;
                backgroundRef.current.style.backgroundPositionY = `${offset * 0.5}px`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const invitee = {
        salutation: 'Dear',
        names: ['Alex', 'Jamie'],
    };

    const greeting = (() => {
        const { salutation, names } = invitee;
        if (!names || names.length === 0) return '';
        if (names.length === 1) return `${salutation} ${names[0]}`;
        if (names.length === 2) return `${salutation} ${names[0]} & ${names[1]}`;
        const allButLast = names.slice(0, -1).join(', ');
        const last = names[names.length - 1];
        return `${salutation} ${allButLast} & ${last}`;
    })();

    return (
        <div
            ref={backgroundRef}
            className="min-h-screen bg-[url('/invitewallpaper.webp')] bg-repeat bg-[length:400px_400px] text-gray-800 relative scroll-smooth"
            style={{ backgroundPositionY: '0px' }}
        >
            {greeting && (
                <div className="absolute top-6 left-6 sm:top-8 sm:left-8 font-serif text-lg sm:text-xl text-gray-700 italic bg-white/60 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-md print:hidden z-50">
                    {greeting}
                </div>
            )}

            <div className="bg-white/30">
                <section id="invitation" className="h-screen flex flex-col justify-center items-center text-center px-6 relative">
                    <div className="max-w-2/3">
                        <p className="font-serif text-lg sm:text-xl mb-4">Together with their families</p>
                        <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">Emma Curtis & Andrew Jones</h1>
                        <p className="font-sans text-lg sm:text-xl mb-4">invite you to celebrate their marriage</p>
                        <h2 className="font-serif text-2xl sm:text-3xl">Saturday 15th August 2026</h2>
                    </div>
                    <a href="#timeline" className="absolute bottom-10 animate-bounce text-3xl text-gray-600 hover:text-gray-800 print:hidden">↓</a>
                </section>

                <section id="timeline" className="py-20 px-6 text-center relative bg-white/75">
                    <h2 className="text-3xl font-serif mb-8">Plan for the Day</h2>
                    <div className="max-w-3xl mx-auto space-y-6 text-left">
                        {[
                            { time: '11:00 AM', event: 'Christ Church, East Sheen' },
                            { time: '1:00 PM', event: 'Arrival at Grove House' },
                            { time: '3:00 PM', event: 'Ceremony in the Walled Garden' },
                            { time: '4:00 PM', event: 'Drinks & Canapés on the Lawn' },
                            { time: '6:00 PM', event: 'Dinner and Toasts in the Ballroom' },
                            { time: '8:00 PM', event: 'Dancing until late' },
                        ].map(({ time, event }, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="font-serif text-lg sm:text-xl w-28 shrink-0">{time}</div>
                                <div className="text-base sm:text-lg font-sans">{event}</div>
                            </div>
                        ))}
                    </div>
                    <a href="#dinner" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-3xl text-gray-600 hover:text-gray-800 print:hidden">↓</a>
                </section>

                <section id="dinner" className="py-20 px-6 text-center relative">
                    <div className="w-fit bg-white/60 backdrop-blur-sm mx-auto p-5 rounded">
                        <h2 className="text-3xl font-serif mb-6">Menu</h2>
                        <p className="max-w-xl mx-auto text-lg font-sans mb-4">
                            Select one from each course. Please inform us of any dietary requirements.
                        </p>
                        <div className="max-w-4xl mx-auto mt-12 space-y-24">
                            {[
                                {
                                    title: 'Starter',
                                    options: ['Beetroot Carpaccio with Goat’s Cheese', 'Smoked Salmon with Crème Fraîche'],
                                },
                                {
                                    title: 'Main',
                                    options: ['Herb-Crusted Lamb with Seasonal Greens', 'Wild Mushroom Risotto (Vegan)'],
                                },
                                {
                                    title: 'Pudding',
                                    options: ['Lemon Posset with Shortbread', 'Dark Chocolate Torte'],
                                },
                            ].map(({ title, options }, idx) => (
                                <div key={idx} className="relative">
                                    <h3 className="text-2xl font-serif mb-6">{title}</h3>
                                    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
                                        <div className="text-base sm:text-lg font-sans max-w-xs">{options[0]}</div>
                                        <div className="text-sm uppercase font-serif tracking-wide text-gray-500 pointer-events-none select-none absolute lg:static lg:transform-none left-1/2 top-1/2 lg:top-auto lg:left-auto transform -translate-x-1/2 -translate-y-1/2 lg:hidden">
                                            or
                                        </div>
                                        <div className="text-base sm:text-lg font-sans max-w-xs">{options[1]}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <a href="#footer" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-3xl text-gray-600 hover:text-gray-800 print:hidden">↓</a>
                </section>

                <footer id="footer" className="text-center text-sm text-neutral-50 bg-neutral-500 py-6 print:hidden">
                    <p>Website designed and developed by Tom Curtis</p>
                    <p className="mt-1">
                        Please contact <a href="mailto:hello@tcurtis.uk" className="underline">hello@tcurtis.uk</a> for enquiries.
                    </p>
                </footer>
            </div>
        </div>
    );
}
