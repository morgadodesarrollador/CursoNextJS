import { useRouter } from 'next/router';

import Link from 'next/link';
import { FC, CSSProperties } from 'react';
interface Props {
    text: string;
    href: string;
}

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'

}

export const ActiveLink: FC<Props> = ({ text, href }) => {

    const { asPath } = useRouter();

    return (
        <Link href={ href }>
            <a style={ asPath === href ? style : undefined }>{ text }</a>
        </Link>
        );
};



