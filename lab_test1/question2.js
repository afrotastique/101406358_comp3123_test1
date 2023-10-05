//Julien Byrnes 101406358

const delayedSuccess = () => {
    setTimeout(() => {
        let success = { message: 'delayed success!' };
        console.log(success);
    }, 500);
};

const delayedException = () => {
    setTimeout(() => {
        try {
            throw new Error('error: delayed exception');
        } catch (e) {
            console.error(e);
        }
    }, 500);
};

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved after 500ms');
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Promise rejected after 500ms');
        }, 500);
    });
};

resolvedPromise()
    .then((result) => {
        console.log('Resolved Promise Result:', result);
    })
    .catch((error) => {
        console.error('Resolved Promise Error:', error);
    });

rejectedPromise()
    .then((result) => {
        console.log('Rejected Promise Result:', result);
    })
    .catch((error) => {
        console.error('Rejected Promise Error:', error);
    });

delayedSuccess();
delayedException();