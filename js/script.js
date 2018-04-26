//Zadanie na studia

//1.Dane tekstowe: mają być wprowadzane do CV z poziomu kodu JS (w HTML tworzymy tylko szablon dokumentu z przygotowanym miejscami np. na imię i nazwisko, natomiast wpisujemy je dopiero w kodzie JS).
//2.Dane innego rodzaju: zdjęcie (jego źródło wpisywane jest z poziomu kodu JS), odnośnik (adres wpisywany w kodzie JS), etc.
//3.Lista: dane wyświetlane w postaci listy (wypunktowanej lub numerowanej) wprowadzane w kodzie JS na podstawie javascriptowej tablicy (Array).
//4.Tabela: jest tworzona lub wypełniana danymi z poziomu kodu JS.
//5.Formularz: w kodzie JS sprawdzamy czy obowiązkowe pola (imię, nazwisko i adres email) zostały uzupełnione, a jeśli dane są poprawne, potwierdzamy akceptację danych, wyświetlając zawartość formularza w dowolny sposób (np. pod formularzem lub w konsoli).
//6.Pewne części dokumentu CV (np. formularz kontaktowy) są schowane i zostają odsłonięte na życzenie (po naciśnięciu przycisku), a następnie mogą znów zostać ukryte




//tekst do NAGŁÓWKÓW H1 i HEADERA + LOGO

var elementH1 = document.getElementsByTagName('h1')[0];

elementH1.textContent = 'MATEUSZ SZKLANKO';

var inzText = document.querySelector('.container p');

inzText.textContent = 'INŻYNIER BUDOWNICTWA';

// tekst do NAGŁÓWKÓW H2 

var elementH2 = document.body.querySelectorAll('h2');
var contentH2 = ['KONTAKT', 'UMIEJĘTNOŚCI', 'O MNIE', 'EDUKACJA', 'DOŚWIADCZENIE', 'HOBBY', 'FORMULARZ KONTAKTOWY'];

for (var i = 0; i < elementH2.length; ++i){
    var textH2 = document.createTextNode(contentH2[i]);
    elementH2[i].appendChild(textH2);
};

//LOGO

var imgElementLogo = document.createElement('img');
var headerElement = document.getElementsByTagName('header')[0];

imgElementLogo.src = 'img/bitmap2.png';
imgElementLogo.alt = 'logo of Mateusz Szklanko';
imgElementLogo.width = '80px';
imgElementLogo.height = '80px';
headerElement.appendChild(imgElementLogo);


/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: SIDE BAR */
// ZDJĘCIE

var imgElementPhoto = document.createElement('img');
var parentDiv = document.getElementById('side-column');
var childAfter = document.getElementById('contact');
imgElementPhoto.src = 'img/IMG_20150720_133127.jpg';
imgElementPhoto.alt = 'Photo of Mateusz Szklanko';
imgElementPhoto.setAttribute('width','195px');
parentDiv.insertBefore(imgElementPhoto,childAfter);

//ICONY KONTAKTU

var contactDiv = document.body.querySelectorAll('div.icon');

