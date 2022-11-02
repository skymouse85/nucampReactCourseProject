//export defaults import without curly braces
import { CAMPSITES } from "../../app/shared/CAMPSITES";

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(Math.randowm() * CAMPSITES.length)];
}