import React, { ReactNode } from 'react';
import { Header } from '../../Header';
import { Footer } from '../../Footer'

//styles
import * as S from './MainLayout.styled';

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
        <S.MainLayoutWrapper>
            <Header />
                <main>{children}</main>

        </S.MainLayoutWrapper>
    <Footer />
        </>
    );
};

