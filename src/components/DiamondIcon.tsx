export function DiamondIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 6 6" {...props}>
      <path
        d="M3 0L6 3L3 6L0 3Z"
        stroke="var(--darkRed)"
        strokeWidth={2}
        strokeLinejoin="round"
        fill="var(--red)"
      />
    </svg>
  )
}
