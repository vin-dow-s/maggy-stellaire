const CheckIcon = ({
    color,
    className,
}: {
    color: string
    className?: string
}) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <circle cx="12" cy="12" r="10" fill={color} fillOpacity="0.2" />
        <path
            d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"
            fill={color}
        />
    </svg>
)

export default CheckIcon
