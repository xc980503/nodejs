const friendlyDate = (time) => {
    const now = new Date().getTime();
    const diff = (now - time) / 1000;
    switch (true) {
        case diff < 1 * 60 :
            return '刚刚'
            break;
        case diff < 1 * 60 * 60 :
            return '3分钟之前'
            break;
        case diff < 24 * 60 * 60 :
            return '8小时之前'
            break;
        case diff < 30 * 24 * 60 * 60 :
            return '3天前'
            break;
        case diff < 12 * 30 * 24 * 60 * 60 :
            return '3个月前'
            break;
        default:
            return '一年前'
            break;
    }
}
let str = friendlyDate( '1556286683394' );
console.log(new Date(1556286683394))
console.log(str)

