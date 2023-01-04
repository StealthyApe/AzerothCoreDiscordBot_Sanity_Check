function legal_check(args){
    if(args.length == 0){
        return false;
    }
    for (let i = 0; i < args.length;i++){
        if (/[^a-zA-Z0-9]/.test( args[i] )){
            return false;
        }
    }
    return true;
}