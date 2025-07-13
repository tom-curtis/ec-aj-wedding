import { InvitedGuest } from "@/types/InvitedGuests.ts";

export const getGreetingFromGroup = (guests: InvitedGuest[]): string => {
  if (!guests || guests.length === 0) return "";

  const names = guests.map((g) => g.firstName);

  if (names.length === 1) return `Dear ${names[0]}`;
  if (names.length === 2) return `Dear ${names[0]} & ${names[1]}`;

  const allButLast = names.slice(0, -1).join(", ");
  const last = names[names.length - 1];

  return `Dear ${allButLast} & ${last}`;
};

export default function InviteHeader({ guests }: { guests: InvitedGuest[] }) {
  return (
    <div className="absolute top-6 left-6 sm:top-8 sm:left-8 font-serif text-lg sm:text-xl text-gray-700 italic bg-background/60 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-md print:hidden z-50">
      {getGreetingFromGroup(guests)}
    </div>
  );
}