var svgSource = ['<path d="M30 26c3.9 0 7-3.1 7-7s-3.1-7-7-7 -7 3.1-7 7S26.1 26 30 26zM30 14c2.8 0 5 2.2 5 5s-2.2 5-5 5 -5-2.2-5-5S27.2 14 30 14z" class="a"/><path d="M29.8 54.8L45.2 32.6c5.8-7.7 4.9-20.3-1.8-27C39.8 2 34.9 0 29.8 0s-9.9 2-13.6 5.6c-6.7 6.7-7.5 19.3-1.8 27L29.8 54.8zM17.7 7C20.9 3.8 25.2 2 29.8 2s8.9 1.8 12.1 5c6.1 6 6.8 17.4 1.6 24.4L29.8 51.2 16.1 31.4C10.9 24.5 11.6 13.1 17.7 7z" class="a"/><path d="M42.1 43c-0.5-0.1-1 0.3-1.1 0.9s0.3 1 0.9 1.1C52.4 46.2 58 49.6 58 51.5c0 2.7-10.7 6.5-28 6.5S2 54.2 2 51.5c0-1.9 5.6-5.3 16.1-6.5 0.5-0.1 0.9-0.6 0.9-1.1 -0.1-0.5-0.6-0.9-1.1-0.9C7.4 44.2 0 47.7 0 51.5 0 55.7 10.3 60 30 60s30-4.3 30-8.5C60 47.7 52.6 44.2 42.1 43z" class="a"/>',
'<path d="m462.7 381.1c-1.5-11.1-7.9-20.7-17.6-26.3l-114.2-65.8c-14-8.1-31.7-5.7-43.2 5.7l-22.5 22.5c-6 6-15.5 6.5-22 1.2-17.7-14.3-35.2-30-51.9-46.7-16.7-16.7-32.4-34.2-46.7-51.9-5.3-6.6-4.8-16 1.2-22l22.5-22.5c11.4-11.4 13.8-29.2 5.7-43.2l-65.8-114.2c-5.6-9.7-15.2-16.1-26.3-17.6-11.1-1.5-22.1 2.2-30 10.2l-33.9 33.9c-23.7 23.7-24 66.9-1.1 121.9 22.1 52.8 63.3 111 116.1 163.7 52.8 52.8 110.9 94 163.7 116.1 27 11.3 51.3 17 71.7 17 21.1 0 38.2-6 50.2-18l33.9-33.9c7.9-7.9 11.6-18.9 10.2-30zm-139.3-79.1l114.2 65.8c5.6 3.3 9.4 8.8 10.2 15.3 0.7 5.4-0.7 10.8-3.9 15.1l-151.8-86.6 6.2-6.2c6.6-6.6 16.9-8 25.1-3.3zm-243.4-286.8c6.5 0.9 12 4.6 15.3 10.2l65.8 114.2c4.7 8.1 3.3 18.4-3.3 25.1l-5.7 5.7-87.1-151.3c3.6-2.6 7.8-4.1 12.3-4.1 0.9 0 1.9 0.1 2.8 0.2zm328.1 419.2c-18.8 18.8-57.2 18-105.5-2.2-51.1-21.4-107.5-61.4-158.9-112.8-51.4-51.4-91.5-107.8-112.8-158.9-20.2-48.2-21-86.7-2.2-105.5l25.2-25.2 87.2 151.5-5.9 5.9c-11.4 11.4-12.4 29.5-2.3 42 14.6 18.2 30.7 36 47.8 53.1 17.1 17.1 35 33.2 53.1 47.8 12.6 10.1 30.6 9.1 42-2.3l5.3-5.3 152 86.8-25.1 25.1z"/>',
'<path d="M28.5 26.5H2.5c-1.4 0-2.5-1.1-2.5-2.5V7c0-1.4 1.1-2.5 2.5-2.5h26c1.4 0 2.5 1.1 2.5 2.5v17C31 25.4 29.9 26.5 28.5 26.5zM2.5 5.5c-0.8 0-1.5 0.7-1.5 1.5v17c0 0.8 0.7 1.5 1.5 1.5h26c0.8 0 1.5-0.7 1.5-1.5V7c0-0.8-0.7-1.5-1.5-1.5H2.5z"/><path d="M15.5 18c-0.7 0-1.3-0.2-1.8-0.7L0.9 6.2c-0.2-0.2-0.2-0.5 0-0.7 0.2-0.2 0.5-0.2 0.7 0l12.8 11.1c0.6 0.6 1.7 0.6 2.4 0L29.5 5.5c0.2-0.2 0.5-0.2 0.7 0 0.2 0.2 0.2 0.5 0 0.7L17.3 17.4C16.8 17.8 16.2 18 15.5 18z"/>',
'<path d="M409.1 114.6c-19.6-33.6-46.2-60.2-79.8-79.8C295.7 15.2 259.1 5.4 219.3 5.4c-39.8 0-76.5 9.8-110.1 29.4 -33.6 19.6-60.2 46.2-79.8 79.8C9.8 148.2 0 184.9 0 224.6c0 47.8 13.9 90.7 41.8 128.9 27.9 38.2 63.9 64.6 108.1 79.2 5.1 1 8.9 0.3 11.4-2 2.5-2.3 3.7-5.1 3.7-8.6 0-0.6 0-5.7-0.1-15.4 -0.1-9.7-0.1-18.2-0.1-25.4l-6.6 1.1c-4.2 0.8-9.5 1.1-15.8 1 -6.4-0.1-13-0.8-19.8-2 -6.9-1.2-13.2-4.1-19.1-8.6 -5.9-4.5-10.1-10.3-12.6-17.6l-2.9-6.6c-1.9-4.4-4.9-9.2-9-14.6 -4.1-5.3-8.2-8.9-12.4-10.8l-2-1.4c-1.3-1-2.6-2.1-3.7-3.4 -1.1-1.3-2-2.7-2.6-4 -0.6-1.3-0.1-2.4 1.4-3.3 1.5-0.9 4.3-1.3 8.3-1.3l5.7 0.9c3.8 0.8 8.5 3 14.1 6.9 5.6 3.8 10.2 8.8 13.8 14.8 4.4 7.8 9.7 13.8 15.8 17.8 6.2 4.1 12.4 6.1 18.7 6.1 6.3 0 11.7-0.5 16.3-1.4 4.6-1 8.8-2.4 12.8-4.3 1.7-12.8 6.4-22.6 14-29.4 -10.8-1.1-20.6-2.9-29.3-5.1 -8.7-2.3-17.6-6-26.8-11.1 -9.2-5.1-16.9-11.5-23-19.1 -6.1-7.6-11.1-17.6-15-30 -3.9-12.4-5.9-26.6-5.9-42.8 0-23 7.5-42.6 22.6-58.8 -7-17.3-6.4-36.7 2-58.2 5.5-1.7 13.7-0.4 24.6 3.9 10.9 4.3 18.8 8 23.8 11 5 3 9.1 5.6 12.1 7.7 17.7-4.9 36-7.4 54.8-7.4s37.1 2.5 54.8 7.4l10.8-6.8c7.4-4.6 16.2-8.8 26.3-12.6 10.1-3.8 17.8-4.9 23.1-3.1 8.6 21.5 9.3 40.9 2.3 58.2 15 16.2 22.6 35.8 22.6 58.8 0 16.2-2 30.5-5.9 43 -3.9 12.5-8.9 22.5-15.1 30 -6.2 7.5-13.9 13.9-23.1 19 -9.2 5.1-18.2 8.9-26.8 11.1 -8.7 2.3-18.4 4-29.3 5.1 9.9 8.6 14.8 22.1 14.8 40.5v60.2c0 3.4 1.2 6.3 3.6 8.6 2.4 2.3 6.1 3 11.3 2 44.2-14.7 80.2-41.1 108.1-79.2 27.9-38.2 41.8-81.1 41.8-128.9C438.5 184.9 428.7 148.2 409.1 114.6z"/>'];

