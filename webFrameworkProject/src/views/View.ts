import { Model } from './../models/Model';

export interface EventsMap {
  [key: string]: (e?: Event) => void;
}

interface Regions {
  [key: string]: Element;
}

export interface RegionsMap {
  [key: string]: string;
}

export abstract class View<T extends Model<K>, K> {
  regions: Regions = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap(): EventsMap {
    return {};
  }

  regionsMap(): RegionsMap {
    return {};
  }

  bindModel(): void {
    this.model.on('change', () => this.render());
  }

  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (const key in regionsMap) {
      if (regionsMap.hasOwnProperty(key)) {
        const selector = regionsMap[key];
        const element = fragment.querySelector(selector);

        if (element) {
          this.regions[key] = element;
        }
      }
    }
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const key in eventsMap) {
      if (eventsMap.hasOwnProperty(key)) {
        const [eventName, selector] = key.split(':');

        fragment.querySelectorAll(selector).forEach(element => {
          element.addEventListener(eventName, eventsMap[key]);
        });
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();
    this.parent.append(templateElement.content);
  }
}
