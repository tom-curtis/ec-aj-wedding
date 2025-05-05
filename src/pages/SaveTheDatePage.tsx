import { Navbar } from "../components/navbar";

export default function SaveTheDatePage() {
    return (
        <>
            <Navbar />
            <section
                className="relative flex flex-col items-center justify-start h-screen bg-cover bg-center grayscale"
                style={{backgroundImage: "url('/emma.png')"}}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
                <div
                    className="absolute text-center text-white"
                    style={{top: "15%"}}
                >
                    <h1 className="font-serif text-6xl">Save <i>the</i> Date</h1>
                </div>
                <div
                    className="absolute text-center text-white"
                    style={{top: "60%"}}
                >
                    <h2 className="font-sans text-2xl uppercase my-2"> To Celebrate the wedding of </h2>
                    <h2 className='font-serif text-2xl my-2'> Emma Curtis & Andrew Jones</h2>
                    <h2 className="font-serif text-3xl my-2">15. 08. 2026</h2>
                    <h3 className="font-sans text-2xl my-2">Grove House, London SW15</h3>
                </div>
                <span>Invite to follow</span>
            </section>
        </>
    );
}
