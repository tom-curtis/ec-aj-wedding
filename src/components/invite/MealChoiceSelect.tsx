type MealChoiceSelectProps = {
  course: "Starter" | "Main" | "Pudding";
  name: string;
};

export default function MealChoiceSelect({ course, name }: MealChoiceSelectProps) {
  const options = {
    Starter: [
      { label: "Beetroot Carpaccio with Goat’s Cheese", value: "beetroot" },
      { label: "Smoked Salmon with Crème Fraîche", value: "salmon" },
    ],
    Main: [
      { label: "Herb-Crusted Lamb with Seasonal Greens", value: "lamb" },
      { label: "Wild Mushroom Risotto (Vegan)", value: "risotto" },
    ],
    Pudding: [
      { label: "Lemon Posset with Shortbread", value: "posset" },
      { label: "Dark Chocolate Torte", value: "torte" },
    ],
  };

  return (
    <div>
      <label className="block font-medium mb-2">{course} Choice</label>
      <select
        required
        className="w-full border px-3 py-2 rounded"
        name={name}
      >
        <option value="">-- Select a {course.toLowerCase()} --</option>
        {options[course].map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
