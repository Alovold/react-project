export function filterFilmsByDirector(list, director){
    if (director) {
        return list.filter((film)=>{
            return film.director == director;
        })
    } else {
        return list
    }
}

export function getListOf(list, prop){
    return [...new Set(list.map((film) => film[prop] || ""))];





    // return list.reduce((uniqueValue, item) => {
    //     if (uniqueValue.indexOf(item[prop]) == -1){
    //         uniqueValue.push(item[prop]);
    //     }
    //     return uniqueValue;
    // }, [])
}

export function getFilmStats(list){
    let accScore = 0;
    let total = 0;
    let latest = 0;

    list.map((item)=>{
        total++;
        accScore += parseInt(item.rt_score);
        if (item.release_date > latest){
            latest = item.release_date;
        }
    })

    let output = {
        acc_score: accScore,
        avg_score: (accScore/total),
        total: total,
        latest: latest
    }
    return output;
}