function addTokens(input, tokens){
    if (typeof input !== 'string')
    {
        throw new Error('Invalid input');
    }
   
    if (input.length < 6)
    {
        throw new Error('Input should have at least 6 characters');
    }

    if (typeof tokens !== 'object')
    {
        throw new Error('Invalid array format');
    }

    for (let i = 0; i < tokens.length; i++) 
    {
        for (const [key, value] of Object.entries(tokens[i])) {
            if (typeof key !== 'string' || typeof value !== 'string')
            {
                throw new Error('Invalid array format');
            }
        }
    }

    if(!input.includes('...'))
    {
        return input;
    }

    for (let i = 0; i < tokens.length; i++) 
    {
        for(let v of Object.values(tokens[i]))
        {
            v = '${' + v +'}';
            input = input.replace('...', v);    
        }

    }

	return input;
}

const app = {
    addTokens: addTokens
}

module.exports = app;