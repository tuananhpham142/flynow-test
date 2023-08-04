import { useState, useRef } from 'react';
import {
    useFloating,
    autoUpdate,
    offset,
    flip,
    arrow,
    shift,
    useHover,
    useFocus,
    useDismiss,
    useRole,
    useInteractions,
    FloatingPortal,
    useTransitionStyles,
    FloatingArrow,
    useClick,
} from '@floating-ui/react';
import { TooltipProps } from './Tooltip.type';
import clsx from 'clsx';

const ARROW_WIDTH = 13;
const ARROW_HEIGHT = 7;

const Tooltip: React.FC<TooltipProps> = (props) => {
    const { children, title, placement, effect = 'light', customClasses, triggerOnClick, showArrow = true } = props;
    const [isOpen, setIsOpen] = useState(false);

    const arrowRef = useRef(null);

    const { refs, floatingStyles, context, middlewareData } = useFloating({
        placement: placement,
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [offset(ARROW_HEIGHT), flip({ padding: 5 }), shift({ padding: 5 }), arrow({ element: arrowRef })],
    });

    // Event listeners to change the open state
    const hover = useHover(context, { move: false });
    const focus = useFocus(context);
    const click = useClick(context);
    const dismiss = useDismiss(context);
    // Role props for screen readers
    const role = useRole(context, { role: 'tooltip' });

    const arrowX = middlewareData.arrow?.x ?? 0;
    const arrowY = middlewareData.arrow?.y ?? 0;
    const transformX = arrowX + ARROW_WIDTH / 2;
    const transformY = arrowY + ARROW_HEIGHT;
    const { isMounted, styles } = useTransitionStyles(context, {
        initial: {
            transform: 'scale(0)',
        },
        common: ({ side }) => ({
            transformOrigin: {
                top: `${transformX}px calc(100% + ${ARROW_HEIGHT}px)`,
                bottom: `${transformX}px ${-ARROW_HEIGHT}px`,
                left: `calc(100% + ${ARROW_HEIGHT}px) ${transformY}px`,
                right: `${-ARROW_HEIGHT}px ${transformY}px`,
            }[side],
        }),
    });

    // Merge all the interactions into prop getters
    const { getReferenceProps, getFloatingProps } = useInteractions([
        focus,
        dismiss,
        role,
        hover,
        triggerOnClick ? click : undefined,
    ]);

    // classes

    const tooltipClassesGenerator = () => {
        const effects = {
            light: 'text-grey-800 bg-white',
            dark: 'text-white bg-grey-800',
        };

        return clsx(
            'rounded w-max text-sm py-1 px-3',
            '[box-shadow:_#0000003d_0px_3px_8px]',
            effects[effect],
            customClasses?.tooltip,
        );
    };
    const arrowClassesGenerator = () => {
        const effects = {
            light: 'fill-white',
            dark: 'fill-grey-800',
        };
        return clsx('', showArrow ? 'visible' : 'invisible', effects[effect], customClasses?.arrow);
    };
    return (
        <>
            {/* Trigger */}
            <div ref={refs.setReference} {...getReferenceProps()}>
                {children}
            </div>
            {/* Trigger */}

            {/* Tooltip portal */}
            <FloatingPortal>
                {isMounted && (
                    <div className='z-[150]' ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                        <div style={styles} className={tooltipClassesGenerator()}>
                            {title}
                            <FloatingArrow
                                tipRadius={1}
                                className={arrowClassesGenerator()}
                                ref={arrowRef}
                                context={context}
                                width={ARROW_WIDTH}
                                height={ARROW_HEIGHT}
                            />
                        </div>
                    </div>
                )}
            </FloatingPortal>
            {/* Tooltip portal */}
        </>
    );
};

export default Tooltip;
