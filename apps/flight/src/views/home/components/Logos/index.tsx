import VietNamAirlinesLogo from './VietNamAirlinesLogo';
import VietJetAirLogo from './VietJetAirLogo';
import BambooAirwaysLogo from './BambooAirwaysLogo';
import { IATA_AirlineCodes } from '@/types/types';

export const getAirlineLogo = (IATA_CODE: string, { width = 24, height = 24 }: { width?: number; height?: number }) => {
    switch (IATA_CODE) {
        case IATA_AirlineCodes.VietNamAirlines:
            return <VietNamAirlinesLogo width={width} height={height} />;
        case IATA_AirlineCodes.BambooAirways:
            return <BambooAirwaysLogo width={width} height={height} />;
        case IATA_AirlineCodes.VietJetAir:
            return <VietJetAirLogo width={width} height={height} />;
        default:
            return <></>;
    }
};

export { VietNamAirlinesLogo, VietJetAirLogo, BambooAirwaysLogo };
