import { forwardRef } from "react";


export const DatePicker = forwardRef(({ label, ...rest }, ref) => (
  <label className="block mb-4">
    <span className="block text-sm font-medium mb-1">{label}</span>
    <input
      ref={ref}
      type="date"
      className="w-full rounded border border-slate-300 px-3 py-2 bg-white dark:bg-slate-800"
      {...rest}
    />
  </label>
));
