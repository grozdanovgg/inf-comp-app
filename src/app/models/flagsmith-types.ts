export enum Flags {
    companionApp = 'companion_app',
    shipDeposit = 'ship_deposit',
    shipWithdraw = 'ship_withdraw'
}

export class Flag<F> {
    enabled: boolean;
    feature: Feature;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    feature_state_value: F;

    constructor(data: Partial<Flag<F>>) {
        Object.assign(this, data);
        if (this.feature) {
            this.feature = new Feature(this.feature);
        }
        // Serialize only if its valid JSON
        try {
            if (this.feature_state_value) {
                this.feature_state_value = JSON.parse(this.feature_state_value as unknown as string);
            }
        } catch (error) {

        }
    }
};

export class Feature {
    name: string;
    description: string;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    initial_value: unknown;

    constructor(data: Partial<Feature>) {
        Object.assign(this, data);
        try {
            this.initial_value = JSON.parse(this.initial_value as unknown as string);
        } catch (error) {

        }
    }
};

export type SupportedVersions = {
    app: {
        min: string;
        max: string;
    };

    ios: {
        min: string;
        max: string;
    };

    android: {
        min: string;
        max: string;
    };
};

