/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './asset.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import { GRPC_ASSET_SERVICE_CLIENT_SETTINGS } from './asset.pbconf';
/**
 * Service client implementation for inf.platform.public.v1.AssetService
 */
@Injectable({ providedIn: 'any' })
export class AssetServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary call: /inf.platform.public.v1.AssetService/GetAssets
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.GetAssetsResponse>>
     */
    getAssets: (
      requestData: googleProtobuf000.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.GetAssetsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/inf.platform.public.v1.AssetService/GetAssets',
        requestData,
        requestMetadata,
        requestClass: googleProtobuf000.Empty,
        responseClass: thisProto.GetAssetsResponse
      });
    },
    /**
     * Unary call: /inf.platform.public.v1.AssetService/RequestWithdraw
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    requestWithdraw: (
      requestData: thisProto.RequestWithdrawRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/inf.platform.public.v1.AssetService/RequestWithdraw',
        requestData,
        requestMetadata,
        requestClass: thisProto.RequestWithdrawRequest,
        responseClass: googleProtobuf000.Empty
      });
    },
    /**
     * Unary call: /inf.platform.public.v1.AssetService/CancelRequestWithdraw
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.CancelRequestWithdrawResponse>>
     */
    cancelRequestWithdraw: (
      requestData: thisProto.CancelRequestWithdrawRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.CancelRequestWithdrawResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/inf.platform.public.v1.AssetService/CancelRequestWithdraw',
        requestData,
        requestMetadata,
        requestClass: thisProto.CancelRequestWithdrawRequest,
        responseClass: thisProto.CancelRequestWithdrawResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ASSET_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient(
      'inf.platform.public.v1.AssetService',
      settings
    );
  }

  /**
   * Unary call @/inf.platform.public.v1.AssetService/GetAssets
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.GetAssetsResponse>
   */
  getAssets(
    requestData: googleProtobuf000.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.GetAssetsResponse> {
    return this.$raw
      .getAssets(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/inf.platform.public.v1.AssetService/RequestWithdraw
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  requestWithdraw(
    requestData: thisProto.RequestWithdrawRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .requestWithdraw(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary call @/inf.platform.public.v1.AssetService/CancelRequestWithdraw
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.CancelRequestWithdrawResponse>
   */
  cancelRequestWithdraw(
    requestData: thisProto.CancelRequestWithdrawRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.CancelRequestWithdrawResponse> {
    return this.$raw
      .cancelRequestWithdraw(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
