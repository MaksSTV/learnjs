function checkSpam(str){

    let temp = str.toLowerCase();

    if(temp.indexOf('viagra') === -1 || temp.indexOf('xxx') === -1){
        return true;
    }
    else{
        return false;
    }
    //return lowerStr.includes('viagra') || lowerStr.includes('xxx');
    
}