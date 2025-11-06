import React, { useEffect, useState } from 'react';
import LoadPage from "../screens/LoadPage"
function Test() {
    const [progress, setProgress] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setProgress(100);
            setLoading(false);
            performAction();
        };

        const updateProgress = () => {
            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                const totalResources = window.performance.getEntriesByType('resource').length;
                const completedResources = window.performance.getEntriesByType('resource').filter(
                    (resource) => resource.responseEnd > 0
                ).length;
                const progressPercentage = (completedResources / totalResources) * 100 || 0;

                setProgress(progressPercentage);
            }
        };

        window.addEventListener('load', handleLoad);
        window.addEventListener('readystatechange', updateProgress);

        return () => {
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('readystatechange', updateProgress);
        };
    }, []);

    const performAction = () => {
        console.log('Loading complete. Performing action...');
    };

    return (
        <div>
            {loading ? <LoadPage /> :
                <><div>Loaded</div>
                    <div className="h-2 bg-blue-500">
                        <div
                            className="h-full bg-green-500 rounded"
                            style={{ width: `${progress}%`, transition: 'width 0.2s linear' }}
                        ></div>
                    </div></>
            }
        </div>
    );
}

export default Test;
