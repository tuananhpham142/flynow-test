export const getPlaneType = (plane: string | number) => {
    const planeNumber = Number(plane);
    return planeNumber > 300 && planeNumber < 400
        ? `Airbus A${planeNumber}`
        : planeNumber > 700 && planeNumber < 800
        ? `Boeing ${planeNumber}`
        : `${plane}`;
};
