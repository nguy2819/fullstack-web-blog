import React, { useRef, useEffect } from 'react';
import ConfirmButton from './ConfirmButton';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

export default function Container(){
    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin);
        const tl = gsap.timeline({defaults: { ease: 'power2.out', delay: 1}});
        const btn = document.querySelector('button');
        const rule = CSSRulePlugin.getRule('button::before');
  
        tl.to('.label', {opacity: 0, height: 0, position: 'absolute', duration: '.2s'})
          .to('.confirm', {borderRadius: '50%', width: '2.5em', height: '2.5em'}, '-=.5s')
          .to(rule, {borderRadius: '50%'}, '-=1s')
    }, []);
    return (
        <div className="container">
            <ConfirmButton />
            <p> Next</p>
        </div>
    )
}