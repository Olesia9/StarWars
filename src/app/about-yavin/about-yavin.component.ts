import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-yavin',
  templateUrl: '../about/about.component.html',
  styleUrls: ['../about/about.component.css']
})
export class AboutYavinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let request = 'https://swapi.dev/api/planets/3/';
    fetch(request).then((response) => {
      return response.json();
    }).then((data) => {
      let nameMain = document.getElementById('texti') as HTMLElement;
      let diameter = document.getElementById('diameter_null') as HTMLElement;
      let rotationPeriod = document.getElementById('rotation_period_null') as HTMLElement;
      let orbitalPeriod = document.getElementById('orbital_period_null') as HTMLElement;
      let gravity = document.getElementById('gravity_null') as HTMLElement;
      let population = document.getElementById('population_null') as HTMLElement;
      let climate = document.getElementById('climate_null') as HTMLElement;
      let terrain = document.getElementById('terrain_null') as HTMLElement;
      let surfaceWater = document.getElementById('surface_water_null') as HTMLElement;

      let personaName = document.getElementById('persona_name') as HTMLElement;

      //console.log(data);

      let planetOne = nameMain.innerHTML = JSON.stringify(data.name);
      let my_planetOne = JSON.parse(planetOne);
      nameMain.innerHTML = my_planetOne;

      let diameterOne = diameter.innerHTML = JSON.stringify(data.diameter);
      let my_diameterOne = JSON.parse(diameterOne);
      diameter.innerHTML = my_diameterOne;

      let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.rotation_period)
      let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
      rotationPeriod.innerHTML = my_rotationPeriodOne;

      let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.orbital_period)
      let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
      orbitalPeriod.innerHTML = my_orbitalPeriodOne;

      let gravityOne = gravity.innerHTML = JSON.stringify(data.gravity)
      let my_gravityOne = JSON.parse(gravityOne);
      gravity.innerHTML = my_gravityOne;

      let populationOne = population.innerHTML = JSON.stringify(data.population)
      let my_populationOne = JSON.parse(populationOne);
      population.innerHTML = my_populationOne;

      let climateOne = climate.innerHTML = JSON.stringify(data.climate)
      let my_climateOne = JSON.parse(climateOne);
      climate.innerHTML = my_climateOne;

      let terrainOne = terrain.innerHTML = JSON.stringify(data.terrain)
      let my_terrainOne = JSON.parse(terrainOne);
      terrain.innerHTML = my_terrainOne;

      let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.surface_water)
      let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
      surfaceWater.innerHTML = my_surfaceWaterOne;
    })

  }

}
