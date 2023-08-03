export const sortRating = (data) => {
    const newArr = [...data].sort((a, b) => a.rating*1 < b.rating*1 ? 1 : -1)
    return newArr
}