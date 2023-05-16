import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomeLazy = lazy(() => import('../components/Home'));
const ContactLazy = lazy(() => import('../components/Contact'));
const AboutLazy = lazy(() => import("../components/About"));

export const PageRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Suspense fallback={<p>Loading</p>}>
                <HomeLazy/>
            </Suspense>}/>
            <Route path='/about' element={<Suspense fallback={<p>
                loading
            </p>}>
                <AboutLazy />
            </Suspense>}/>
            <Route path='/contact' element={<Suspense fallback={<p>
                ...Loading
            </p>}>
                <ContactLazy/>
            </Suspense>}/>
        </Routes>
    )
}