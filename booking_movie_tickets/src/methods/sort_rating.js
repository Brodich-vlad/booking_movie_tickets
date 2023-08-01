export const sortRating = (data) => {
    const newArr = [...data].sort((a, b) => a.rating < b.rating ? 1 : -1)
    return newArr
}