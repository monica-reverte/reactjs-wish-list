const getLocalStorage = () => {
    let todos = localStorage.getItem("todos");
    if(todos) {
        return (todos = JSON.parse(localStorage.getItem("todos")));
    }else {
        return []
    }
};

export { getLocalStorage }