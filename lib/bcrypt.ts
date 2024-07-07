type Callback = (error: Error | null, result?: any) => void;

const bindings = {
    compare: (data: string | Buffer, hash: string, cb: Callback) => {
        // Assuming bindings.compare is defined elsewhere
        // Mock implementation for example purposes
        cb(null, true); // Example success callback
    }
};

export const compare = function compare(
    data: string | Buffer | null,
    hash: string | null,
    cb?: Callback | null
): Promise<any> | void {
    let error: Error | null = null;

    // Handle if data is passed as a function
    if (typeof data === 'function') {
        error = new Error('data and hash arguments required');
        return process.nextTick(() => {
            (data as unknown as Callback)(error);
        });
    }

    // Handle if hash is passed as a function
    if (typeof hash === 'function') {
        error = new Error('data and hash arguments required');
        return process.nextTick(() => {
            (hash as unknown as Callback)(error);
        });
    }

    // Handle if cb is provided but is not a function
    if (cb && typeof cb !== 'function') {
        return Promise.reject(new Error('cb must be a function or null to return a Promise'));
    }

    // If cb is not provided, return a Promise
    if (!cb) {
        return new Promise((resolve, reject) => {
            compare(data, hash, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    // Check if data or hash is null
    if (data == null || hash == null) {
        error = new Error('data and hash arguments required');
        return process.nextTick(() => {
            cb(error);
        });
    }

    // Validate the types of data and hash
    if (!(typeof data === 'string' || data instanceof Buffer) || typeof hash !== 'string') {
        error = new Error('data and hash must be strings');
        return process.nextTick(() => {
            cb(error);
        });
    }

    // Call the compare function from bindings
    return bindings.compare(data, hash, cb);
};