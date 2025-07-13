import { useState } from "react";
import { Button, ModalBody, ModalFooter, ModalHeader } from "@heroui/react"; // adjust import

import MealChoiceSelect from "./MealChoiceSelect"; // assumes per-person control

import { DietaryRequirement, InviteGroup } from "@/types/InvitedGuests";

type RSVPFormProps = {
  inviteGroup: InviteGroup;
  onClose: () => void;
  onSubmit: (data: any) => void;
};

export default function RSVPForm({
  inviteGroup,
  onClose,
  onSubmit,
}: RSVPFormProps) {
  const [everyoneAttending, setEveryoneAttending] = useState<null | boolean>(
    null,
  );
  const [attendingIndices, setAttendingIndices] = useState<Set<number>>(
    new Set(),
  );

  const toggleGuest = (index: number) => {
    setAttendingIndices((prev) => {
      const newSet = new Set(prev);

      newSet.has(index) ? newSet.delete(index) : newSet.add(index);

      return newSet;
    });
  };

  const allIndices = inviteGroup.guests.map((_, i) => i);
  const confirmedIndices = everyoneAttending
    ? allIndices
    : Array.from(attendingIndices);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const payload = {
      groupCode: inviteGroup.code,
      attending: confirmedIndices.map((index) => {
        const name = inviteGroup.guests[index].firstName;

        return {
          name,
          starter: formData.get(`starter-${index}`),
          main: formData.get(`main-${index}`),
          pudding: formData.get(`pudding-${index}`),
          dietary: formData.get(`dietary-${index}`),
          notes: formData.get(`notes-${index}`),
        };
      }),
      notAttending:
        everyoneAttending === false
          ? allIndices
              .filter((i) => !attendingIndices.has(i))
              .map((i) => inviteGroup.guests[i].firstName)
          : [],
    };

    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ModalHeader className="flex flex-col gap-1 font-serif text-center text-5xl tracking-wide">
        {inviteGroup.label}
      </ModalHeader>

      <ModalBody className="space-y-6">
        {/* Group attendance */}
        <div>
          <label className="block font-medium mb-2">
            Can everyone in your group attend?
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                required
                name="everyone"
                type="radio"
                value="yes"
                onChange={() => {
                  setEveryoneAttending(true);
                  setAttendingIndices(new Set()); // clear individual choices
                }}
              />
              Yes
            </label>
            <label className="flex items-center gap-2">
              <input
                name="everyone"
                type="radio"
                value="no"
                onChange={() => setEveryoneAttending(false)}
              />
              No
            </label>
          </div>
        </div>

        {/* Individual selection if not all can attend */}
        {everyoneAttending === false && (
          <div>
            <label className="block font-medium mb-2">Who is attending?</label>
            <div className="flex flex-wrap gap-4">
              {inviteGroup.guests.map((guest, index) => (
                <label key={index} className="flex items-center gap-2">
                  <input
                    checked={attendingIndices.has(index)}
                    type="checkbox"
                    onChange={() => toggleGuest(index)}
                  />
                  {guest.firstName}
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Per-attendee details */}
        {confirmedIndices.length > 0 && (
          <div className="space-y-8 pt-4">
            {confirmedIndices.map((index) => {
              const guest = inviteGroup.guests[index];
              const firstName = guest.firstName;

              return (
                <fieldset
                  key={index}
                  className="border rounded-md p-4 space-y-4"
                >
                  <legend className="font-semibold text-lg">{firstName}</legend>

                  <MealChoiceSelect
                    course="Starter"
                    name={`starter-${index}`}
                  />
                  <MealChoiceSelect course="Main" name={`main-${index}`} />
                  <MealChoiceSelect
                    course="Pudding"
                    name={`pudding-${index}`}
                  />

                  <div>
                    <label className="block font-medium mb-1">
                      Dietary Requirements
                    </label>
                    <select
                      multiple
                      className="w-full border px-3 py-2 rounded"
                      name={`dietary-${index}`}
                    >
                      {Object.values(DietaryRequirement).map((req) => (
                        <option key={req} value={req}>
                          {req}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium mb-1">
                      Additional Notes
                    </label>
                    <input
                      className="w-full border px-3 py-2 rounded"
                      name={`notes-${index}`}
                      placeholder="E.g. nut allergy, gluten-free"
                      type="text"
                    />
                  </div>
                </fieldset>
              );
            })}
          </div>
        )}
      </ModalBody>

      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Cancel
        </Button>
        <Button color="primary" type="submit">
          Submit RSVP
        </Button>
      </ModalFooter>
    </form>
  );
}
