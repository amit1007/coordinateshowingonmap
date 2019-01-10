import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

const H = window['H'];

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor() { }
  ngOnInit() {
    this.map = this.initializeMap();
  }

  initializeMap() {
    const platform = new H.service.Platform({
      "app_id": "KvR9H86HjeuX4BqHTCsR",
      "app_code": "EqvlDxDauvkc5DuLRVvOjA" ,
      useCIT: true,
      useHTTPS: true
    });
    const defaultLayers = platform.createDefaultLayers({
      tileSize: 256 * Math.min(2, devicePixelRatio),
      ppi: devicePixelRatio > 1 ? 320 : 72
    });
    const map = new H.Map(
      this.mapContainer.nativeElement,
      defaultLayers.normal.map,
      {
        center: { lat: 18.5641274, lng: 73.7798598},
        // 73.7798598 85 18.5641274 73.7799237 18.5641242
        pixelRatio: Math.min(2, devicePixelRatio),
        zoom: 10,
      }
    );
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);

    return map;
  }
}
