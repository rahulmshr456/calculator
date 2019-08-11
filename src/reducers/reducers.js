const calculate = (state = { expression: '' }, action) => {
    switch (action.type) {
        case 'equal':
            return {
                ...state, expression: total(state.expression)
            }
            break;
        case 'clear':
            return {
                ...state, expression: ''
            }
            break;
        case 'delete':
            return {
                ...state, expression: state.expression.length > 0 ? state.expression.slice(0, -1) : state.expression
            }
            break;
        case 'append':
            return {
                ...state, expression: state.expression + action.val
            }
            break;
        case 'operator':
            return {
                ...state, expression: (state.expression.trim().length > 0 && !isNaN(state.expression.substr(-1)) ? state.expression + action.val : action.val === '-' ? '-' : state.expression)
            }
            break;
        case 'decimal':
            return {
                ...state, expression: filterDecimal(state.expression, action.val)
            }
            break;
        case 'reset':
            return {
                ...state, expression: ''
            }
            break;
        default:
            return { ...state }
            break;
    }
}

const filterDecimal = (expression, val) => {
    if (expression.trim().length > 0) {
        if (expression.substr(-1) === '+' || expression.substr(-1) === '-' || expression.substr(-1) === '*' || expression.substr(-1) === '/') {
            return expression + '0.';
        }
        else if (expression.indexOf('.') === -1) {
            return expression + '.'
        }
        else {
            let temp = expression.split('.');
            if (temp[temp.length - 1].indexOf('+') !== -1 || temp[temp.length - 1].indexOf('-') !== -1 || temp[temp.length - 1].indexOf('/') !== -1 || temp[temp.length - 1].indexOf('*') !== -1) {
                return expression + '.'
            }
            else {
                return expression;
            }

        }
    }
    else {
        return '0' + val
    }
    // // ( ? (state.expression.substr(-1) !== '.' ? state.expression + action.val : state.expression) : )
    // alert('decimal fires')
}

const deleteLastCharacter = (expression) => {

    return expression.substr(-1);
}

const total = (expression) => {

    if (expression.substr(-1) === '/' || expression.substr(-1) === '-' || expression.substr(-1) === '+' || expression.substr(-1) === '*' || expression.substr(-1) === '.') {
        try {
            let res = eval(expression.slice(0, -1))
            return res !== undefined ? res.toString() : '';
        } catch (error) {
            return ''
        }
    }
    else {
        try {
            let res = eval(expression)
            return res !== undefined ? res.toString() : '';
        } catch (error) {
            return ''
        }
    }

}
export default calculate