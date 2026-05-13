type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  multiline?: boolean;
  rows?: number;
  type?: string;
  error?: string;
  placeholder?: string;
};

export default function InputField({
  label,
  name,
  value,
  onChange,
  multiline = false,
  rows = 4,
  type = "text",
  error,
  placeholder,
}: InputFieldProps) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block text-slate-700">{label}</span>
      {multiline ? (
        <textarea
          name={name}
          rows={rows}
          value={value}
          placeholder={placeholder}  
          onChange={(event) => onChange(name, event.target.value)}
          className={`w-full rounded-lg border bg-white/80 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 ${
            error ? "border-rose-400/80" : "border-slate-300/50"
          }`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}  
          onChange={(event) => onChange(name, event.target.value)}
          className={`h-11 w-full rounded-lg border bg-white/80 px-4 text-slate-900 outline-none transition focus:border-blue-500 ${
            error ? "border-rose-400/80" : "border-slate-300/50"
          }`}
        />
      )}
      {error ? <p className="mt-1 text-xs text-rose-400">{error}</p> : null}
    </label>
  );
}
