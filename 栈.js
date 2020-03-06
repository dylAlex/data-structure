function stack(){
    var items = [];
    this.push = function(item){
        items.push(item)
    }
    this.pop = function(){
        return items.pop();
    }
    this.top = function(){
        // return items.slice(items.length-2,items.length-1);
        return items[items.length-1];
    }
    this.isEmpty = function(){
        return items.length==0
    }
    this.size = function(){
        return items.length
    }
    this.clear = function(){
        items = [];
    }
}
function is_leagl_brackets(string){
    var stack = new stack();
    for(let i=0;i<string.length;i++){
        // 遇到做括号入栈
        if(string[i]=='('){
            stack.push(string[i])
        } else if(string[i]==')'){
            // 遇到右括号判断是否为空
            if(stack.isEmpty()){
                return false
            } else {
                stack.pop(); //弹出左括号
            }
        }
    }
    // 如果栈为空说明左括号合法
    return stack.isEmpty();
}