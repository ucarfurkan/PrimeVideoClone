export const recommendTv = (arr) => {
    let newArr;
    newArr = arr.map((movie) => {
        if (movie.type === 'TV series') {
            return movie;
        } else {
            return null;
        }
    });

};
