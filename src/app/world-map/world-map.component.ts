import { Component, OnInit, Attribute } from '@angular/core';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {

  options = {
    layers: [
        tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", { 
          maxZoom: 18,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
    ],
    zoom: 5,
    center: latLng(46.879966, -121.726909)
  };

  constructor() { }

  ngOnInit() {
  }

}
