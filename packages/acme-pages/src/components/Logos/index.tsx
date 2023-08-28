import VietNamAirlinesLogo from './VietNamAirlinesLogo';
import VietJetAirLogo from './VietJetAirLogo';
import BambooAirwaysLogo from './BambooAirwaysLogo';

export const getAirlineLogo = (IATA_CODE: string, { width = 24, height = 24 }: { width?: number; height?: number }) => {
    switch (IATA_CODE) {
        case 'VN':
            return <VietNamAirlinesLogo width={width} height={height} />;
        case 'QH':
            return <BambooAirwaysLogo width={width} height={height} />;
        case 'VJ':
            return <VietJetAirLogo width={width} height={height} />;
        default:
            return <></>;
    }
};

export { VietNamAirlinesLogo, VietJetAirLogo, BambooAirwaysLogo };