for (var i = 0; i < contactDiv.length; ++i){
    var svgElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
    var firstChild = contactDiv[i].querySelector('.icon :first-child');

    if (i == 0){
        svgElement.setAttribute('viewBox', '0 0 60 60');
    }
    else if (i == 1){
        svgElement.setAttribute('viewBox', '0 0 463 463');
    }
    else if (i == 2){
        svgElement.setAttribute('viewBox', '0 0 31 31');
    }
    else if( i == 3){
        svgElement.setAttribute('viewBox', '0 0 438.5 438.5');
    };

    svgElement.innerHTML = svgSource[i] ;
    contactDiv[i].insertBefore(svgElement,firstChild);
};

// Tekst do KONTAKT
// tekst do nagłówkó h3

var elementH3 = document.getElementsByClassName('contact-h');
var contentH3 = ['Adres', 'Telefon', 'E-mail', 'GitHub'];

for (var i = 0; i < elementH3.length; ++i){
    var textH3 = document.createTextNode(contentH3[i]);
    elementH3[i].appendChild(textH3);
};

// tekst linków do telefonu , maila i githuba

var ElementA = document.querySelectorAll('div.contact a');
var contentA = ['504-955-999', 'mszklanko480@gmail.com', 'GitHub.com/Szklanko'];

for (var i = 0; i < ElementA.length; ++i){
    var textA = document.createTextNode(contentA[i]);
    ElementA[i].appendChild(textA);
};


// paski umiejętności html, css, java script (interaktywne) 

var skillsDiv = document.getElementsByClassName('skills')[0];
var childAfterSkills = document.getElementById('photoshop');

