import { Mappable } from './interfaces/Mappable';

export class Map {
  private googleMap: google.maps.Map;

  constructor(mapElement: HTMLElement) {
    this.googleMap = new google.maps.Map(mapElement, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(entity: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: entity.getMarkerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
