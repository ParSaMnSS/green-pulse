// File: components/motion/Reveal.tsx
"use client";
import React, {
    useEffect,
    useRef,
    useState,
    cloneElement,
    isValidElement,
    ReactElement,
    ElementType,
} from "react";

type RevealProps = {
    as?: ElementType;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    /** Initial offset in px (positive = right/down) */
    x?: number;
    y?: number;
    /** 0..1 starting opacity */
    opacityFrom?: number;
    /** ms */
    delay?: number;
    duration?: number;
    /** CSS timing function */
    easing?: string;
    /** IntersectionObserver tuning */
    threshold?: number;
    rootMargin?: string;
    /** Reveal only once */
    once?: boolean;
};

export function Reveal({
    as: Tag = "div",
    children,
    className = "",
    style,
    x = 0,
    y = 16,
    opacityFrom = 0,
    delay = 0,
    duration = 600,
    easing = "cubic-bezier(.2,.65,.2,1)",
    threshold = 0.25,
    rootMargin = "0px 0px -10% 0px",
    once = true,
}: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null); // <— typed div ref
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mq.matches) {
            setVisible(true);
            return;
        }
        const el = ref.current;
        if (!el) return;

        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        setVisible(true);
                        if (once) obs.disconnect();
                    } else if (!once) {
                        setVisible(false);
                    }
                });
            },
            { threshold, rootMargin }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [threshold, rootMargin, once]);

    const transformFrom = `translate3d(${x}px, ${y}px, 0)`;
    const transformTo = "translate3d(0,0,0)";
    const mergedStyle: React.CSSProperties = {
        transform: visible ? transformTo : transformFrom,
        opacity: visible ? 1 : opacityFrom,
        transition: `transform ${duration}ms ${easing} ${delay}ms, opacity ${duration}ms ${easing} ${delay}ms`,
        willChange: "transform, opacity",
        ...style,
    };

    // Wrapper carries the style/class/ref; Tag just renders children.
    return (
        <div ref={ref} className={className} style={mergedStyle}>
            <Tag>{children}</Tag>
        </div>
    );
}

type RevealGroupProps = {
    children: React.ReactNode;
    baseDelay?: number;
    step?: number;
};

export function RevealGroup({ children, baseDelay = 0, step = 80 }: RevealGroupProps) {
    let i = -1;
    return (
        <>
            {React.Children.map(children, (child) => {
                if (isValidElement(child) && child.type === Reveal) {
                    i += 1;
                    const extraDelay = baseDelay + i * step;
                    // child is ReactElement<RevealProps>, props may or may not have delay
                    const childWithDelay = cloneElement(child as ReactElement<RevealProps>, {
                        delay: (child.props as Partial<RevealProps>).delay ?? extraDelay,
                    });
                    return childWithDelay;
                }
                return child;
            })}
        </>
    );
}