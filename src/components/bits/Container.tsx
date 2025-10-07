import * as React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Container({ className = "", ...props }: Props) {
    return (
        <div
            className={`mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 ${className}`}
            {...props}
        />
    );
}
