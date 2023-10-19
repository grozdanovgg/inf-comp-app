/* eslint-disable @typescript-eslint/naming-convention */

export type UserInfo = {
    created_at?: string;
    email?: string;
    email_verified?: boolean;
    family_name?: string;
    given_name?: string;
    identities?: [
        {
            provider: string;
            user_id: string;
            connection: string;
            isSocial: boolean;
        }
    ];
    locale?: string;
    name?: string;
    nickname?: string;
    picture?: string;
    updated_at?: string;
    user_id?: string;
    user_metadata?: {
        salt?: string;
        pxWebCookieConsent?: boolean;
        pxWebTrackingConsent?: boolean;
    };
    last_ip?: string;
    last_login?: string;
    logins_count?: number;
};
