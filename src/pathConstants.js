export const paramConstants = {
SPELLID: "id"
}

const pathConstants = {
    HOME: "/",
    SPELLS: "/spell",
    SPELLS_DETAILS: `/spell/:${paramConstants.SPELLID}`,
    FAVORITES: "/favorite"
}
export default pathConstants;