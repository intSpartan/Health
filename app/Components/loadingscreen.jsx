import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const LoadingScreen = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => {
            setLoading(true);
        };

        const handleComplete = () => {
            setLoading(false);
        };

        const cleanup = () => {
            setLoading(false);
        };

        if (router) {
            router.events.on('routeChangeStart', handleStart);
            router.events.on('routeChangeComplete', handleComplete);
            router.events.on('routeChangeError', handleComplete);
        }

        return cleanup;
    }, []);

    return loading ? <div>Loading...</div> : null;
};

export default LoadingScreen;