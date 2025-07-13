import { Modal, ModalContent } from "@heroui/react";

import RSVPForm from "./RSVPForm";

import { InviteGroup } from "@/types/InvitedGuests.ts";

interface RSVPModalProps {
  isOpen: any;
  onOpenChange: any;
  inviteGroup: InviteGroup;
}

export default function RSVPModal({
  isOpen,
  onOpenChange,
  inviteGroup,
}: RSVPModalProps) {
  const handleSumbit = () => {};

  return (
    <Modal
      backdrop={"blur"}
      isOpen={isOpen}
      size="5xl"
      onOpenChange={onOpenChange}
    >
      <ModalContent className="bg-background">
        {(onClose) => (
          <RSVPForm
            inviteGroup={inviteGroup}
            onClose={onClose}
            onSubmit={handleSumbit}
          />
        )}
      </ModalContent>
    </Modal>
  );
}
