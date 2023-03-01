function trancate(str, maxlength){
    if(str.length <= maxlength){
        return str;
    }
    else{
        return str.substr(0, maxlength-4) + "...";
        //return str.substr(0, maxlength-1) + '…';
    }

}