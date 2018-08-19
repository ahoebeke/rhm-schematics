import { Injectable } from '@angular/core';

export interface FrontendObjectInterface {
    __frontendobject: string;
}

export interface BackendObjectInterface {
    __backendobject?: string;
}

@Injectable()

export abstract class AbstractDataAdaptor {

    abstract getFrontendObject(backendObject: BackendObjectInterface): FrontendObjectInterface;

    abstract getBackendObject(frontendObject: FrontendObjectInterface): BackendObjectInterface;

}