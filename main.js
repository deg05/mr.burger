//_yandex.map

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.94198466, 30.30102181],
        zoom: 12
    });

    var myPlacemark = new ymaps.Placemark([59.89613356, 30.42461800], {
        hintContent: 'Mr.Burger',
        balloonContent: 'Babushkinskaya',
    },
        {
            iconLayout: 'default#image',
            iconImageHref: '/mr.burger/img/map-marker.png',
            iconImageSize: [45, 63],
            iconImageOffset: [-3, -42]
        });

    myPlacemark2 = new ymaps.Placemark([59.90122777, 30.26585499], {
        hintContent: 'Mr.Burger2',
        balloonContent: 'DVA'
    },
        {
            iconLayout: 'default#image',
            iconImageHref: '/mr.burger/img/map-marker.png',
            iconImageSize: [45, 63],
            iconImageOffset: [-3, -42]
        });

    myPlacemark3 = new ymaps.Placemark([59.98322312, 30.35461929], {
        hintContent: 'Mr.BurgerTRI',
        balloonContent: 'Privet'
    },
        {
            iconLayout: 'default#image',
            iconImageHref: '/mr.burger/img/map-marker.png',
            iconImageSize: [45, 63],
            iconImageOffset: [-3, -42]
        });

    myMap.geoObjects.add(myPlacemark).add(myPlacemark2).add(myPlacemark3);
}