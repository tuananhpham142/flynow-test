import React from 'react';

type Props = {
    activeStep: string | number;
    stepIndex: string | number;
    children: React.ReactNode;
};

const StepRenderer: React.FC<Props> = (props) => {
    const { stepIndex, children, activeStep } = props;
    const show = stepIndex === activeStep;
    return <>{show && children}</>;
};

export default StepRenderer;
