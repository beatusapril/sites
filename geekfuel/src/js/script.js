import '../css/style'
import '../css/media'
import '../css/_extent'
import * as css from "../css/normalize.css";


const imgPath = "/images/";


function Subscribe(url, ...benefits){
    this.path = `${imgPath}${url}`
    this.benefits = [benefits];
}

const subscribers = [
    new Subscribe('subscribe_1.png', true, false, false),
    new Subscribe('subscribe_2.png', false, false, false),
    new Subscribe('subscribe_3.png', true, true, true)
]

const createSubscribe = (row, subscribe, template) => {
    const node = row == 1 ? template : template.cloneNode(true);
    node.id = `subscribe_${row}`;

    const img = node.querySelector('.card__good');
    img.src = subscribe.path;

    const benefit = node.querySelector('.benefits');
    const points = benefit.querySelectorAll('.benefits_point');
    points.forEach((element, index) => {
        element.setAttribute('class', subscribe.benefits[index] ? 'benefit_ok' : 'benefit_none');
    });

   return node;
}

const gallery = document.querySelector('.subscribe__gallery');

const template = gallery.querySelector('.subscribe_1');

subscribers.forEach((subscribe, index) => {
    const node = createSubscribe(++index, subscribe, template);

    if (index != 0){
        gallery.appendChild(node);
    }
});