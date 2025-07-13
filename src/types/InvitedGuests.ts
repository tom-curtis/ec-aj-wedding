// RSVP status for each guest
export enum RSVP {
  Awaiting = "Awaiting",
  Declined = "Declined",
  Accepted = "Accepted",
}

// Dietary restrictions and preferences (including UK/EU allergens + common options)
export enum DietaryRequirement {
  // Lifestyle & Religious
  Vegetarian = "Vegetarian",
  Vegan = "Vegan",
  Pescatarian = "Pescatarian",
  Halal = "Halal",
  Kosher = "Kosher",

  // UK/EU 14 Major Allergens
  Celery = "Celery Allergy",
  CerealsContainingGluten = "Gluten (Cereals) Allergy",
  Crustaceans = "Crustacean Allergy",
  Eggs = "Egg Allergy",
  Fish = "Fish Allergy",
  Lupin = "Lupin Allergy",
  Milk = "Dairy Allergy",
  Molluscs = "Mollusc Allergy",
  Mustard = "Mustard Allergy",
  TreeNuts = "Tree Nut Allergy",
  Peanuts = "Peanut Allergy",
  Sesame = "Sesame Allergy",
  Soybeans = "Soy Allergy",
  Sulphites = "Sulphite Allergy",

  // Fallback
  Other = "Other",
  None = "None",
}

// A menu choice, e.g. "starter 1", "main 2", "pudding 3"
// Replace with enums if you want named dishes
export type MenuChoice = number;

// One guest on the RSVP form
export interface InvitedGuest {
  firstName: string;
  lastName: string;
  RSVPStatus: RSVP;

  starterChoice?: MenuChoice;
  mainChoice?: MenuChoice;
  puddingChoice?: MenuChoice;

  dietaryRequirements?: DietaryRequirement[];
  dietaryRequirementComment?: string;
}

// One household on the RSVP form
export interface InviteGroup {
  code: string;
  label?: string;
  guests: InvitedGuest[];
}
