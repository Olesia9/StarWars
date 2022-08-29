import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-planet-two',
  templateUrl: '../about/about.component.html',
  styleUrls: ['../about/about.component.css']
})
export class AboutPlanetTwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let request = 'https://swapi.dev/api/planets/2/';
    let residents = 'https://swapi.dev/api/people/?page=1';
    let residentsPageTwo = 'https://swapi.dev/api/people/?page=7';
    let residentsPageThree = 'https://swapi.dev/api/people/?page=9';

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

    const containerDescriptionTwo: any = document.createElement('div') as HTMLElement;
    const imgResidentTwo: any = document.createElement('img') as HTMLElement;
    const containerResidentDescriptionTwo: any = document.createElement('div') as HTMLElement;
    const residentNameTwo: any = document.createElement('h3') as HTMLElement;
    const residentHeightTwo: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpanTwo: any = document.createElement('span') as HTMLElement;
    const residentMassTwo: any = document.createElement('h3') as HTMLElement;
    const residentMassSpanTwo: any = document.createElement('span') as HTMLElement;
    const residentHairTwo: any = document.createElement('h3') as HTMLElement;
    const residentHairSpanTwo: any = document.createElement('span') as HTMLElement;
    const residentSkinTwo: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpanTwo: any = document.createElement('span') as HTMLElement;
    const residentEyeTwo: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpanTwo: any = document.createElement('span') as HTMLElement;
    const residentYearTwo: any = document.createElement('h3') as HTMLElement;
    const residentYearSpanTwo: any = document.createElement('span') as HTMLElement;
    const residentGenderTwo: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpanTwo: any = document.createElement('span') as HTMLElement;

    const containerDescriptionThree: any = document.createElement('div') as HTMLElement;
    const imgResidentThree: any = document.createElement('img') as HTMLElement;
    const containerResidentDescriptionThree: any = document.createElement('div') as HTMLElement;
    const residentNameThree: any = document.createElement('h3') as HTMLElement;
    const residentHeightThree: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpanThree: any = document.createElement('span') as HTMLElement;
    const residentMassThree: any = document.createElement('h3') as HTMLElement;
    const residentMassSpanThree: any = document.createElement('span') as HTMLElement;
    const residentHairThree: any = document.createElement('h3') as HTMLElement;
    const residentHairSpanThree: any = document.createElement('span') as HTMLElement;
    const residentSkinThree: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpanThree: any = document.createElement('span') as HTMLElement;
    const residentEyeThree: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpanThree: any = document.createElement('span') as HTMLElement;
    const residentYearThree: any = document.createElement('h3') as HTMLElement;
    const residentYearSpanThree: any = document.createElement('span') as HTMLElement;
    const residentGenderThree: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpanThree: any = document.createElement('span') as HTMLElement;

    containerDescription.classList.add('card-resident', 'female');
    containerDescriptionTwo.classList.add('card-resident', 'male');
    containerDescriptionThree.classList.add('card-resident', 'female');

    residentName.id = 'name_one';
    residentHeightSpan.id = 'height-one';
    residentMassSpan.id = 'mass-one';
    residentHairSpan.id = 'hair-one';
    residentSkinSpan.id = 'skin-one';
    residentEyeSpan.id = 'eye-one';
    residentYearSpan.id = 'year-one';
    residentGenderSpan.id = 'gender-one';

    residentNameTwo.id = 'name_two';
    residentHeightSpanTwo.id = 'height-two';
    residentMassSpanTwo.id = 'mass-two';
    residentHairSpanTwo.id = 'hair-two';
    residentSkinSpanTwo.id = 'skin-two';
    residentEyeSpanTwo.id = 'eye-two';
    residentYearSpanTwo.id = 'year-two';
    residentGenderSpanTwo.id = 'gender-two';

    residentNameThree.id = 'name_three';
    residentHeightSpanThree.id = 'height-three';
    residentMassSpanThree.id = 'mass-three';
    residentHairSpanThree.id = 'hair-three';
    residentSkinSpanThree.id = 'skin-three';
    residentEyeSpanThree.id = 'eye-three';
    residentYearSpanThree.id = 'year-three';
    residentGenderSpanThree.id = 'gender-three';

    residentName.innerHTML = 'Name';
    imgResidentOne.src = '../assets/img/resident/princessleia.webp';
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

    residentNameTwo.innerHTML = 'Name';
    imgResidentTwo.src = '../assets/img/resident/bail_organa_large.webp';
    residentHeightTwo.innerHTML = 'Height: ';
    residentHeightSpanTwo.innerHTML = 'cm';
    residentMassTwo.innerHTML = 'Mass: ';
    residentMassSpanTwo.innerHTML = 'kg';
    residentHairTwo.innerHTML = 'Hair color: ';
    residentHairSpanTwo.innerHTML = 'color';
    residentSkinTwo.innerHTML = 'Skin color: ';
    residentSkinSpanTwo.innerHTML = 'color';
    residentEyeTwo.innerHTML = 'Eye color: ';
    residentEyeSpanTwo.innerHTML = 'color';
    residentYearTwo.innerHTML = 'Birth year: ';
    residentYearSpanTwo.innerHTML = 'year';
    residentGenderTwo.innerHTML = 'Gender: ';
    residentGenderSpanTwo.innerHTML = 'year';

    residentNameThree.innerHTML = 'Name';
    imgResidentThree.src = '../assets/img/resident/sly_moore.webp';
    residentHeightThree.innerHTML = 'Height: ';
    residentHeightSpanThree.innerHTML = 'cm';
    residentMassThree.innerHTML = 'Mass: ';
    residentMassSpanThree.innerHTML = 'kg';
    residentHairThree.innerHTML = 'Hair color: ';
    residentHairSpanThree.innerHTML = 'color';
    residentSkinThree.innerHTML = 'Skin color: ';
    residentSkinSpanThree.innerHTML = 'color';
    residentEyeThree.innerHTML = 'Eye color: ';
    residentEyeSpanThree.innerHTML = 'color';
    residentYearThree.innerHTML = 'Birth year: ';
    residentYearSpanThree.innerHTML = 'year';
    residentGenderThree.innerHTML = 'Gender: ';
    residentGenderSpanThree.innerHTML = 'year';

    containerDescription.style.display = 'flex';
    containerDescription.style.width = 'fit-content';
    //containerDescription.style.borderRight = '1px solid #d1df00fc';
    containerDescription.style.borderLeft = '1px solid #d1df00fc';
    containerDescription.style.paddingRight = '30px';
    //containerDescription.style.paddingLeft = '30px';
    imgResidentOne.style.width = '260px';
    containerResidentDescription.style.marginLeft = '30px';

    containerDescriptionTwo.style.display = 'flex';
    containerDescriptionTwo.style.width = 'fit-content';
    //containerDescriptionTwo.style.borderRight = '1px solid #d1df00fc';
    containerDescriptionTwo.style.borderLeft = '1px solid #d1df00fc';
    containerDescriptionTwo.style.paddingRight = '30px';
    //containerDescription.style.paddingLeft = '30px';
    imgResidentTwo.style.width = '260px';
    containerResidentDescriptionTwo.style.marginLeft = '30px';

    containerDescriptionThree.style.display = 'flex';
    containerDescriptionThree.style.width = 'fit-content';
    //containerDescriptionThree.style.borderRight = '1px solid #d1df00fc';
    containerDescriptionThree.style.borderLeft = '1px solid #d1df00fc';
    containerDescriptionThree.style.paddingRight = '30px';
    //containerDescription.style.paddingLeft = '30px';
    imgResidentThree.style.width = '260px';
    containerResidentDescriptionThree.style.marginLeft = '30px';

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

    containerResident.append(containerDescriptionTwo);
    containerDescriptionTwo.append(imgResidentTwo);
    containerDescriptionTwo.append(containerResidentDescriptionTwo);
    containerResidentDescriptionTwo.append(residentNameTwo);
    containerResidentDescriptionTwo.append(residentHeightTwo);
    residentHeightTwo.append(residentHeightSpanTwo);
    containerResidentDescriptionTwo.append(residentMassTwo);
    residentMassTwo.append(residentMassSpanTwo);
    containerResidentDescriptionTwo.append(residentHairTwo);
    residentHairTwo.append(residentHairSpanTwo);
    containerResidentDescriptionTwo.append(residentSkinTwo);
    residentSkinTwo.append(residentSkinSpanTwo);
    containerResidentDescriptionTwo.append(residentEyeTwo);
    residentEyeTwo.append(residentEyeSpanTwo);
    containerResidentDescriptionTwo.append(residentYearTwo);
    residentYearTwo.append(residentYearSpanTwo);
    containerResidentDescriptionTwo.append(residentGenderTwo);
    residentGenderTwo.append(residentGenderSpanTwo);

    containerResident.append(containerDescriptionThree);
    containerDescriptionThree.append(imgResidentThree);
    containerDescriptionThree.append(containerResidentDescriptionThree);
    containerResidentDescriptionThree.append(residentNameThree);
    containerResidentDescriptionThree.append(residentHeightThree);
    residentHeightThree.append(residentHeightSpanThree);
    containerResidentDescriptionThree.append(residentMassThree);
    residentMassThree.append(residentMassSpanThree);
    containerResidentDescriptionThree.append(residentHairThree);
    residentHairThree.append(residentHairSpanThree);
    containerResidentDescriptionThree.append(residentSkinThree);
    residentSkinThree.append(residentSkinSpanThree);
    containerResidentDescriptionThree.append(residentEyeThree);
    residentEyeThree.append(residentEyeSpanThree);
    containerResidentDescriptionThree.append(residentYearThree);
    residentYearThree.append(residentYearSpanThree);
    containerResidentDescriptionThree.append(residentGenderThree);
    residentGenderThree.append(residentGenderSpanThree);

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

      let namePerson = namePersonOne.innerHTML = JSON.stringify(data.results[4].name)
      let my_namePersonOne = JSON.parse(namePerson);
      namePersonOne.innerHTML = my_namePersonOne;

      let heightPerson = heightPersonOne.innerHTML = JSON.stringify(data.results[4].height)
      let my_heightPersonOne = JSON.parse(heightPerson);
      heightPersonOne.innerHTML = my_heightPersonOne + ' ' + 'cm';

      let massPerson = massPersonOne.innerHTML = JSON.stringify(data.results[4].mass)
      let my_massPersonOne = JSON.parse(massPerson);
      massPersonOne.innerHTML = my_massPersonOne + ' ' + 'kg';

      let hairPerson = hairPersonOne.innerHTML = JSON.stringify(data.results[4].hair_color)
      let my_hairPersonOne = JSON.parse(hairPerson);
      hairPersonOne.innerHTML = my_hairPersonOne;

      let skinPerson = skinPersonOne.innerHTML = JSON.stringify(data.results[4].skin_color)
      let my_skinPersonOne = JSON.parse(skinPerson);
      skinPersonOne.innerHTML = my_skinPersonOne;

      let eyePerson = eyePersonOne.innerHTML = JSON.stringify(data.results[4].eye_color)
      let my_eyePersonOne = JSON.parse(eyePerson);
      eyePersonOne.innerHTML = my_eyePersonOne;

      let yearPerson = yearPersonOne.innerHTML = JSON.stringify(data.results[4].birth_year)
      let my_yearPersonOne = JSON.parse(yearPerson);
      yearPersonOne.innerHTML = my_yearPersonOne;

      let genderPerson = genderPersonOne.innerHTML = JSON.stringify(data.results[4].gender)
      let my_genderPersonOne = JSON.parse(genderPerson);
      genderPersonOne.innerHTML = my_genderPersonOne;
    })

    fetch(residentsPageTwo).then((response) => {
      return response.json();
    }).then((data) => {
      let namePersonTwo = document.getElementById('name_two') as HTMLElement;
      let heightPersonTwo = document.getElementById('height-two') as HTMLElement;
      let massPersonTwo = document.getElementById('mass-two') as HTMLElement;
      let hairPersonTwo = document.getElementById('hair-two') as HTMLElement;
      let skinPersonTwo = document.getElementById('skin-two') as HTMLElement;
      let eyePersonTwo = document.getElementById('eye-two') as HTMLElement;
      let yearPersonTwo = document.getElementById('year-two') as HTMLElement;
      let genderPersonTwo = document.getElementById('gender-two') as HTMLElement;

      //console.log(data);

      let namePersonTwos = namePersonTwo.innerHTML = JSON.stringify(data.results[6].name)
      let my_namePersonTwo = JSON.parse(namePersonTwos);
      namePersonTwo.innerHTML = my_namePersonTwo;

      let heightPersonTwos = heightPersonTwo.innerHTML = JSON.stringify(data.results[6].height)
      let my_heightPersonTwo = JSON.parse(heightPersonTwos);
      heightPersonTwo.innerHTML = my_heightPersonTwo + ' ' + 'cm';

      let massPersonTwos = massPersonTwo.innerHTML = JSON.stringify(data.results[6].mass)
      let my_massPersonTwo = JSON.parse(massPersonTwos);
      massPersonTwo.innerHTML = my_massPersonTwo + ' ' + 'kg';

      let hairPersonTwos = hairPersonTwo.innerHTML = JSON.stringify(data.results[6].hair_color)
      let my_hairPersonTwo = JSON.parse(hairPersonTwos);
      hairPersonTwo.innerHTML = my_hairPersonTwo;

      let skinPersonTwos = skinPersonTwo.innerHTML = JSON.stringify(data.results[6].skin_color)
      let my_skinPersonTwo = JSON.parse(skinPersonTwos);
      skinPersonTwo.innerHTML = my_skinPersonTwo;

      let eyePersonTwos = eyePersonTwo.innerHTML = JSON.stringify(data.results[6].eye_color)
      let my_eyePersonTwo = JSON.parse(eyePersonTwos);
      eyePersonTwo.innerHTML = my_eyePersonTwo;

      let yearPersonTwos = yearPersonTwo.innerHTML = JSON.stringify(data.results[6].birth_year)
      let my_yearPersonTwo = JSON.parse(yearPersonTwos);
      yearPersonTwo.innerHTML = my_yearPersonTwo;

      let genderPersonTwos = genderPersonTwo.innerHTML = JSON.stringify(data.results[6].gender)
      let my_genderPersonTwo = JSON.parse(genderPersonTwos);
      genderPersonTwo.innerHTML = my_genderPersonTwo;

    })

    fetch(residentsPageThree).then((response) => {
      return response.json();
    }).then((data) => {
      let namePerson = document.getElementById('name_three') as HTMLElement;
      let heightPerson = document.getElementById('height-three') as HTMLElement;
      let massPerson = document.getElementById('mass-three') as HTMLElement;
      let hairPerson = document.getElementById('hair-three') as HTMLElement;
      let skinPerson = document.getElementById('skin-three') as HTMLElement;
      let eyePerson = document.getElementById('eye-three') as HTMLElement;
      let yearPerson = document.getElementById('year-three') as HTMLElement;
      let genderPerson = document.getElementById('gender-three') as HTMLElement;

      //console.log(data);

      let namePersons = namePerson.innerHTML = JSON.stringify(data.results[0].name)
      let my_namePerson = JSON.parse(namePersons);
      namePerson.innerHTML = my_namePerson;

      let heightPersons = heightPerson.innerHTML = JSON.stringify(data.results[0].height)
      let my_heightPerson = JSON.parse(heightPersons);
      heightPerson.innerHTML = my_heightPerson + ' ' + 'cm';

      let massPersons = massPerson.innerHTML = JSON.stringify(data.results[0].mass)
      let my_massPerson = JSON.parse(massPersons);
      massPerson.innerHTML = my_massPerson + ' ' + 'kg';

      let hairPersons = hairPerson.innerHTML = JSON.stringify(data.results[0].hair_color)
      let my_hairPerson = JSON.parse(hairPersons);
      hairPerson.innerHTML = my_hairPerson;

      let skinPersons = skinPerson.innerHTML = JSON.stringify(data.results[0].skin_color)
      let my_skinPerson = JSON.parse(skinPersons);
      skinPerson.innerHTML = my_skinPerson;

      let eyePersons = eyePerson.innerHTML = JSON.stringify(data.results[0].eye_color)
      let my_eyePerson = JSON.parse(eyePersons);
      eyePerson.innerHTML = my_eyePerson;

      let yearPersons = yearPerson.innerHTML = JSON.stringify(data.results[0].birth_year)
      let my_yearPerson = JSON.parse(yearPersons);
      yearPerson.innerHTML = my_yearPerson;

      let genderPersons = genderPerson.innerHTML = JSON.stringify(data.results[0].gender)
      let my_genderPerson = JSON.parse(genderPersons);
      genderPerson.innerHTML = my_genderPerson;

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
