// Event Bus service es un ejemplo del patrón mediador
@Injectable()
export class EventBusService {
  private subject$ = new Subject();

  on(event: Events, action: any): Subscription {
    return this.subject$
      .pipe(
        filter((e: EmitEvent) => {
          return e.name === event;
        }),
        map((e: EmitEvent) => {
          return e.value;
        })
      )
      .subscribe(action);
  }

  emit(event: EmitEvent) {
    this.subject$.next(event);
  }
}

export class EmitEvent {
  constructor(public name: any, public value?: any) {}
}

export enum Events {
  CustomerSelected
}
