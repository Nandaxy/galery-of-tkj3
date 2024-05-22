export const getAllTags = data => {
    const allTags = new Set();
    data.forEach(item => {
        item.tags.forEach(tag => {
            allTags.add(tag);
        });
    });
    return Array.from(allTags);
};
