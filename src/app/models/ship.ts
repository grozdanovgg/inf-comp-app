import { ShipTemplate } from 'src/app/models/ship-template';

/* eslint-disable @typescript-eslint/naming-convention */
export class Ship {
  static INSTANCE_ID_LENGTH = 8;
  static SHIP_ID_LENGTH = 14; // Actually this should be named categoryId, but requires a change in the model in the Platform...
  static SERIAL_NUMBER_LENGTH = 22; // This is actually the ship (asset) id

  NFTAssetID?: string;
  ShipID!: string;
  SerialNumber!: string; // front-end only property
  InstanceID?: string; //front-end only property
  CategoryName!: string;
  Force!: string;
  Class!: string;
  Images!: Images;
  Description!: string;
  Characteristics!: Characteristics;
  Strengths!: string;
  Weaknesses!: string;
  Stats!: Stat[];
  Abilities!: Ability[];
  PendingWithdrawal!: boolean;
  UpdatedAt?: number; // UNIX with nanoseconds - example 1656499240823519000

  constructor(ship: Partial<Ship>) {
    Object.assign(this, ship);
  }

  get assetId(): string {
    if (this.ShipID && this.InstanceID) {
      return `${this.ShipID}${this.InstanceID}`;
    }
    return '';
  }

  static fromShipTemplate(shipData: ShipTemplate, instanceID?: string, updatedAt?: number): Ship {
    return new Ship({
      ShipID: shipData.external_id,
      SerialNumber: '',
      InstanceID: instanceID,
      CategoryName: [shipData.generation, shipData.type, shipData.version].join(' '),
      Force: shipData.force?.name,
      Class: shipData.class,
      Images: {
        Top: shipData.art_assets?.top,
        Back: shipData.art_assets?.back,
        Front: shipData.art_assets?.front,
        Bottom: shipData.art_assets?.bottom
      },
      Description: shipData.description,
      Characteristics: {
        Armor: shipData.technical_details.armor,
        Mechs: shipData.technical_details.mechs,
        Shield: shipData.technical_details.shield,
        Dimensions: shipData.technical_details.dimensions,
        EnergyProduction: shipData.technical_details.energy_production,
        WeaponHardpoints: shipData.technical_details.weapon_hardpoints,
        LocalSensorRange: shipData.technical_details.local_sensor_range
      },
      Strengths: shipData.technical_details.strengths,
      Weaknesses: shipData.technical_details.weaknesses,
      Stats: shipData.technical_details.stats.map(stat => ({ Name: stat.name, Value: stat.value })),
      Abilities: shipData.technical_details?.abilities?.map(ability =>
        ({
        Name: ability.name,
        Value: ability.value,
        Image: ability.image
      })) || [],
      PendingWithdrawal: false,
      UpdatedAt: updatedAt
    });
  }
}

type Characteristics = {
  Armor: string;
  Mechs: string;
  Shield: string;
  Dimensions: string;
  EnergyProduction: string;
  WeaponHardpoints: string;
  LocalSensorRange: string;
};

type Stat = {
  Name: string;
  Value: number;
};

type Ability = {
  Name: string;
  Image: string;
  Value: string;
};

type Images = {
  Top: string;
  Back: string;
  Front: string;
  Bottom: string;
};
