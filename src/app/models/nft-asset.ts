/* eslint-disable @typescript-eslint/naming-convention */
export type NFTAsset = {
    asset_id: string;
    category_id: string;
    nft_asset_id: string | null;
    contract: {
        entity: {domain: string};
        asset_link: string;
        issuer_pubkey: string;
        name: string;
        precision: number;
        ticker: string;
        total_supply: number;
        version: number;
        collection: string;
      } | null;
    created_at?: string;
    product_id?: string;
    reserved?: boolean;
    updated_at?: string; // UTC format "YYYY-MM-DDThh:MM:ss.xxxZ"
    uuid?: string;
};
