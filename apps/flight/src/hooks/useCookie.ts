import { useState } from 'react';

type UseCookieOptions = {
    withState?: boolean;
};

type SetCookieOptions = {
    // key?: string;
    value: Record<string, any> | string;
    expireDays?: number;
    expireHours?: number;
    expire?: string;
    path?: string;
};

type UseCookieReturn = {
    cookie: Record<string, any> | string;
    setCookieValue: (options: SetCookieOptions) => void;
    removeCookie: () => void;
};

type UseCookie = (cookieName: string, options?: UseCookieOptions) => UseCookieReturn;

export const useCookie: UseCookie = (cookieName, options = {}) => {
    const { withState = true } = options;

    const getCookieValue = () => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=');
            if (name === cookieName) {
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

    const setCookieValue = (setCookieOptions: SetCookieOptions) => {
        const { value, expireDays, expireHours, expire, path = '/' } = setCookieOptions;

        // if (!key) {
        //     throw new Error('Cookie key is required.');
        // }

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

        document.cookie = `${cookieName}=${encodeURIComponent(encodedValue)};${expires}path=${path}`;

        if (withState) {
            setCookie(encodedValue);
        }
    };

    const removeCookie = (): void => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

        if (withState) {
            setCookie('');
        }
    };

    // const [cookie, setCookie] = withState ? useState(getCookieValue()) : [getCookieValue(), () => {}];
    const [cookie, setCookie] = useState(getCookieValue());

    return { cookie, setCookieValue, removeCookie };
};
