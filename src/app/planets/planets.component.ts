import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  //items = ["Angular", "React", "Vue", "Bootstrap", "Node.js"] //*ngFor
  isCollapsed: boolean = true;
  isCollapsedOne: boolean = true;
  isCollapsedTwo: boolean = true;
  isCollapsedThree: boolean = true;
  isCollapsedFour: boolean = true;
  isCollapsedFive:boolean = true;
  isCollapsedSix:boolean = true;
  isCollapsedSeven:boolean = true;
  isCollapsedEight:boolean = true;
  isCollapsedNine:boolean = true;

   constructor() {
     let request = 'https://swapi.dev/api/planets/';
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

       //console.log(data);

       let planetOne = nameMain.innerHTML = JSON.stringify(data.results[0].name);
       let my_planetOne = JSON.parse(planetOne);
       nameMain.innerHTML = my_planetOne;

       let diameterOne = diameter.innerHTML = JSON.stringify(data.results[0].diameter);
       let my_diameterOne = JSON.parse(diameterOne);
       diameter.innerHTML = my_diameterOne;

       let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[0].rotation_period)
       let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
       rotationPeriod.innerHTML = my_rotationPeriodOne;

       let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[0].orbital_period)
       let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
       orbitalPeriod.innerHTML = my_orbitalPeriodOne;

       let gravityOne = gravity.innerHTML = JSON.stringify(data.results[0].gravity)
       let my_gravityOne = JSON.parse(gravityOne);
       gravity.innerHTML = my_gravityOne;

       let populationOne = population.innerHTML = JSON.stringify(data.results[0].population)
       let my_populationOne = JSON.parse(populationOne);
       population.innerHTML = my_populationOne;

       let climateOne = climate.innerHTML = JSON.stringify(data.results[0].climate)
       let my_climateOne = JSON.parse(climateOne);
       climate.innerHTML = my_climateOne;

       let terrainOne = terrain.innerHTML = JSON.stringify(data.results[0].terrain)
       let my_terrainOne = JSON.parse(terrainOne);
       terrain.innerHTML = my_terrainOne;

       let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[0].surface_water)
       let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
       surfaceWater.innerHTML = my_surfaceWaterOne;
     })

     fetch(request).then((response) => {
       return response.json();
     }).then((data) => {
       let nameMain = document.getElementById('texti_one') as HTMLElement;
       let diameter = document.getElementById('diameter_one') as HTMLElement;
       let rotationPeriod = document.getElementById('rotation_period_one') as HTMLElement;
       let orbitalPeriod = document.getElementById('orbital_period_one') as HTMLElement;
       let gravity = document.getElementById('gravity_one') as HTMLElement;
       let population = document.getElementById('population_one') as HTMLElement;
       let climate = document.getElementById('climate_one') as HTMLElement;
       let terrain = document.getElementById('terrain_one') as HTMLElement;
       let surfaceWater = document.getElementById('surface_water_one') as HTMLElement;

       //console.log(data);

       let planetOne = nameMain.innerHTML = JSON.stringify(data.results[1].name);
       let my_planetOne = JSON.parse(planetOne);
       nameMain.innerHTML = my_planetOne;

       let diameterOne = diameter.innerHTML = JSON.stringify(data.results[1].diameter);
       let my_diameterOne = JSON.parse(diameterOne);
       diameter.innerHTML = my_diameterOne;

       let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[1].rotation_period)
       let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
       rotationPeriod.innerHTML = my_rotationPeriodOne;

       let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[1].orbital_period)
       let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
       orbitalPeriod.innerHTML = my_orbitalPeriodOne;

       let gravityOne = gravity.innerHTML = JSON.stringify(data.results[1].gravity)
       let my_gravityOne = JSON.parse(gravityOne);
       gravity.innerHTML = my_gravityOne;

       let populationOne = population.innerHTML = JSON.stringify(data.results[1].population)
       let my_populationOne = JSON.parse(populationOne);
       population.innerHTML = my_populationOne;

       let climateOne = climate.innerHTML = JSON.stringify(data.results[1].climate)
       let my_climateOne = JSON.parse(climateOne);
       climate.innerHTML = my_climateOne;

       let terrainOne = terrain.innerHTML = JSON.stringify(data.results[1].terrain)
       let my_terrainOne = JSON.parse(terrainOne);
       terrain.innerHTML = my_terrainOne;

       let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[1].surface_water)
       let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
       surfaceWater.innerHTML = my_surfaceWaterOne;
     })

     fetch(request).then((response) => {
       return response.json();
     }).then((data) => {
       let nameMain = document.getElementById('texti_two') as HTMLElement;
       let diameter = document.getElementById('diameter_two') as HTMLElement;
       let rotationPeriod = document.getElementById('rotation_period_two') as HTMLElement;
       let orbitalPeriod = document.getElementById('orbital_period_two') as HTMLElement;
       let gravity = document.getElementById('gravity_two') as HTMLElement;
       let population = document.getElementById('population_two') as HTMLElement;
       let climate = document.getElementById('climate_two') as HTMLElement;
       let terrain = document.getElementById('terrain_two') as HTMLElement;
       let surfaceWater = document.getElementById('surface_water_two') as HTMLElement;

       //console.log(data);

       let planetOne = nameMain.innerHTML = JSON.stringify(data.results[2].name);
       let my_planetOne = JSON.parse(planetOne);
       nameMain.innerHTML = my_planetOne;

       let diameterOne = diameter.innerHTML = JSON.stringify(data.results[2].diameter);
       let my_diameterOne = JSON.parse(diameterOne);
       diameter.innerHTML = my_diameterOne;

       let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[2].rotation_period)
       let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
       rotationPeriod.innerHTML = my_rotationPeriodOne;

       let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[2].orbital_period)
       let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
       orbitalPeriod.innerHTML = my_orbitalPeriodOne;

       let gravityOne = gravity.innerHTML = JSON.stringify(data.results[2].gravity)
       let my_gravityOne = JSON.parse(gravityOne);
       gravity.innerHTML = my_gravityOne;

       let populationOne = population.innerHTML = JSON.stringify(data.results[2].population)
       let my_populationOne = JSON.parse(populationOne);
       population.innerHTML = my_populationOne;

       let climateOne = climate.innerHTML = JSON.stringify(data.results[2].climate)
       let my_climateOne = JSON.parse(climateOne);
       climate.innerHTML = my_climateOne;

       let terrainOne = terrain.innerHTML = JSON.stringify(data.results[2].terrain)
       let my_terrainOne = JSON.parse(terrainOne);
       terrain.innerHTML = my_terrainOne;

       let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[2].surface_water)
       let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
       surfaceWater.innerHTML = my_surfaceWaterOne;
     })

     fetch(request).then((response) => {
       return response.json();
     }).then((data) => {
       let nameMain = document.getElementById('texti_three') as HTMLElement;
       let diameter = document.getElementById('diameter_three') as HTMLElement;
       let rotationPeriod = document.getElementById('rotation_period_three') as HTMLElement;
       let orbitalPeriod = document.getElementById('orbital_period_three') as HTMLElement;
       let gravity = document.getElementById('gravity_three') as HTMLElement;
       let population = document.getElementById('population_three') as HTMLElement;
       let climate = document.getElementById('climate_three') as HTMLElement;
       let terrain = document.getElementById('terrain_three') as HTMLElement;
       let surfaceWater = document.getElementById('surface_water_three') as HTMLElement;

       //console.log(data);

       let planetOne = nameMain.innerHTML = JSON.stringify(data.results[3].name);
       let my_planetOne = JSON.parse(planetOne);
       nameMain.innerHTML = my_planetOne;

       let diameterOne = diameter.innerHTML = JSON.stringify(data.results[3].diameter);
       let my_diameterOne = JSON.parse(diameterOne);
       diameter.innerHTML = my_diameterOne;

       let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[3].rotation_period)
       let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
       rotationPeriod.innerHTML = my_rotationPeriodOne;

       let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[3].orbital_period)
       let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
       orbitalPeriod.innerHTML = my_orbitalPeriodOne;

       let gravityOne = gravity.innerHTML = JSON.stringify(data.results[3].gravity)
       let my_gravityOne = JSON.parse(gravityOne);
       gravity.innerHTML = my_gravityOne;

       let populationOne = population.innerHTML = JSON.stringify(data.results[3].population)
       let my_populationOne = JSON.parse(populationOne);
       population.innerHTML = my_populationOne;

       let climateOne = climate.innerHTML = JSON.stringify(data.results[3].climate)
       let my_climateOne = JSON.parse(climateOne);
       climate.innerHTML = my_climateOne;

       let terrainOne = terrain.innerHTML = JSON.stringify(data.results[3].terrain)
       let my_terrainOne = JSON.parse(terrainOne);
       terrain.innerHTML = my_terrainOne;

       let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[3].surface_water)
       let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
       surfaceWater.innerHTML = my_surfaceWaterOne;
     })

     fetch(request).then((response) => {
       return response.json();
     }).then((data) => {
       let nameMain = document.getElementById('texti_four') as HTMLElement;
       let diameter = document.getElementById('diameter_four') as HTMLElement;
       let rotationPeriod = document.getElementById('rotation_period_four') as HTMLElement;
       let orbitalPeriod = document.getElementById('orbital_period_four') as HTMLElement;
       let gravity = document.getElementById('gravity_four') as HTMLElement;
       let population = document.getElementById('population_four') as HTMLElement;
       let climate = document.getElementById('climate_four') as HTMLElement;
       let terrain = document.getElementById('terrain_four') as HTMLElement;
       let surfaceWater = document.getElementById('surface_water_four') as HTMLElement;

       //console.log(data);

       let planetOne = nameMain.innerHTML = JSON.stringify(data.results[4].name);
       let my_planetOne = JSON.parse(planetOne);
       nameMain.innerHTML = my_planetOne;

       let diameterOne = diameter.innerHTML = JSON.stringify(data.results[4].diameter);
       let my_diameterOne = JSON.parse(diameterOne);
       diameter.innerHTML = my_diameterOne;

       let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[4].rotation_period)
       let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
       rotationPeriod.innerHTML = my_rotationPeriodOne;

       let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[4].orbital_period)
       let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
       orbitalPeriod.innerHTML = my_orbitalPeriodOne;

       let gravityOne = gravity.innerHTML = JSON.stringify(data.results[4].gravity)
       let my_gravityOne = JSON.parse(gravityOne);
       gravity.innerHTML = my_gravityOne;

       let populationOne = population.innerHTML = JSON.stringify(data.results[4].population)
       let my_populationOne = JSON.parse(populationOne);
       population.innerHTML = my_populationOne;

       let climateOne = climate.innerHTML = JSON.stringify(data.results[4].climate)
       let my_climateOne = JSON.parse(climateOne);
       climate.innerHTML = my_climateOne;

       let terrainOne = terrain.innerHTML = JSON.stringify(data.results[4].terrain)
       let my_terrainOne = JSON.parse(terrainOne);
       terrain.innerHTML = my_terrainOne;

       let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[4].surface_water)
       let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
       surfaceWater.innerHTML = my_surfaceWaterOne;
     })

     fetch(request).then((response) => {
       return response.json();
     }).then((data) => {
       let nameMain = document.getElementById('texti_five') as HTMLElement;
       let diameter = document.getElementById('diameter_five') as HTMLElement;
       let rotationPeriod = document.getElementById('rotation_period_five') as HTMLElement;
       let orbitalPeriod = document.getElementById('orbital_period_five') as HTMLElement;
       let gravity = document.getElementById('gravity_five') as HTMLElement;
       let population = document.getElementById('population_five') as HTMLElement;
       let climate = document.getElementById('climate_five') as HTMLElement;
       let terrain = document.getElementById('terrain_five') as HTMLElement;
       let surfaceWater = document.getElementById('surface_water_five') as HTMLElement;

       //console.log(data);

       let planetOne = nameMain.innerHTML = JSON.stringify(data.results[5].name);
       let my_planetOne = JSON.parse(planetOne);
       nameMain.innerHTML = my_planetOne;

       let diameterOne = diameter.innerHTML = JSON.stringify(data.results[5].diameter);
       let my_diameterOne = JSON.parse(diameterOne);
       diameter.innerHTML = my_diameterOne;

       let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[5].rotation_period)
       let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
       rotationPeriod.innerHTML = my_rotationPeriodOne;

       let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[5].orbital_period)
       let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
       orbitalPeriod.innerHTML = my_orbitalPeriodOne;

       let gravityOne = gravity.innerHTML = JSON.stringify(data.results[5].gravity)
       let my_gravityOne = JSON.parse(gravityOne);
       gravity.innerHTML = my_gravityOne;

       let populationOne = population.innerHTML = JSON.stringify(data.results[5].population)
       let my_populationOne = JSON.parse(populationOne);
       population.innerHTML = my_populationOne;

       let climateOne = climate.innerHTML = JSON.stringify(data.results[5].climate)
       let my_climateOne = JSON.parse(climateOne);
       climate.innerHTML = my_climateOne;

       let terrainOne = terrain.innerHTML = JSON.stringify(data.results[5].terrain)
       let my_terrainOne = JSON.parse(terrainOne);
       terrain.innerHTML = my_terrainOne;

       let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[5].surface_water)
       let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
       surfaceWater.innerHTML = my_surfaceWaterOne;
     })

     fetch(request).then((response) => {
       return response.json();
     }).then((data) => {
       let nameMain = document.getElementById('texti_six') as HTMLElement;
       let diameter = document.getElementById('diameter_six') as HTMLElement;
       let rotationPeriod = document.getElementById('rotation_period_six') as HTMLElement;
       let orbitalPeriod = document.getElementById('orbital_period_six') as HTMLElement;
       let gravity = document.getElementById('gravity_six') as HTMLElement;
       let population = document.getElementById('population_six') as HTMLElement;
       let climate = document.getElementById('climate_six') as HTMLElement;
       let terrain = document.getElementById('terrain_six') as HTMLElement;
       let surfaceWater = document.getElementById('surface_water_six') as HTMLElement;

       //console.log(data);

       let planetOne = nameMain.innerHTML = JSON.stringify(data.results[6].name);
       let my_planetOne = JSON.parse(planetOne);
       nameMain.innerHTML = my_planetOne;

       let diameterOne = diameter.innerHTML = JSON.stringify(data.results[6].diameter);
       let my_diameterOne = JSON.parse(diameterOne);
       diameter.innerHTML = my_diameterOne;

       let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[6].rotation_period)
       let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
       rotationPeriod.innerHTML = my_rotationPeriodOne;

       let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[6].orbital_period)
       let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
       orbitalPeriod.innerHTML = my_orbitalPeriodOne;

       let gravityOne = gravity.innerHTML = JSON.stringify(data.results[6].gravity)
       let my_gravityOne = JSON.parse(gravityOne);
       gravity.innerHTML = my_gravityOne;

       let populationOne = population.innerHTML = JSON.stringify(data.results[6].population)
       let my_populationOne = JSON.parse(populationOne);
       population.innerHTML = my_populationOne;

       let climateOne = climate.innerHTML = JSON.stringify(data.results[6].climate)
       let my_climateOne = JSON.parse(climateOne);
       climate.innerHTML = my_climateOne;

       let terrainOne = terrain.innerHTML = JSON.stringify(data.results[6].terrain)
       let my_terrainOne = JSON.parse(terrainOne);
       terrain.innerHTML = my_terrainOne;

       let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[6].surface_water)
       let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
       surfaceWater.innerHTML = my_surfaceWaterOne;
     })

     fetch(request).then((response) => {
       return response.json();
     }).then((data) => {
       let nameMain = document.getElementById('texti_seven') as HTMLElement;
       let diameter = document.getElementById('diameter_seven') as HTMLElement;
       let rotationPeriod = document.getElementById('rotation_period_seven') as HTMLElement;
       let orbitalPeriod = document.getElementById('orbital_period_seven') as HTMLElement;
       let gravity = document.getElementById('gravity_seven') as HTMLElement;
       let population = document.getElementById('population_seven') as HTMLElement;
       let climate = document.getElementById('climate_seven') as HTMLElement;
       let terrain = document.getElementById('terrain_seven') as HTMLElement;
       let surfaceWater = document.getElementById('surface_water_seven') as HTMLElement;

       //console.log(data);

       let planetOne = nameMain.innerHTML = JSON.stringify(data.results[7].name);
       let my_planetOne = JSON.parse(planetOne);
       nameMain.innerHTML = my_planetOne;

       let diameterOne = diameter.innerHTML = JSON.stringify(data.results[7].diameter);
       let my_diameterOne = JSON.parse(diameterOne);
       diameter.innerHTML = my_diameterOne;

       let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[7].rotation_period)
       let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
       rotationPeriod.innerHTML = my_rotationPeriodOne;

       let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[7].orbital_period)
       let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
       orbitalPeriod.innerHTML = my_orbitalPeriodOne;

       let gravityOne = gravity.innerHTML = JSON.stringify(data.results[7].gravity)
       let my_gravityOne = JSON.parse(gravityOne);
       gravity.innerHTML = my_gravityOne;

       let populationOne = population.innerHTML = JSON.stringify(data.results[7].population)
       let my_populationOne = JSON.parse(populationOne);
       population.innerHTML = my_populationOne;

       let climateOne = climate.innerHTML = JSON.stringify(data.results[7].climate)
       let my_climateOne = JSON.parse(climateOne);
       climate.innerHTML = my_climateOne;

       let terrainOne = terrain.innerHTML = JSON.stringify(data.results[7].terrain)
       let my_terrainOne = JSON.parse(terrainOne);
       terrain.innerHTML = my_terrainOne;

       let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[7].surface_water)
       let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
       surfaceWater.innerHTML = my_surfaceWaterOne;
     })

     fetch(request).then((response) => {
       return response.json();
     }).then((data) => {
       let nameMain = document.getElementById('texti_eight') as HTMLElement;
       let diameter = document.getElementById('diameter_eight') as HTMLElement;
       let rotationPeriod = document.getElementById('rotation_period_eight') as HTMLElement;
       let orbitalPeriod = document.getElementById('orbital_period_eight') as HTMLElement;
       let gravity = document.getElementById('gravity_eight') as HTMLElement;
       let population = document.getElementById('population_eight') as HTMLElement;
       let climate = document.getElementById('climate_eight') as HTMLElement;
       let terrain = document.getElementById('terrain_eight') as HTMLElement;
       let surfaceWater = document.getElementById('surface_water_eight') as HTMLElement;

       //console.log(data);

       let planetOne = nameMain.innerHTML = JSON.stringify(data.results[8].name);
       let my_planetOne = JSON.parse(planetOne);
       nameMain.innerHTML = my_planetOne;

       let diameterOne = diameter.innerHTML = JSON.stringify(data.results[8].diameter);
       let my_diameterOne = JSON.parse(diameterOne);
       diameter.innerHTML = my_diameterOne;

       let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[8].rotation_period)
       let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
       rotationPeriod.innerHTML = my_rotationPeriodOne;

       let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[8].orbital_period)
       let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
       orbitalPeriod.innerHTML = my_orbitalPeriodOne;

       let gravityOne = gravity.innerHTML = JSON.stringify(data.results[8].gravity)
       let my_gravityOne = JSON.parse(gravityOne);
       gravity.innerHTML = my_gravityOne;

       let populationOne = population.innerHTML = JSON.stringify(data.results[8].population)
       let my_populationOne = JSON.parse(populationOne);
       population.innerHTML = my_populationOne;

       let climateOne = climate.innerHTML = JSON.stringify(data.results[8].climate)
       let my_climateOne = JSON.parse(climateOne);
       climate.innerHTML = my_climateOne;

       let terrainOne = terrain.innerHTML = JSON.stringify(data.results[8].terrain)
       let my_terrainOne = JSON.parse(terrainOne);
       terrain.innerHTML = my_terrainOne;

       let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[8].surface_water)
       let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
       surfaceWater.innerHTML = my_surfaceWaterOne;
     })

     fetch(request).then((response) => {
       return response.json();
     }).then((data) => {
       let nameMain = document.getElementById('texti_nine') as HTMLElement;
       let diameter = document.getElementById('diameter_nine') as HTMLElement;
       let rotationPeriod = document.getElementById('rotation_period_nine') as HTMLElement;
       let orbitalPeriod = document.getElementById('orbital_period_nine') as HTMLElement;
       let gravity = document.getElementById('gravity_nine') as HTMLElement;
       let population = document.getElementById('population_nine') as HTMLElement;
       let climate = document.getElementById('climate_nine') as HTMLElement;
       let terrain = document.getElementById('terrain_nine') as HTMLElement;
       let surfaceWater = document.getElementById('surface_water_nine') as HTMLElement;

       //console.log(data);

       let planetOne = nameMain.innerHTML = JSON.stringify(data.results[9].name);
       let my_planetOne = JSON.parse(planetOne);
       nameMain.innerHTML = my_planetOne;

       let diameterOne = diameter.innerHTML = JSON.stringify(data.results[9].diameter);
       let my_diameterOne = JSON.parse(diameterOne);
       diameter.innerHTML = my_diameterOne;

       let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[9].rotation_period)
       let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
       rotationPeriod.innerHTML = my_rotationPeriodOne;

       let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[9].orbital_period)
       let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
       orbitalPeriod.innerHTML = my_orbitalPeriodOne;

       let gravityOne = gravity.innerHTML = JSON.stringify(data.results[9].gravity)
       let my_gravityOne = JSON.parse(gravityOne);
       gravity.innerHTML = my_gravityOne;

       let populationOne = population.innerHTML = JSON.stringify(data.results[9].population)
       let my_populationOne = JSON.parse(populationOne);
       population.innerHTML = my_populationOne;

       let climateOne = climate.innerHTML = JSON.stringify(data.results[9].climate)
       let my_climateOne = JSON.parse(climateOne);
       climate.innerHTML = my_climateOne;

       let terrainOne = terrain.innerHTML = JSON.stringify(data.results[9].terrain)
       let my_terrainOne = JSON.parse(terrainOne);
       terrain.innerHTML = my_terrainOne;

       let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[9].surface_water)
       let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
       surfaceWater.innerHTML = my_surfaceWaterOne;
     })
  }

  myEvent() {
    let btnDescription: any = document.getElementById('texti');
     let cardDescription: any = document.getElementById('card-description');
    //console.log(event);

      //cardDescription.style.opacity = '1';
      ////console.log("мышку навели");
      //goUrl();
      // Confetti();
    btnDescription.addEventListener('mousemove', () => {
      cardDescription.style.opacity = '1';
      //console.log("мышку навели");
    });
  }


  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedOne = !this.isCollapsedOne;
    this.isCollapsedTwo = !this.isCollapsedTwo;
    //let is = this.isCollapsedOne = !this.isCollapsedOne;
    // let planetOne: any = document.getElementById('planet-content__one');
    // planetOne.style.display = "none";
    // let cardOne: any = document.getElementById('card-one');
    // cardOne.style.display = "none";
    //console.log('нопку поменяли');
    //console.log('Функция начала выполняться')
    let request = 'https://swapi.dev/api/planets/';

    if(this.isCollapsed === true) {
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

        //console.log(data);

        let planetOne = nameMain.innerHTML = JSON.stringify(data.results[0].name);
        let my_planetOne = JSON.parse(planetOne);
        nameMain.innerHTML = my_planetOne;

        let diameterOne = diameter.innerHTML = JSON.stringify(data.results[0].diameter);
        let my_diameterOne = JSON.parse(diameterOne);
        diameter.innerHTML = my_diameterOne;

        let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[0].rotation_period)
        let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
        rotationPeriod.innerHTML = my_rotationPeriodOne;

        let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[0].orbital_period)
        let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
        orbitalPeriod.innerHTML = my_orbitalPeriodOne;

        let gravityOne = gravity.innerHTML = JSON.stringify(data.results[0].gravity)
        let my_gravityOne = JSON.parse(gravityOne);
        gravity.innerHTML = my_gravityOne;

        let populationOne = population.innerHTML = JSON.stringify(data.results[0].population)
        let my_populationOne = JSON.parse(populationOne);
        population.innerHTML = my_populationOne;

        let climateOne = climate.innerHTML = JSON.stringify(data.results[0].climate)
        let my_climateOne = JSON.parse(climateOne);
        climate.innerHTML = my_climateOne;

        let terrainOne = terrain.innerHTML = JSON.stringify(data.results[0].terrain)
        let my_terrainOne = JSON.parse(terrainOne);
        terrain.innerHTML = my_terrainOne;

        let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[0].surface_water)
        let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
        surfaceWater.innerHTML = my_surfaceWaterOne;
      })
    }else if(this.isCollapsed === false) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let name = document.getElementById('text') as HTMLElement;
        //console.log(data);
        let planetOne = name.innerHTML = JSON.stringify(data.results[0].name);
        let my_planetOne = JSON.parse(planetOne);
        name.innerHTML = my_planetOne;
      })
    }
  }

  toggleCollapseOne(){
    this.isCollapsedOne = !this.isCollapsedOne
    //console.log('нопку поменяли');
    //console.log('Функция начала выполняться')
    let request = 'https://swapi.dev/api/planets/';

    if(this.isCollapsedOne === true) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let nameMain = document.getElementById('texti_one') as HTMLElement;
        let diameter = document.getElementById('diameter_one') as HTMLElement;
        let rotationPeriod = document.getElementById('rotation_period_one') as HTMLElement;
        let orbitalPeriod = document.getElementById('orbital_period_one') as HTMLElement;
        let gravity = document.getElementById('gravity_one') as HTMLElement;
        let population = document.getElementById('population_one') as HTMLElement;
        let climate = document.getElementById('climate_one') as HTMLElement;
        let terrain = document.getElementById('terrain_one') as HTMLElement;
        let surfaceWater = document.getElementById('surface_water_one') as HTMLElement;

        //console.log(data);

        let planetOne = nameMain.innerHTML = JSON.stringify(data.results[1].name);
        let my_planetOne = JSON.parse(planetOne);
        nameMain.innerHTML = my_planetOne;

        let diameterOne = diameter.innerHTML = JSON.stringify(data.results[1].diameter);
        let my_diameterOne = JSON.parse(diameterOne);
        diameter.innerHTML = my_diameterOne;

        let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[1].rotation_period)
        let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
        rotationPeriod.innerHTML = my_rotationPeriodOne;

        let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[1].orbital_period)
        let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
        orbitalPeriod.innerHTML = my_orbitalPeriodOne;

        let gravityOne = gravity.innerHTML = JSON.stringify(data.results[1].gravity)
        let my_gravityOne = JSON.parse(gravityOne);
        gravity.innerHTML = my_gravityOne;

        let populationOne = population.innerHTML = JSON.stringify(data.results[1].population)
        let my_populationOne = JSON.parse(populationOne);
        population.innerHTML = my_populationOne;

        let climateOne = climate.innerHTML = JSON.stringify(data.results[1].climate)
        let my_climateOne = JSON.parse(climateOne);
        climate.innerHTML = my_climateOne;

        let terrainOne = terrain.innerHTML = JSON.stringify(data.results[1].terrain)
        let my_terrainOne = JSON.parse(terrainOne);
        terrain.innerHTML = my_terrainOne;

        let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[1].surface_water)
        let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
        surfaceWater.innerHTML = my_surfaceWaterOne;
      })
    }else if(this.isCollapsedOne === false) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let name = document.getElementById('text_one') as HTMLElement;
        //console.log(data);
        let planetOne = name.innerHTML = JSON.stringify(data.results[1].name);
        let my_planetOne = JSON.parse(planetOne);
        name.innerHTML = my_planetOne;
      })
    }
  }

  toggleCollapseTwo(){
    this.isCollapsedTwo = !this.isCollapsedTwo
    //console.log('нопку поменяли');
    //console.log('Функция начала выполняться')
    let request = 'https://swapi.dev/api/planets/';

    if(this.isCollapsedTwo === true) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let nameMain = document.getElementById('texti_two') as HTMLElement;
        let diameter = document.getElementById('diameter_two') as HTMLElement;
        let rotationPeriod = document.getElementById('rotation_period_two') as HTMLElement;
        let orbitalPeriod = document.getElementById('orbital_period_two') as HTMLElement;
        let gravity = document.getElementById('gravity_two') as HTMLElement;
        let population = document.getElementById('population_two') as HTMLElement;
        let climate = document.getElementById('climate_two') as HTMLElement;
        let terrain = document.getElementById('terrain_two') as HTMLElement;
        let surfaceWater = document.getElementById('surface_water_two') as HTMLElement;

        //console.log(data);

        let planetOne = nameMain.innerHTML = JSON.stringify(data.results[2].name);
        let my_planetOne = JSON.parse(planetOne);
        nameMain.innerHTML = my_planetOne;

        let diameterOne = diameter.innerHTML = JSON.stringify(data.results[2].diameter);
        let my_diameterOne = JSON.parse(diameterOne);
        diameter.innerHTML = my_diameterOne;

        let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[2].rotation_period)
        let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
        rotationPeriod.innerHTML = my_rotationPeriodOne;

        let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[2].orbital_period)
        let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
        orbitalPeriod.innerHTML = my_orbitalPeriodOne;

        let gravityOne = gravity.innerHTML = JSON.stringify(data.results[2].gravity)
        let my_gravityOne = JSON.parse(gravityOne);
        gravity.innerHTML = my_gravityOne;

        let populationOne = population.innerHTML = JSON.stringify(data.results[2].population)
        let my_populationOne = JSON.parse(populationOne);
        population.innerHTML = my_populationOne;

        let climateOne = climate.innerHTML = JSON.stringify(data.results[2].climate)
        let my_climateOne = JSON.parse(climateOne);
        climate.innerHTML = my_climateOne;

        let terrainOne = terrain.innerHTML = JSON.stringify(data.results[2].terrain)
        let my_terrainOne = JSON.parse(terrainOne);
        terrain.innerHTML = my_terrainOne;

        let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[2].surface_water)
        let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
        surfaceWater.innerHTML = my_surfaceWaterOne;
      })
    }else if(this.isCollapsedTwo === false) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let name = document.getElementById('text_two') as HTMLElement;
        //console.log(data);
        let planetOne = name.innerHTML = JSON.stringify(data.results[2].name);
        let my_planetOne = JSON.parse(planetOne);
        name.innerHTML = my_planetOne;
      })
    }
  }

  toggleCollapseThree(){
    this.isCollapsedThree = !this.isCollapsedThree
    //console.log('нопку поменяли');
    //console.log('Функция начала выполняться')
    let request = 'https://swapi.dev/api/planets/';

    if(this.isCollapsedThree === true) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let nameMain = document.getElementById('texti_three') as HTMLElement;
        let diameter = document.getElementById('diameter_three') as HTMLElement;
        let rotationPeriod = document.getElementById('rotation_period_three') as HTMLElement;
        let orbitalPeriod = document.getElementById('orbital_period_three') as HTMLElement;
        let gravity = document.getElementById('gravity_three') as HTMLElement;
        let population = document.getElementById('population_three') as HTMLElement;
        let climate = document.getElementById('climate_three') as HTMLElement;
        let terrain = document.getElementById('terrain_three') as HTMLElement;
        let surfaceWater = document.getElementById('surface_water_three') as HTMLElement;

        //console.log(data);

        let planetOne = nameMain.innerHTML = JSON.stringify(data.results[3].name);
        let my_planetOne = JSON.parse(planetOne);
        nameMain.innerHTML = my_planetOne;

        let diameterOne = diameter.innerHTML = JSON.stringify(data.results[3].diameter);
        let my_diameterOne = JSON.parse(diameterOne);
        diameter.innerHTML = my_diameterOne;

        let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[3].rotation_period)
        let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
        rotationPeriod.innerHTML = my_rotationPeriodOne;

        let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[3].orbital_period)
        let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
        orbitalPeriod.innerHTML = my_orbitalPeriodOne;

        let gravityOne = gravity.innerHTML = JSON.stringify(data.results[3].gravity)
        let my_gravityOne = JSON.parse(gravityOne);
        gravity.innerHTML = my_gravityOne;

        let populationOne = population.innerHTML = JSON.stringify(data.results[3].population)
        let my_populationOne = JSON.parse(populationOne);
        population.innerHTML = my_populationOne;

        let climateOne = climate.innerHTML = JSON.stringify(data.results[3].climate)
        let my_climateOne = JSON.parse(climateOne);
        climate.innerHTML = my_climateOne;

        let terrainOne = terrain.innerHTML = JSON.stringify(data.results[3].terrain)
        let my_terrainOne = JSON.parse(terrainOne);
        terrain.innerHTML = my_terrainOne;

        let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[1].surface_water)
        let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
        surfaceWater.innerHTML = my_surfaceWaterOne;
      })
    }else if(this.isCollapsedThree === false) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let name = document.getElementById('text_three') as HTMLElement;
        //console.log(data);
        let planetOne = name.innerHTML = JSON.stringify(data.results[3].name);
        let my_planetOne = JSON.parse(planetOne);
        name.innerHTML = my_planetOne;
      })
    }
  }

  toggleCollapseFour(){
    this.isCollapsedFour = !this.isCollapsedFour
    //console.log('нопку поменяли');
    //console.log('Функция начала выполняться')
    let request = 'https://swapi.dev/api/planets/';

    if(this.isCollapsedFour === true) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let nameMain = document.getElementById('texti_four') as HTMLElement;
        let diameter = document.getElementById('diameter_four') as HTMLElement;
        let rotationPeriod = document.getElementById('rotation_period_four') as HTMLElement;
        let orbitalPeriod = document.getElementById('orbital_period_four') as HTMLElement;
        let gravity = document.getElementById('gravity_four') as HTMLElement;
        let population = document.getElementById('population_four') as HTMLElement;
        let climate = document.getElementById('climate_four') as HTMLElement;
        let terrain = document.getElementById('terrain_four') as HTMLElement;
        let surfaceWater = document.getElementById('surface_water_four') as HTMLElement;

        //console.log(data);

        let planetOne = nameMain.innerHTML = JSON.stringify(data.results[4].name);
        let my_planetOne = JSON.parse(planetOne);
        nameMain.innerHTML = my_planetOne;

        let diameterOne = diameter.innerHTML = JSON.stringify(data.results[4].diameter);
        let my_diameterOne = JSON.parse(diameterOne);
        diameter.innerHTML = my_diameterOne;

        let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[4].rotation_period)
        let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
        rotationPeriod.innerHTML = my_rotationPeriodOne;

        let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[4].orbital_period)
        let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
        orbitalPeriod.innerHTML = my_orbitalPeriodOne;

        let gravityOne = gravity.innerHTML = JSON.stringify(data.results[4].gravity)
        let my_gravityOne = JSON.parse(gravityOne);
        gravity.innerHTML = my_gravityOne;

        let populationOne = population.innerHTML = JSON.stringify(data.results[4].population)
        let my_populationOne = JSON.parse(populationOne);
        population.innerHTML = my_populationOne;

        let climateOne = climate.innerHTML = JSON.stringify(data.results[4].climate)
        let my_climateOne = JSON.parse(climateOne);
        climate.innerHTML = my_climateOne;

        let terrainOne = terrain.innerHTML = JSON.stringify(data.results[4].terrain)
        let my_terrainOne = JSON.parse(terrainOne);
        terrain.innerHTML = my_terrainOne;

        let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[4].surface_water)
        let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
        surfaceWater.innerHTML = my_surfaceWaterOne;
      })
    }else if(this.isCollapsedFour === false) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let name = document.getElementById('text_four') as HTMLElement;
        //console.log(data);
        let planetOne = name.innerHTML = JSON.stringify(data.results[4].name);
        let my_planetOne = JSON.parse(planetOne);
        name.innerHTML = my_planetOne;
      })
    }
  }

  toggleCollapseFive(){
    this.isCollapsedFive = !this.isCollapsedFive
    //console.log('нопку поменяли');
    //console.log('Функция начала выполняться')
    let request = 'https://swapi.dev/api/planets/';

    if(this.isCollapsedFive === true) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let nameMain = document.getElementById('texti_five') as HTMLElement;
        let diameter = document.getElementById('diameter_five') as HTMLElement;
        let rotationPeriod = document.getElementById('rotation_period_five') as HTMLElement;
        let orbitalPeriod = document.getElementById('orbital_period_five') as HTMLElement;
        let gravity = document.getElementById('gravity_five') as HTMLElement;
        let population = document.getElementById('population_five') as HTMLElement;
        let climate = document.getElementById('climate_five') as HTMLElement;
        let terrain = document.getElementById('terrain_five') as HTMLElement;
        let surfaceWater = document.getElementById('surface_water_five') as HTMLElement;

        //console.log(data);

        let planetOne = nameMain.innerHTML = JSON.stringify(data.results[5].name);
        let my_planetOne = JSON.parse(planetOne);
        nameMain.innerHTML = my_planetOne;

        let diameterOne = diameter.innerHTML = JSON.stringify(data.results[5].diameter);
        let my_diameterOne = JSON.parse(diameterOne);
        diameter.innerHTML = my_diameterOne;

        let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[5].rotation_period)
        let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
        rotationPeriod.innerHTML = my_rotationPeriodOne;

        let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[5].orbital_period)
        let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
        orbitalPeriod.innerHTML = my_orbitalPeriodOne;

        let gravityOne = gravity.innerHTML = JSON.stringify(data.results[5].gravity)
        let my_gravityOne = JSON.parse(gravityOne);
        gravity.innerHTML = my_gravityOne;

        let populationOne = population.innerHTML = JSON.stringify(data.results[5].population)
        let my_populationOne = JSON.parse(populationOne);
        population.innerHTML = my_populationOne;

        let climateOne = climate.innerHTML = JSON.stringify(data.results[5].climate)
        let my_climateOne = JSON.parse(climateOne);
        climate.innerHTML = my_climateOne;

        let terrainOne = terrain.innerHTML = JSON.stringify(data.results[5].terrain)
        let my_terrainOne = JSON.parse(terrainOne);
        terrain.innerHTML = my_terrainOne;

        let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[5].surface_water)
        let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
        surfaceWater.innerHTML = my_surfaceWaterOne;
      })
    }else if(this.isCollapsedFive === false) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let name = document.getElementById('text_five') as HTMLElement;
        //console.log(data);
        let planetOne = name.innerHTML = JSON.stringify(data.results[5].name);
        let my_planetOne = JSON.parse(planetOne);
        name.innerHTML = my_planetOne;
      })
    }
  }

  toggleCollapseSix(){
    this.isCollapsedSix = !this.isCollapsedSix
    //console.log('нопку поменяли');
    //console.log('Функция начала выполняться')
    let request = 'https://swapi.dev/api/planets/';

    if(this.isCollapsedSix === true) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let nameMain = document.getElementById('texti_six') as HTMLElement;
        let diameter = document.getElementById('diameter_six') as HTMLElement;
        let rotationPeriod = document.getElementById('rotation_period_six') as HTMLElement;
        let orbitalPeriod = document.getElementById('orbital_period_six') as HTMLElement;
        let gravity = document.getElementById('gravity_six') as HTMLElement;
        let population = document.getElementById('population_six') as HTMLElement;
        let climate = document.getElementById('climate_six') as HTMLElement;
        let terrain = document.getElementById('terrain_six') as HTMLElement;
        let surfaceWater = document.getElementById('surface_water_six') as HTMLElement;

        //console.log(data);

        let planetOne = nameMain.innerHTML = JSON.stringify(data.results[6].name);
        let my_planetOne = JSON.parse(planetOne);
        nameMain.innerHTML = my_planetOne;

        let diameterOne = diameter.innerHTML = JSON.stringify(data.results[6].diameter);
        let my_diameterOne = JSON.parse(diameterOne);
        diameter.innerHTML = my_diameterOne;

        let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[6].rotation_period)
        let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
        rotationPeriod.innerHTML = my_rotationPeriodOne;

        let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[6].orbital_period)
        let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
        orbitalPeriod.innerHTML = my_orbitalPeriodOne;

        let gravityOne = gravity.innerHTML = JSON.stringify(data.results[6].gravity)
        let my_gravityOne = JSON.parse(gravityOne);
        gravity.innerHTML = my_gravityOne;

        let populationOne = population.innerHTML = JSON.stringify(data.results[6].population)
        let my_populationOne = JSON.parse(populationOne);
        population.innerHTML = my_populationOne;

        let climateOne = climate.innerHTML = JSON.stringify(data.results[6].climate)
        let my_climateOne = JSON.parse(climateOne);
        climate.innerHTML = my_climateOne;

        let terrainOne = terrain.innerHTML = JSON.stringify(data.results[6].terrain)
        let my_terrainOne = JSON.parse(terrainOne);
        terrain.innerHTML = my_terrainOne;

        let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[6].surface_water)
        let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
        surfaceWater.innerHTML = my_surfaceWaterOne;
      })
    }else if(this.isCollapsedSix === false) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let name = document.getElementById('text_six') as HTMLElement;
        //console.log(data);
        let planetOne = name.innerHTML = JSON.stringify(data.results[6].name);
        let my_planetOne = JSON.parse(planetOne);
        name.innerHTML = my_planetOne;
      })
    }
  }

  toggleCollapseSeven(){
    this.isCollapsedSeven = !this.isCollapsedSeven
    //console.log('нопку поменяли');
    //console.log('Функция начала выполняться')
    let request = 'https://swapi.dev/api/planets/';

    if(this.isCollapsedSeven === true) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let nameMain = document.getElementById('texti_seven') as HTMLElement;
        let diameter = document.getElementById('diameter_seven') as HTMLElement;
        let rotationPeriod = document.getElementById('rotation_period_seven') as HTMLElement;
        let orbitalPeriod = document.getElementById('orbital_period_seven') as HTMLElement;
        let gravity = document.getElementById('gravity_seven') as HTMLElement;
        let population = document.getElementById('population_seven') as HTMLElement;
        let climate = document.getElementById('climate_seven') as HTMLElement;
        let terrain = document.getElementById('terrain_seven') as HTMLElement;
        let surfaceWater = document.getElementById('surface_water_seven') as HTMLElement;

        //console.log(data);

        let planetOne = nameMain.innerHTML = JSON.stringify(data.results[7].name);
        let my_planetOne = JSON.parse(planetOne);
        nameMain.innerHTML = my_planetOne;

        let diameterOne = diameter.innerHTML = JSON.stringify(data.results[7].diameter);
        let my_diameterOne = JSON.parse(diameterOne);
        diameter.innerHTML = my_diameterOne;

        let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[7].rotation_period)
        let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
        rotationPeriod.innerHTML = my_rotationPeriodOne;

        let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[7].orbital_period)
        let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
        orbitalPeriod.innerHTML = my_orbitalPeriodOne;

        let gravityOne = gravity.innerHTML = JSON.stringify(data.results[7].gravity)
        let my_gravityOne = JSON.parse(gravityOne);
        gravity.innerHTML = my_gravityOne;

        let populationOne = population.innerHTML = JSON.stringify(data.results[7].population)
        let my_populationOne = JSON.parse(populationOne);
        population.innerHTML = my_populationOne;

        let climateOne = climate.innerHTML = JSON.stringify(data.results[7].climate)
        let my_climateOne = JSON.parse(climateOne);
        climate.innerHTML = my_climateOne;

        let terrainOne = terrain.innerHTML = JSON.stringify(data.results[7].terrain)
        let my_terrainOne = JSON.parse(terrainOne);
        terrain.innerHTML = my_terrainOne;

        let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[7].surface_water)
        let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
        surfaceWater.innerHTML = my_surfaceWaterOne;
      })
    }else if(this.isCollapsedSeven === false) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let name = document.getElementById('text_seven') as HTMLElement;
        //console.log(data);
        let planetOne = name.innerHTML = JSON.stringify(data.results[7].name);
        let my_planetOne = JSON.parse(planetOne);
        name.innerHTML = my_planetOne;
      })
    }
  }

  toggleCollapseEight(){
    this.isCollapsedEight = !this.isCollapsedEight
    //console.log('нопку поменяли');
    //console.log('Функция начала выполняться')
    let request = 'https://swapi.dev/api/planets/';

    if(this.isCollapsedEight === true) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let nameMain = document.getElementById('texti_eight') as HTMLElement;
        let diameter = document.getElementById('diameter_eight') as HTMLElement;
        let rotationPeriod = document.getElementById('rotation_period_eight') as HTMLElement;
        let orbitalPeriod = document.getElementById('orbital_period_eight') as HTMLElement;
        let gravity = document.getElementById('gravity_eight') as HTMLElement;
        let population = document.getElementById('population_eight') as HTMLElement;
        let climate = document.getElementById('climate_eight') as HTMLElement;
        let terrain = document.getElementById('terrain_eight') as HTMLElement;
        let surfaceWater = document.getElementById('surface_water_eight') as HTMLElement;

        //console.log(data);

        let planetOne = nameMain.innerHTML = JSON.stringify(data.results[8].name);
        let my_planetOne = JSON.parse(planetOne);
        nameMain.innerHTML = my_planetOne;

        let diameterOne = diameter.innerHTML = JSON.stringify(data.results[8].diameter);
        let my_diameterOne = JSON.parse(diameterOne);
        diameter.innerHTML = my_diameterOne;

        let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[8].rotation_period)
        let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
        rotationPeriod.innerHTML = my_rotationPeriodOne;

        let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[8].orbital_period)
        let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
        orbitalPeriod.innerHTML = my_orbitalPeriodOne;

        let gravityOne = gravity.innerHTML = JSON.stringify(data.results[8].gravity)
        let my_gravityOne = JSON.parse(gravityOne);
        gravity.innerHTML = my_gravityOne;

        let populationOne = population.innerHTML = JSON.stringify(data.results[8].population)
        let my_populationOne = JSON.parse(populationOne);
        population.innerHTML = my_populationOne;

        let climateOne = climate.innerHTML = JSON.stringify(data.results[8].climate)
        let my_climateOne = JSON.parse(climateOne);
        climate.innerHTML = my_climateOne;

        let terrainOne = terrain.innerHTML = JSON.stringify(data.results[8].terrain)
        let my_terrainOne = JSON.parse(terrainOne);
        terrain.innerHTML = my_terrainOne;

        let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[8].surface_water)
        let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
        surfaceWater.innerHTML = my_surfaceWaterOne;
      })
    }else if(this.isCollapsedEight === false) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let name = document.getElementById('text_eight') as HTMLElement;
        //console.log(data);
        let planetOne = name.innerHTML = JSON.stringify(data.results[8].name);
        let my_planetOne = JSON.parse(planetOne);
        name.innerHTML = my_planetOne;
      })
    }
  }

  toggleCollapseNine(){
    this.isCollapsedNine = !this.isCollapsedNine
    //console.log('нопку поменяли');
    //console.log('Функция начала выполняться')
    let request = 'https://swapi.dev/api/planets/';

    if(this.isCollapsedNine === true) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let nameMain = document.getElementById('texti_nine') as HTMLElement;
        let diameter = document.getElementById('diameter_nine') as HTMLElement;
        let rotationPeriod = document.getElementById('rotation_period_nine') as HTMLElement;
        let orbitalPeriod = document.getElementById('orbital_period_nine') as HTMLElement;
        let gravity = document.getElementById('gravity_nine') as HTMLElement;
        let population = document.getElementById('population_nine') as HTMLElement;
        let climate = document.getElementById('climate_nine') as HTMLElement;
        let terrain = document.getElementById('terrain_nine') as HTMLElement;
        let surfaceWater = document.getElementById('surface_water_nine') as HTMLElement;

        //console.log(data);

        let planetOne = nameMain.innerHTML = JSON.stringify(data.results[9].name);
        let my_planetOne = JSON.parse(planetOne);
        nameMain.innerHTML = my_planetOne;

        let diameterOne = diameter.innerHTML = JSON.stringify(data.results[9].diameter);
        let my_diameterOne = JSON.parse(diameterOne);
        diameter.innerHTML = my_diameterOne;

        let rotationPeriodOne = rotationPeriod.innerHTML = JSON.stringify(data.results[9].rotation_period)
        let my_rotationPeriodOne = JSON.parse(rotationPeriodOne);
        rotationPeriod.innerHTML = my_rotationPeriodOne;

        let orbitalPeriodOne = orbitalPeriod.innerHTML = JSON.stringify(data.results[9].orbital_period)
        let my_orbitalPeriodOne = JSON.parse(orbitalPeriodOne);
        orbitalPeriod.innerHTML = my_orbitalPeriodOne;

        let gravityOne = gravity.innerHTML = JSON.stringify(data.results[9].gravity)
        let my_gravityOne = JSON.parse(gravityOne);
        gravity.innerHTML = my_gravityOne;

        let populationOne = population.innerHTML = JSON.stringify(data.results[9].population)
        let my_populationOne = JSON.parse(populationOne);
        population.innerHTML = my_populationOne;

        let climateOne = climate.innerHTML = JSON.stringify(data.results[9].climate)
        let my_climateOne = JSON.parse(climateOne);
        climate.innerHTML = my_climateOne;

        let terrainOne = terrain.innerHTML = JSON.stringify(data.results[9].terrain)
        let my_terrainOne = JSON.parse(terrainOne);
        terrain.innerHTML = my_terrainOne;

        let surfaceWaterOne = surfaceWater.innerHTML = JSON.stringify(data.results[9].surface_water)
        let my_surfaceWaterOne = JSON.parse(surfaceWaterOne);
        surfaceWater.innerHTML = my_surfaceWaterOne;
      })
    }else if(this.isCollapsedNine === false) {
      fetch(request).then((response) => {
        return response.json();
      }).then((data) => {
        let name = document.getElementById('text_nine') as HTMLElement;
        //console.log(data);
        let planetOne = name.innerHTML = JSON.stringify(data.results[9].name);
        let my_planetOne = JSON.parse(planetOne);
        name.innerHTML = my_planetOne;
      })
    }
  }

  ngOnInit(): void {

  }

}
