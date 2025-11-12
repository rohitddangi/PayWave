export default function Card({ className='', children }){
  return (
    <div className={`rounded-2xl p-[1px] bg-gradient-to-tr from-blue-200/60 to-cyan-200/60 dark:from-blue-500/20 dark:to-cyan-500/20 ${className}`}>
      <div className="rounded-[14px] border bg-white/80 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
        {children}
      </div>
    </div>
  );
}
export function CardHeader({children, className=''}){ return <div className={`p-5 border-b dark:border-neutral-800 ${className}`}>{children}</div> }
export function CardTitle({children, className=''}){ return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3> }
export function CardContent({children, className=''}){ return <div className={`p-5 text-sm text-gray-600 dark:text-neutral-300 ${className}`}>{children}</div> }