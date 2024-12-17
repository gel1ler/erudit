import React, { ReactNode, useMemo } from 'react';
import Plx from 'react-plx';

const ParallaxWrapper = ({ children }: { children: ReactNode }) => {
    const startParallax = useMemo(() => [
        {
            start: 0,
            end: '50vh',
            properties: [
                {
                    startValue: 1,
                    endValue: 0,
                    property: "opacity",
                }
            ]
        },
    ], []);

    return (
        <Plx parallaxData={startParallax}>
            {children}
        </Plx>
    );
};

export default ParallaxWrapper;