var textArray = ['HTML', 'CSS', 'Java Script'];
var skillClass = ['skill-html', 'skill-css', 'skill-js'];
var grade = ['grade-one', 'grade-two', 'grade-three', 'grade-four', 'grade-five'];

for(var i = 0; i < textArray.length; ++i){

    
    var paragraphElement = document.createElement('p');
    var paragraphContent = document.createTextNode(textArray[i]);

    paragraphElement.setAttribute('class','skill-text');
    paragraphElement.appendChild(paragraphContent);
    skillsDiv.insertBefore(paragraphElement,childAfterSkills);
    
    var divElement = document.createElement('div');

    divElement.setAttribute('class', skillClass[i] + ' skill-bar');

        for (var j = 0; j < grade.length; ++j){
            var gradesDiv = document.createElement('div');
            gradesDiv.setAttribute('class', grade[j] + ' grade' );
            divElement.appendChild(gradesDiv);
        }

    skillsDiv.insertBefore(divElement,childAfterSkills);
};


// :::::::::::::::::::::::::::::::::::::::::::::::::::MAIN CONTENT:::::::::::::

// o mnie 

var intro = document.getElementById('intro');
intro.textContent = 'Jestem inżynierem budownictwa z wieloma pasjami. Od niedawna pochłonięty przez świat tworzenia stron internetowych.Szukam pracy, która będzie dobrym środowiskiem do rozwoju moich umiejętności oraz pozwoli na prace przy ciekawych i oryginalnych projektach.'                           ;



//::::::::::::::::::::::::::::::::::::::::::::::::::::::::: tabela - tekst

var tableText = ['BUDOWNICTWO', 'FRONT-END DEVELOPMENT','inżynier', 'studia podyplomowe', 'Politechnika Białostocka','Politechnika Białostocka', '2012-2016', '2017-obecnie', 'KLASA LOTNICZA', 'II LO w Białymstoku', '2009-2012'];
var table = document.body.querySelectorAll('td');

for(i = 0; i < tableText.length; ++i){
    var tableContent = document.createTextNode(tableText[i]);
    table[i].appendChild(tableContent);                             
}

// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::lista


var listDiv = document.getElementsByClassName('job-box')[0];
var listJob = ['promostal', 'admt', 'nzs', 'nlf'];

for( i = 0; i < listJob.length; ++i){

    //tworze diva
    var divElementList = document.createElement('div');
    divElementList.setAttribute('class', listJob[i] + ' job');
    listDiv.appendChild(divElementList);
    //dodanie listy ul do diva
    var ulElement = document.createElement('ul');
    ulElement.setAttribute('class', 'job-list');
    divElementList.appendChild(ulElement);
    //tworzenie dwóch pozycji li w liście ul
    for(j = 0; j < 2; ++j ){
        var liElement = document.createElement('li');
        liElement.setAttribute('class','no-nested');
        ulElement.appendChild(liElement);
        //dodanie zagnieżdżonej listy ul do drugiej pozycji li
        if(j == 1){

            var ulNested = document.createElement('ul');
            ulNested.setAttribute('class', 'duties');
            liElement.appendChild(ulNested);
            //dodanie dwóch elementów li do zagnieżdżonej listy ul
            for(k = 0; k < 2; ++k){

                var liNested = document.createElement('li');
                liNested.setAttribute('class','nested');
                ulNested.appendChild(liNested);
            }
        }
    }
}
var liNoNested = document.querySelectorAll('.no-nested li');
var liNested = document.querySelectorAll('.nested li');


var listContent = []
listContent[listContent.length] = 'TECHNOLOG';
listContent[listContent.length] = 'Promostal / Czarna Białostocka / 2017';
listContent[listContent.length] = 'Przygotowanie raportów grubości warstwy malarskiej';
listContent[listContent.length] = 'Tworzenie dokumentacji powykonawczej';
listContent[listContent.length] = 'TECHNOLOG SPECJALISTA DS. PRZYGOTOWANIA PRODUKCJI';
listContent[listContent.length] = 'ADMT / Bogusze / 2016-2017';
listContent[listContent.length] = 'Kierowanie pracą działu krajalnia';
listContent[listContent.length] = 'Przygotowanie programów CNC';
listContent[listContent.length] = 'WICEPRZEWODNICZĄCY DS. FINANSÓW';
listContent[listContent.length] = 'NZS Politechniki Białostockiej / 2013-2014';
listContent[listContent.length] = 'Udział w pracach zarządu';
listContent[listContent.length] = 'ASYSTENT INŻYNIERA BUDOWY - praktyki zawodowe';
listContent[listContent.length] = 'Przygotowanie projektó studenckich';
listContent[listContent.length] = 'NLF Torpol-Astaldi / Łódź / 2014';
listContent[listContent.length] = 'Nadzór wykonywanych prac betoniarskich';
listContent[listContent.length] = 'Monitorowanie i kontrolowanie postępu prac';

