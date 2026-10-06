interface BadgeProps {
    children: React.ReactNode;
}

const Badge = ({ children }: BadgeProps) => {
    return (
        <span className="bg-lime-400 text-black font-bold uppercase px-4 py-1.5 rounded-full text-xs">
            {children}
        </span>
    );
};

export default Badge;