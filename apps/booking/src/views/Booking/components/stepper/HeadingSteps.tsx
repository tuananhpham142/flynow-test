import { Typography } from '@acme/design-system';
import React from 'react';

const CompletedStepIcon = () => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='16' height='16' rx='8' fill='#FFA801' />
        </svg>
    );
};

const CurrentStepIcon = () => {
    return (
        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='1' y='1' width='22' height='22' rx='11' fill='white' />
            <circle cx='12' cy='12' r='6' fill='#FFA801' />
            <rect x='1' y='1' width='22' height='22' rx='11' stroke='#FFA801' stroke-width='2' />
        </svg>
    );
};

const NavigableStepIcon = () => {
    return (
        <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect x='1' y='1' width='14' height='14' rx='7' fill='#F4F6F8' />
            <rect x='1' y='1' width='14' height='14' rx='7' stroke='#919EAB' stroke-width='2' />
        </svg>
    );
};

const ActiveStepBarIcon = () => {
    return (
        <svg width='11' height='2' viewBox='0 0 11 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='11' height='2' fill='#FFA801' />
        </svg>
    );
};

const InactiveStepBarIcon = () => {
    return (
        <svg width='11' height='2' viewBox='0 0 11 2' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <rect width='11' height='2' fill='#919EAB' />
        </svg>
    );
};

interface HeadingStepsProps {
    steps: Array<{ id?: string; label: string }>;
    currentStep: number;
    disableNavigation?: boolean;
    handleStepClicked: (value: number) => void;
}

const HeadingSteps: React.FC<HeadingStepsProps> = ({ steps, currentStep, handleStepClicked }) => {
    const isFirstStep = (index: number) => index === 0;
    const isStepCurrent = (index: number) => index + 1 === currentStep;
    const isStepCompleted = (index: number) => index + 1 < currentStep;
    const isStepNavigable = (index: number) => index + 1 <= steps.length;

    const getStepIcon = (index: number) => {
        if (isStepCompleted(index)) {
            return (
                <>
                    {!isFirstStep(index) && <ActiveStepBarIcon />}
                    <CompletedStepIcon />
                </>
            );
        }
        if (isStepCurrent(index)) {
            return (
                <>
                    {!isFirstStep(index) && <ActiveStepBarIcon />}
                    <CurrentStepIcon />
                </>
            );
        }
        if (isStepNavigable(index)) {
            return (
                <>
                    <InactiveStepBarIcon />
                    <NavigableStepIcon />
                </>
            );
        }
        return null;
    };

    const getCurrentStepLabel = () => {
        const currentStepIndex = currentStep - 1;
        if (currentStepIndex < steps.length) {
            return steps[currentStepIndex].label;
        }
        return '';
    };

    return (
        <div className='flex items-center gap-3'>
            <ol className='flex items-center'>
                {steps.map((step, index) => (
                    <li
                        onClick={() => {
                            handleStepClicked(index + 1);
                        }}
                        key={step.id}
                        className={'flex items-center cursor-pointer'}
                    >
                        {getStepIcon(index)}
                    </li>
                ))}
            </ol>
            <Typography htmlTag='h3' variant='h5'>
                {getCurrentStepLabel()}
            </Typography>
        </div>
    );
};

export default HeadingSteps;
