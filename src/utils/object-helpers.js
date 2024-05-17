export const updateObjectOnArray = (items, itemId, ogjPropName, newObjProps) => {
    return items.map(user => {
        if (user[ogjPropName] === itemId) {
            return { ...user, ...newObjProps }
        }
        return user;
    })
};