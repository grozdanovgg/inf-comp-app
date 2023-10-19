/* eslint-disable @typescript-eslint/naming-convention */
export class Withdrawal {
    id: number;
    asset_id: string;
    address: string;
    player_id: string;
    created_at: Date;
    approved: boolean;
    nft_asset_id: string | null;
    process_date: Date | null;
    tx_id: string | null;
}
