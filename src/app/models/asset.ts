/* eslint-disable @typescript-eslint/naming-convention */
export type Asset = {
    asset_id: string;
    owner_updated_at?: {
        nanos: number;
        seconds: {
            high: number;
            low: number;
            unsigned: boolean;
        };
    };
};
