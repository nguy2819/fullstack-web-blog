import React, { useState, useEffect } from 'react';
import ConfirmButton from './ConfirmButton';
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

export default function Container(){
    const [timeline, setTimeline] = useState();
    useEffect(() => {
        gsap.registerPlugin(CSSRulePlugin);
        const tl = gsap.timeline({defaults: { ease: 'power2.out'}});
        const rule = CSSRulePlugin.getRule('.confirm:before');
  
        tl.to('.label', {opacity: 0, height: 0, position: 'absolute', duration: '.2s'})
          .to('.confirm', {borderRadius: '50%', width: '2.5em', height: '2.5em', ease: 'elastic.out(0.7, 0.3)'}, '-=.5s')
          .to(rule, {borderRadius: '50%'}, '-=1s')
          .to('.check', {strokeDasharray: '90 103'}, "-=1")
          .to('path', {attr: {d: 'M145.8,236.314l16.359-18.148L145.8,200.681'}}, "+=1")
          .to('p', {clipPath: 'circle(100% at 50% 50%)', duration: 1.2})
          .to('p', {
              background: 'white',
              onComplete: () => {
              window.location.href = '/'
          }})
          tl.pause();

        setTimeline(tl);
    }, []);
    return (
        <div className="container">
            <ConfirmButton timeline={timeline}/>
            <p> Quay lại Trang Chủ <br/>Back to Main Page</p>
        </div>
    )
}