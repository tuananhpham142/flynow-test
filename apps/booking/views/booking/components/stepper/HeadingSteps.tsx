import { Typography } from '@acme/design-system';
import React from 'react';
import { CreateBookingStep } from 'views/booking';

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
    steps: Array<{ id: CreateBookingStep; label: string }>;
    currentStep: CreateBookingStep;
    disableNavigation?: boolean;
    handleStepClicked?: (value: CreateBookingStep) => void;
}

const HeadingSteps: React.FC<HeadingStepsProps> = ({ steps, currentStep, handleStepClicked }) => {
    const currentStepIndex = steps.findIndex((step) => step.id === currentStep) + 1;

    const isFirstStep = (index: number) => index === 0;
    const isStepCurrent = (index: number) => index + 1 === currentStepIndex;
    const isStepCompleted = (index: number) => index + 1 < currentStepIndex;
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
        const currentStep = currentStepIndex - 1;
        if (currentStep < steps.length) {
            return steps[currentStep].label;
        }
        return '';
    };

    const isNextStepDisabled = (index: number) => {
        if (index === currentStepIndex) {
            return false;
        }
        if (index < currentStepIndex) {
            return false;
        }
        return true;
    };

    return (
        <div className='flex items-center gap-3'>
            <ol className='flex items-center'>
                {steps.map((step, index) => {
                    const isDisabled = isNextStepDisabled(index);

                    return (
                        <li
                            onClick={() => {
                                if (isDisabled) return;
                                handleStepClicked && handleStepClicked(step.id);
                            }}
                            key={step.id}
                            className={`flex items-center  ${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                        >
                            {getStepIcon(index)}
                        </li>
                    );
                })}
            </ol>
            <Typography htmlTag='h3' variant='h5'>
                {getCurrentStepLabel()}
            </Typography>
        </div>
    );
};

export default HeadingSteps;
