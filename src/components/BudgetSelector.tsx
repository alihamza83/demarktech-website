type BudgetSelectorProps = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export default function BudgetSelector({ options, selected, onSelect }: BudgetSelectorProps) {
  return (
    <div>
      <p className="text-sm font-semibold text-slate-900">Your budget</p>
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
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_0_22px_rgba(59,130,246,0.35)]"
                  : "bg-white/80 text-slate-700 border border-slate-300/50 hover:bg-blue-50 hover:border-blue-500/50"
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
