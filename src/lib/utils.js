const COLORS = {
    green: {
        bg: "bg-[#ECF7D4]",
        badge: "bg-[#D6F497]"
    },
    orange: {
        bg: "bg-[#FDEDD4]",
        badge: "bg-[#FFC107]",
    },
    red: {
        bg: "bg-[#FDDDDD]",
        badge: "bg-[#F44336]",
    },
};

export const getRandomColor = () => {
    const colorNames = Object.keys(COLORS);
    const randomIndex = Math.floor(Math.random() * colorNames.length);
    const randomColorName = colorNames[randomIndex];
    return COLORS[randomColorName];
}