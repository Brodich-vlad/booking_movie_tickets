 // Знаходимо обект з відповідним id.
export const searchObject = (id, data) => {
        return data && [...data].find(e => e.id === id*1)
}