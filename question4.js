const checkBrackets = (string) => {
    let stack = [];
    let open = "({[";
    let close = ")}]";
    
    for (let i = 0; i < string.length; i++) {
      let currentChar = string.charAt(i);
      
      if (open.includes(currentChar)) {
        stack.push(currentChar);
      } else if (close.includes(currentChar)) {
        let matchingOpen = open[close.indexOf(currentChar)];
        
        if (stack.length === 0 || stack.pop() !== matchingOpen) {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  }