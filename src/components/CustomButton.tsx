import { FC } from 'react';

interface Props {
    customClass?: string;
    href: string;
    title: string;
    icon?: JSX.Element;
}

export const CustomButton: FC<Props> = ({ customClass, href, title, icon }) => {
    return (
        <a
            className={`button ${customClass}`}
            target="blank"
            href={href}
        >
            {icon}
            <p>{title}</p>
        </a>
    )
}