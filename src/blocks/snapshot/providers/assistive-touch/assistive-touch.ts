import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class SnapshotAssistiveTouch {
  public closeButton: EventEmitter<any> = new EventEmitter<any>();
}
