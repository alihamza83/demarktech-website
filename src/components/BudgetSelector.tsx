type BudgetSelectorProps = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export default function BudgetSelector({ options, selected, onSelect }: BudgetSelectorProps) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">Your budget</p>
      <div className="mt-4 flex flex-wrap gap-3">
        {options.map((option) => {
          const isActive = selected === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-[#021226] shadow-[0_0_22px_rgba(34,211,238,0.35)]"
                  : "bg-white/10 text-gray-200 hover:bg-white/20"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
