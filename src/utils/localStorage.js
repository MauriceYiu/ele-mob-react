// localStorage

export const saveLocal = (name, val) => {
    try {
        window.localStorage.setItem(name, val);
    } catch (error) {
        // console.log(error)
    } finally {
        //
    }
}

export const getLocal = (name) => {
    let val
    try {
        val = window.localStorage.getItem(name);
    } catch (error) {
        // console.log(error)
    } finally {
        return val;
    }
}

export const clearLocal = () => {
    try {
        window.localStorage.clear();
    } catch (error) {
        //
    }
}

export const removeLocal = (name) => {
    try {
        window.localStorage.removeItem(name);
    } catch (error) {
        //
    }
}