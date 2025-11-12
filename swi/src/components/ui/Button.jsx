export default function Button({ as:Comp='button', variant='primary', className='', children, ...props }){
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition active:scale-[.98]";
  const style = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:text-black dark:hover:bg-blue-400",
    outline: "border hover:bg-gray-50 dark:border-neutral-700 dark:hover:bg-neutral-900",
    ghost: "hover:bg-gray-100 dark:hover:bg-neutral-900"
  }[variant];
  return <Comp className={`${base} ${style} ${className}`} {...props}>{children}</Comp>;
}