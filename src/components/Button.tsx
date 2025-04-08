import Link from 'next/link'
import clsx from 'clsx'

type ButtonProps =
  | React.ComponentPropsWithoutRef<typeof Link>
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })

export function Button({ className, variant = 'darkRed', ...props }: ButtonProps & { variant?: 'darkRed' | 'cream' }) {
  className = clsx(
    'inline-flex justify-center rounded-2xl pt-2 pb-2 pl-4 pr-4 text-base font-semibold hover:bg-opacity-90 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70',
    variant === 'darkRed' && 'bg-[var(--darkRed)] text-white hover:bg-[var(--red)]',
    variant === 'cream' && 'bg-[var(--cream)] text-gray-700 hover:bg-[var(--red)] hover:text-white',
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
