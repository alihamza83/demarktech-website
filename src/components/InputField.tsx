type InputFieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (name: string, value: string) => void;
  multiline?: boolean;
  rows?: number;
  type?: string;
  error?: string;
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
}: InputFieldProps) {
  return (
    <label className="block text-sm">
      <span className="mb-2 block text-gray-200">{label}</span>
      {multiline ? (
        <textarea
          name={name}
          rows={rows}
          value={value}
          onChange={(event) => onChange(name, event.target.value)}
          className={`w-full rounded-lg border bg-transparent px-4 py-3 text-white outline-none transition focus:border-cyan-400 ${
            error ? "border-rose-400/80" : "border-white/20"
          }`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(event) => onChange(name, event.target.value)}
          className={`h-11 w-full rounded-lg border bg-transparent px-4 text-white outline-none transition focus:border-cyan-400 ${
            error ? "border-rose-400/80" : "border-white/20"
          }`}
        />
      )}
      {error ? <p className="mt-1 text-xs text-rose-400">{error}</p> : null}
    </label>
  );
}
