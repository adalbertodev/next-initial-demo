import { useRouter } from 'next/router';
import Link from 'next/link';
import { CSSProperties, FC } from 'react';

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
};

interface Props {
  children: JSX.Element | JSX.Element[];
  href: string;
}

export const ActiveLink: FC<Props> = ({ children, href }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href}>
      <a style={asPath === href ? style : undefined}>{children}</a>
    </Link>
  );
};
