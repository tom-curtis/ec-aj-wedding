import { Button, useDisclosure } from "@heroui/react";

import RSVPModal from "./RSVPModal";

import { InviteGroup } from "@/types/InvitedGuests.ts";

type InviteHeaderProps = {
  headingTop?: string;
  headingMain?: string;
  subheading?: string;
  eventDate: Date;
  buttonLabel?: string;
  inviteGroup: InviteGroup;
};

export default function InviteHeader({
  headingTop = "",
  headingMain = "",
  subheading = "",
  eventDate,
  buttonLabel = "RSVP",
  inviteGroup,
}: InviteHeaderProps) {
  const formattedDate = eventDate.toLocaleDateString("en-GB", {
    dateStyle: "long",
  });

  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative"
      id="invitation"
    >
      <div className="max-w-2/3">
        {headingTop && (
          <p className="font-serif text-lg sm:text-xl mb-4">{headingTop}</p>
        )}
        {headingMain && (
          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            {headingMain}
          </h1>
        )}
        {subheading && (
          <p className="font-sans text-lg sm:text-xl mb-4">{subheading}</p>
        )}
        <h2 className="font-serif text-2xl sm:text-3xl">{formattedDate}</h2>
        <Button className="m-5 rounded" color="primary" onPress={onOpen}>
          <span className="font-serif">{buttonLabel}</span>
        </Button>
        <RSVPModal
          inviteGroup={inviteGroup}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      </div>
    </section>
  );
}
