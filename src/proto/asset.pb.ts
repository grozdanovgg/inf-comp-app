/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
export enum AssetAvailabilityStatus {
  ASSET_AVAILABILITY_STATUS_UNSPECIFIED = 0,
  ASSET_AVAILABILITY_STATUS_ASSIGNED = 1,
  ASSET_AVAILABILITY_STATUS_PENDING_WITHDRAW = 2,
  ASSET_AVAILABILITY_STATUS_UNKNOWN = 3,
  ASSET_AVAILABILITY_STATUS_FROZEN = 4
}
/**
 * Message implementation for inf.platform.public.v1.GetAssetsResponse
 */
export class GetAssetsResponse implements GrpcMessage {
  static id = 'inf.platform.public.v1.GetAssetsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetAssetsResponse();
    GetAssetsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetAssetsResponse) {
    _instance.assets = _instance.assets || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetAssetsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Asset();
          _reader.readMessage(
            messageInitializer1,
            Asset.deserializeBinaryFromReader
          );
          (_instance.assets = _instance.assets || []).push(messageInitializer1);
          break;
        default:
          _reader.skipField();
      }
    }

    GetAssetsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetAssetsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.assets && _instance.assets.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.assets as any,
        Asset.serializeBinaryToWriter
      );
    }
  }

  private _assets?: Asset[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetAssetsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetAssetsResponse.AsObject>) {
    _value = _value || {};
    this.assets = (_value.assets || []).map(m => new Asset(m));
    GetAssetsResponse.refineValues(this);
  }
  get assets(): Asset[] | undefined {
    return this._assets;
  }
  set assets(value: Asset[] | undefined) {
    this._assets = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetAssetsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetAssetsResponse.AsObject {
    return {
      assets: (this.assets || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetAssetsResponse.AsProtobufJSON {
    return {
      assets: (this.assets || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module GetAssetsResponse {
  /**
   * Standard JavaScript object representation for GetAssetsResponse
   */
  export interface AsObject {
    assets?: Asset.AsObject[];
  }

  /**
   * Protobuf JSON representation for GetAssetsResponse
   */
  export interface AsProtobufJSON {
    assets?: Asset.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for inf.platform.public.v1.RequestWithdrawRequest
 */
export class RequestWithdrawRequest implements GrpcMessage {
  static id = 'inf.platform.public.v1.RequestWithdrawRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RequestWithdrawRequest();
    RequestWithdrawRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RequestWithdrawRequest) {
    _instance.assetId = _instance.assetId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RequestWithdrawRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.assetId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    RequestWithdrawRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RequestWithdrawRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.assetId) {
      _writer.writeString(1, _instance.assetId);
    }
  }

  private _assetId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RequestWithdrawRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RequestWithdrawRequest.AsObject>) {
    _value = _value || {};
    this.assetId = _value.assetId;
    RequestWithdrawRequest.refineValues(this);
  }
  get assetId(): string | undefined {
    return this._assetId;
  }
  set assetId(value: string | undefined) {
    this._assetId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RequestWithdrawRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RequestWithdrawRequest.AsObject {
    return {
      assetId: this.assetId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): RequestWithdrawRequest.AsProtobufJSON {
    return {
      assetId: this.assetId
    };
  }
}
export module RequestWithdrawRequest {
  /**
   * Standard JavaScript object representation for RequestWithdrawRequest
   */
  export interface AsObject {
    assetId?: string;
  }

  /**
   * Protobuf JSON representation for RequestWithdrawRequest
   */
  export interface AsProtobufJSON {
    assetId?: string;
  }
}

/**
 * Message implementation for inf.platform.public.v1.CancelRequestWithdrawRequest
 */
export class CancelRequestWithdrawRequest implements GrpcMessage {
  static id = 'inf.platform.public.v1.CancelRequestWithdrawRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelRequestWithdrawRequest();
    CancelRequestWithdrawRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelRequestWithdrawRequest) {
    _instance.assetId = _instance.assetId || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelRequestWithdrawRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.assetId = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    CancelRequestWithdrawRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelRequestWithdrawRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.assetId) {
      _writer.writeString(1, _instance.assetId);
    }
  }

  private _assetId?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelRequestWithdrawRequest to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CancelRequestWithdrawRequest.AsObject>
  ) {
    _value = _value || {};
    this.assetId = _value.assetId;
    CancelRequestWithdrawRequest.refineValues(this);
  }
  get assetId(): string | undefined {
    return this._assetId;
  }
  set assetId(value: string | undefined) {
    this._assetId = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CancelRequestWithdrawRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelRequestWithdrawRequest.AsObject {
    return {
      assetId: this.assetId
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CancelRequestWithdrawRequest.AsProtobufJSON {
    return {
      assetId: this.assetId
    };
  }
}
export module CancelRequestWithdrawRequest {
  /**
   * Standard JavaScript object representation for CancelRequestWithdrawRequest
   */
  export interface AsObject {
    assetId?: string;
  }

  /**
   * Protobuf JSON representation for CancelRequestWithdrawRequest
   */
  export interface AsProtobufJSON {
    assetId?: string;
  }
}

/**
 * Message implementation for inf.platform.public.v1.CancelRequestWithdrawResponse
 */
export class CancelRequestWithdrawResponse implements GrpcMessage {
  static id = 'inf.platform.public.v1.CancelRequestWithdrawResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CancelRequestWithdrawResponse();
    CancelRequestWithdrawResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CancelRequestWithdrawResponse) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CancelRequestWithdrawResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    CancelRequestWithdrawResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CancelRequestWithdrawResponse,
    _writer: BinaryWriter
  ) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CancelRequestWithdrawResponse to deeply clone from
   */
  constructor(
    _value?: RecursivePartial<CancelRequestWithdrawResponse.AsObject>
  ) {
    _value = _value || {};
    CancelRequestWithdrawResponse.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CancelRequestWithdrawResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CancelRequestWithdrawResponse.AsObject {
    return {};
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CancelRequestWithdrawResponse.AsProtobufJSON {
    return {};
  }
}
export module CancelRequestWithdrawResponse {
  /**
   * Standard JavaScript object representation for CancelRequestWithdrawResponse
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for CancelRequestWithdrawResponse
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for inf.platform.public.v1.Asset
 */
export class Asset implements GrpcMessage {
  static id = 'inf.platform.public.v1.Asset';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Asset();
    Asset.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Asset) {
    _instance.assetId = _instance.assetId || '';
    _instance.ownerUpdatedAt = _instance.ownerUpdatedAt || undefined;
    _instance.availabilityStatus = _instance.availabilityStatus || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Asset, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.assetId = _reader.readString();
          break;
        case 2:
          _instance.ownerUpdatedAt = new googleProtobuf001.Timestamp();
          _reader.readMessage(
            _instance.ownerUpdatedAt,
            googleProtobuf001.Timestamp.deserializeBinaryFromReader
          );
          break;
        case 3:
          _instance.availabilityStatus = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    Asset.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Asset, _writer: BinaryWriter) {
    if (_instance.assetId) {
      _writer.writeString(1, _instance.assetId);
    }
    if (_instance.ownerUpdatedAt) {
      _writer.writeMessage(
        2,
        _instance.ownerUpdatedAt as any,
        googleProtobuf001.Timestamp.serializeBinaryToWriter
      );
    }
    if (_instance.availabilityStatus) {
      _writer.writeEnum(3, _instance.availabilityStatus);
    }
  }

  private _assetId?: string;
  private _ownerUpdatedAt?: googleProtobuf001.Timestamp;
  private _availabilityStatus?: AssetAvailabilityStatus;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Asset to deeply clone from
   */
  constructor(_value?: RecursivePartial<Asset.AsObject>) {
    _value = _value || {};
    this.assetId = _value.assetId;
    this.ownerUpdatedAt = _value.ownerUpdatedAt
      ? new googleProtobuf001.Timestamp(_value.ownerUpdatedAt)
      : undefined;
    this.availabilityStatus = _value.availabilityStatus;
    Asset.refineValues(this);
  }
  get assetId(): string | undefined {
    return this._assetId;
  }
  set assetId(value: string | undefined) {
    this._assetId = value;
  }
  get ownerUpdatedAt(): googleProtobuf001.Timestamp | undefined {
    return this._ownerUpdatedAt;
  }
  set ownerUpdatedAt(value: googleProtobuf001.Timestamp | undefined) {
    this._ownerUpdatedAt = value;
  }
  get availabilityStatus(): AssetAvailabilityStatus | undefined {
    return this._availabilityStatus;
  }
  set availabilityStatus(value: AssetAvailabilityStatus | undefined) {
    this._availabilityStatus = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Asset.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Asset.AsObject {
    return {
      assetId: this.assetId,
      ownerUpdatedAt: this.ownerUpdatedAt
        ? this.ownerUpdatedAt.toObject()
        : undefined,
      availabilityStatus: this.availabilityStatus
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Asset.AsProtobufJSON {
    return {
      assetId: this.assetId,
      ownerUpdatedAt: this.ownerUpdatedAt
        ? this.ownerUpdatedAt.toProtobufJSON(options)
        : null,
      availabilityStatus:
        AssetAvailabilityStatus[
          this.availabilityStatus === null ||
          this.availabilityStatus === undefined
            ? 0
            : this.availabilityStatus
        ]
    };
  }
}
export module Asset {
  /**
   * Standard JavaScript object representation for Asset
   */
  export interface AsObject {
    assetId?: string;
    ownerUpdatedAt?: googleProtobuf001.Timestamp.AsObject;
    availabilityStatus?: AssetAvailabilityStatus;
  }

  /**
   * Protobuf JSON representation for Asset
   */
  export interface AsProtobufJSON {
    assetId?: string;
    ownerUpdatedAt?: googleProtobuf001.Timestamp.AsProtobufJSON | null;
    availabilityStatus?: string;
  }
}
