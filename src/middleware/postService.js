const url = 'http://localhost:8080';


const postService = {
    post(obj, path) {
        return new Promise(async (resolve, reject) => {
            try {
                const objtojson = JSON.stringify(obj);
                const response = await fetch(url + path, {
                    method: 'post',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: objtojson
                });
                const json = await response.json();
                resolve(json)
            } catch (err) {
                reject(err)
            }
        })
    },
    get(path) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(url + path);
                const json = await response.json();
                // return json
                resolve(json)
            } catch (err) {
                reject(err)
            }
        })
    },
    put(obj, path) {
        return new Promise(async (resolve, reject) => {
            try {
                const objtojson = JSON.stringify(obj);
                const response = await fetch(url + path, {
                    method: 'put',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: objtojson
                });
                const json = await response.json();
                resolve(json)
            } catch (err) {
                reject(err)
            }
        })
    },
    delete(obj, path) {
        return new Promise(async (resolve, reject) => {
            try {
                const objtojson = JSON.stringify(obj);
                const response = await fetch(url + path, {
                    method: 'delete',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: objtojson
                });
                const json = await response.json();
                resolve(json)
            } catch (err) {
                reject(err)
            }
        })
    }
}

export default postService