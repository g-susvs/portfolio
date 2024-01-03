import { FC } from 'react';

interface Props {
    customClass?: string;
    href: string;
    title: string;
    children: JSX.Element;
}

export const CustomButton: FC<Props> = ({ customClass, href, title, children }) => {
    return (
        <a
            className={`button ${customClass}`}
            target="blank"
            href={href}
        >
            {children}
            <p>{title}</p>
        </a>
    )
}