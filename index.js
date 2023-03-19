function receivesAFunction(fn){
    fn();
}

function returnsANamedFunction(){
    const fn = function(){
        return '';
    }
    return fn;
}

function returnsAnAnonymousFunction(){
    return function(){
        return '';
    };
}