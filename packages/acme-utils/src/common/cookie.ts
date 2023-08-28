export type SetCookieOptions = {
    key: string;
    value: Record<string, any> | string;
    expireDays?: number;
    expireHours?: number;
    expire?: string;
    path?: string;
};

export const setCookieValue = (setCookieOptions: SetCookieOptions) => {
    const { key, value, expireDays, expireHours, expire, path = '/' } = setCookieOptions;

    if (!key) {
        throw new Error('Cookie key is required.');
    }

    let expires = '';

    if (expireDays) {
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + expireDays);
        expires = `expires=${expirationDate.toUTCString()};`;
    } else if (expireHours) {
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + expireHours * 60 * 60 * 1000);
        expires = `expires=${expirationDate.toUTCString()};`;
    } else if (expire) {
        expires = `expires=${expire};`;
    }

    const encodedValue = typeof value === 'string' ? value : JSON.stringify(value);

    document.cookie = `${key}=${encodeURIComponent(encodedValue)};${expires}path=${path}`;
};

export const removeCookie = (key: string): void => {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
};

export const getCookieValue = (key: string) => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name === key) {
            const decodedValue = decodeURIComponent(value);
            try {
                return JSON.parse(decodedValue) as Record<string, any>;
            } catch (error) {
                return decodedValue;
            }
        }
    }
    return '';
};
