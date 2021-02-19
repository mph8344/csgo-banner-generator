import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file, setFile} ) => {
    const {url, progress} = useStorage(file);
    
    useEffect(() => {
        if (url) {
            setFile(null);
            console.log(url);
            window.location.href = url;
        }
    }, [url, setFile])

    return (
        <div className="progress-bar" style={{width: progress + '%'}}>progress</div>
    )

}

export default ProgressBar;