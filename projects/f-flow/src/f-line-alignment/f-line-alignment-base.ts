import { IPoint } from '@foblex/2d';
import { Directive, InjectionToken } from '@angular/core';
import { ILineAlignmentResult } from './domain';
import { FNodeBase } from '../f-node';
import { IHasHostElement } from '../i-has-host-element';

export const F_LINE_ALIGNMENT = new InjectionToken<FLineAlignmentBase>('F_LINE_ALIGNMENT');

@Directive()
export abstract class FLineAlignmentBase implements IHasHostElement {

  public abstract hostElement: HTMLElement | SVGElement;

  public abstract initialize(allNodes: FNodeBase[], currentNodes: FNodeBase[]): void;

  public abstract findNearestCoordinate(difference: IPoint): ILineAlignmentResult;

  public abstract handle(difference: IPoint): void;

  public abstract complete(): void;
}
