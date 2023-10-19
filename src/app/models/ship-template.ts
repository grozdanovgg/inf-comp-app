/* eslint-disable @typescript-eslint/naming-convention */

/**
 * This is the type for the static details of a ship from Strapi
 */
export type ShipTemplate = {
    art_assets?: ArtAssets;
    content_slide_one?: string;
    content_slide_two?: string;
    created_at?: string;
    description?: string;
    external_id?: string;
    generation?: string;
    id?: number;
    locale?: string;
    localizations?: string[];
    name?: string;
    subtitle?: string;
    technical_details?: TechnicalDetails;
    type?: string;
    updated_at?: string;
    version?: string;
    class?: string;
    force?: Force;
    language?: string;
};

type Force = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    logo: Media;
};

type Media = {
    id: number;
    name: string;
    url: string;
};

type TechnicalDetails = {
    armor: string;
    mechs: string;
    stats: TemplateStat[];
    shield: string;
    abilities: TemplateAbility[];
    dimensions: string;
    energy_production: string;
    weapon_hardpoints: string;
    local_sensor_range: string;
    strengths: string;
    weaknesses: string;
};

type TemplateStat = {
    name: string;
    value: number;
};

type TemplateAbility = {
    name: string;
    image: string;
    value: string;
};

type ArtAssets = {
    attributes: string;
    back: string;
    bottom: string;
    concept: string;
    concept_full_size: string;
    details: string;
    front: string;
    overview: string;
    overview_full_size: string;
    top: string;
    wireframe: string;
};

