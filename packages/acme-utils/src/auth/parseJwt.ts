// function parseJwt(token: string) {
//     const parts = token.split('.');
//     if (parts.length !== 3) {
//         throw new Error('Invalid JWT format');
//     }

//     const decodedHeader = JSON.parse(atob(parts[0]));
//     const decodedPayload = JSON.parse(atob(parts[1]));

//     return { header: decodedHeader, payload: decodedPayload };
// }

function parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
        window
            .atob(base64)
            .split('')
            .map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join(''),
    );

    return JSON.parse(jsonPayload);
}

export { parseJwt };
