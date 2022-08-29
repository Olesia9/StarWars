import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-endor',
  templateUrl: '../about/about.component.html',
  styleUrls: ['../about/about.component.css']
})
export class AboutEndorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let request = 'https://swapi.dev/api/planets/7/';
    let residents = 'https://swapi.dev/api/people/?page=3';

    let containerResident: any = document.querySelector('#persona');
    const containerDescription: any = document.createElement('div') as HTMLElement;
    const imgResidentOne: any = document.createElement('img') as HTMLElement;
    const containerResidentDescription: any = document.createElement('div') as HTMLElement;
    const residentName: any = document.createElement('h3') as HTMLElement;
    const residentHeight: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpan: any = document.createElement('span') as HTMLElement;
    const residentMass: any = document.createElement('h3') as HTMLElement;
    const residentMassSpan: any = document.createElement('span') as HTMLElement;
    const residentHair: any = document.createElement('h3') as HTMLElement;
    const residentHairSpan: any = document.createElement('span') as HTMLElement;
    const residentSkin: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpan: any = document.createElement('span') as HTMLElement;
    const residentEye: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpan: any = document.createElement('span') as HTMLElement;
    const residentYear: any = document.createElement('h3') as HTMLElement;
    const residentYearSpan: any = document.createElement('span') as HTMLElement;
    const residentGender: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpan: any = document.createElement('span') as HTMLElement;

    containerDescription.classList.add('card-resident', 'male');

    residentName.id = 'name_one';
    residentHeightSpan.id = 'height-one';
    residentMassSpan.id = 'mass-one';
    residentHairSpan.id = 'hair-one';
    residentSkinSpan.id = 'skin-one';
    residentEyeSpan.id = 'eye-one';
    residentYearSpan.id = 'year-one';
    residentGenderSpan.id = 'gender-one';

    residentName.innerHTML = 'Name';
    imgResidentOne.src = '../assets/img/resident/wicket_wosw.webp';
    residentHeight.innerHTML = 'Height: ';
    residentHeightSpan.innerHTML = 'cm';
    residentMass.innerHTML = 'Mass: ';
    residentMassSpan.innerHTML = 'kg';
    residentHair.innerHTML = 'Hair color: ';
    residentHairSpan.innerHTML = 'color';
    residentSkin.innerHTML = 'Skin color: ';
    residentSkinSpan.innerHTML = 'color';
    residentEye.innerHTML = 'Eye color: ';
    residentEyeSpan.innerHTML = 'color';
    residentYear.innerHTML = 'Birth year: ';
    residentYearSpan.innerHTML = 'year';
    residentGender.innerHTML = 'Gender: ';
    residentGenderSpan.innerHTML = 'year';

    containerDescription.style.display = 'flex';
    containerDescription.style.width = 'fit-content';
    //containerDescription.style.borderRight = '1px solid #d1df00fc';
    containerDescription.style.borderLeft = '1px solid #d1df00fc';
    containerDescription.style.paddingRight = '30px';
    //containerDescription.style.paddingLeft = '30px';
    imgResidentOne.style.width = '260px';
    containerResidentDescription.style.marginLeft = '30px';

    containerResident.append(containerDescription);
    containerDescription.append(imgResidentOne);
    containerDescription.append(containerResidentDescription);
    containerResidentDescription.append(residentName);
    containerResidentDescription.append(residentHeight);
    residentHeight.append(residentHeightSpan);
    containerResidentDescription.append(residentMass);
    residentMass.append(residentMassSpan);
    containerResidentDescription.append(residentHair);
    residentHair.append(residentHairSpan);
    containerResidentDescription.append(residentSkin);
    residentSkin.append(residentSkinSpan);
    containerResidentDescription.append(residentEye);
    residentEye.append(residentEyeSpan);
    containerResidentDescription.append(residentYear);
    residentYear.append(residentYearSpan);
    containerResidentDescription.append(residentGender);
    residentGender.append(residentGenderSpan);

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

    fetch(residents).then((response) => {
      return response.json();
    }).then((data) => {
      let namePersonOne = document.getElementById('name_one') as HTMLElement;
      let heightPersonOne = document.getElementById('height-one') as HTMLElement;
      let massPersonOne = document.getElementById('mass-one') as HTMLElement;
      let hairPersonOne = document.getElementById('hair-one') as HTMLElement;
      let skinPersonOne = document.getElementById('skin-one') as HTMLElement;
      let eyePersonOne = document.getElementById('eye-one') as HTMLElement;
      let yearPersonOne = document.getElementById('year-one') as HTMLElement;
      let genderPersonOne = document.getElementById('gender-one') as HTMLElement;

      //console.log(data);

      let namePerson = namePersonOne.innerHTML = JSON.stringify(data.results[8].name)
      let my_namePersonOne = JSON.parse(namePerson);
      namePersonOne.innerHTML = my_namePersonOne;

      let heightPerson = heightPersonOne.innerHTML = JSON.stringify(data.results[8].height)
      let my_heightPersonOne = JSON.parse(heightPerson);
      heightPersonOne.innerHTML = my_heightPersonOne + ' ' + 'cm';

      let massPerson = massPersonOne.innerHTML = JSON.stringify(data.results[8].mass)
      let my_massPersonOne = JSON.parse(massPerson);
      massPersonOne.innerHTML = my_massPersonOne + ' ' + 'kg';

      let hairPerson = hairPersonOne.innerHTML = JSON.stringify(data.results[8].hair_color)
      let my_hairPersonOne = JSON.parse(hairPerson);
      hairPersonOne.innerHTML = my_hairPersonOne;

      let skinPerson = skinPersonOne.innerHTML = JSON.stringify(data.results[8].skin_color)
      let my_skinPersonOne = JSON.parse(skinPerson);
      skinPersonOne.innerHTML = my_skinPersonOne;

      let eyePerson = eyePersonOne.innerHTML = JSON.stringify(data.results[8].eye_color)
      let my_eyePersonOne = JSON.parse(eyePerson);
      eyePersonOne.innerHTML = my_eyePersonOne;

      let yearPerson = yearPersonOne.innerHTML = JSON.stringify(data.results[8].birth_year)
      let my_yearPersonOne = JSON.parse(yearPerson);
      yearPersonOne.innerHTML = my_yearPersonOne;

      let genderPerson = genderPersonOne.innerHTML = JSON.stringify(data.results[8].gender)
      let my_genderPersonOne = JSON.parse(genderPerson);
      genderPersonOne.innerHTML = my_genderPersonOne;
    })

    const buttons = document.querySelectorAll('.button-sort');
    const cards = document.querySelectorAll('.card-resident');
    function filter(category: any, items: any) {
      items.forEach((item: any)=> {
        const isItemFiltered = !item.classList.contains(category);
        const isShowAll = category.toLowerCase() === 'all'
        if(isItemFiltered && !isShowAll) {
          item.style.display = 'none';
        }else {
          item.style.display = 'flex';
        }
      })
    }
    buttons.forEach((button: any) => {
      button.addEventListener('click', () => {
        const currentCategory = button.dataset.filter
        filter(currentCategory, cards)
        //console.log(currentCategory)
      })
    })
  }

}