var liText = document.body.querySelectorAll('.job-box li');
var childLi = document.body.querySelectorAll('job-box li :first-child');

console.log(childLi);

for(i = 0; i < listContent.length; ++i){

    var liContent = document.createTextNode(listContent[i]);

    liText[i].appendChild(liContent);
}



//::::::::::::::::::::::::::::::::::::::::::::::Walidacja formularza 


    //pobranie inputó
    var username = document.forms['vform']['username'];
    var surname = document.forms['vform']['surname'];
    var email = document.forms['vform']['email'];
    var message = document.forms['vform']['message'];

    //pobranie divów na alerty
    var name_error = document.getElementById('name_error');
    var surname_error = document.getElementById('surname_error');
    var email_error = document.getElementById('email_error');
    var message_error = document.getElementById('message_error');

    // dodanie Listenerów po opuszczeniu pola 
    username.addEventListener('blur', nameVerify, true);
    surname.addEventListener('blur', surnameVerify, true);
    email.addEventListener('blur', emailVerify, true);
    message.addEventListener('blur', messageVerify, true);
    

    // Walidacja po SUBMIT
    function Validate() {

        // Imie
        if (username.value == "") {
            username.style.border = "1px solid  rgb(226, 67, 67)";
            username.style.backgroundColor = "#FFD6D6";
            name_error.textContent = "Imię jest wymagane";
            username.focus();
            return false;
        }

       //Nazwisko
        if (surname.value == "") {
            surname.style.border = "1px solid  rgb(226, 67, 67)";
            surname.style.backgroundColor = "#FFD6D6";
            surname_error.textContent = "Nazwisko jest wymagane";
            surname.focus();
            return false;
        }
        
        //Email
        if (email.value == "") {
            email.style.border = "1px solid  rgb(226, 67, 67)";
            email.style.backgroundColor = "#FFD6D6";
            email_error.textContent = "Email jest wymagany";
            email.focus();      
            return false;
        }
       
        //wiadomośc
        if (message.value == "") {
            message.style.border = "1px solid  rgb(226, 67, 67)";
            message.style.backgroundColor = "#FFD6D6";
            message_error.textContent = "Napisz wiadomość";
            message.focus();
            return false;
        }

    }

    // Funkcje ukrywające alert po wyjsciu z okna
    function nameVerify() {
        if (username.value != "") {
            username.style.border = "none";
            username.style.backgroundColor = "rgb(238, 238, 238)";
            name_error.innerHTML = "";
            return true;
        }
    }

    function surnameVerify() {
        if (surname.value != "") {
            surname.style.border = "none";
            surname.style.backgroundColor = "rgb(238, 238, 238)";
            surname_error.innerHTML = "";
            return true;
        }
    }

    function emailVerify() {
        if (email.value != "") {
            email.style.border = "none";
            email.style.backgroundColor = "rgb(238, 238, 238)";
            email_error.innerHTML = "";
            return true;
        }
    }

    function messageVerify() {
        if (email.value != "") {
            email.style.border = "none";
            email.style.backgroundColor = "rgb(238, 238, 238)";
            email_error.innerHTML = "";
            return true;
        }
    }


// Ukrycie formularza

var btn = document.getElementById('arrow');
btn.addEventListener('click',toggle);

var contactBox = document.querySelector('div.contact-box');
contactBox.style.display = 'none';

function toggle(){

    if (contactBox.style.display === 'none'){
        contactBox.style.display = 'block';
        btn.style.transform = 'rotate(180deg)';
    }else {
        contactBox.style.display = 'none';
        btn.style.transform = 'rotate(360deg)';
    }
};
