export const reduceName = (name: string, singleLetter: boolean) => {
    if (singleLetter === true) return name.charAt(0).toUpperCase();

    const words = name.split(" ");
    const lastWord = words.length;

    return words.slice(0, lastWord).map((m) => {
        return m.charAt(0).toUpperCase() + m.slice(1)
    }).join(" ");
};