export const getRandomImageByTag = (tag, data) => {
    const imagesWithTag = data.filter(item => item.tags.includes(tag));
    if (imagesWithTag.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * imagesWithTag.length);
    return imagesWithTag[randomIndex].src;
};
