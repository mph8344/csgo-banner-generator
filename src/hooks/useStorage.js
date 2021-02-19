import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../config';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect(() => {
        // references
        console.log(file.type);
        let r = Math.random().toString(36).substring(7);
        const storageRef = projectStorage.ref('banners/' + r + '.png');
        const collectionRef = projectFirestore.collection('savedbanners');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            console.log(snap.bytesTransferred);
            setProgress(percentage);
        }, (err) => {
            //console.log(err);
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            //const createdAt = timestamp();
            //console.log(createdAt);
            //collectionRef.add({ url })
            setUrl(url);
        });
    }, [file]);


    return {progress, url, error}
}

export default useStorage;