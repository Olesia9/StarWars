import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-naboo',
  templateUrl: '../about/about.component.html',
  styleUrls: ['../about/about.component.css']
})
export class AboutNabooComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let request = 'https://swapi.dev/api/planets/8/';
    let residents = 'https://swapi.dev/api/people/?page=1';
    let residentsPageTwo = 'https://swapi.dev/api/people/?page=2';
    let residentsPageThree = 'https://swapi.dev/api/people/?page=4';
    let residentsPageFour = 'https://swapi.dev/api/people/?page=5';
    let residentsPageFive = 'https://swapi.dev/api/people/?page=6';
    let residentsPageSix = 'https://swapi.dev/api/people/?page=7';

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

    const containerDescriptionFour: any = document.createElement('div') as HTMLElement;
    const imgResidentFour: any = document.createElement('img') as HTMLElement;
    const containerResidentDescriptionFour: any = document.createElement('div') as HTMLElement;
    const residentNameFour: any = document.createElement('h3') as HTMLElement;
    const residentHeightFour: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpanFour: any = document.createElement('span') as HTMLElement;
    const residentMassFour: any = document.createElement('h3') as HTMLElement;
    const residentMassSpanFour: any = document.createElement('span') as HTMLElement;
    const residentHairFour: any = document.createElement('h3') as HTMLElement;
    const residentHairSpanFour: any = document.createElement('span') as HTMLElement;
    const residentSkinFour: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpanFour: any = document.createElement('span') as HTMLElement;
    const residentEyeFour: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpanFour: any = document.createElement('span') as HTMLElement;
    const residentYearFour: any = document.createElement('h3') as HTMLElement;
    const residentYearSpanFour: any = document.createElement('span') as HTMLElement;
    const residentGenderFour: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpanFour: any = document.createElement('span') as HTMLElement;

    const containerDescriptionFive: any = document.createElement('div') as HTMLElement;
    const imgResidentFive: any = document.createElement('img') as HTMLElement;
    const containerResidentDescriptionFive: any = document.createElement('div') as HTMLElement;
    const residentNameFive: any = document.createElement('h3') as HTMLElement;
    const residentHeightFive: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpanFive: any = document.createElement('span') as HTMLElement;
    const residentMassFive: any = document.createElement('h3') as HTMLElement;
    const residentMassSpanFive: any = document.createElement('span') as HTMLElement;
    const residentHairFive: any = document.createElement('h3') as HTMLElement;
    const residentHairSpanFive: any = document.createElement('span') as HTMLElement;
    const residentSkinFive: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpanFive: any = document.createElement('span') as HTMLElement;
    const residentEyeFive: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpanFive: any = document.createElement('span') as HTMLElement;
    const residentYearFive: any = document.createElement('h3') as HTMLElement;
    const residentYearSpanFive: any = document.createElement('span') as HTMLElement;
    const residentGenderFive: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpanFive: any = document.createElement('span') as HTMLElement;

    const containerDescriptionSix: any = document.createElement('div') as HTMLElement;
    const imgResidentSix: any = document.createElement('img') as HTMLElement;
    const containerResidentDescriptionSix: any = document.createElement('div') as HTMLElement;
    const residentNameSix: any = document.createElement('h3') as HTMLElement;
    const residentHeightSix: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpanSix: any = document.createElement('span') as HTMLElement;
    const residentMassSix: any = document.createElement('h3') as HTMLElement;
    const residentMassSpanSix: any = document.createElement('span') as HTMLElement;
    const residentHairSix: any = document.createElement('h3') as HTMLElement;
    const residentHairSpanSix: any = document.createElement('span') as HTMLElement;
    const residentSkinSix: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpanSix: any = document.createElement('span') as HTMLElement;
    const residentEyeSix: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpanSix: any = document.createElement('span') as HTMLElement;
    const residentYearSix: any = document.createElement('h3') as HTMLElement;
    const residentYearSpanSix: any = document.createElement('span') as HTMLElement;
    const residentGenderSix: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpanSix: any = document.createElement('span') as HTMLElement;

    const containerDescriptionSeven: any = document.createElement('div') as HTMLElement;
    const imgResidentSeven: any = document.createElement('img') as HTMLElement;
    const containerResidentDescriptionSeven: any = document.createElement('div') as HTMLElement;
    const residentNameSeven: any = document.createElement('h3') as HTMLElement;
    const residentHeightSeven: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpanSeven: any = document.createElement('span') as HTMLElement;
    const residentMassSeven: any = document.createElement('h3') as HTMLElement;
    const residentMassSpanSeven: any = document.createElement('span') as HTMLElement;
    const residentHairSeven: any = document.createElement('h3') as HTMLElement;
    const residentHairSpanSeven: any = document.createElement('span') as HTMLElement;
    const residentSkinSeven: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpanSeven: any = document.createElement('span') as HTMLElement;
    const residentEyeSeven: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpanSeven: any = document.createElement('span') as HTMLElement;
    const residentYearSeven: any = document.createElement('h3') as HTMLElement;
    const residentYearSpanSeven: any = document.createElement('span') as HTMLElement;
    const residentGenderSeven: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpanSeven: any = document.createElement('span') as HTMLElement;

    const containerDescriptionEight: any = document.createElement('div') as HTMLElement;
    const imgResidentEight: any = document.createElement('img') as HTMLElement;
    const containerResidentDescriptionEight: any = document.createElement('div') as HTMLElement;
    const residentNameEight: any = document.createElement('h3') as HTMLElement;
    const residentHeightEight: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpanEight: any = document.createElement('span') as HTMLElement;
    const residentMassEight: any = document.createElement('h3') as HTMLElement;
    const residentMassSpanEight: any = document.createElement('span') as HTMLElement;
    const residentHairEight: any = document.createElement('h3') as HTMLElement;
    const residentHairSpanEight: any = document.createElement('span') as HTMLElement;
    const residentSkinEight: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpanEight: any = document.createElement('span') as HTMLElement;
    const residentEyeEight: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpanEight: any = document.createElement('span') as HTMLElement;
    const residentYearEight: any = document.createElement('h3') as HTMLElement;
    const residentYearSpanEight: any = document.createElement('span') as HTMLElement;
    const residentGenderEight: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpanEight: any = document.createElement('span') as HTMLElement;

    const containerDescriptionNine: any = document.createElement('div') as HTMLElement;
    const imgResidentNine: any = document.createElement('img') as HTMLElement;
    const containerResidentDescriptionNine: any = document.createElement('div') as HTMLElement;
    const residentNameNine: any = document.createElement('h3') as HTMLElement;
    const residentHeightNine: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpanNine: any = document.createElement('span') as HTMLElement;
    const residentMassNine: any = document.createElement('h3') as HTMLElement;
    const residentMassSpanNine: any = document.createElement('span') as HTMLElement;
    const residentHairNine: any = document.createElement('h3') as HTMLElement;
    const residentHairSpanNine: any = document.createElement('span') as HTMLElement;
    const residentSkinNine: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpanNine: any = document.createElement('span') as HTMLElement;
    const residentEyeNine: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpanNine: any = document.createElement('span') as HTMLElement;
    const residentYearNine: any = document.createElement('h3') as HTMLElement;
    const residentYearSpanNine: any = document.createElement('span') as HTMLElement;
    const residentGenderNine: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpanNine: any = document.createElement('span') as HTMLElement;

    const containerDescriptionTen: any = document.createElement('div') as HTMLElement;
    const imgResidentTen: any = document.createElement('img') as HTMLElement;
    const containerResidentDescriptionTen: any = document.createElement('div') as HTMLElement;
    const residentNameTen: any = document.createElement('h3') as HTMLElement;
    const residentHeightTen: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpanTen: any = document.createElement('span') as HTMLElement;
    const residentMassTen: any = document.createElement('h3') as HTMLElement;
    const residentMassSpanTen: any = document.createElement('span') as HTMLElement;
    const residentHairTen: any = document.createElement('h3') as HTMLElement;
    const residentHairSpanTen: any = document.createElement('span') as HTMLElement;
    const residentSkinTen: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpanTen: any = document.createElement('span') as HTMLElement;
    const residentEyeTen: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpanTen: any = document.createElement('span') as HTMLElement;
    const residentYearTen: any = document.createElement('h3') as HTMLElement;
    const residentYearSpanTen: any = document.createElement('span') as HTMLElement;
    const residentGenderTen: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpanTen: any = document.createElement('span') as HTMLElement;

    const containerDescriptionEleven: any = document.createElement('div') as HTMLElement;
    const imgResidentEleven: any = document.createElement('img') as HTMLElement;
    const containerResidentDescriptionEleven: any = document.createElement('div') as HTMLElement;
    const residentNameEleven: any = document.createElement('h3') as HTMLElement;
    const residentHeightEleven: any = document.createElement('h3') as HTMLElement;
    const residentHeightSpanEleven: any = document.createElement('span') as HTMLElement;
    const residentMassEleven: any = document.createElement('h3') as HTMLElement;
    const residentMassSpanEleven: any = document.createElement('span') as HTMLElement;
    const residentHairEleven: any = document.createElement('h3') as HTMLElement;
    const residentHairSpanEleven: any = document.createElement('span') as HTMLElement;
    const residentSkinEleven: any = document.createElement('h3') as HTMLElement;
    const residentSkinSpanEleven: any = document.createElement('span') as HTMLElement;
    const residentEyeEleven: any = document.createElement('h3') as HTMLElement;
    const residentEyeSpanEleven: any = document.createElement('span') as HTMLElement;
    const residentYearEleven: any = document.createElement('h3') as HTMLElement;
    const residentYearSpanEleven: any = document.createElement('span') as HTMLElement;
    const residentGenderEleven: any = document.createElement('h3') as HTMLElement;
    const residentGenderSpanEleven: any = document.createElement('span') as HTMLElement;

    containerDescription.classList.add('card-resident', 'na');
    containerDescriptionTwo.classList.add('card-resident', 'male');
    containerDescriptionThree.classList.add('card-resident', 'female');
    containerDescriptionFour.classList.add('card-resident', 'male');
    containerDescriptionFive.classList.add('card-resident', 'male');
    containerDescriptionSix.classList.add('card-resident', 'male');
    containerDescriptionSeven.classList.add('card-resident', 'male');
    containerDescriptionEight.classList.add('card-resident', 'male');
    containerDescriptionNine.classList.add('card-resident', 'male');
    containerDescriptionTen.classList.add('card-resident', 'female');
    containerDescriptionEleven.classList.add('card-resident', 'female');

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

    residentNameFour.id = 'name_four';
    residentHeightSpanFour.id = 'height-four';
    residentMassSpanFour.id = 'mass-four';
    residentHairSpanFour.id = 'hair-four';
    residentSkinSpanFour.id = 'skin-four';
    residentEyeSpanFour.id = 'eye-four';
    residentYearSpanFour.id = 'year-four';
    residentGenderSpanFour.id = 'gender-four';

    residentNameFive.id = 'name_five';
    residentHeightSpanFive.id = 'height-five';
    residentMassSpanFive.id = 'mass-five';
    residentHairSpanFive.id = 'hair-five';
    residentSkinSpanFive.id = 'skin-five';
    residentEyeSpanFive.id = 'eye-five';
    residentYearSpanFive.id = 'year-five';
    residentGenderSpanFive.id = 'gender-five';

    residentNameSix.id = 'name_six';
    residentHeightSpanSix.id = 'height-six';
    residentMassSpanSix.id = 'mass-six';
    residentHairSpanSix.id = 'hair-six';
    residentSkinSpanSix.id = 'skin-six';
    residentEyeSpanSix.id = 'eye-six';
    residentYearSpanSix.id = 'year-six';
    residentGenderSpanSix.id = 'gender-six';

    residentNameSeven.id = 'name_seven';
    residentHeightSpanSeven.id = 'height-seven';
    residentMassSpanSeven.id = 'mass-seven';
    residentHairSpanSeven.id = 'hair-seven';
    residentSkinSpanSeven.id = 'skin-seven';
    residentEyeSpanSeven.id = 'eye-seven';
    residentYearSpanSeven.id = 'year-seven';
    residentGenderSpanSeven.id = 'gender-seven';

    residentNameEight.id = 'name_eight';
    residentHeightSpanEight.id = 'height-eight';
    residentMassSpanEight.id = 'mass-eight';
    residentHairSpanEight.id = 'hair-eight';
    residentSkinSpanEight.id = 'skin-eight';
    residentEyeSpanEight.id = 'eye-eight';
    residentYearSpanEight.id = 'year-eight';
    residentGenderSpanEight.id = 'gender-eight';

    residentNameNine.id = 'name_nine';
    residentHeightSpanNine.id = 'height-nine';
    residentMassSpanNine.id = 'mass-nine';
    residentHairSpanNine.id = 'hair-nine';
    residentSkinSpanNine.id = 'skin-nine';
    residentEyeSpanNine.id = 'eye-nine';
    residentYearSpanNine.id = 'year-nine';
    residentGenderSpanNine.id = 'gender-nine';

    residentNameTen.id = 'name_ten';
    residentHeightSpanTen.id = 'height-ten';
    residentMassSpanTen.id = 'mass-ten';
    residentHairSpanTen.id = 'hair-ten';
    residentSkinSpanTen.id = 'skin-ten';
    residentEyeSpanTen.id = 'eye-ten';
    residentYearSpanTen.id = 'year-ten';
    residentGenderSpanTen.id = 'gender-ten';

    residentNameEleven.id = 'name_eleven';
    residentHeightSpanEleven.id = 'height-eleven';
    residentMassSpanEleven.id = 'mass-eleven';
    residentHairSpanEleven.id = 'hair-eleven';
    residentSkinSpanEleven.id = 'skin-eleven';
    residentEyeSpanEleven.id = 'eye-eleven';
    residentYearSpanEleven.id = 'year-eleven';
    residentGenderSpanEleven.id = 'gender-eleven';

    residentName.innerHTML = 'Name';
    imgResidentOne.src = '../assets/img/resident/R2d2.webp';
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
    imgResidentTwo.src = '../assets/img/resident/yoda.webp';
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
    imgResidentThree.src = '../assets/img/resident/padm.webp';
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

    residentNameFour.innerHTML = 'Name';
    imgResidentFour.src = '../assets/img/resident/jjportrait.jpg';
    residentHeightFour.innerHTML = 'Height: ';
    residentHeightSpanFour.innerHTML = 'cm';
    residentMassFour.innerHTML = 'Mass: ';
    residentMassSpanFour.innerHTML = 'kg';
    residentHairFour.innerHTML = 'Hair color: ';
    residentHairSpanFour.innerHTML = 'color';
    residentSkinFour.innerHTML = 'Skin color: ';
    residentSkinSpanFour.innerHTML = 'color';
    residentEyeFour.innerHTML = 'Eye color: ';
    residentEyeSpanFour.innerHTML = 'color';
    residentYearFour.innerHTML = 'Birth year: ';
    residentYearSpanFour.innerHTML = 'year';
    residentGenderFour.innerHTML = 'Gender: ';
    residentGenderSpanFour.innerHTML = 'year';

    residentNameFive.innerHTML = 'Name';
    imgResidentFive.src = '../assets/img/resident/tarp.webp';
    residentHeightFive.innerHTML = 'Height: ';
    residentHeightSpanFive.innerHTML = 'cm';
    residentMassFive.innerHTML = 'Mass: ';
    residentMassSpanFive.innerHTML = 'kg';
    residentHairFive.innerHTML = 'Hair color: ';
    residentHairSpanFive.innerHTML = 'color';
    residentSkinFive.innerHTML = 'Skin color: ';
    residentSkinSpanFive.innerHTML = 'color';
    residentEyeFive.innerHTML = 'Eye color: ';
    residentEyeSpanFive.innerHTML = 'color';
    residentYearFive.innerHTML = 'Birth year: ';
    residentYearSpanFive.innerHTML = 'year';
    residentGenderFive.innerHTML = 'Gender: ';
    residentGenderSpanFive.innerHTML = 'year';

    residentNameSix.innerHTML = 'Name';
    imgResidentSix.src = '../assets/img/resident/rugor.jpg';
    residentHeightSix.innerHTML = 'Height: ';
    residentHeightSpanSix.innerHTML = 'cm';
    residentMassSix.innerHTML = 'Mass: ';
    residentMassSpanSix.innerHTML = 'kg';
    residentHairSix.innerHTML = 'Hair color: ';
    residentHairSpanSix.innerHTML = 'color';
    residentSkinSix.innerHTML = 'Skin color: ';
    residentSkinSpanSix.innerHTML = 'color';
    residentEyeSix.innerHTML = 'Eye color: ';
    residentEyeSpanSix.innerHTML = 'color';
    residentYearSix.innerHTML = 'Birth year: ';
    residentYearSpanSix.innerHTML = 'year';
    residentGenderSix.innerHTML = 'Gender: ';
    residentGenderSpanSix.innerHTML = 'year';

    residentNameSeven.innerHTML = 'Name';
    imgResidentSeven.src = '../assets/img/resident/RicOlie.webp';
    residentHeightSeven.innerHTML = 'Height: ';
    residentHeightSpanSeven.innerHTML = 'cm';
    residentMassSeven.innerHTML = 'Mass: ';
    residentMassSpanSeven.innerHTML = 'kg';
    residentHairSeven.innerHTML = 'Hair color: ';
    residentHairSpanSeven.innerHTML = 'color';
    residentSkinSeven.innerHTML = 'Skin color: ';
    residentSkinSpanSeven.innerHTML = 'color';
    residentEyeSeven.innerHTML = 'Eye color: ';
    residentEyeSpanSeven.innerHTML = 'color';
    residentYearSeven.innerHTML = 'Birth year: ';
    residentYearSpanSeven.innerHTML = 'year';
    residentGenderSeven.innerHTML = 'Gender: ';
    residentGenderSpanSeven.innerHTML = 'year';

    residentNameEight.innerHTML = 'Name';
    imgResidentEight.src = '../assets/img/resident/Panaka.webp';
    residentHeightEight.innerHTML = 'Height: ';
    residentHeightSpanEight.innerHTML = 'cm';
    residentMassEight.innerHTML = 'Mass: ';
    residentMassSpanEight.innerHTML = 'kg';
    residentHairEight.innerHTML = 'Hair color: ';
    residentHairSpanEight.innerHTML = 'color';
    residentSkinEight.innerHTML = 'Skin color: ';
    residentSkinSpanEight.innerHTML = 'color';
    residentEyeEight.innerHTML = 'Eye color: ';
    residentEyeSpanEight.innerHTML = 'color';
    residentYearEight.innerHTML = 'Birth year: ';
    residentYearSpanEight.innerHTML = 'year';
    residentGenderEight.innerHTML = 'Gender: ';
    residentGenderSpanEight.innerHTML = 'year';

    residentNameNine.innerHTML = 'Name';
    imgResidentNine.src = '../assets/img/resident/gregar.jpg';
    residentHeightNine.innerHTML = 'Height: ';
    residentHeightSpanNine.innerHTML = 'cm';
    residentMassNine.innerHTML = 'Mass: ';
    residentMassSpanNine.innerHTML = 'kg';
    residentHairNine.innerHTML = 'Hair color: ';
    residentHairSpanNine.innerHTML = 'color';
    residentSkinNine.innerHTML = 'Skin color: ';
    residentSkinSpanNine.innerHTML = 'color';
    residentEyeNine.innerHTML = 'Eye color: ';
    residentEyeSpanNine.innerHTML = 'color';
    residentYearNine.innerHTML = 'Birth year: ';
    residentYearSpanNine.innerHTML = 'year';
    residentGenderNine.innerHTML = 'Gender: ';
    residentGenderSpanNine.innerHTML = 'year';

    residentNameTen.innerHTML = 'Name';
    imgResidentTen.src = '../assets/img/resident/corde.jpg';
    residentHeightTen.innerHTML = 'Height: ';
    residentHeightSpanTen.innerHTML = 'cm';
    residentMassTen.innerHTML = 'Mass: ';
    residentMassSpanTen.innerHTML = 'kg';
    residentHairTen.innerHTML = 'Hair color: ';
    residentHairSpanTen.innerHTML = 'color';
    residentSkinTen.innerHTML = 'Skin color: ';
    residentSkinSpanTen.innerHTML = 'color';
    residentEyeTen.innerHTML = 'Eye color: ';
    residentEyeSpanTen.innerHTML = 'color';
    residentYearTen.innerHTML = 'Birth year: ';
    residentYearSpanTen.innerHTML = 'year';
    residentGenderTen.innerHTML = 'Gender: ';
    residentGenderSpanTen.innerHTML = 'year';

    residentNameEleven.innerHTML = 'Name';
    imgResidentEleven.src = '../assets/img/resident/cliegg.jpg';
    residentHeightEleven.innerHTML = 'Height: ';
    residentHeightSpanEleven.innerHTML = 'cm';
    residentMassEleven.innerHTML = 'Mass: ';
    residentMassSpanEleven.innerHTML = 'kg';
    residentHairEleven.innerHTML = 'Hair color: ';
    residentHairSpanEleven.innerHTML = 'color';
    residentSkinEleven.innerHTML = 'Skin color: ';
    residentSkinSpanEleven.innerHTML = 'color';
    residentEyeEleven.innerHTML = 'Eye color: ';
    residentEyeSpanEleven.innerHTML = 'color';
    residentYearEleven.innerHTML = 'Birth year: ';
    residentYearSpanEleven.innerHTML = 'year';
    residentGenderEleven.innerHTML = 'Gender: ';
    residentGenderSpanEleven.innerHTML = 'year';

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

    containerDescriptionFour.style.display = 'flex';
    containerDescriptionFour.style.width = 'fit-content';
    //containerDescriptionFour.style.borderRight = '1px solid #d1df00fc';
    containerDescriptionFour.style.borderLeft = '1px solid #d1df00fc';
    containerDescriptionFour.style.paddingRight = '30px';
    //containerDescription.style.paddingLeft = '30px';
    imgResidentFour.style.width = '260px';
    containerResidentDescriptionFour.style.marginLeft = '30px';

    containerDescriptionFive.style.display = 'flex';
    containerDescriptionFive.style.width = 'fit-content';
    //containerDescriptionFour.style.borderRight = '1px solid #d1df00fc';
    containerDescriptionFive.style.borderLeft = '1px solid #d1df00fc';
    containerDescriptionFive.style.paddingRight = '30px';
    //containerDescription.style.paddingLeft = '30px';
    imgResidentFive.style.width = '260px';
    containerResidentDescriptionFive.style.marginLeft = '30px';

    containerDescriptionSix.style.display = 'flex';
    containerDescriptionSix.style.width = 'fit-content';
    //containerDescriptionFour.style.borderRight = '1px solid #d1df00fc';
    containerDescriptionSix.style.borderLeft = '1px solid #d1df00fc';
    containerDescriptionSix.style.paddingRight = '30px';
    //containerDescription.style.paddingLeft = '30px';
    imgResidentSix.style.width = '260px';
    containerResidentDescriptionSix.style.marginLeft = '30px';

    containerDescriptionSeven.style.display = 'flex';
    containerDescriptionSeven.style.width = 'fit-content';
    containerDescriptionSeven.style.borderLeft = '1px solid #d1df00fc';
    containerDescriptionSeven.style.paddingRight = '30px';
    imgResidentSeven.style.width = '260px';
    containerResidentDescriptionSeven.style.marginLeft = '30px';

    containerDescriptionEight.style.display = 'flex';
    containerDescriptionEight.style.width = 'fit-content';
    containerDescriptionEight.style.borderLeft = '1px solid #d1df00fc';
    containerDescriptionEight.style.paddingRight = '30px';
    imgResidentEight.style.width = '260px';
    containerResidentDescriptionEight.style.marginLeft = '30px';

    containerDescriptionNine.style.display = 'flex';
    containerDescriptionNine.style.width = 'fit-content';
    containerDescriptionNine.style.borderLeft = '1px solid #d1df00fc';
    containerDescriptionNine.style.paddingRight = '30px';
    imgResidentNine.style.width = '260px';
    containerResidentDescriptionNine.style.marginLeft = '30px';

    containerDescriptionTen.style.display = 'flex';
    containerDescriptionTen.style.width = 'fit-content';
    containerDescriptionTen.style.borderLeft = '1px solid #d1df00fc';
    containerDescriptionTen.style.paddingRight = '30px';
    imgResidentTen.style.width = '260px';
    containerResidentDescriptionTen.style.marginLeft = '30px';

    containerDescriptionEleven.style.display = 'flex';
    containerDescriptionEleven.style.width = 'fit-content';
    containerDescriptionEleven.style.borderLeft = '1px solid #d1df00fc';
    containerDescriptionEleven.style.paddingRight = '30px';
    imgResidentEleven.style.width = '260px';
    containerResidentDescriptionEleven.style.marginLeft = '30px';

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

    containerResident.append(containerDescriptionFour);
    containerDescriptionFour.append(imgResidentFour);
    containerDescriptionFour.append(containerResidentDescriptionFour);
    containerResidentDescriptionFour.append(residentNameFour);
    containerResidentDescriptionFour.append(residentHeightFour);
    residentHeightFour.append(residentHeightSpanFour);
    containerResidentDescriptionFour.append(residentMassFour);
    residentMassFour.append(residentMassSpanFour);
    containerResidentDescriptionFour.append(residentHairFour);
    residentHairFour.append(residentHairSpanFour);
    containerResidentDescriptionFour.append(residentSkinFour);
    residentSkinFour.append(residentSkinSpanFour);
    containerResidentDescriptionFour.append(residentEyeFour);
    residentEyeFour.append(residentEyeSpanFour);
    containerResidentDescriptionFour.append(residentYearFour);
    residentYearFour.append(residentYearSpanFour);
    containerResidentDescriptionFour.append(residentGenderFour);
    residentGenderFour.append(residentGenderSpanFour);

    containerResident.append(containerDescriptionFive);
    containerDescriptionFive.append(imgResidentFive);
    containerDescriptionFive.append(containerResidentDescriptionFive);
    containerResidentDescriptionFive.append(residentNameFive);
    containerResidentDescriptionFive.append(residentHeightFive);
    residentHeightFive.append(residentHeightSpanFive);
    containerResidentDescriptionFive.append(residentMassFive);
    residentMassFive.append(residentMassSpanFive);
    containerResidentDescriptionFive.append(residentHairFive);
    residentHairFive.append(residentHairSpanFive);
    containerResidentDescriptionFive.append(residentSkinFive);
    residentSkinFive.append(residentSkinSpanFive);
    containerResidentDescriptionFive.append(residentEyeFive);
    residentEyeFive.append(residentEyeSpanFive);
    containerResidentDescriptionFive.append(residentYearFive);
    residentYearFive.append(residentYearSpanFive);
    containerResidentDescriptionFive.append(residentGenderFive);
    residentGenderFive.append(residentGenderSpanFive);

    containerResident.append(containerDescriptionSix);
    containerDescriptionSix.append(imgResidentSix);
    containerDescriptionSix.append(containerResidentDescriptionSix);
    containerResidentDescriptionSix.append(residentNameSix);
    containerResidentDescriptionSix.append(residentHeightSix);
    residentHeightSix.append(residentHeightSpanSix);
    containerResidentDescriptionSix.append(residentMassSix);
    residentMassSix.append(residentMassSpanSix);
    containerResidentDescriptionSix.append(residentHairSix);
    residentHairSix.append(residentHairSpanSix);
    containerResidentDescriptionSix.append(residentSkinSix);
    residentSkinSix.append(residentSkinSpanSix);
    containerResidentDescriptionSix.append(residentEyeSix);
    residentEyeSix.append(residentEyeSpanSix);
    containerResidentDescriptionSix.append(residentYearSix);
    residentYearSix.append(residentYearSpanSix);
    containerResidentDescriptionSix.append(residentGenderSix);
    residentGenderSix.append(residentGenderSpanSix);

    containerResident.append(containerDescriptionSeven);
    containerDescriptionSeven.append(imgResidentSeven);
    containerDescriptionSeven.append(containerResidentDescriptionSeven);
    containerResidentDescriptionSeven.append(residentNameSeven);
    containerResidentDescriptionSeven.append(residentHeightSeven);
    residentHeightSeven.append(residentHeightSpanSeven);
    containerResidentDescriptionSeven.append(residentMassSeven);
    residentMassSeven.append(residentMassSpanSeven);
    containerResidentDescriptionSeven.append(residentHairSeven);
    residentHairSeven.append(residentHairSpanSeven);
    containerResidentDescriptionSeven.append(residentSkinSeven);
    residentSkinSeven.append(residentSkinSpanSeven);
    containerResidentDescriptionSeven.append(residentEyeSeven);
    residentEyeSeven.append(residentEyeSpanSeven);
    containerResidentDescriptionSeven.append(residentYearSeven);
    residentYearSeven.append(residentYearSpanSeven);
    containerResidentDescriptionSeven.append(residentGenderSeven);
    residentGenderSeven.append(residentGenderSpanSeven);

    containerResident.append(containerDescriptionEight);
    containerDescriptionEight.append(imgResidentEight);
    containerDescriptionEight.append(containerResidentDescriptionEight);
    containerResidentDescriptionEight.append(residentNameEight);
    containerResidentDescriptionEight.append(residentHeightEight);
    residentHeightEight.append(residentHeightSpanEight);
    containerResidentDescriptionEight.append(residentMassEight);
    residentMassEight.append(residentMassSpanEight);
    containerResidentDescriptionEight.append(residentHairEight);
    residentHairEight.append(residentHairSpanEight);
    containerResidentDescriptionEight.append(residentSkinEight);
    residentSkinEight.append(residentSkinSpanEight);
    containerResidentDescriptionEight.append(residentEyeEight);
    residentEyeEight.append(residentEyeSpanEight);
    containerResidentDescriptionEight.append(residentYearEight);
    residentYearEight.append(residentYearSpanEight);
    containerResidentDescriptionEight.append(residentGenderEight);
    residentGenderEight.append(residentGenderSpanEight);

    containerResident.append(containerDescriptionNine);
    containerDescriptionNine.append(imgResidentNine);
    containerDescriptionNine.append(containerResidentDescriptionNine);
    containerResidentDescriptionNine.append(residentNameNine);
    containerResidentDescriptionNine.append(residentHeightNine);
    residentHeightNine.append(residentHeightSpanNine);
    containerResidentDescriptionNine.append(residentMassNine);
    residentMassNine.append(residentMassSpanNine);
    containerResidentDescriptionNine.append(residentHairNine);
    residentHairNine.append(residentHairSpanNine);
    containerResidentDescriptionNine.append(residentSkinNine);
    residentSkinNine.append(residentSkinSpanNine);
    containerResidentDescriptionNine.append(residentEyeNine);
    residentEyeNine.append(residentEyeSpanNine);
    containerResidentDescriptionNine.append(residentYearNine);
    residentYearNine.append(residentYearSpanNine);
    containerResidentDescriptionNine.append(residentGenderNine);
    residentGenderNine.append(residentGenderSpanNine);

    containerResident.append(containerDescriptionTen);
    containerDescriptionTen.append(imgResidentTen);
    containerDescriptionTen.append(containerResidentDescriptionTen);
    containerResidentDescriptionTen.append(residentNameTen);
    containerResidentDescriptionTen.append(residentHeightTen);
    residentHeightTen.append(residentHeightSpanTen);
    containerResidentDescriptionTen.append(residentMassTen);
    residentMassTen.append(residentMassSpanTen);
    containerResidentDescriptionTen.append(residentHairTen);
    residentHairTen.append(residentHairSpanTen);
    containerResidentDescriptionTen.append(residentSkinTen);
    residentSkinTen.append(residentSkinSpanTen);
    containerResidentDescriptionTen.append(residentEyeTen);
    residentEyeTen.append(residentEyeSpanTen);
    containerResidentDescriptionTen.append(residentYearTen);
    residentYearTen.append(residentYearSpanTen);
    containerResidentDescriptionTen.append(residentGenderTen);
    residentGenderTen.append(residentGenderSpanTen);

    containerResident.append(containerDescriptionEleven);
    containerDescriptionEleven.append(imgResidentEleven);
    containerDescriptionEleven.append(containerResidentDescriptionEleven);
    containerResidentDescriptionEleven.append(residentNameEleven);
    containerResidentDescriptionEleven.append(residentHeightEleven);
    residentHeightEleven.append(residentHeightSpanEleven);
    containerResidentDescriptionEleven.append(residentMassEleven);
    residentMassEleven.append(residentMassSpanEleven);
    containerResidentDescriptionEleven.append(residentHairEleven);
    residentHairEleven.append(residentHairSpanEleven);
    containerResidentDescriptionEleven.append(residentSkinEleven);
    residentSkinEleven.append(residentSkinSpanEleven);
    containerResidentDescriptionEleven.append(residentEyeEleven);
    residentEyeEleven.append(residentEyeSpanEleven);
    containerResidentDescriptionEleven.append(residentYearEleven);
    residentYearEleven.append(residentYearSpanEleven);
    containerResidentDescriptionEleven.append(residentGenderEleven);
    residentGenderEleven.append(residentGenderSpanEleven);


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

      let namePerson = namePersonOne.innerHTML = JSON.stringify(data.results[2].name)
      let my_namePersonOne = JSON.parse(namePerson);
      namePersonOne.innerHTML = my_namePersonOne;

      let heightPerson = heightPersonOne.innerHTML = JSON.stringify(data.results[2].height)
      let my_heightPersonOne = JSON.parse(heightPerson);
      heightPersonOne.innerHTML = my_heightPersonOne + ' ' + 'cm';

      let massPerson = massPersonOne.innerHTML = JSON.stringify(data.results[2].mass)
      let my_massPersonOne = JSON.parse(massPerson);
      massPersonOne.innerHTML = my_massPersonOne + ' ' + 'kg';

      let hairPerson = hairPersonOne.innerHTML = JSON.stringify(data.results[2].hair_color)
      let my_hairPersonOne = JSON.parse(hairPerson);
      hairPersonOne.innerHTML = my_hairPersonOne;

      let skinPerson = skinPersonOne.innerHTML = JSON.stringify(data.results[2].skin_color)
      let my_skinPersonOne = JSON.parse(skinPerson);
      skinPersonOne.innerHTML = my_skinPersonOne;

      let eyePerson = eyePersonOne.innerHTML = JSON.stringify(data.results[2].eye_color)
      let my_eyePersonOne = JSON.parse(eyePerson);
      eyePersonOne.innerHTML = my_eyePersonOne;

      let yearPerson = yearPersonOne.innerHTML = JSON.stringify(data.results[2].birth_year)
      let my_yearPersonOne = JSON.parse(yearPerson);
      yearPersonOne.innerHTML = my_yearPersonOne;

      let genderPerson = genderPersonOne.innerHTML = JSON.stringify(data.results[2].gender)
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

      let namePersonTwos = namePersonTwo.innerHTML = JSON.stringify(data.results[8].name)
      let my_namePersonTwo = JSON.parse(namePersonTwos);
      namePersonTwo.innerHTML = my_namePersonTwo;

      let heightPersonTwos = heightPersonTwo.innerHTML = JSON.stringify(data.results[8].height)
      let my_heightPersonTwo = JSON.parse(heightPersonTwos);
      heightPersonTwo.innerHTML = my_heightPersonTwo + ' ' + 'cm';

      let massPersonTwos = massPersonTwo.innerHTML = JSON.stringify(data.results[8].mass)
      let my_massPersonTwo = JSON.parse(massPersonTwos);
      massPersonTwo.innerHTML = my_massPersonTwo + ' ' + 'kg';

      let hairPersonTwos = hairPersonTwo.innerHTML = JSON.stringify(data.results[8].hair_color)
      let my_hairPersonTwo = JSON.parse(hairPersonTwos);
      hairPersonTwo.innerHTML = my_hairPersonTwo;

      let skinPersonTwos = skinPersonTwo.innerHTML = JSON.stringify(data.results[8].skin_color)
      let my_skinPersonTwo = JSON.parse(skinPersonTwos);
      skinPersonTwo.innerHTML = my_skinPersonTwo;

      let eyePersonTwos = eyePersonTwo.innerHTML = JSON.stringify(data.results[8].eye_color)
      let my_eyePersonTwo = JSON.parse(eyePersonTwos);
      eyePersonTwo.innerHTML = my_eyePersonTwo;

      let yearPersonTwos = yearPersonTwo.innerHTML = JSON.stringify(data.results[8].birth_year)
      let my_yearPersonTwo = JSON.parse(yearPersonTwos);
      yearPersonTwo.innerHTML = my_yearPersonTwo;

      let genderPersonTwos = genderPersonTwo.innerHTML = JSON.stringify(data.results[8].gender)
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

      let namePersons = namePerson.innerHTML = JSON.stringify(data.results[3].name)
      let my_namePerson = JSON.parse(namePersons);
      namePerson.innerHTML = my_namePerson;

      let heightPersons = heightPerson.innerHTML = JSON.stringify(data.results[3].height)
      let my_heightPerson = JSON.parse(heightPersons);
      heightPerson.innerHTML = my_heightPerson + ' ' + 'cm';

      let massPersons = massPerson.innerHTML = JSON.stringify(data.results[3].mass)
      let my_massPerson = JSON.parse(massPersons);
      massPerson.innerHTML = my_massPerson + ' ' + 'kg';

      let hairPersons = hairPerson.innerHTML = JSON.stringify(data.results[3].hair_color)
      let my_hairPerson = JSON.parse(hairPersons);
      hairPerson.innerHTML = my_hairPerson;

      let skinPersons = skinPerson.innerHTML = JSON.stringify(data.results[3].skin_color)
      let my_skinPerson = JSON.parse(skinPersons);
      skinPerson.innerHTML = my_skinPerson;

      let eyePersons = eyePerson.innerHTML = JSON.stringify(data.results[3].eye_color)
      let my_eyePerson = JSON.parse(eyePersons);
      eyePerson.innerHTML = my_eyePerson;

      let yearPersons = yearPerson.innerHTML = JSON.stringify(data.results[3].birth_year)
      let my_yearPerson = JSON.parse(yearPersons);
      yearPerson.innerHTML = my_yearPerson;

      let genderPersons = genderPerson.innerHTML = JSON.stringify(data.results[3].gender)
      let my_genderPerson = JSON.parse(genderPersons);
      genderPerson.innerHTML = my_genderPerson;

    })

    fetch(residentsPageThree).then((response) => {
      return response.json();
    }).then((data) => {
      let namePerson = document.getElementById('name_four') as HTMLElement;
      let heightPerson = document.getElementById('height-four') as HTMLElement;
      let massPerson = document.getElementById('mass-four') as HTMLElement;
      let hairPerson = document.getElementById('hair-four') as HTMLElement;
      let skinPerson = document.getElementById('skin-four') as HTMLElement;
      let eyePerson = document.getElementById('eye-four') as HTMLElement;
      let yearPerson = document.getElementById('year-four') as HTMLElement;
      let genderPerson = document.getElementById('gender-four') as HTMLElement;

      //console.log(data);

      let namePersons = namePerson.innerHTML = JSON.stringify(data.results[4].name)
      let my_namePerson = JSON.parse(namePersons);
      namePerson.innerHTML = my_namePerson;

      let heightPersons = heightPerson.innerHTML = JSON.stringify(data.results[4].height)
      let my_heightPerson = JSON.parse(heightPersons);
      heightPerson.innerHTML = my_heightPerson + ' ' + 'cm';

      let massPersons = massPerson.innerHTML = JSON.stringify(data.results[4].mass)
      let my_massPerson = JSON.parse(massPersons);
      massPerson.innerHTML = my_massPerson + ' ' + 'kg';

      let hairPersons = hairPerson.innerHTML = JSON.stringify(data.results[4].hair_color)
      let my_hairPerson = JSON.parse(hairPersons);
      hairPerson.innerHTML = my_hairPerson;

      let skinPersons = skinPerson.innerHTML = JSON.stringify(data.results[4].skin_color)
      let my_skinPerson = JSON.parse(skinPersons);
      skinPerson.innerHTML = my_skinPerson;

      let eyePersons = eyePerson.innerHTML = JSON.stringify(data.results[4].eye_color)
      let my_eyePerson = JSON.parse(eyePersons);
      eyePerson.innerHTML = my_eyePerson;

      let yearPersons = yearPerson.innerHTML = JSON.stringify(data.results[4].birth_year)
      let my_yearPerson = JSON.parse(yearPersons);
      yearPerson.innerHTML = my_yearPerson;

      let genderPersons = genderPerson.innerHTML = JSON.stringify(data.results[4].gender)
      let my_genderPerson = JSON.parse(genderPersons);
      genderPerson.innerHTML = my_genderPerson;

    })

    fetch(residentsPageThree).then((response) => {
      return response.json();
    }).then((data) => {
      let namePerson = document.getElementById('name_five') as HTMLElement;
      let heightPerson = document.getElementById('height-five') as HTMLElement;
      let massPerson = document.getElementById('mass-five') as HTMLElement;
      let hairPerson = document.getElementById('hair-five') as HTMLElement;
      let skinPerson = document.getElementById('skin-five') as HTMLElement;
      let eyePerson = document.getElementById('eye-five') as HTMLElement;
      let yearPerson = document.getElementById('year-five') as HTMLElement;
      let genderPerson = document.getElementById('gender-five') as HTMLElement;

      //console.log(data);

      let namePersons = namePerson.innerHTML = JSON.stringify(data.results[5].name)
      let my_namePerson = JSON.parse(namePersons);
      namePerson.innerHTML = my_namePerson;

      let heightPersons = heightPerson.innerHTML = JSON.stringify(data.results[5].height)
      let my_heightPerson = JSON.parse(heightPersons);
      heightPerson.innerHTML = my_heightPerson + ' ' + 'cm';

      let massPersons = massPerson.innerHTML = JSON.stringify(data.results[5].mass)
      let my_massPerson = JSON.parse(massPersons);
      massPerson.innerHTML = my_massPerson + ' ' + 'kg';

      let hairPersons = hairPerson.innerHTML = JSON.stringify(data.results[5].hair_color)
      let my_hairPerson = JSON.parse(hairPersons);
      hairPerson.innerHTML = my_hairPerson;

      let skinPersons = skinPerson.innerHTML = JSON.stringify(data.results[5].skin_color)
      let my_skinPerson = JSON.parse(skinPersons);
      skinPerson.innerHTML = my_skinPerson;

      let eyePersons = eyePerson.innerHTML = JSON.stringify(data.results[5].eye_color)
      let my_eyePerson = JSON.parse(eyePersons);
      eyePerson.innerHTML = my_eyePerson;

      let yearPersons = yearPerson.innerHTML = JSON.stringify(data.results[5].birth_year)
      let my_yearPerson = JSON.parse(yearPersons);
      yearPerson.innerHTML = my_yearPerson;

      let genderPersons = genderPerson.innerHTML = JSON.stringify(data.results[5].gender)
      let my_genderPerson = JSON.parse(genderPersons);
      genderPerson.innerHTML = my_genderPerson;

    })

    fetch(residentsPageThree).then((response) => {
      return response.json();
    }).then((data) => {
      let namePerson = document.getElementById('name_six') as HTMLElement;
      let heightPerson = document.getElementById('height-six') as HTMLElement;
      let massPerson = document.getElementById('mass-six') as HTMLElement;
      let hairPerson = document.getElementById('hair-six') as HTMLElement;
      let skinPerson = document.getElementById('skin-six') as HTMLElement;
      let eyePerson = document.getElementById('eye-six') as HTMLElement;
      let yearPerson = document.getElementById('year-six') as HTMLElement;
      let genderPerson = document.getElementById('gender-six') as HTMLElement;

      //console.log(data);

      let namePersons = namePerson.innerHTML = JSON.stringify(data.results[6].name)
      let my_namePerson = JSON.parse(namePersons);
      namePerson.innerHTML = my_namePerson;

      let heightPersons = heightPerson.innerHTML = JSON.stringify(data.results[6].height)
      let my_heightPerson = JSON.parse(heightPersons);
      heightPerson.innerHTML = my_heightPerson + ' ' + 'cm';

      let massPersons = massPerson.innerHTML = JSON.stringify(data.results[6].mass)
      let my_massPerson = JSON.parse(massPersons);
      massPerson.innerHTML = my_massPerson + ' ' + 'kg';

      let hairPersons = hairPerson.innerHTML = JSON.stringify(data.results[6].hair_color)
      let my_hairPerson = JSON.parse(hairPersons);
      hairPerson.innerHTML = my_hairPerson;

      let skinPersons = skinPerson.innerHTML = JSON.stringify(data.results[6].skin_color)
      let my_skinPerson = JSON.parse(skinPersons);
      skinPerson.innerHTML = my_skinPerson;

      let eyePersons = eyePerson.innerHTML = JSON.stringify(data.results[6].eye_color)
      let my_eyePerson = JSON.parse(eyePersons);
      eyePerson.innerHTML = my_eyePerson;

      let yearPersons = yearPerson.innerHTML = JSON.stringify(data.results[6].birth_year)
      let my_yearPerson = JSON.parse(yearPersons);
      yearPerson.innerHTML = my_yearPerson;

      let genderPersons = genderPerson.innerHTML = JSON.stringify(data.results[6].gender)
      let my_genderPerson = JSON.parse(genderPersons);
      genderPerson.innerHTML = my_genderPerson;

    })

    fetch(residentsPageThree).then((response) => {
      return response.json();
    }).then((data) => {
      let namePerson = document.getElementById('name_seven') as HTMLElement;
      let heightPerson = document.getElementById('height-seven') as HTMLElement;
      let massPerson = document.getElementById('mass-seven') as HTMLElement;
      let hairPerson = document.getElementById('hair-seven') as HTMLElement;
      let skinPerson = document.getElementById('skin-seven') as HTMLElement;
      let eyePerson = document.getElementById('eye-seven') as HTMLElement;
      let yearPerson = document.getElementById('year-seven') as HTMLElement;
      let genderPerson = document.getElementById('gender-seven') as HTMLElement;

      //console.log(data);

      let namePersons = namePerson.innerHTML = JSON.stringify(data.results[7].name)
      let my_namePerson = JSON.parse(namePersons);
      namePerson.innerHTML = my_namePerson;

      let heightPersons = heightPerson.innerHTML = JSON.stringify(data.results[7].height)
      let my_heightPerson = JSON.parse(heightPersons);
      heightPerson.innerHTML = my_heightPerson + ' ' + 'cm';

      let massPersons = massPerson.innerHTML = JSON.stringify(data.results[7].mass)
      let my_massPerson = JSON.parse(massPersons);
      massPerson.innerHTML = my_massPerson + ' ' + 'kg';

      let hairPersons = hairPerson.innerHTML = JSON.stringify(data.results[7].hair_color)
      let my_hairPerson = JSON.parse(hairPersons);
      hairPerson.innerHTML = my_hairPerson;

      let skinPersons = skinPerson.innerHTML = JSON.stringify(data.results[7].skin_color)
      let my_skinPerson = JSON.parse(skinPersons);
      skinPerson.innerHTML = my_skinPerson;

      let eyePersons = eyePerson.innerHTML = JSON.stringify(data.results[7].eye_color)
      let my_eyePerson = JSON.parse(eyePersons);
      eyePerson.innerHTML = my_eyePerson;

      let yearPersons = yearPerson.innerHTML = JSON.stringify(data.results[7].birth_year)
      let my_yearPerson = JSON.parse(yearPersons);
      yearPerson.innerHTML = my_yearPerson;

      let genderPersons = genderPerson.innerHTML = JSON.stringify(data.results[7].gender)
      let my_genderPerson = JSON.parse(genderPersons);
      genderPerson.innerHTML = my_genderPerson;

    })

    fetch(residentsPageFour).then((response) => {
      return response.json();
    }).then((data) => {
      let namePerson = document.getElementById('name_eight') as HTMLElement;
      let heightPerson = document.getElementById('height-eight') as HTMLElement;
      let massPerson = document.getElementById('mass-eight') as HTMLElement;
      let hairPerson = document.getElementById('hair-eight') as HTMLElement;
      let skinPerson = document.getElementById('skin-eight') as HTMLElement;
      let eyePerson = document.getElementById('eye-eight') as HTMLElement;
      let yearPerson = document.getElementById('year-eight') as HTMLElement;
      let genderPerson = document.getElementById('gender-eight') as HTMLElement;

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

    fetch(residentsPageFive).then((response) => {
      return response.json();
    }).then((data) => {
      let namePerson = document.getElementById('name_nine') as HTMLElement;
      let heightPerson = document.getElementById('height-nine') as HTMLElement;
      let massPerson = document.getElementById('mass-nine') as HTMLElement;
      let hairPerson = document.getElementById('hair-nine') as HTMLElement;
      let skinPerson = document.getElementById('skin-nine') as HTMLElement;
      let eyePerson = document.getElementById('eye-nine') as HTMLElement;
      let yearPerson = document.getElementById('year-nine') as HTMLElement;
      let genderPerson = document.getElementById('gender-nine') as HTMLElement;

      //console.log(data);

      let namePersons = namePerson.innerHTML = JSON.stringify(data.results[8].name)
      let my_namePerson = JSON.parse(namePersons);
      namePerson.innerHTML = my_namePerson;

      let heightPersons = heightPerson.innerHTML = JSON.stringify(data.results[8].height)
      let my_heightPerson = JSON.parse(heightPersons);
      heightPerson.innerHTML = my_heightPerson + ' ' + 'cm';

      let massPersons = massPerson.innerHTML = JSON.stringify(data.results[8].mass)
      let my_massPerson = JSON.parse(massPersons);
      massPerson.innerHTML = my_massPerson + ' ' + 'kg';

      let hairPersons = hairPerson.innerHTML = JSON.stringify(data.results[8].hair_color)
      let my_hairPerson = JSON.parse(hairPersons);
      hairPerson.innerHTML = my_hairPerson;

      let skinPersons = skinPerson.innerHTML = JSON.stringify(data.results[8].skin_color)
      let my_skinPerson = JSON.parse(skinPersons);
      skinPerson.innerHTML = my_skinPerson;

      let eyePersons = eyePerson.innerHTML = JSON.stringify(data.results[8].eye_color)
      let my_eyePerson = JSON.parse(eyePersons);
      eyePerson.innerHTML = my_eyePerson;

      let yearPersons = yearPerson.innerHTML = JSON.stringify(data.results[8].birth_year)
      let my_yearPerson = JSON.parse(yearPersons);
      yearPerson.innerHTML = my_yearPerson;

      let genderPersons = genderPerson.innerHTML = JSON.stringify(data.results[8].gender)
      let my_genderPerson = JSON.parse(genderPersons);
      genderPerson.innerHTML = my_genderPerson;

    })

    fetch(residentsPageFive).then((response) => {
      return response.json();
    }).then((data) => {
      let namePerson = document.getElementById('name_ten') as HTMLElement;
      let heightPerson = document.getElementById('height-ten') as HTMLElement;
      let massPerson = document.getElementById('mass-ten') as HTMLElement;
      let hairPerson = document.getElementById('hair-ten') as HTMLElement;
      let skinPerson = document.getElementById('skin-ten') as HTMLElement;
      let eyePerson = document.getElementById('eye-ten') as HTMLElement;
      let yearPerson = document.getElementById('year-ten') as HTMLElement;
      let genderPerson = document.getElementById('gender-ten') as HTMLElement;

      //console.log(data);

      let namePersons = namePerson.innerHTML = JSON.stringify(data.results[9].name)
      let my_namePerson = JSON.parse(namePersons);
      namePerson.innerHTML = my_namePerson;

      let heightPersons = heightPerson.innerHTML = JSON.stringify(data.results[9].height)
      let my_heightPerson = JSON.parse(heightPersons);
      heightPerson.innerHTML = my_heightPerson + ' ' + 'cm';

      let massPersons = massPerson.innerHTML = JSON.stringify(data.results[9].mass)
      let my_massPerson = JSON.parse(massPersons);
      massPerson.innerHTML = my_massPerson + ' ' + 'kg';

      let hairPersons = hairPerson.innerHTML = JSON.stringify(data.results[9].hair_color)
      let my_hairPerson = JSON.parse(hairPersons);
      hairPerson.innerHTML = my_hairPerson;

      let skinPersons = skinPerson.innerHTML = JSON.stringify(data.results[9].skin_color)
      let my_skinPerson = JSON.parse(skinPersons);
      skinPerson.innerHTML = my_skinPerson;

      let eyePersons = eyePerson.innerHTML = JSON.stringify(data.results[9].eye_color)
      let my_eyePerson = JSON.parse(eyePersons);
      eyePerson.innerHTML = my_eyePerson;

      let yearPersons = yearPerson.innerHTML = JSON.stringify(data.results[9].birth_year)
      let my_yearPerson = JSON.parse(yearPersons);
      yearPerson.innerHTML = my_yearPerson;

      let genderPersons = genderPerson.innerHTML = JSON.stringify(data.results[9].gender)
      let my_genderPerson = JSON.parse(genderPersons);
      genderPerson.innerHTML = my_genderPerson;

    })

    fetch(residentsPageSix).then((response) => {
      return response.json();
    }).then((data) => {
      let namePerson = document.getElementById('name_eleven') as HTMLElement;
      let heightPerson = document.getElementById('height-eleven') as HTMLElement;
      let massPerson = document.getElementById('mass-eleven') as HTMLElement;
      let hairPerson = document.getElementById('hair-eleven') as HTMLElement;
      let skinPerson = document.getElementById('skin-eleven') as HTMLElement;
      let eyePerson = document.getElementById('eye-eleven') as HTMLElement;
      let yearPerson = document.getElementById('year-eleven') as HTMLElement;
      let genderPerson = document.getElementById('gender-eleven') as HTMLElement;

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

      let eyePersons = eyePerson.innerHTML = JSON.stringify(data.results[4].eye_color)
      let my_eyePerson = JSON.parse(eyePersons);
      eyePerson.innerHTML = my_eyePerson;

      let yearPersons = yearPerson.innerHTML = JSON.stringify(data.results[4].birth_year)
      let my_yearPerson = JSON.parse(yearPersons);
      yearPerson.innerHTML = my_yearPerson;

      let genderPersons = genderPerson.innerHTML = JSON.stringify(data.results[4].gender)
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
