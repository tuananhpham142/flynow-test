import React from 'react';

type Props = {
    width: number;
    hexColor?: string;
};

const LoadingLogo = (props: Props) => {
    const { width, hexColor = '#4469AF' } = props;
    return (
        <svg width={width} height={width / 2} viewBox='0 0 70 35' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M56.1507 2.55899C56.2718 1.7742 53.9909 0.571878 51.9806 0.169817C51.1818 0.00986186 50.3646 -0.0374187 49.5527 0.0293535C49.1185 0.0657197 48.6878 0.135078 48.2641 0.236827C46.6494 0.468786 45.1185 0.954609 43.6133 1.5461C42.273 1.98222 40.9645 2.51054 39.6971 3.12729L34.7512 5.17367C33.5012 5.57702 32.2461 5.5229 30.9858 5.23295L28.6726 4.70331L22.8453 2.96363C20.8938 2.26701 18.9023 1.68822 16.8814 1.23038C15.1995 0.687141 13.4586 0.347518 11.6959 0.218786C11.2616 0.191724 10.643 0.016467 10.4523 0.522909C10.2564 1.04868 10.8118 1.38244 11.1817 1.65693C12.9858 2.9894 14.969 3.98682 17.0296 4.84635C19.0721 5.81542 21.1482 6.70073 23.2732 7.46233C24.0141 7.84893 24.8118 8.08089 25.5927 8.35021C25.6585 8.68269 25.3698 8.66851 25.1933 8.74454C24.7989 8.91207 24.3956 9.05769 23.9948 9.21233L20.9523 10.1144L17.3054 11.2355L13.8363 11.9842L10.6392 12.5641C9.39231 12.8032 8.12935 12.9488 6.86081 12.9997C5.95875 13.0268 5.39947 13.1286 4.74999 13.1505C3.16018 13.2049 1.56891 13.1 0 12.8373C1.41092 13.9583 2.99883 14.8363 4.69844 15.4353C6.18892 15.9609 7.74851 16.2648 9.3273 16.3373C10.375 16.5731 11.442 16.4945 12.5 16.4945C14.1585 16.4945 15.826 16.5654 17.4639 16.1968C18 16.2407 18.5206 16.1221 19.0425 16.0396C21.2061 15.6943 23.3814 15.4043 25.4858 14.751C27.1594 14.4429 28.8065 14.0051 30.4123 13.4417C32.1443 13.0358 33.8182 12.4481 35.4819 11.8296C37.2124 11.3028 38.9115 10.6776 40.5708 9.95717C41.9134 9.51249 43.227 8.98441 44.5038 8.37599C45.9899 7.83385 47.4438 7.20696 48.8582 6.49841C50.9574 5.64146 53.0115 4.68269 55.0437 3.67883C55.263 3.57651 55.4651 3.44088 55.6429 3.27677C55.7125 3.22136 56.1069 2.84765 56.1507 2.55899Z'
                fill={hexColor}
            />
            <path
                d='M40.4226 13.0023C40.2486 12.8644 40.0708 12.9121 39.8827 12.9778C38.4643 13.4778 37.0446 13.9748 35.6236 14.4688L30.8324 15.7742C30.027 15.9352 29.2229 16.0989 28.4175 16.2574C22.3079 17.4571 16.1546 17.9327 9.93684 17.3876C8.53865 17.2587 7.15334 17.0461 5.75128 16.9095C7.27705 17.885 8.92138 18.568 10.634 19.0937C15.0154 20.443 19.5257 20.7187 24.0631 20.5332C26.3311 20.4391 28.6005 20.2845 30.8363 19.8373C32.5164 19.6783 34.1816 19.3892 35.8169 18.9726C37.3733 18.7209 38.9117 18.3688 40.4226 17.9185C43.2655 17.2526 46.0566 16.3826 48.7744 15.3154C48.56 15.1842 48.3266 15.0873 48.0824 15.028C45.53 14.3519 42.9767 13.6767 40.4226 13.0023Z'
                fill={hexColor}
            />
            <circle fill='#4469AF' stroke='none' cx='5' cy='29' r='4'>
                <animate
                    attributeName='opacity'
                    dur='1.5s'
                    values='0;1;0'
                    repeatCount='indefinite'
                    begin='0.1'
                ></animate>
                <animateTransform
                    attributeName='transform'
                    dur='1.5s'
                    type='translate'
                    values='0 1.5 ; 0 -1.5; 0 1.5'
                    repeatCount='indefinite'
                    begin='0.2'
                />
            </circle>
            <circle fill='#4469AF' stroke='none' cx='20' cy='29' r='4'>
                <animate
                    attributeName='opacity'
                    dur='1.5s'
                    values='0;1;0'
                    repeatCount='indefinite'
                    begin='0.2'
                ></animate>
                <animateTransform
                    attributeName='transform'
                    dur='1.5s'
                    type='translate'
                    values='0 1.5 ; 0 -1.5; 0 1.5'
                    repeatCount='indefinite'
                    begin='0.3'
                />
            </circle>
            <circle fill='#4469AF' stroke='none' cx='35' cy='29' r='4'>
                <animate
                    attributeName='opacity'
                    dur='1.5s'
                    values='0;1;0'
                    repeatCount='indefinite'
                    begin='0.3'
                ></animate>
                <animateTransform
                    attributeName='transform'
                    dur='1.5s'
                    type='translate'
                    values='0 1.5 ; 0 -1.5; 0 1.5'
                    repeatCount='indefinite'
                    begin='0.4'
                />
            </circle>
            <circle fill='#4469AF' stroke='none' cx='50' cy='29' r='4'>
                <animate
                    attributeName='opacity'
                    dur='1.5s'
                    values='0;1;0'
                    repeatCount='indefinite'
                    begin='0.5'
                ></animate>
                <animateTransform
                    attributeName='transform'
                    dur='1.5s'
                    type='translate'
                    values='0 1.5 ; 0 -1.5; 0 1.5'
                    repeatCount='indefinite'
                    begin='0.6'
                />
            </circle>
            <circle fill='#4469AF' stroke='none' cx='65' cy='29' r='4'>
                <animate
                    attributeName='opacity'
                    dur='1.5s'
                    values='0;1;0'
                    repeatCount='indefinite'
                    begin='0.7'
                ></animate>
                <animateTransform
                    attributeName='transform'
                    dur='1.5s'
                    type='translate'
                    values='0 1.5 ; 0 -1.5; 0 1.5'
                    repeatCount='indefinite'
                    begin='0.8'
                />
            </circle>
        </svg>
    );
};

export default LoadingLogo;
