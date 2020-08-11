import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function (context, inject) {
    gsap.registerPlugin(ScrollTrigger);
    inject('gsap', gsap);    
    inject('scrollTrigger', ScrollTrigger);  
}
