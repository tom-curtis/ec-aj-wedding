import { useEffect, useRef } from "react";

import Invitee from "@/components/core/Invitee.tsx";
import InviteHeader from "@/components/invite/InviteHeader.tsx";
import { InviteGroup, RSVP } from "@/types/InvitedGuests.ts";

export default function InvitationPage() {
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const offset = window.scrollY;

        backgroundRef.current.style.backgroundPositionY = `${offset * 0.25}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const invitedGuests = {
    code: "DHB1",
    guests: [
      {
        firstName: "Adrian",
        lastName: "Ellis",
        RSVPStatus: RSVP.Awaiting,
      },
      {
        firstName: "Helen",
        lastName: "Stockdale",
        RSVPStatus: RSVP.Awaiting,
      },
      {
        firstName: "Robert",
        lastName: "Stockdale",
        RSVPStatus: RSVP.Awaiting,
      },
      {
        firstName: "Ben",
        lastName: "Stockdale",
        RSVPStatus: RSVP.Awaiting,
      },
      {
        firstName: "Sam",
        lastName: "Stockdale",
        RSVPStatus: RSVP.Awaiting,
      },
    ],
    label: "Stockdale - Ellis",
  } satisfies InviteGroup;

  return (
    <div
      ref={backgroundRef}
      className="min-h-screen bg-[url('/invitewallpaper.webp')] bg-repeat bg-[length:400px_400px] text-gray-800 relative scroll-smooth"
      style={{ backgroundPositionY: "0px" }}
    >
      <div className="bg-background/30">
        <Invitee guests={invitedGuests.guests} />
        <InviteHeader
          buttonLabel="RSVP"
          eventDate={new Date("2026-08-15")}
          headingMain="Emma Curtis & Andrew Jones"
          headingTop="Together with their families,"
          inviteGroup={invitedGuests}
          subheading="invite you to their wedding"
        />
        <section
          className="py-20 px-6 text-center relative bg-primary text-background"
          id="timeline"
        >
          <h2 className="text-3xl font-serif mb-8">Plan for the Day</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-left">
            {[
              { time: "11:00 AM", event: "Christ Church, East Sheen" },
              { time: "1:00 PM", event: "Arrival at Grove House" },
              { time: "3:00 PM", event: "Ceremony in the Walled Garden" },
              { time: "4:00 PM", event: "Drinks & Canapés on the Lawn" },
              { time: "6:00 PM", event: "Dinner and Toasts in the Ballroom" },
              { time: "8:00 PM", event: "Dancing until late" },
            ].map(({ time, event }, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="font-serif text-lg sm:text-xl w-28 shrink-0">
                  {time}
                </div>
                <div className="text-base sm:text-lg font-sans">{event}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="py-20 px-6 text-center relative" id="dinner">
          <div className="w-fit bg-background/60 backdrop-blur-sm mx-auto p-5 rounded">
            <h2 className="text-3xl font-serif mb-6">Menu</h2>
            <p className="max-w-xl mx-auto text-lg font-sans mb-4">
              Select one from each course. Please inform us of any dietary
              requirements.
            </p>
            <div className="max-w-4xl mx-auto mt-12 space-y-24">
              {[
                {
                  title: "Starter",
                  options: [
                    "Beetroot Carpaccio with Goat’s Cheese",
                    "Smoked Salmon with Crème Fraîche",
                  ],
                },
                {
                  title: "Main",
                  options: [
                    "Herb-Crusted Lamb with Seasonal Greens",
                    "Wild Mushroom Risotto (Vegan)",
                  ],
                },
                {
                  title: "Pudding",
                  options: [
                    "Lemon Posset with Shortbread",
                    "Dark Chocolate Torte",
                  ],
                },
              ].map(({ title, options }, idx) => (
                <div key={idx} className="relative">
                  <h3 className="text-2xl font-serif mb-6">{title}</h3>
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-8 relative">
                    <div className="text-base sm:text-lg font-sans max-w-xs">
                      {options[0]}
                    </div>
                    <div className="text-sm uppercase font-serif tracking-wide text-gray-500 pointer-events-none select-none absolute lg:static lg:transform-none left-1/2 top-1/2 lg:top-auto lg:left-auto transform -translate-x-1/2 -translate-y-1/2 lg:hidden">
                      or
                    </div>
                    <div className="text-base sm:text-lg font-sans max-w-xs">
                      {options[1]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <footer
          className="text-center text-sm text-neutral-50 bg-neutral-500 py-6 print:hidden"
          id="footer"
        >
          <p>Website designed and developed by Tom Curtis</p>
          <p className="mt-1">
            Please contact{" "}
            <a className="underline" href="mailto:hello@tcurtis.uk">
              hello@tcurtis.uk
            </a>{" "}
            for enquiries.
          </p>
        </footer>
      </div>
    </div>
  );
}
