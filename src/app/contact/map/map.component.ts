import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: any;

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap() {
    this.map = L.map('map', {
      center: [46.926440, 19.582220],
      zoom: 18,
      zoomAnimation: true
    });
    const tiles = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 20,
      minZoom: 3
    });
    tiles.addTo(this.map);
    var myIcon = L.icon({
      iconUrl: 'assets/icons/svg/location-target-icon.svg',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });
    L.marker([46.926440, 19.582220], {icon: myIcon}).addTo(this.map)
      .bindPopup('Népdal U. 9, Kecskemét, 6044 Magyarország')
      .openPopup();
  }
}
